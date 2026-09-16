export interface FormOption {
  value: string;
  label: string;
  icon?: string;
}

export interface Form {
  name: string;
  label?: string;
  type?: "text" | "textarea" | "select" | "radio" | string;
  required?: boolean;
  placeholder?: string;
  span?: "full" | "half" | string;
  icon?: string;
  options?: FormOption[];
}
