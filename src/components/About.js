import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sandra.
            <br className="hidden lg:inline-block" />I am a Full Stack
            Software Engineer
          </h1>
          <div className="mb-8 leading-relaxed">
            <ul>
              I am passionate about providing the best application
              experience to the clients and consumers.
            </ul>
            <ul>
              One of the best parts of being a developer is the
              endless opportunity to learn. I especially enjoy problem
              solving and connecting pieces together.
            </ul>
            <ul>
              When I am not coding I like to; travel, go on food
              adventures, binge-watch tv shows and movies, go hiking,
              workout, cook, and spend time with my family.
            </ul>
          </div>
          <div>
            <a
              href="./Sandra Truong - FS Software Engineer Resume 2022.pdf"
              target={"blank"}
              className="text-indigo-400 leading-relaxed hover:bg-pink-600 rounded hover:text-white"
            >
              View Resume
            </a>
          </div>
          <div
            className="flex justify-center"
            style={{ padding: 30 }}
          >
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
            >
              Let's Connect!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Check Out My Skills
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./IMG-1578.jpg"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
