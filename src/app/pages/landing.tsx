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
    <div className="h-screen bg-radial from-foreground to-background">
      <Navbar></Navbar>
      <h1 className="text-center pt-80 text-8xl font-serif font-semibold text-gradient">CET MUN 25</h1>
      <p className="text-center mt-10 text-2xl text-white font-serif">August 1,2,3</p>
      <button className="w-40 h-12 mt-10 text-xl block mx-auto bg-gradient drop-shadow-2xl drop-shadow-black border-2 border-black font-serif">
        REGISTER
      </button>
    </div>
    </>
  );
}