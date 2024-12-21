import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={`${process.env.PUBLIC_URL}/img/Ballers_black_white.png`}
            alt="Ballers Logo"
            className="h-12"
          />
          <p className="text-gray-400 text-center md:text-left text-sm md:text-base">
            Empowering athletes and investors through sports.
          </p>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left text-gray-400 text-sm md:max-w-md">
          14/4, J Block, 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu, 600102
          <div className="border-t border-white my-4"></div> {/* White line */}
          <p>
            © 2024 Ballers · All Rights Reserved ·{" "}
            <Link to="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>{" "}
            ·{" "}
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Quick Links & Social Media */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm md:text-base">
            <Link to="/faqs" className="hover:text-gray-400">
              FAQs
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/ballers-life/"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/ballerslife.official/"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
