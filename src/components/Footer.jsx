import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rose-950 text-white">
      {/* Inner Content Container */}
      <div className="md:max-w-maxAppWidth mx-auto px-4 py-12 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <h3 className="font-parisienne text-subColor mb-3 text-2xl">
              Flower Shop
            </h3>
            <p className="font-inter text-sm text-gray-300">
              Handcrafted floral arrangements delivered with love. Let your
              emotions bloom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter mb-4 text-lg font-semibold">
              Quick Links
            </h4>
            <ul className="font-inter space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#ourstory" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter mb-4 text-lg font-semibold">Contact</h4>
            <ul className="font-inter space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +971 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@flowershop.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-inter mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4 text-gray-300">
              <a href="#">
                <Facebook size={20} className="hover:text-white" />
              </a>
              <a href="#">
                <Instagram size={20} className="hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 text-center text-sm text-gray-400">
  Developed by <a
    href="https://github.com/CodeByHossam"
    target="_blank"
    rel="noopener noreferrer"
    className="text-rose-300 hover:underline"
  >
    Hossam Fathi Nasr
  </a>
</div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Flower Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
