import flicktalk from "../assets/portfolio/flicktalk.png";
import installNode from "../assets/portfolio/installNode.jpg";
import portfolio from "../assets/portfolio/portfolio.png";
import artgallery from "../assets/portfolio/artgallery.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Project = () => {
  const project = [
    {
      id: 1,
      src: flicktalk,
      code: "https://github.com/Aritro123/Flick-Talk",
      demo: "",
    },
    {
      id: 2,
      src: artgallery,
      code: "https://github.com/Aritro123/Art-gallery-Website",
      demo: "https://artgallery07.netlify.app/",
    },
    {
      id: 3,
      src: portfolio,
      code: "https://github.com/Aritro123/portfolio",
      demo: "https://aritrosportfolio.netlify.app/",
    },
    {
      id: 4,
      src: reactWeather,
      code: "https://github.com/Aritro123/Weather-App-main",
      demo: "https://aritrosweatherapp.netlify.app/",
    },
    {
      id: 5,
      src: reactSmooth,
      code: "https://www.linkedin.com/in/aritro-mondal/",
      demo: "",
    },
    {
      id: 6,
      src: installNode,
      code: "https://www.linkedin.com/in/aritro-mondal/",
      demo: "",
    },
    
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div key={id} className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
