export interface SectionItem {
  title?: string;
  items: string[];
}

export interface TermsSection {
  id: string;
  title: string;
  contentBeforeList?: string;
  list?: SectionItem | string[];
  contentAfterList?: string;
}
