import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import React, { useEffect } from "react";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
  useEffect(() => {
    gsap.fromTo(
      ".navigation",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="navigation content flex justify-between items-center bg-primary border mt-5 border-gray-200 fixed top-0 z-10 p-3 rounded-full">
      <div className="logo flex items-center">
        <img
          src="https://t4.ftcdn.net/jpg/02/14/62/05/360_F_214620530_mHWODUVFNAufCuNfqHiTo8AM2SeUfQtH.jpg"
          className="aspect-square w-15 object-cover"
          alt="Logo"
        />
        <p className="text-xl text-secondary font-bold font-serif">Tech</p>
      </div>
      <div className="nav-links flex gap-5 *:p-2 *:hover:text-secondary">
        <a href="/about" className="flex justify-center items-center gap-2">About</a>
        <a href="/services" className="flex justify-center items-center gap-2">Services</a>
        <a href="/FAQ" className="flex justify-center items-center gap-2">FAQ</a>
        <a href="/products" className="flex justify-center items-center gap-2">Products</a>
        <a href="/contact" className="bg-secondary rounded-full flex justify-center items-center gap-2">
           <span className=" text-white text-lg">Contact us</span>
          <FontAwesomeIcon icon={faArrowRight} className="rounded-full p-3 bg-white"/>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
