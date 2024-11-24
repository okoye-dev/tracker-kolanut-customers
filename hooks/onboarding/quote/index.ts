import {
  AIICO,
  AXA,
  BUILDINGS,
  BUILDINGS_AND_VALUABLES,
  LEADWAY,
  MUTUAL,
  VALUABLES,
} from "@/config";
import {
  companies,
  quoteFiltersB,
  quoteFiltersBV,
  quoteFiltersV,
} from "@/config/quote";

export const useGetQuoteFilters = (whatToInsure: string) => {
  switch (whatToInsure) {
    case BUILDINGS:
      return quoteFiltersB;
    case BUILDINGS_AND_VALUABLES:
      return quoteFiltersBV;
    case VALUABLES:
      return quoteFiltersV;
    default:
      return quoteFiltersV;
  }
};

export const useGetPolicyDescription = (
  company: string | string[] | undefined,
) => {
  switch (company) {
    case LEADWAY:
      return companies[0];
    case AIICO:
      return companies[1];
    case AXA:
      return companies[2];
    case MUTUAL:
      return companies[3];
    default:
      return companies[0];
  }
};
