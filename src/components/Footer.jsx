import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import footerContent from "../constants/content.json";

const iconMap = {
  FaEnvelope: FaEnvelope,
  FaInstagram: FaInstagram,
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
};

const Footer = () => {
  const { logo, description, address, email, socialMedia } =
    footerContent?.footer || {};

  return (
    <footer className="bg-transparent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-5">
            <img src={logo} alt="Logo" className="w-10" />
            <p className="text-[#9c93f9]">{description}</p>
          </div>
        </div>
        <div className="text-center text-n-1/50 text-sm mb-6 mt-10">
          {address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="text-center mb-6 mt-10">
          <div className="flex justify-center space-x-4">
            <a
              href={`mailto:${email}`}
              className="text-gray-300 hover:text-[#655ab2] hover:scale-125"
            >
              <FaEnvelope size={24} />
            </a>
            {socialMedia.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#655ab2] hover:scale-125"
                >
                  {Icon && <Icon size={24} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
