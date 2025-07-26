'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Committee() {
  const router = useRouter();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]); // array of card refs

  // Set each card ref
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

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

    // Animate each card individually
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play',
            },
          }
        );
      }
    });
  }, []);

  const committees = [
    { href: '/unhrc', img: '/hrcb.png' },
    { href: '/fifa', img: '/fifab.png' },
    { href: '/ip', img: '/ipb.png' },
    { href: '/fsc', img: '/fscb.png' },
    { href: '/kla', img: '/klab.png' },
  ];

  return (
    <div id="committee" className="bg-radial font-seasons_r from-foreground to-background pb-30 min-h-screen">
      <h1
        ref={headingRef}
        className="sm:text-7xl px-10 text-5xl text-gradient text-center mt-40 font-seasons_b"
      >
        COMMITTEE LIST
      </h1>

      <div className="sm:grid sm:grid-cols-3 flex flex-col sm:mx-40 mx-14 mt-30 grid-rows-2 gap-24">
        {committees.map((committee, idx) => (
          <div
            key={idx}
            ref={(el) => setCardRef(el, idx)}
            onClick={() => router.push(committee.href)}
            className="rounded-2xl shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105 opacity-0"
          >
            <img src={committee.img} className="rounded-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
