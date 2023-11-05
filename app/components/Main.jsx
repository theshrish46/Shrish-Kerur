import Image from "next/image";
import React from "react";

import headerimage from "/public/unnamed.jpg";

export const Main = () => {
  return (
    <div className="w-full">
      <div className="container flex justify-around items-center h-auto my-10">
        <div>
          <h2>Hi I am Shrish</h2>
          <h3>A Front-end Developer</h3>
          <h3>And A Freelancer</h3>
        </div>
        <div>
          <Image src={headerimage} alt="image" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};
