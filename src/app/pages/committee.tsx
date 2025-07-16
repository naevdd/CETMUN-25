'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Committee() {
  const router = useRouter();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = 'COMMITTEE LIST';
    const letters = text.split('');

    if (headingRef.current) {
      headingRef.current.innerHTML = letters
        .map(
          (char) =>
            `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
        )
        .join('');

      const spans = headingRef.current.querySelectorAll('span');

      gsap.fromTo(
        spans,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div id="committee" className="bg-radial from-foreground to-background pb-30">
      <h1
        ref={headingRef}
        className="text-7xl text-gradient text-center mt-40 font-serif"
      />
      <div className="grid grid-cols-3 mx-40 mt-30 grid-rows-2 gap-24">
        <div
          onClick={() => router.push('/unhrc')}
          className="rounded-2xl shadow-2xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
        >
          <img src="/hrcb.png" className="rounded-3xl" />
        </div>
        <div
          onClick={() => router.push('/fifa')}
          className="rounded-2xl shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
        >
          <img src="/fifab.png" className="rounded-3xl" />
        </div>
        <div
          onClick={() => router.push('/ip')}
          className="rounded-2xl shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
        >
          <img src="/ipb.png" className="rounded-3xl" />
        </div>
        <div
          onClick={() => router.push('/fsc')}
          className="rounded-2xl shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
        >
          <img src="/fscb.png" className="rounded-3xl" />
        </div>
        <div
          onClick={() => router.push('/kla')}
          className="rounded-2xl shadow-xl shadow-black transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"
        >
          <img src="/klab.png" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
