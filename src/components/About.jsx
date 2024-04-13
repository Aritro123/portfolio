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
          Throughout my academic tenure, Ive been fascinated by the fusion of
          creativity and technology, which has fueled my passion for web design.
          With each project, Ive delved deeper into crafting immersive user
          experiences, leveraging the power of React and Redux to build dynamic
          interfaces. My attention to detail and penchant for clean, efficient
          code have driven me to continuously refine my skills, ensuring optimal
          performance and scalability. Tailwind CSS has been instrumental in
          streamlining my design process, allowing me to create visually
          stunning layouts with ease. From conceptualization to deployment, I
          thrive on the collaborative nature of web development, relishing the
          opportunity to transform ideas into tangible digital experiences
        </p>
        <br />
        <p className="text-xl">
          As I stand on the cusp of graduation, I`m eager to transition from
          student to professional, ready to immerse myself fully in the world of
          web design. I`m on the lookout for exciting job opportunities and
          projects where I can apply my skills and creativity to make a
          meaningful impact. Whether it`s designing sleek, responsive interfaces
          or optimizing user interactions, I`m committed to pushing the
          boundaries of what`s possible in web design. I invite you to explore
          my portfolio and connect with me to discuss how we can collaborate to
          create something extraordinary. Let`s embark on this journey together,
          shaping the future of web design one project at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
