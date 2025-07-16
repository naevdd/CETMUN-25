'use client';

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Countdown state type
type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function Countdown() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // Format numbers to 2-digit strings
  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  // Calculate time left
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(`August 1, ${new Date().getFullYear()} 00:00:00`);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!headingRef.current) return;

    const text = 'CONFERENCE STARTS IN :';
    const letters = text.split('');

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
  }, [timeLeft]);

  if (!timeLeft) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center text-2xl">
        Preparing countdown...
      </div>
    );
  }

  return (
    <div id="countdown" className="h-screen bg-radial from-foreground to-background">
      <h1
        ref={headingRef}
        className="text-6xl text-gradient text-center mt-40 font-serif"
      />
      <div className="bg-gradient rounded-3xl w-3/5 h-2/7 mx-auto mt-40">
        <div className="flex font-serif flex-row justify-center pt-10 lg:space-x-9 space-x-2 lg:mb-4 text-4xl lg:text-[130px]">
          <div className="text-center w-[130px]">
            <span>{timeLeft.days}</span>
          </div>
          <span>:</span>
          <div className="text-center w-[130px]">
            <span>{timeLeft.hours}</span>
          </div>
          <span>:</span>
          <div className="text-center w-[130px]">
            <span>{timeLeft.minutes}</span>
          </div>
          <span>:</span>
          <div className="text-center w-[130px]">
            <span>{timeLeft.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
