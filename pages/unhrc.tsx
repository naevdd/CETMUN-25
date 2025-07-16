import "../src/app/globals.css";

export default function Un() {
  return (
    <div id="countdown" className="min-h-screen bg-radial from-foreground to-background">
      <h1 className="text-7xl text-gradient text-center pt-25 font-serif">
        United Nations <br></br> Human Rights Council
      </h1>
      <img className="mx-auto mt-10" src="../HRC.png" width={250}></img>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        THE AGENDA
      </h1>
      <div className="rounded-3xl w-3/5 h-2/7 mx-auto mt-10">
        <div className="flex flex-row justify-center pt-10 lg:mx-10 mx-10 lg:mb-4 text-xl lg:text-[20px]">
          <div className="text-center text-white font-serif">
            "Where Themis drops the blindfold and justice demands voice"
Apollo sang of truth, and Themis held the scales — this is their court.
Step into the shoes of global human rights watchdogs. Whether it's refugee crises, state surveillance, or minority rights, the UNHRC demands empathy, advocacy, and action. Words here aren’t just debate—they're a stand for humanity.
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        EXECUTIVE BOARD
      </h1>
      <div className="grid grid-cols-3 mx-40 mt-30 pb-40 gap-24">
                <img src="/hrc1.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/hrc2.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/hrc3.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
      </div>
    </div>
  );
};
