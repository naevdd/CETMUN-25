import "../src/app/globals.css";

export default function Ip() {
  return (
    <div id="countdown" className="min-h-screen bg-radial from-foreground to-background">
      <h1 className="text-7xl text-gradient text-center pt-25 font-serif">
        International Press
      </h1>
      <img className="mx-auto mt-10" src="../IP.png" width={250}></img>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        THE AGENDA
      </h1>
      <div className="rounded-3xl w-3/5 h-2/7 mx-auto mt-10">
        <div className="flex flex-row justify-center pt-10 lg:mx-10 mx-10 lg:mb-4 text-xl lg:text-[20px]">
          <div className="text-center text-white font-serif">
            "The Scribes of Olympus- ink, insight and influence"
Whether you report like Hermes, snap moments like Apollo, or sketch chaos like Hephaestus with a pen, IP crafts the mythology of the MUN in real-time. Truth, bias, drama — all in your hands. 
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        EXECUTIVE BOARD
      </h1>
      <div className="grid grid-cols-2 mx-80 mt-30 pb-40 gap-60">
                <img src="/ip1.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/ip2.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
      </div>
    </div>
  );
};

