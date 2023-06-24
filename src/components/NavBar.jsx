import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Link from "next/link";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <Link href="/">
          <MdDriveFileRenameOutline size={35}  color="white"/>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/single">Single Image</Link>
          </li>
          <li>
            <Link href="/multiple">Multiple Images</Link>
          </li>
          <li>
            <Link href="sponsor">Sponsor</Link>
          </li>
        </ul>
        <div className="bar">
          {navOpen ? (
            <TfiClose
              color="white"
              size={30}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <HiBars3
              size={35}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
      </div>
      <ul className={navOpen ? "mobile-nav" : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/single">Single Image</Link>
        </li>
        <li>
          <Link href="/multiple">Multiple Images</Link>
        </li>
        <li>
          <Link href="/sponsor">Sponsor</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
