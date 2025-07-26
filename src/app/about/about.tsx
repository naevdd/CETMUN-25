'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 70 }, // starts lower and invisible
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
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

    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5, // appears after heading
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paraRef.current,
            start: 'top 80%',
            toggleActions: 'restart reverse restart reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen font-seasons_r bg-radial from-foreground to-background flex flex-col items-center justify-start"
    >
      <h1
        ref={headingRef}
        className="text-center sm:pt-60 pt-40 text-5xl md:text-8xl font-seasons_b text-gradient"
      >
        WHAT IS CET MUN?
      </h1>

      <p
        ref={paraRef}
        className="text-center mt-20 px-10 md:px-60 text-lg md:text-2xl text-white"
      >
        Launched in 2023 and hosted by the Literary Society of College of Engineering Trivandrum, CET MUN has rapidly carved a name for itself as one of the most dynamic and well executed Model United Nations conferences in the Kerala MUN Circuit. With over 160 delegates across four committees in just two editions, we’ve built a reputation for intellectual depth, spirited debate, and exceptional execution.
        This year, we expand to five committees, promising more challenges, more voices, and even more diplomacy.
        Like the Agora of ancient Greece, where orators, philosophers, and citizens once debated the fate of empires under open skies, CET MUN revives that same spirit of reason and rhetoric—only now in formal wear and with placards. 
        Every speech is strategy, every pause is power, and every delegate is a statesperson in the making. Enter the arena. Wield your words. Rewrite the world.
      </p>
    </div>
  );
}
