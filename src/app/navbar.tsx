"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link'; // Next.js Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { to: "about", label: "About" },
    { to: "committee", label: "Committees" },
    { to: "team", label: "Team" }, // The "to" value is now just a key
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="h-18 w-full z-10 flex fixed drop-shadow-2xl shadow-2xl shadow-black bg-gradient">
      <img src="/LOGO2025.jpg" className="rounded-4xl sm:p-2 p-[10px] ml-1 mb-1" alt="Logo"></img>
      
      {/* Desktop Menu */}
      <ul className="text-foreground hidden text-lg font-seasons_b font-semibold sm:flex w-full space-x-20 justify-end px-10 my-auto">
        {navLinks.map((link) => (
          <li key={link.to} className="cursor-pointer">
            {/* If the link is 'Team', always navigate to the /team page */}
            {link.label === 'Team' ? (
              <Link href="/team">{link.label}</Link>
            ) : isHomePage ? (
              // Otherwise, if on the homepage, use ScrollLink
              <ScrollLink to={link.to} smooth={true} duration={500}>
                {link.label}
              </ScrollLink>
            ) : (
              // Otherwise, navigate to the homepage section
              <Link href={`/#${link.to}`}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>

      <button onClick={() => setIsOpen(!isOpen)} className="inline-block sm:hidden text-custom-white z-50 focus:outline-none ml-auto mr-4">
        <div className="w-10 h-10 rounded-sm flex items-center ml-64 z-10">
              {isOpen? <img src="./close.svg" className="w-6 h-6" /> : <img src="./menu.svg" className="w-6 h-6" />}
        </div>
      </button>
      <div className={`sm:hidden fixed top-0 left-0 h-screen w-full bg-custom-black z-40 ... ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className="space-y-6 font-seasons_b flex text-foreground bg-gradient flex-col p-8 text-custom-white text-xl">
          {navLinks.map((link) => (
            <li key={link.to} className="text-left cursor-pointer" onClick={() => setIsOpen(false)}>
              {link.label === 'Team' ? (
                <Link href="/team">{link.label}</Link>
              ) : isHomePage ? (
                <ScrollLink to={link.to} smooth={true} duration={500}>
                  {link.label}
                </ScrollLink>
              ) : (
                <Link href={`/#${link.to}`}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;