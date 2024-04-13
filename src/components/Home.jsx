import { TypeAnimation } from "react-type-animation";
import hero from "../assets/Hero.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I`m Aritro
          </h2>
          <TypeAnimation
            sequence={["Frontend Devloper", 1000, "Web designer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

          <p className="text-gray-500 py-4 max-w-md">
            Welcome to my portfolio! I`m a driven React developer from Kolkata,
            currently wrapping up my BCA degree. Excited to leap into the vast
            realm of web development, I bring a solid understanding of React and
            a hunger for continuous learning. With a focus on crafting intuitive
            interfaces and optimizing user experiences, I`m poised to tackle
            challenges and deliver impactful solutions. Eager to contribute my
            skills and creativity to dynamic projects, I`m actively seeking
            opportunities to grow and thrive in the ever-evolving tech
            landscape. Let`s connect and create something remarkable together!
          </p>
          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <FaRegArrowAltCircleRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="my profile"
            className="mx-auto rounded-[200px] w-2/3 md:w-[400px] md:rounded-[350px] md:ml-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
