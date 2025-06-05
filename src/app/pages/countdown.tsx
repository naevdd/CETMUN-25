"use client";
import React from "react";
import { useState, useEffect } from "react";

const countdown = () => {

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);
    
        const calculateTimeLeft = () => {
            const targetDate = new Date("June 21, " + new Date().getFullYear() + " 00:00:00");
            const now = new Date();
            const difference = targetDate - now;
        
            let timeLeft = {};
            if (difference > 0) {
              timeLeft = {
                days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
                hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: formatNumber(Math.floor((difference / 1000) % 60)),
              };
            }
            return timeLeft;
          };
    
          
        
          const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        
          useEffect(() => {
            const timer = setInterval(() => {
              setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearInterval(timer);
          }, []);

    return (
    <div className="h-screen bg-radial from-foreground to-background">
        <h1 className="text-6xl text-gradient text-center mt-40 font-serif">CONFERENCE STARTS IN :</h1>
        <div className="bg-gradient rounded-3xl w-3/5 h-2/7 mx-auto mt-40">
            <p className="text-foreground text-6xl font-serif"></p>
            <div className="flex flex-row justify-center pt-10 lg:space-x-9 space-x-2 lg:mb-4 text-4xl lg:text-[130px] font-sans">
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
  )
}

export default countdown;
