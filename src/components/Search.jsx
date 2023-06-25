import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
function Search() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="search">
      <img src="/3d/hand.webp" alt="" />

      <div className="text">
        <p className="thanks">Thank you for checking out NAMEWISE</p>
        <p className="thanks-text">
          I am dedicated to assisting you in creating a strong brand identity by
          generating unique and memorable names that resonate with your target
          audience. NameWise was developed by Abrusu Collins, follow me on my
          socials below.
        </p>
        <div className="socials">
          <a href="">
            <BsGithub />
          </a>
          <a href="">
            <BsTwitter />
          </a>
          <a href="">
            <BsLinkedin />
          </a>
        </div>
        <p className="copyright">
          Copyright &copy; {currentYear}. Built by Collins Abrusu
        </p>
      </div>
    </div>
  );
}

export default Search;
