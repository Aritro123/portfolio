const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my portfolio! Im thrilled to share my journey as a budding
          web designer, poised at the brink of graduation from BCA. Hailing from
          Kolkata, Ive honed my skills in React, Redux, Tailwind CSS, HTML, and
          CSS, with a strong foundation in version control using GitHub.
        </p>
        <br />
        <p className="text-xl">
          As I stand on the cusp of graduation, I`m eager to transition from
          student to professional, ready to immerse myself fully in the world of
          web design. I`m on the lookout for exciting job opportunities and
          projects where I can apply my skills and creativity to make a
          meaningful impact. so Let`s embark on this journey together, shaping
          the future of web design one project at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
