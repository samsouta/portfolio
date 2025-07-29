import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className=" about-section text-gray-300 py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[var(--kincha)] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Samsouta, a results-driven Full-Stack Developer passionate about building high-performance websites and web applications.
            With expertise in React, Laravel, PHP, JavaScript, HTML, CSS, and databases, I specialize in crafting responsive, user-friendly, and scalable solutions. From designing seamless user interfaces to developing robust back-end architectures, I ensure every project is built for performance, security, and efficiency.<br/> 
            I am committed to delivering high-quality digital experiences and continuously improving my skills to stay ahead in the ever-evolving tech landscape. Let’s collaborate to turn your ideas into reality!
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-80 h-80 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
