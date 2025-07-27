"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Fsc() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play',
          },
        }
      );
    }
  }, []);

  return (
    <div id="countdown" className="min-h-screen font-seasons_b bg-radial from-foreground to-background">
      <div ref={headingRef}>
      <h1 className="sm:text-7xl text-5xl text-gradient text-center pt-35 px-5">
        Futuristic <br></br> Security Council
      </h1>
      <img className="mx-auto sm:w-[250px] w-[200px] mt-14" src="../FSC.png"></img>
      <h1 className="sm:text-5xl text-4xl text-gradient text-center pt-14">
        THE AGENDA
      </h1>
      <div className="rounded-3xl sm:w-3/5 w-4/5 h-2/7 mx-auto sm:mt-10 mt-5">
        <div className="flex flex-row justify-center pt-10 lg:mx-10 sm:mx-10 lg:mb-4 text-xl lg:text-[20px]">
          <div className="text-center font-seasons_r text-white">
            The Oracle's alcove — where prophecy meets policy.
When the past has fallen and Olympus is no more, a new council rises to tame the chaos of tomorrow.
In FSC, delegates are like Prometheus — stealing foresight from the future to solve crises before they consume the world. Set in a world yet to come, the FSC tackles tomorrow<span className="font-serif">'</span>s conflicts today. From AI—driven warfare to interplanetary disputes, this council demands sharp foresight, bold strategy, and out of thebox diplomacy. The future is uncertain—your leadership will define it.
          </div>
        </div>
        <a href="/FSCBG1.pdf" target="_blank"><button className="w-60 cursor-pointer h-12 mt-10 text-xl block mx-auto bg-gradient text-foreground drop-shadow-2xl drop-shadow-black border-2 border-black">
        BACKGROUND GUIDE 1</button></a>
        <a href="/FSCBG2.pdf" target="_blank"><button className="w-60 cursor-pointer h-12 mt-10 text-xl block mx-auto bg-gradient text-foreground drop-shadow-2xl drop-shadow-black border-2 border-black">
        BACKGROUND GUIDE 2</button></a>
      </div>
      <h1 className="sm:text-5xl text-4xl text-gradient text-center pt-14">
        EXECUTIVE BOARD
      </h1>
      <div className="sm:grid grid-cols-3 flex flex-col sm:mx-40 mx-10 sm:mt-30 mt-20 pb-40 gap-24">
                <img src="/fsc1.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/fsc2.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/fsc3.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
      </div>
      </div>
    </div>
  );
};

