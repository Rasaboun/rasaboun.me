import img from "./images/github-mark.png";
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
      <div className="flex flex-row items-center space-x-2">
        <a href="https://github.com/Rasaboun">
          <img
            src={img.src}
            alt="github logo"
            className="w-8 h-8 hover:scale-105 transition-transform duration-150 ease-in-out "
          />
        </a>
        <a href="https://twitter.com/rasaboun">
        <svg
          width="1200"
          height="1227"
          viewBox="0 0 1200 1227"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 hover:scale-105 transition-transform duration-150 ease-in-out fill-black"

        >
          <path
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}
