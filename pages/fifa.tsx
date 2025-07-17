import "../src/app/globals.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Fifa() {
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
            toggleActions: 'restart reverse restart reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div id="countdown" className="min-h-screen font-seasons_b bg-radial from-foreground to-background">
      <div ref={headingRef}>
      <h1  className="text-7xl text-gradient text-center pt-25">
        Federation <br></br> International De <br></br> Football Association
      </h1>
      <img className="mx-auto mt-10" src="../FIFA.png" width={250}></img>
      <h1 className="text-5xl text-gradient text-center pt-14">
        THE AGENDA
      </h1>
      <div className="rounded-3xl w-3/5 h-2/7 mx-auto mt-10">
        <div className="flex flex-row justify-center pt-10 lg:mx-10 mx-10 lg:mb-4 text-xl lg:text-[20px]">
          <div className="text-center font-seasons_r text-white">
            The theatre of the titans — clubs, councils and countries. 
Zeus may rule the skies, but on Earth, football is the true religion.
FIFA is where politics and power collide under the banner of sport—navigating controversies, corruption, global events, and the intersection of sport with social justice. In FIFA, the pitch is political, and every decision has worldwide impact.
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-gradient text-center pt-14">
        EXECUTIVE BOARD
      </h1>
      <div className="grid grid-cols-3 mx-40 mt-30 pb-40 gap-24">
                <img src="/fifa1.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/fifa2.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/fifa3.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
      </div>
      </div>
    </div>
  );
};
