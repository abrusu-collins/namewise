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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam velit
          doloribus qui repellendus sunt nostrum est ullam maiores hic animi,
          amet nulla sapiente aliquam officiis, sequi accusantium, distinctio
          expedita mollitia.
        </p>
        <div className="socials">
          <a href=""><BsGithub/></a>
          <a href=""><BsTwitter/></a>
          <a href=""><BsLinkedin/></a>

        </div>
        <p className="copyright">Copyright &copy; {currentYear}. Built by Collins Abrusu</p>
      </div>
    </div>
  );
}

export default Search;
