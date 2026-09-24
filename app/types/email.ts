export interface SupportInquiry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  message: string;
  contactMethod: "email" | "phone" | "text";
  vehicle?: string;
  vin?: string;
}

export type ServerActionResponse =
  | { success: true; message: string }
  | { success: false; error: string };
