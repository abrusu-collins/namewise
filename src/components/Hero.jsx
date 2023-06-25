import React from "react";
import Link from "next/link";
function Hero() {
  return (
    <div className="violet">
      <div className="violet-inner">
        <div>
          <p className="violet-title">
            GENERATE A BRAND NAME YOUR USERS WILL LOVE ON NAMEWISE
          </p>
          <p className="violet-text">
            Discover the perfect business name that captivates and resonates
            with your audience on Namewise. Unlock the potential of your brand
            with NameWise and watch your business soar to new heights.
          </p>
          <Link href="/app"> Get Started</Link>
        </div>
        <img src="/3d/love-bulb.webp" alt="" />
      </div>
    </div>
  );
}

export default Hero;
