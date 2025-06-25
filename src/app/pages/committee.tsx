"use client";

import { useRouter } from 'next/navigation';

export default function committee(){
  const router = useRouter();
  return (
    <div id="committee" className="bg-radial from-foreground to-background pb-30">
        <h1 className="text-7xl text-gradient text-center mt-40 font-serif">COMMITTEE LIST</h1>
        <div className="grid grid-cols-3 mx-50 mt-30 grid-rows-2 gap-10">
            <div onClick={() => router.push('/un')} className="w-100 h-100 bg-gradient transform transition duration-200 cursor-pointer ease-in-out hover:scale-110">
                <img src="/LOGO2025.jpg" className="w-20 h-20 rounded-3xl mt-10 mx-auto"></img>
                <p className="text-center text-7xl font-serif text-foreground mt-10">UNHRC</p>
            </div>
            <div onClick={() => router.push('/fifa')} className="w-100 h-100 bg-gradient transform transition duration-200 cursor-pointer ease-in-out hover:scale-110">
                <img src="/LOGO2025.jpg" className="w-20 h-20 rounded-3xl mt-10 mx-auto"></img>
                <p className="text-center text-7xl font-serif text-foreground mt-10">FIFA</p>
            </div>
            <div onClick={() => router.push('/ip')} className="w-100 h-100 bg-gradient transform transition duration-200 cursor-pointer ease-in-out hover:scale-110">
                <img src="/LOGO2025.jpg" className="w-20 h-20 rounded-3xl mt-10 mx-auto"></img>
                <p className="text-center text-7xl font-serif text-foreground mt-10">IP</p>
            </div>
            <div onClick={() => router.push('/fifa')} className="w-100 h-100 bg-gradient transform transition duration-200 cursor-pointer ease-in-out hover:scale-110">
                <img src="/LOGO2025.jpg" className="w-20 h-20 rounded-3xl mt-10 mx-auto"></img>
                <p className="text-center text-7xl font-serif text-foreground mt-10">FSC</p>
            </div>
            <div onClick={() => router.push('/un')} className="w-100 h-100 bg-gradient transform transition duration-200 cursor-pointer ease-in-out hover:scale-110">
                <img src="/LOGO2025.jpg" className="w-20 h-20 rounded-3xl mt-10 mx-auto"></img>
                <p className="text-center text-7xl font-serif text-foreground mt-10">UNHRC</p>
            </div>
        </div>
    </div>
  )
}
