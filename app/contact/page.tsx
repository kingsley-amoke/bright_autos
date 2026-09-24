"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import ContactHero from "./hero";
import QuickActionCard from "../services/quick_action_card";
import ResolveVehicle from "../components/resolve_vehicle";
import ContactSidebar from "./contact_sidebar";
import ContactForm from "./contact_form";
import {
  contactSections,
  email,
  openingHours,
  phone,
} from "../constants/contact_info";
import { contactActions } from "../constants/contact_actions";
import { ServerActionResponse, SupportInquiry } from "../types/email";
import { sendSupportEmail } from "../actions/send_email";
import DealershipDirectory from "./delearship";

const ContactUs = () => {
  const handleSubmitForm = async (values: Partial<SupportInquiry>) => {
    //TODO:Forward contact to mail

    console.log(values);

    const rawDataObject: SupportInquiry = {
      firstName: values.firstName!,
      lastName: values.lastName!,
      email: values.email!,
      phone: values.phone!,
      department: values.department!,
      subject: values.subject!,
      message: values.message!,
      contactMethod: values.contactMethod!,
      vehicle: values.vehicle,
      vin: values.vin,
    };

    console.log(rawDataObject);

    const response: ServerActionResponse =
      await sendSupportEmail(rawDataObject);

    if (response.success) {
      console.log(response.message);
    } else {
      console.log(response.error);
    }
  };
  return (
    <div className="bg-white text-black">
      <Header />
      <section>
        <ContactHero />
      </section>

      <section className="w-full bg-[#fdf6f0] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl">Contact Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
            {contactActions.map((action, i) => (
              <QuickActionCard action={action} key={i} />
            ))}
          </div>
          <ResolveVehicle />
        </div>
      </section>
      <section className={`w-full bg-slate-50 p-12`}>
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-[minmax(260px,320px)_1fr]">
          <ContactSidebar phone={phone} email={email} schedule={openingHours} />
          <div
            id="contact"
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            <ContactForm
              sections={contactSections}
              onSubmit={handleSubmitForm}
            />
          </div>
        </div>
      </section>
      <section
        className="bg-[#0f1422] text-white py-16 px-6 md:px-12 lg:px-24 font-sans min-h-screen flex flex-col justify-center"
        id="dealership"
      >
        <DealershipDirectory />
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
