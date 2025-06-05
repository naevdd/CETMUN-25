import Landing from "./pages/landing";
import Countdown from "./pages/countdown"
import Committees from "./pages/committee";

export default function Page() {
  return (
    <div className="flex flex-col">
    <Landing></Landing>
    <Countdown></Countdown>
    <Committees></Committees>
    </div>
  );
}
