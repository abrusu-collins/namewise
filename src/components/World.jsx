import React from "react";
import Link from "next/link";
function World() {
  return (
    <div className="violet">
      <div className="violet-inner">
        <div>
          <p className="violet-title">
            GET A NAME THAT WILL RESONATE WITH USERS WORLDWIDE
          </p>
          <p className="violet-text">
            Elevate your brand&apos;s international presence and connect with a
            diverse audience like never before. Seamlessly bridge language and
            cultural barriers by discovering captivating names that resonate
            with users worldwide.
          </p>
          <Link href="/app">Go worldwide!</Link>
        </div>
        <img src="/3d/world.webp" alt="" />

      </div>
    </div>
  );
}

export default World;
