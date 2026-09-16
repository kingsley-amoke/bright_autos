import { CoverageRow, OverviewCard } from "../types/warranty";

export const warrantyOverviewData: Array<OverviewCard> = [
  {
    icon: "shield",
    title: "Bumper-to-Bumper Protection",
    description:
      "Comprehensive vehicle coverage designed to handle most mechanical and electrical repair issues.",
    bgColorClass: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    icon: "wrench",
    title: "Powertrain System Coverage",
    description:
      "Dedicated safeguards covering engine block, transmission elements, and drivetrain components.",
    bgColorClass: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    icon: "clock",
    title: "24/7 Extended Support",
    description:
      "Constant access line handling dynamic roadside needs, towing services, and system processing checks.",
    bgColorClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
];

export const coverageComparisonData: Array<CoverageRow> = [
  { feature: "Engine", basic: true, standard: true, premium: true },
  { feature: "Transmission", basic: true, standard: true, premium: true },
  { feature: "Drivetrain", basic: true, standard: true, premium: true },
  { feature: "Electrical", basic: false, standard: true, premium: true },
  { feature: "A/C System", basic: false, standard: true, premium: true },
  { feature: "Suspension", basic: false, standard: true, premium: true },
  { feature: "Steering", basic: false, standard: true, premium: true },
  { feature: "Infotainment", basic: false, standard: false, premium: true },
  {
    feature: "Roadside Assistance",
    basic: false,
    standard: false,
    premium: true,
  },
];
