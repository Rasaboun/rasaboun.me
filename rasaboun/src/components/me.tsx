import ImgBanner from "./ImgBanner.astro";
import video from "./videos/rasabounconnect.mp4";
import video2 from "./videos/rasabounconnect2.mp4";
import video3 from "./videos/rasabounconnect3.mp4";
import github from "./images/GitHub_Logo.png";
import linkedin from "./images/LI-Logo.png";

import img2 from "./images/sncf-2.png";
import img3 from "./images/sncf-3.png";
export default function Me(props: any) {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-slate-100 relative ">
      <a href="/" className="absolute inset-0 w-screen h-full z-40"></a>

      <div className="w-full md:w-3/5  z-50 relative  flex flex-col  items-center md:mb-6 rounded-2xl  shadow-2xl">
        <a
          href="/"
          className="absolute top-12 right-8 md:top-14 text-black font-semibold md:right-10 bg-slate-50 rounded-full cursor-pointer px-3 py-1 md:px-4 md:py-2 backdrop-blur-lg	opacity-90 z-50 active:scale-90 transition ease-in-out duration-200 hover:scale-110"
        >
          X
        </a>
        <div className="w-full h-[280px]			flex  mt-6 relative bg-indigo-600 rounded-t-2xl">
          {props.imgbanner}
        </div>
        <div className="items-center flex flex-col  bg-white rounded-b-2xl animate-openning pb-8 w-full">
          <p className="text-slate-500 mx-8 mt-4 text-lg md:border-b-4 md:pb-6 ">
            <span className="font-medium text-slate-950 mr-1">
              I learned coding at 42School Paris,
            </span>
            I started with C project like{" "}
            <a
              className="text-slate-800 after:content-['_↗'] ..."
              href="https://github.com/Rasaboun/Minishell"
            >
              minishell (minimalist shell)
            </a>{" "}
            or{" "}
            <a
              className="text-slate-800 after:content-['_↗'] ..."
              href="https://github.com/Rasaboun/cub3d"
            >
              cub3d (3D Labyrinth game)
            </a>
            {"     "}
            then I learned C++ and build my first IRC server and{" "}
            <span className="font-medium text-slate-950 mr-1">
              {" "}
              now I build website using React.
            </span>
          </p>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6">
            Skills
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              Significant experience in React and TypeScript, with a strong
              foundation in C.
            </p>
            <p className="text-slate-500 self-start mx-8 text-lg">
              I have been speaking French since I was a child, and I have been
              studying English for many years.
            </p>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-xl mb-4 mt-6">
              <p className="text-slate-500">
                <a
                  className="text-slate-600 font-semibold after:content-['_↗'] ..."
                  href="https://github.com/Rasaboun"
                >
                  My Github profile
                </a>{" "}
                &{" "}
                <a
                  className="text-slate-600 font-semibold after:content-['_↗'] ..."
                  href="https://www.linkedin.com"

                >
                  my Linkedin profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
