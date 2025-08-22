import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFlag,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";

const About = () => {
  return (
    <div id="about" className="w-full h-screen flex flex-col items-center justify-center ">
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
              repellat error accusantium eos quisquam esse cupiditate, fugiats
              iste, quos exercitationem.
            </p>
          </div>

          <div className="img-about w-full">
            <img
              src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2022/11/may-chu-la-gi-0.jpg"
              alt="About us"
            />
          </div>
        </div>

        <div className="experience flex gap-10">
          <div className="content-experience grid-cols-2 grid w-full gap-3">
            <div className="card-experience p-5 w-full bg-secondary rounded-lg gap-4 max-w-md h-fit">
              <FontAwesomeIcon
                icon={faClock}
                className="text-lg p-2 bg-white rounded self-start"
              />
              <p className="quantity-experience  text-5xl text-white text-center">
                6+
              </p>
              <p className="time-experience text-sm text-white text-center">
                Years of experience
              </p>
            </div>

            <div className="card-experience p-5 w-full bg-secondary rounded-lg gap-4 max-w-md h-fit">
              <FontAwesomeIcon
                icon={faAdd}
                className="text-lg p-2 bg-white rounded self-start"
              />
              <p className="quantity-experience  text-5xl text-white text-center">
                60+
              </p>
              <p className="time-experience text-sm text-white text-center">
                Businesses transformed
              </p>
            </div>

            <div className="card-experience p-5 w-full bg-secondary rounded-lg gap-4 max-w-md h-fit">
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                className="text-lg p-2 bg-white rounded self-start"
              />
              <p className="quantity-experience text-5xl text-white text-center">
                10M
              </p>
              <p className="time-experience text-sm text-white text-center">
                VNDs generated
              </p>
            </div>

            <div className="card-experience p-5 w-full bg-secondary rounded-lg gap-4 max-w-md h-fit">
              <FontAwesomeIcon
                icon={faFlag}
                className="text-lg p-2 bg-white rounded self-start"
              />
              <p className="quantity-experience  text-5xl text-white text-center">
                5+
              </p>
              <p className="time-experience text-sm text-white text-center">
                Projects complete
              </p>
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
