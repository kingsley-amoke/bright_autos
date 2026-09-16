export interface OverviewCard {
  icon: "shield" | "wrench" | "clock" | string;
  title: string;
  description: string;
  bgColorClass: string;
}

export interface CoverageRow {
  feature: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}
