import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen flex items-start justify-center ">
      <div className="py-10 content flex flex-col gap-20">
        <div className="about flex gap-10">
          <div className="info-about w-full">
            <p className="title-about font-bold text-6xl">About us</p>
            <p className="title-name text-3xl font-bold">
              Technology solution for the future
            </p>
            <p className="description text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quas itaque quaerat sed explicabo cumque ex amet sit at velit qui
              harum sunt aperiam distinctio quae, laborum voluptatibus quo eius.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              ut illo quidem numquam hic tempore minima, corporis possimus aut
              repellat error accusantium eos quisquam esse cupiditate, fugiat
              iste, quos exercitationem.
            </p>
          </div>

          <div className="img-about w-full">
            <img src="/path/to/image.jpg" alt="About us" />
          </div>
        </div>

        <div className="experience flex gap-10">
          <div className="content-experience grid-cols-2 grid w-full gap-3">

            <div className="card-experience p-5 w-full bg-secondary rounded-lg flex-col flex items-center justify-center gap-4 max-w-md">
                <div className="flex justify-center gap-5">
                    <FontAwesomeIcon icon={faClock} className="text-lg p-2 bg-white rounded"/>
                <p className="quantity-experience font-bold text-5xl text-white">6+</p>
                </div>
                <p className="time-experience text-2xl text-white aspect-square">Years of experience</p>
            </div>
          </div>

          <div className="info-experience w-full">
            <p className="title-about font-bold text-6xl">Experience</p>
            <p className="title-name text-3xl font-bold">Work with us</p>
            <p className="description text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quas itaque quaerat sed explicabo cumque ex amet sit at velit qui
              harum sunt aperiam distinctio quae, laborum voluptatibus quo eius.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              ut illo quidem numquam hic tempore minima, corporis possimus aut
              repellat error accusantium eos quisquam esse cupiditate, fugiat
              iste, quos exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
