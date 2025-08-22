import  { useEffect } from "react";
import Button from "./UI/button";
import hero from "./../assets/hero-bg.png";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: -100, x: -100 },
      { opacity: 1, y: 0, x: 0, duration: 1.5, ease: "power2.out" }
    );

    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-image",
      { opacity: 0, y: 100, x: 100 },
      { opacity: 1, y: 0, x: 0, duration: 1.5, ease: "power2.out" }
    );

    tl.to(".hero-image", {
      duration: 2,
      opacity: 1,
      y: 50,
      yoyo: true,
      ease: "power1",
      repeat: -1,
    });
  }, []);

  return (
    <div className="content flex flex-wrap justify-between h-screen items-center">
      <div className="hero-content opacity-100 flex flex-col gap-4 max-w-3xl">
        <div className="hero-title">
          <p className="title-introduce text-3xl">
            Tech new solution for future
          </p>
          <p className="title-main text-5xl font-semibold">
            Next generation title
          </p>
          <p className="title-description text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            amet architecto expedita, placeat itaque voluptatum? Nemo architecto
            consequatur possimus, saepe ipsam, nulla harum alias eligendi nihil
            qui atque, numquam incidunt.
          </p>
        </div>

        <div className="contact-more flex gap-3">
          <Button
            padding="medium"
            onClick={() => {}}
            variants="primary"
            typeContent="filled"
            type="button"
            className="font-bold w-40"
          >
            <span className=" text-white font-bold text-lg">Contact us</span>
          </Button>

          <Button
            padding="medium"
            onClick={() => {}}
            variants="primary"
            typeContent="outline"
            type="button"
            className="font-bold w-40"
          >
            <span className="font-bold text-lg">See demo</span>
          </Button>
        </div>
      </div>
      <div className="image relative">
        <img
          src={hero}
          className="hero-image object-cover max-w-sm"
          alt="Hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
