import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

const Layout = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Navigation />
      <Hero />
      
      <About/>
      <Services />
      <Footer />
    </div>
  );
};

export default Layout;
