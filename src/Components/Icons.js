import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const icons = () => {
  return (
    <>
      <a href="https://github.com/Satishyalamele">
        <FaGithub style={{ margin: "4px", color: "black" }} size={25} />
      </a>
      <a href="https://www.linkedin.com/in/satish-yalamele/">
        <FaLinkedin style={{ margin: "4px", color: "black" }} size={25} />
      </a>
      <a href="https://www.instagram.com/satish_raj_yalameli/">
        <FaInstagram style={{ margin: "4px", color: "black" }} size={25} />
      </a>
    </>
  );
};

export default icons;
