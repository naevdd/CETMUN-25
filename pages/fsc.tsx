import "../src/app/globals.css";

export default function Fsc() {
  return (
    <div id="countdown" className="min-h-screen bg-radial from-foreground to-background">
      <h1 className="text-7xl text-gradient text-center pt-25 font-serif">
        Futuristic <br></br> Security Council
      </h1>
      <img className="mx-auto mt-10" src="../FSC.png" width={250}></img>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        THE AGENDA
      </h1>
      <div className="rounded-3xl w-3/5 h-2/7 mx-auto mt-10">
        <div className="flex flex-row justify-center pt-10 lg:mx-10 mx-10 lg:mb-4 text-xl lg:text-[20px]">
          <div className="text-center text-white font-serif">
            "The Oracle's alcove- where prophecy meets policy"
When the past has fallen and Olympus is no more, a new council rises to tame the chaos of tomorrow.
In FSC, delegates are like Prometheus — stealing foresight from the future to solve crises before they consume the world. Set in a world yet to come, the FSC tackles tomorrow’s conflicts today. From AI-driven warfare to interplanetary disputes, this council demands sharp foresight, bold strategy, and out-of-the-box diplomacy. The future is uncertain—your leadership will define it.
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        EXECUTIVE BOARD
      </h1>
      <div className="grid grid-cols-3 mx-40 mt-30 pb-40 gap-24">
                <img src="/fsc1.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/fsc2.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/fsc3.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
      </div>
    </div>
  );
};

