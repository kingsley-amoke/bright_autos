import React from "react";
import { primaryColor } from "../colors/colors";
import CarIcon from "../icons/car_icon";
import EmailIcon from "../icons/email_icon";
import FacebookIcon from "../icons/facebook_icon";
import InstagramIcon from "../icons/instagram_icon";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 px-12">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <div className={`rounded-md bg-${primaryColor} px-2 py-3`}>
              <CarIcon />
            </div>

            <h1 className="text-xl font-bold uppercase">Brightson Autos</h1>
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted partner for quality vehicles and exceptionally services
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/inventory" className="text-gray-400 hover:text-white">
                Inventory
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Services</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Finance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Trade-Ins
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Service Center
              </a>
            </li>
            <li>
              <a href="warranty" className="text-gray-400 hover:text-white">
                Warranties
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Directory</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy & Policies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <EmailIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2026 Brightson Autos. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
