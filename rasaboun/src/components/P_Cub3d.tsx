import video from "./videos/cub3d1.mp4";
import video2 from "./videos/cub3d2.mp4";
import video3 from "./videos/cub3d3.mp4";
import img1 from "./images/cub3d-1.png";
import img2 from "./images/cub3d-2.png";
import img3 from "./images/cub3d-3.png";
export default function P_Cub3d(props: any) {
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
        <div className="w-full h-[320px]			flex items-start mt-6 relative bg-sky-950 rounded-t-2xl">
          {props.imgbanner}
        </div>
        <div className="items-center flex flex-col  bg-white rounded-b-2xl animate-openning pb-8 w-full">
          <p className="text-slate-500 mx-8 mt-4 text-lg md:border-b-4 md:pb-6 ">
            <span className="font-medium text-slate-950 mr-1">
              Are you ready to explore a unique 3D labyrinth?
            </span>
            cub3d is a 3D raycasting game that lets you create your own
            labyrinth and explore.
          </p>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6">
            Configuration File
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              The configuration file is a text file that allows players to
              modify game settings. It is located in the game's folder and can
              be opened with a text editor.
            </p>
            <video
              controls
              preload="metadata"
              className="w-10/12	md:w-4/6 shadow-md shadow-slate-900 mt-6 animate-openning rounded-t-xl"
              controlsList="nodownload"
              poster={img1.src}
            >
              <source src={video + "#t=0.1"} type="video/mp4"></source>
            </video>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-b-xl mb-4">
              <p>
                You don't need to recompile the project every time you change
                the configuration file
              </p>
            </div>
          </div>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6 md:border-t-4 w-11/12 md:pt-6">
            Compilation and Execution
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              To compile the game, open a terminal and navigate to the game's
              directory. Then, run the make command. Then run ./Cub3d [directory
              of the .cub file]
            </p>
            <video
              preload="metadata"
              controls
              className="w-10/12	md:w-4/6 shadow-md shadow-slate-900 mt-6 animate-openning rounded-t-xl"
              controlsList="nodownload"
              poster={img2.src}
            >
              <source src={video2 + "#t=0.1"} type="video/mp4"></source>
            </video>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-b-xl">
              <p>That's all I have to say ahah</p>
            </div>
          </div>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6 md:border-t-4 w-11/12 md:pt-6">
            Demo
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              Simple tour of the labyrinth with spaceship textures and diamond
              sprite
            </p>
            <video
              preload="metadata"
              controls
              className="w-10/12	md:w-4/6 shadow-md shadow-slate-900 mt-6 animate-openning rounded-t-xl"
              controlsList="nodownload"
              poster={img3.src}
            >
              <source src={video3 + "#t=0.1"} type="video/mp4"></source>
            </video>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-b-xl">
              <p>This is the map.cub file in map directory</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full bg-slate-100 mt-6">
            <svg
              width="508"
              height="80"
              viewBox="0 0 508 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-40 bg-sky-950 rounded-xl px-2 py-1 mt-4"
            >
              <rect
                width="10"
                height="10"
                transform="translate(368)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(348)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(348 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408 10)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(348 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(348 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(348 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(408 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(358 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(398 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(388 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(368 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(378 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(458)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(458 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(488 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(458 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(488 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(488 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(488 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(458 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(488 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(458 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(488 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(438 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(428 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(448 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(458 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(468 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(478 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 40)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(300 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(250 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(240 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(260 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(270 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(280 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(290 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 30)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190 50)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(160 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(170 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(180 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(190 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(200 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(210 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(220 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(110 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(110 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(80 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(110 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(140 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(120 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(90 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(130 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(100 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(110 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(0 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(30 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(60 10)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(0 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(30 20)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(60 20)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(0 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 30)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 30)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 30)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(60 30)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(0 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(60 40)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(0 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(30 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(60 50)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(0 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(30 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 60)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(60 60)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(10 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(20 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(30 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(40 70)"
                fill="#8A8A8A"
              ></rect>
              <rect
                width="10"
                height="10"
                transform="translate(50 70)"
                fill="#8A8A8A"
              ></rect>
            </svg>

            <p className="text-slate-900 text-lg font-medium tracking-wide mt-1">
              Cub3d
            </p>
            <p className="text-slate-700 text-sm font-light tracking-tight	">
              3D raycasting labyrinth
            </p>
            <a
              href="https://github.com/Rasaboun/cub3d"
              className="text-slate-50 bg-blue-600 rounded-xl p-1 px-2 mt-1 mb-4"
            >
              Show
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
