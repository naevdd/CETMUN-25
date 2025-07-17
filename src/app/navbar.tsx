import React from 'react'
import {Link} from "react-scroll";

const navbar = () => {
  return (
    <div className="h-18 w-full z-10 flex fixed drop-shadow-2xl shadow-2xl shadow-black drop-shadow-black bg-gradient">
        <img src="/LOGO2025.jpg" className="rounded-4xl p-2 ml-1 mb-1"></img>
        <ul className="text-foreground text-lg font-seasons_b font-semibold flex w-full space-x-20 justify-end px-10 my-auto">
          <li><Link to="about" smooth={true} duration={500}
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
  )
}

export default navbar