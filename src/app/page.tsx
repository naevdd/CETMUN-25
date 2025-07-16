import Landing from "./pages/landing";
import Countdown from "./pages/countdown"
import Committees from "./pages/committee";
import About from "./pages/about";

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
