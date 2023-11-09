import img from "./images/github-mark.png"
export default function Header() {
  let now = new Date().toUTCString().slice(0, 16);
  return (
    <div className="flex flex-row justify-between mx-4 md:mx-16 mt-6 items-end border-b-[1px] pb-2 border-slate-300    ">
      <div className="flex flex-col w-fit space-y-2">
        <p className="text-slate-500 uppercase text-sm">{now}</p>
        <p className="text-slate-900 font-semibold text-3xl md:text-4xl">
          Welcome to my Portfolio
        </p>
      </div>
  
        <a href="https://github.com/Rasaboun">
        <img src={img.src} alt="github logo" className="w-8 h-8 hover:scale-105 transition-transform duration-150 ease-in-out "/>
        </a>
    </div>
  );
}
