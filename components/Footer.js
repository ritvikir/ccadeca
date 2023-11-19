import React from 'react';
import { FaInstagram, FaEnvelope, FaHandHoldingUsd } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">

    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">

          <a href="/privacy-policy" className="text-gray-400 hover:underline">Site built by Ritvik Irigireddy</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center">
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/cca_deca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 mx-2">
            <FaInstagram size="1.5em" />
          </a>
          {/* Email Icon */}
          <a href="mailto:ravensdeca@gmail.com" className="text-gray-400 mx-2">
            <FaEnvelope size="1.5em" />
          </a>
          {/* GoFundMe Icon */}
          <a href="https://www.gofundme.com/f/help-out-the-cca-deca-chapter" target="_blank" rel="noopener noreferrer" className="text-gray-400 mx-2">
            <FaHandHoldingUsd size="1.5em" />
          </a>
        </div>
      </div>

    </footer>
    </div>

  );
}
