import "../src/app/globals.css";

export default function Kla() {
  return (
    <div id="countdown" className="min-h-screen bg-radial from-foreground to-background">
      <h1 className="text-7xl text-gradient text-center pt-25 font-serif">
        Kerala Legislative <br></br> Assembly
      </h1>
      <img className="mx-auto mt-10" src="../KLA.png" width={250}></img>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        THE AGENDA
      </h1>
      <div className="rounded-3xl w-3/5 h-2/7 mx-auto mt-10">
        <div className="flex flex-row justify-center pt-10 lg:mx-10 mx-10 lg:mb-4 text-xl lg:text-[20px]">
          <div className="text-center text-white font-serif">
            "The Malayali Pantheon- fierce words, fierce debates"
Unlike Olympus, power here is earned, not inherited.
KLA simulates the thunderous drama of Kerala’s political scene, where leaders clash like rival demigods. From student protests to budget battles — this is where the fate of the realm (and syllabus) is debated.
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-gradient text-center pt-14 font-serif">
        EXECUTIVE BOARD
      </h1>
      <div className="grid grid-cols-3 mx-40 mt-30 pb-40 gap-24">
                <img src="/kla1.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/kla2.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
                <img src="/kla3.jpg" className="rounded-3xl transform transition duration-200 cursor-pointer ease-in-out hover:scale-105"></img>
      </div>
    </div>
  );
};
