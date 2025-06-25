"use client";
import React, { useEffect, useState } from "react";

// 1. Define the type for the countdown state
type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const Countdown = () => {
  // 2. Utility to format numbers as 2-digit strings
  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  // 3. Function to calculate time remaining
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(`August 1, ${new Date().getFullYear()} 00:00:00`);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  // 4. State: initially null to avoid hydration mismatch
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // 5. Set up timer only on client side
  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // set immediately on mount

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // clean up
  }, []);

  // 6. Wait for client mount to avoid hydration issues
  if (!timeLeft) return null;

  // 7. Render the countdown
  return (
    <div id="countdown" className="h-screen bg-radial from-foreground to-background">
      <h1 className="text-6xl text-gradient text-center mt-40 font-serif">
        CONFERENCE STARTS IN :
      </h1>
      <div className="bg-gradient rounded-3xl w-3/5 h-2/7 mx-auto mt-40">
        <div className="flex flex-row justify-center pt-10 lg:space-x-9 space-x-2 lg:mb-4 text-4xl lg:text-[130px]">
          <div className="text-center">
            <span>{timeLeft.days}</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span>{timeLeft.hours}</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span>{timeLeft.minutes}</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span>{timeLeft.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
