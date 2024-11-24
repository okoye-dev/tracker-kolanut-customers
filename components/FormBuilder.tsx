import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

import { cn, formatFormEntries } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { Check } from "lucide-react";
import { FC } from "react";
import { FormBuilderProps } from "@/types";
import { createZodSchema } from "./SchemaBuilder";
import {
  INPUT,
  SELECT,
  SWITCH,
  CHECKBOX,
  TEXTAREA,
  CALENDAR,
  COMBOBOX,
  BOOLEAN,
  STRING,
  EMAIL,
  MULTI_SELECT,
} from "@/config";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import { dispatchController } from "@/config/dispatch-controller";
import { goToFormStage, goToStep } from "@/redux/slices/onboardingSlice";
import PreviousBtn from "./PreviousBtn";
import { CalendarRaw } from "./CalendarRaw";
import { MultiSelect } from "./ui/multi-select";
import { useRouter } from "next/navigation";

interface IProps {
  formData: FormBuilderProps;
  dispatchControl: string;
  pauseFormStage: boolean;
  shouldSkipBackwards: boolean;
  redirectTo?: string;
}

export const FormBuilder: FC<IProps> = ({
  formData,
  dispatchControl,
  pauseFormStage = false,
  shouldSkipBackwards = false,
  redirectTo,
}) => {
  const formFields = formData.formFields;
  const formStage = formData.formStage;

  const dispatch = useDispatch();
  const currentStep = useSelector((state: RootState) => state.onboarding.step);

  const formSchema = createZodSchema(formFields);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formFields.reduce<Record<string, string | boolean>>(
      (acc, field) => {
        switch (field.inputType) {
          case BOOLEAN:
            acc[field.id] = false;
            break;
          case STRING:
          case EMAIL:
          default:
            acc[field.id] = "";
            break;
        }
        return acc;
      },
      {},
    ),
  });

  const router = useRouter();
  function proceedToNextStep() {
    if (redirectTo) {
      router.push(redirectTo);
      return;
    }
    dispatch(goToStep(currentStep + 1));
    !pauseFormStage && dispatch(goToFormStage(formStage + 1));
  }

  function goToPreviousStep() {
    dispatch(goToStep(shouldSkipBackwards ? currentStep - 2 : currentStep - 1));
    formStage > 1 &&
      dispatch(
        goToFormStage(shouldSkipBackwards ? formStage - 2 : formStage - 1),
      );
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = formatFormEntries(values);
    const action = dispatchController(dispatchControl, formattedValues);
    if (action) {
      dispatch(action);
    }
    proceedToNextStep();
  }

  return (
    <Provider store={store}>
      {/* <div>
        {formData.title} {currentStep} and {formData.step}
      </div> */}
      {currentStep === formData.step && (
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-[40rem] flex-col gap-4 py-8 md:py-12">
            <PreviousBtn handleClick={goToPreviousStep} />

            <h1 className="w-full text-center text-2xl font-bold">
              {formData?.title}
            </h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col space-y-2"
              >
                {(() => {
                  const formFieldsRender = [];
                  for (let i = 0; i < formFields.length; i++) {
                    const formItem = formFields[i];

                    switch (formItem.formType) {
                      case INPUT:
                        if (
                          formItem.isHalfWidth &&
                          formFields[i + 1]?.isHalfWidth
                        ) {
                          const nextFormItem = formFields[i + 1];
                          formFieldsRender.push(
                            <div
                              key={formItem.id}
                              className="flex flex-col gap-2 md:flex-row md:gap-5"
                            >
                              <FormField
                                control={form.control}
                                name={formItem.id}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="flex items-center gap-1">
                                      {formItem.title} <FormMessage />
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder={formItem.placeholder ?? ""}
                                        {...field}
                                        value={field.value || ""}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      {formItem.description}
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={nextFormItem.id}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="flex items-center gap-1">
                                      {nextFormItem.title} <FormMessage />
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder={
                                          nextFormItem.placeholder ?? ""
                                        }
                                        {...field}
                                        value={field.value || ""}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      {nextFormItem.description}
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                            </div>,
                          );
                          i++; // Skip the next item
                        } else {
                          formFieldsRender.push(
                            <FormField
                              key={formItem.id}
                              control={form.control}
                              name={formItem.id}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="flex items-center gap-1">
                                    {formItem.title} <FormMessage />
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      isPasswordField={
                                        formItem.id === "password"
                                      }
                                      placeholder={formItem.placeholder ?? ""}
                                      {...field}
                                      value={field.value || ""}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    {formItem.description}
                                  </FormDescription>
                                </FormItem>
                              )}
                            />,
                          );
                        }
                        break;

                      case SELECT:
                        formFieldsRender.push(
                          <FormField
                            key={formItem.id}
                            control={form.control}
                            name={formItem.id}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-1">
                                  {formItem.title} <FormMessage />
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger className="w-full">
                                    <SelectValue
                                      placeholder={formItem.placeholder}
                                    />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {formItem.selectItems?.map(
                                      (option, index) => (
                                        <SelectItem key={index} value={option}>
                                          {option}
                                        </SelectItem>
                                      ),
                                    )}
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  {formItem.description}
                                </FormDescription>
                              </FormItem>
                            )}
                          />,
                        );
                        break;

                      case MULTI_SELECT:
                        formFieldsRender.push(
                          <FormField
                            key={formItem.id}
                            control={form.control}
                            name={formItem.id}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-1">
                                  {formItem.title} <FormMessage />
                                </FormLabel>
                                <MultiSelect
                                  options={formItem.multiSelectItems ?? []}
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  placeholder="Select frameworks"
                                  variant="inverted"
                                  animation={2}
                                  maxCount={3}
                                />
                                <FormDescription>
                                  {formItem.description}
                                </FormDescription>
                              </FormItem>
                            )}
                          />,
                        );
                        break;

                      case SWITCH:
                        formFieldsRender.push(
                          <FormField
                            key={formItem.id}
                            control={form.control}
                            name={formItem.id}
                            render={({ field }) => (
                              <div className="space-y-4">
                                <FormLabel className="flex items-center gap-1 text-[18px]">
                                  {formItem.title} <FormMessage />
                                </FormLabel>
                                {formItem.extraInformation}
                                <FormItem className="flex-row items-center justify-between gap-5">
                                  <div className="space-y-0.5 leading-5">
                                    {formItem.description}
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              </div>
                            )}
                          />,
                        );
                        break;

                      case CHECKBOX:
                        formFieldsRender.push(
                          <FormField
                            key={formItem.id}
                            control={form.control}
                            name={formItem.id}
                            render={({ field, fieldState }) => (
                              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className={
                                      fieldState.invalid ? "border-red" : ""
                                    }
                                  />
                                </FormControl>
                                <div className="w-full">
                                  <FormLabel className="flex items-center gap-1">
                                    {formItem.title} <FormMessage />
                                  </FormLabel>
                                  <FormDescription className="text-base leading-[1.25rem] sm:text-base sm:leading-[1.15rem]">
                                    {formItem.description}
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />,
                        );
                        break;

                      case TEXTAREA:
                        formFieldsRender.push(
                          <FormField
                            key={formItem.id}
                            control={form.control}
                            name={formItem.id}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-1">
                                  {formItem.title} <FormMessage />
                                </FormLabel>{" "}
                                <FormControl>
                                  <Textarea
                                    placeholder={formItem.placeholder}
                                    className="resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  {formItem.description}
                                </FormDescription>
                              </FormItem>
                            )}
                          />,
                        );
                        break;

                      case CALENDAR:
                        formFieldsRender.push(
                          <FormField
                            key={formItem.id}
                            control={form.control}
                            name={formItem.id}
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel className="flex items-center gap-1">
                                  {formItem.title} <FormMessage />
                                </FormLabel>{" "}
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "h-12 w-full rounded-xl pl-3 text-left font-normal",
                                          !field.value &&
                                            "text-muted-foreground",
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>{formItem.placeholder}</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                  >
                                    <CalendarRaw
                                      mode="single"
                                      captionLayout="dropdown-buttons"
                                      fromYear={1960}
                                      toYear={2030}
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>
                                  {formItem.description}
                                </FormDescription>
                              </FormItem>
                            )}
                          />,
                        );
                        break;

                      case COMBOBOX:
                        if (formItem?.comboItems) {
                          const comboItems = formItem.comboItems;
                          formFieldsRender.push(
                            <FormField
                              key={formItem.id}
                              control={form.control}
                              name={formItem.id}
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel className="flex items-center gap-1">
                                    {formItem.title} <FormMessage />
                                  </FormLabel>{" "}
                                  <Popover>
                                    <PopoverTrigger
                                      className="h-12 min-w-full rounded-xl bg-transparent text-base text-gray-primary"
                                      asChild
                                    >
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          role={formItem.id}
                                          className={cn(
                                            "w-[200px] justify-between font-normal text-gray-primary",
                                          )}
                                        >
                                          {field.value
                                            ? comboItems.find(
                                                (comboitem) =>
                                                  comboitem.value ===
                                                  field.value,
                                              )?.label
                                            : "Select..."}
                                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="popover-content-width-full">
                                      <Command>
                                        <CommandInput
                                          placeholder="Search language..."
                                          className="text-gray-primary"
                                        />
                                        <CommandList>
                                          <CommandEmpty>
                                            No LGA found.
                                          </CommandEmpty>
                                          <CommandGroup>
                                            {comboItems.map((item) => (
                                              <CommandItem
                                                value={item.label}
                                                key={item.value}
                                                onSelect={() => {
                                                  form.setValue(
                                                    formItem.id,
                                                    item.value,
                                                  );
                                                }}
                                              >
                                                {item.label}
                                                <Check
                                                  className={cn(
                                                    "ml-auto",
                                                    item.value === field.value
                                                      ? "opacity-100"
                                                      : "opacity-0",
                                                  )}
                                                />
                                              </CommandItem>
                                            ))}
                                          </CommandGroup>
                                        </CommandList>
                                      </Command>
                                    </PopoverContent>
                                  </Popover>
                                  <FormDescription>
                                    {formItem.description}
                                  </FormDescription>
                                </FormItem>
                              )}
                            />,
                          );
                        }
                        break;

                      default:
                        break;
                    }
                  }
                  return formFieldsRender;
                })()}

                <div className="flex w-full justify-center py-6">
                  <Button
                    disabled={!form.formState.isValid}
                    variant={"red"}
                    type="submit"
                    className="mx-auto w-fit"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </Provider>
  );
};
