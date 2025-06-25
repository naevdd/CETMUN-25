"use client";

import {Link} from "react-scroll";

export default function Landing() {
  return (
    <div className="h-screen bg-radial from-foreground to-background">
      <div className="h-18 flex drop-shadow-2xl shadow-2xl shadow-black drop-shadow-black bg-gradient">
        <img src="/LOGO2025.jpg" className="rounded-4xl p-2 ml-1 mb-1"></img>
        <ul className="text-foreground text-lg font-serif font-semibold flex w-full space-x-20 justify-end px-10 my-auto">
          <li><Link to="countdown" smooth={true} duration={500}
           className="cursor-pointer">About</Link></li>
          <li><Link to="committee" smooth={true} duration={500}
           className="cursor-pointer">Committee</Link></li>
          <li><Link to="countdown" smooth={true} duration={500}
           className="cursor-pointer">Team</Link></li>
          <li><Link to="countdown" smooth={true} duration={500}
           className="cursor-pointer">Register</Link></li>
          <li><Link to="countdown" smooth={true} duration={500}
           className="cursor-pointer">Contact</Link></li>
        </ul>
      </div>
      <h1 className="text-center pt-60 text-8xl font-serif font-semibold text-gradient">CET MUN 25</h1>
      <p className="text-center mt-10 text-2xl text-white font-serif">August 1,2,3</p>
      <button className="w-40 h-12 mt-10 text-xl block mx-auto bg-gradient drop-shadow-2xl drop-shadow-black border-2 border-black font-serif">
        REGISTER
      </button>
    </div>
  );
}