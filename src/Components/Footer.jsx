import React from "react";
import logoIcon from "../assets/images/more/logo1.png";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import footerImg from "../assets/images/more/24.jpg";
import footerBg from "../assets/images/more/13.jpg"
const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerBg})` }}
        className="bg-no-repeat bg-cover">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 py-20 px-5">
        <div>
          <img className="w-17" src={logoIcon} alt="" />
          <h1 className="font-heading text-4xl text-heading [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] mt-5">
            Espresso Emporium
          </h1>
          <p className="font-text text-text text-base mt-5  pr-20">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.{" "}
          </p>
          <div className="flex gap-5 mt-7">
            <FaFacebook size={25} className="text-heading cursor-pointer" />
            <FaXTwitter size={25} className="text-heading cursor-pointer" />
            <FaInstagram size={25} className="text-heading cursor-pointer" />
            <ImLinkedin size={25} className="text-heading cursor-pointer" />
          </div>
        </div>
        <div>
          <h1 className="font-heading text-4xl text-heading [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] mt-5">
            Get in Touch
          </h1>
          <ul className="space-y-5 mt-7">
            <li className="font-text text-text text-base flex items-center gap-2">
              <IoCallSharp className="text-heading" size={20} />
              +88 01533 333 333
            </li>
            <li className="font-text text-text text-base flex items-center gap-2">
              <MdEmail className="text-heading" size={20} />
              info@gmail.com
            </li>
            <li className="font-text text-text text-base flex items-center gap-2">
              <FaMapMarkerAlt className="text-heading" size={20} />
              72, Wall street, King Road, Dhaka
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${footerImg})` }}
        className="bg-no-repeat bg-cover h-13 grid items-center"
      >
        <h1 className="font-heading text-lg text-center text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>{" "}
      </div>
    </div>
  );
};

export default Footer;
