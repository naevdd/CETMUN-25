import Landing from "./about/landing";
import Countdown from "./about/countdown"
import Committees from "./about/committee";
import About from "./about/about";

export default function Page() {
  return (
    <div className="flex flex-col">
    <Landing></Landing>
    <About></About>
    <Countdown></Countdown>
    <Committees></Committees>
    </div>
  );
}
