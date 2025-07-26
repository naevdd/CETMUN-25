"use client";

import {Link} from "react-scroll";
import { useEffect, useState } from 'react';
import Navbar from "../navbar";
import LoadingScreen from './loadingscreen';


export default function Landing() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
    <div className="min-h-screen font-seasons_r bg-radial from-foreground to-background">
      <img src="../../bg.png" width={900} className="absolute sm:mt-10 mt-40 left-0 right-0 mx-auto"></img>
      <h1 className="text-center sm:pt-80 sm:text-8xl text-5xl pt-64 font-seasons_b font-semibold text-gradient">CET MUN 25</h1>
      <p className="text-center mt-10 text-2xl text-white">August 1,2,3</p>
      <a href="/ITINERARY.pdf" target="blank"><button className="w-40 h-12 mt-10 text-xl block mx-auto bg-gradient drop-shadow-2xl drop-shadow-black border-2 border-black">
        ITINERARY
      </button></a>
    </div>
    </>
  );
}