"use client";

import PrimaryButton from "../components/primary_button";
import SecondaryButton from "../components/secondary_button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ContactHero = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-800/90  p-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse gap-32 md:flex-row justify-between items-center">
        <div className=" flex-1 ">
          <div className="gap-4 text-white text-center md:text-start">
            <h2 className="text-5xl font-bold">Get In Touch</h2>
            <h2 className="text-sm font-bold my-2">
              We are Here to Help You Every Step of the Way.
            </h2>

            <div className="my-4 text-gray-200">
              <p>
                Whether you are looking for your next vehicle, need help with
                financing, want to schedule a service, or simply have a
                question; our team is ready to assist you.
              </p>
            </div>

            <div className="flex gap-4 justify-center md:justify-start mt-8">
              <PrimaryButton onClick={() => router.push("inventory")}>
                <p>Browse Inventory</p>
              </PrimaryButton>
              <SecondaryButton onClick={() => router.push("#contact")}>
                Sell/Trade Your Car
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-md aspect-square rounded-full overflow-hidden mr-12">
          <Image
            src="/assets/images/vision.jpg"
            alt="Our Vision"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
