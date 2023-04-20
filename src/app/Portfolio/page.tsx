import Image from "next/image";
import weatherpng from "../../../public/Weathear_DashBoard.png";
export default function Home() {
  return (
    <main className="flex flex-col space-y-20 items-center h-screen">
      <div className="py-2 px-6 bg-slate-100 rounded-xl my-5 mx-10 h-fit w-fit">
        <h1 className="  text-slate-800 text-3xl font-medium bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-400 via-neutral-400 to-slate-600 text-transparent bg-clip-text drop-shadow-2xl">
          Here is my portfolio !
        </h1>
      </div>
      <div className="h-80 w-80 flex flex-col space-y-2">
        <a href="https://weatherdashboard.rasaboun.me/">
        <Image
          src={weatherpng}
          alt="WeatherDashBoard"
          className="rounded-xl shadow-2xl hover:shadow-2xl hover:shadow-slate-50/50"
        />
        </a>
        <span className="text-left font-semibold text-slate-50 text-2xl">WeatherDashBoard</span>
        <span className="text-left text-slate-400 font-light text-lg">Temperature, Air Quality, 7 Days forecast ...</span>
      </div>
    </main>
  );
}
