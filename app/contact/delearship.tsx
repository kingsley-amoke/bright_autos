import React from "react";
import { MapPin, Phone, Mail, Clock, Wrench } from "lucide-react";

export default function DealershipDirectory() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-[#e06733] uppercase text-xs font-semibold tracking-wider mb-3">
          <span className="w-4 h-[2px] bg-[#e06733]"></span>
          Dealership Directory
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Our Dealership
        </h1>
        <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Get in touch with our experts, explore current inventories, or visit
          our flagship showroom. We look forward to welcoming you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        <div className="space-y-4">
          <div className="bg-[#192033] p-6 rounded-xl flex gap-4">
            <div className="p-3 bg-[#e06733]/10 text-[#e06733] rounded-lg h-fit">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block mb-1">
                Main Showroom
              </span>
              <h3 className="text-base font-bold mb-2">Flagship Location</h3>
              <p className="text-xs text-gray-400 leading-normal">
                6 Christ Anionting, Benin Sapele Rd, Off PZ Road, Oka, Benin
                City 300104, Edo State, Nigeria.
              </p>
            </div>
          </div>

          <div className="bg-[#192033] p-6 rounded-xl flex gap-4 items-center">
            <div className="p-3 bg-[#e06733]/10 text-[#e06733] rounded-lg">
              <Phone size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block mb-0.5">
                Connect Instantly
              </span>
              <h3 className="text-base font-bold mb-1">
                Sales & Consultations
              </h3>
              <a
                href="tel:+2347084180478"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                +234 (708) 418 0478
              </a>
            </div>
          </div>

          <div className="bg-[#192033] p-6 rounded-xl flex gap-4 items-center">
            <div className="p-3 bg-[#e06733]/10 text-[#e06733] rounded-lg">
              <Mail size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block mb-0.5">
                Inquiries
              </span>
              <h3 className="text-base font-bold mb-1">Online Support</h3>
              <a
                href="mailto:brightautos@gmail.com"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                brightautos@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#192033] p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-8 text-[#e06733]">
            <Clock size={22} />
            <h2 className="text-lg font-bold text-white">Sales Department</h2>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
              <span className="text-gray-400">Monday – Friday</span>
              <span className="font-bold">8:00 AM – 7:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
              <span className="text-gray-400">Saturday</span>
              <span className="font-bold">9:00 AM – 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-400">Sunday</span>
              <span className="font-bold">11:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-[#192033] p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-8 text-[#e06733]">
            <Wrench size={22} />
            <h2 className="text-lg font-bold text-white">Service Department</h2>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
              <span className="text-gray-400">Monday – Friday</span>
              <span className="font-bold">7:00 AM – 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
              <span className="text-gray-400">Saturday</span>
              <span className="font-bold">8:00 AM – 4:00 PM</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-400">Sunday</span>
              <span className="font-bold text-[#e06733]">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
