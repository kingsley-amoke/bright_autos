"use client";

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactHero from "./hero";
import { quickActions } from "../constants/quick_actions";
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

const ContactUs = () => {
  const handleSubmitForm = (values: Record<string, string>) => {
    console.log(values);
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

      <Footer />
    </div>
  );
};

export default ContactUs;
