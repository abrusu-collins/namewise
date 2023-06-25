import React from "react";
import Link from "next/link";
function Free() {
  return (
    <div>
      <div className="white">
        <div className="white-inner">
          <div>
            <p className="white-title">IT&apos;S FREE OF CHARGE!!!</p>
            <p className="white-text">
              Explore a vast array of unique and captivating name suggestions,
              meticulously curated for you. Best of all, it&apos;s
              completely free of charge, ensuring limitless possibilities for
              entrepreneurs and startups alike.
            </p>
            <Link href="/app">I like free things😅</Link>
          </div>
          <img src="/3d/gift.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Free;
