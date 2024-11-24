import * as React from "react";
import { cn } from "@/lib/utils";
import eye from "@/assets/svgs/eye.svg"; // Assuming EyeIcon is an SVG component
import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isPasswordField?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isPasswordField, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    // Determine the input type based on password visibility
    const inputType = isPasswordField
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <div className="relative w-full">
        <input
          type={inputType}
          className={cn(
            "flex h-12 w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-1 text-base capitalize text-gray-primary transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 autofill:text-gray-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base",
            className,
          )}
          ref={ref}
          {...props}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            aria-label="Toggle password visibility"
          >
            <Image src={eye} alt="view" className="mr-2" />
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
