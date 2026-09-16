import { OpeningHour } from "../types/opening_hour";

export const phone = "(555) 234-5678";
export const email = "sales@dealership.com";

export const openingHours: Array<OpeningHour> = [
  { days: "Monday - Friday", time: "9:00 AM - 8:00 PM", status: "open" },
  { days: "Saturday", time: "9:00 AM - 6:00 PM", status: "open" },
  { days: "Sunday", time: "Closed", status: "closed" },
];

export const contactSections = [
  {
    id: "personal",
    title: "01. Personal Information",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        icon: "user",
        required: true,
        placeholder: "e.g. John",
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        icon: "user",
        required: true,
        placeholder: "e.g. Doe",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        icon: "mail",
        required: true,
        placeholder: "e.g. john@example.com",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        icon: "phone",
        placeholder: "e.g. (555) 123-4567",
      },
    ],
  },
  {
    id: "inquiry",
    title: "02. Inquiry Details",
    fields: [
      {
        name: "department",
        label: "Select Department",
        type: "select",
        required: true,
        placeholder:
          "Select option: Sales, Finance, Service, Parts, General Support",
        span: "full",
        options: [
          { label: "Sales", value: "sales" },
          { label: "Finance", value: "finance" },
          { label: "Service", value: "service" },
          { label: "Parts", value: "parts" },
          { label: "General Support", value: "general" },
        ],
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What's your message regarding?",
        span: "full",
      },
      {
        name: "message",
        label: "Your Message",
        type: "textarea",
        required: true,
        placeholder:
          "Please tell us how we can assist. Provide as much detail as possible.",
        span: "full",
      },
    ],
  },
  {
    id: "vehicle",
    title: "03. Vehicle Details (Optional)",
    badge: "Recommended",
    fields: [
      {
        name: "vehicle",
        label: "Vehicle Make / Model",
        type: "text",
        icon: "car",
        placeholder: "e.g. Toyota Camry",
      },
      {
        name: "vin",
        label: "VIN (Vehicle Identification Number)",
        type: "text",
        icon: "hash",
        placeholder: "17-character VIN",
      },
      {
        name: "contactMethod",
        label: "Preferred Contact Method",
        type: "radio",
        span: "full",
        options: [
          { label: "Email Communication", value: "email", icon: "mail" },
          { label: "Phone Call or SMS", value: "phone", icon: "phone" },
        ],
      },
    ],
  },
];
