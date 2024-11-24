import leadway from "@/assets/images/leadway.png";
import aiico from "@/assets/images/aiico.png";
import axa from "@/assets/images/axa.png";
import mutual from "@/assets/images/mutual.png";
import { Filter } from "@/types";

const text =
  "Fire and Special Perils covers against damage or destruction caused by fire, lightning, or the explosion of domestic appliances. You can use it to protect your home . It also covers for third party liabilities arising from the building to the affected third party";

export const companies = [
  {
    img: leadway,
    title: "Leadway Assurance",
    content: text,
    price: "N540,000",
  },
  {
    img: aiico,
    title: "AIICO Insurance",
    content: text,
    price: "N400,000",
  },
  {
    img: axa,
    title: "AXA Mansard",
    content: text,
    price: "N150,000",
  },
  {
    img: mutual,
    title: "Mutual Benefits Insurance",
    content: text,
    price: "N520,000",
  },
];

export const quoteFiltersV = [
  {
    title: "Coverage options",
    selectItems: ["Burglary"],
  },
  {
    title: "Insurance duration",
    selectItems: [
      "24 months",
      "18 months",
      "12 months",
      "6 months",
      "3 months",
    ],
  },
  {
    title: "Premium price",
    isNumberRange: true,
    numberRange: [0, 500000],
    labels: ["0.00", "500,000.00"],
  },
];

export const quoteFiltersB: Filter[] = [
  {
    title: "Coverage options",
    selectItems: ["Burglary"],
  },
  {
    title: "Use of property",
    selectItems: ["Residential", "Commercial", "Industrial"],
  },
  {
    title: "Type of property",
    selectItems: ["Bungalow", "Apartment", "Semi-detached", "Detached"],
  },
  {
    title: "Premium price",
    isNumberRange: true,
    numberRange: [0, 500000],
    labels: ["0.00", "500,000.00"],
  },
];

export const quoteFiltersBV: Filter[] = [
  {
    title: "Coverage options",
    selectItems: ["Burglary"],
  },
  {
    title: "Use of property",
    selectItems: ["Residential", "Commercial", "Industrial"],
  },
  {
    title: "Type of property",
    selectItems: ["Bungalow", "Apartment", "Semi-detached", "Detached"],
  },
  {
    title: "Insurance duration",
    selectItems: [
      "24 months",
      "18 months",
      "12 months",
      "6 months",
      "3 months",
    ],
  },
  {
    title: "Premium price",
    isNumberRange: true,
    numberRange: [0, 500000],
    labels: ["0.00", "500,000.00"],
  },
];
