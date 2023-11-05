import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="w-full bg-red-400">
        <div className="continer h-28 flex justify-around items-center">
          <div>
            <Link href={"/"}>Shrish Kerur</Link>
          </div>
          <ul className="flex justify-center items-center gap-5">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/project"}>Project</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
