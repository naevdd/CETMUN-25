'use client';

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function Countdown() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<HTMLDivElement>(null); // NEW

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

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

  const animationRanRef = useRef(false);

  useEffect(() => {
    if (!timeLeft || animationRanRef.current) return;

    animationRanRef.current = true;

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
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

    if (timerRef.current) {
      gsap.fromTo(
        timerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timerRef.current,
            start: 'top 80%',
            toggleActions: 'play',
          },
        }
      );
    }

    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [timeLeft]);

  if (!timeLeft) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Preparing countdown...
      </div>
    );
  }

  return (
    <div id="countdown" className="h-screen font-seasons_b bg-radial from-foreground to-background">
      <h1
        ref={headingRef}
        className="sm:text-6xl px-4 text-4xl text-gradient text-center mt-40"
      >
        CONFERENCE STARTS IN :
      </h1>

      <div
        ref={timerRef}
        className="bg-gradient rounded-3xl sm:w-3/5 w-4/5 sm:h-2/7 mx-auto mt-24 sm:mt-40"
      >
        <div className="flex text-foreground font-serif justify-center p-10 lg:space-x-9 space-x-2 lg:mb-4 text-4xl lg:text-[130px]">
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
