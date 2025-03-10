import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4A0F92] to-[#5513AC] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left items-start">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/ginnylogo2.svg"
              alt="Virginia's Art Studio Logo"
              width={75}
              height={100}
              className="mb-2"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Private Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-start space-x-6">
              <Link href="#" className="hover:text-gray-300">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm">
          © 2025 Virginia's Art Studio | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
