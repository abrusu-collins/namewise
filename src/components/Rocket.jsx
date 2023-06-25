import React from "react";
import Link from "next/link";
function Rocket() {
  return (
    <div className="white">
      <div className="white-inner">
        <div>
          <p className="white-title">
            SKYROCKET YOUR BUSINESS WITH THE PERFECT NAME
          </p>
          <p className="white-text">
            Unlock the full potential of your business with our innovative app,
            designed to skyrocket your success by crafting the perfect name.
            Stand out from the crowd and leave a lasting impression with a name
            that sets your venture on a trajectory towards unmatched growth and
            recognition.
          </p>
          <Link href="/app">Let&apos;s goooo🚀</Link>
        </div>
        <img src="/3d/rocket.png" alt="" />
      </div>
    </div>
  );
}

export default Rocket;
