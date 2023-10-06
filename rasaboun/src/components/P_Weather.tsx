import video from "./videos/weather1.mp4";
import img1 from "./images/weather-1.png";
export default function P_Weather(props: any) {
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
        <div className="w-full h-[320px]			flex items-center justify-center mt-6 relative bg-sky-900 rounded-t-2xl">
          {props.imgbanner}
        </div>
        <div className="items-center flex flex-col  bg-white rounded-b-2xl animate-openning pb-8 w-full">
          <p className="text-slate-500 mx-8 mt-4 text-lg md:border-b-4 md:pb-6 self-start w-11/12">
            <span className="font-medium text-slate-950 mr-1">
              A comprehensive and easy-to-use weather dashboard
            </span>
            that keeps you up-to-date on current weather conditions and
            forecasts.
          </p>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6">
            Demo
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              Just type your city on search bar
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
              <p>If you type wrong city searchbar will be red</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full bg-slate-100 mt-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-44 rounded-xl mt-4"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 2V5H17V2H15ZM20.6124 21.2657C22.0759 19.9827 23 18.0992 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 16.1418 9.00422 16.2826 9.01253 16.4223C8.32778 16.663 7.68849 17.0002 7.11101 17.4176C7.03795 16.9558 7 16.4824 7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16C25 18.4685 24.0062 20.7049 22.3968 22.3309C21.8886 21.8603 21.2825 21.4938 20.6124 21.2657ZM27 15H30V17H27V15ZM27.6243 8.13397L25.0263 9.63397L26.0263 11.366L28.6243 9.86603L27.6243 8.13397ZM20.634 5.97381L22.134 3.37573L23.8661 4.37573L22.3661 6.97381L20.634 5.97381ZM8.13397 4.37573L9.63397 6.97381L11.366 5.97381L9.86603 3.37573L8.13397 4.37573ZM5.97375 11.366L3.37567 9.86603L4.37567 8.13397L6.97375 9.63397L5.97375 11.366ZM5 15H2V17H5V15ZM27.6244 23.866L25.0263 22.366L26.0263 20.634L28.6244 22.134L27.6244 23.866Z"
                fill="url(#paint0_linear_9_1432)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5 27.9998C11.5278 27.9998 11.5556 27.9996 11.5833 27.9992H18.9332C18.946 27.9994 18.9588 27.9996 18.9716 27.9998H19V27.9999C19 27.9999 19 27.9999 19 27.9999C20.6569 27.9999 22 26.6567 22 24.9999C22 23.343 20.6569 21.9999 19 21.9999C18.2306 21.9999 17.5289 22.2895 16.9979 22.7657C17.0021 22.6776 17.0042 22.5891 17.0042 22.5C17.0042 21.8247 16.8825 21.1779 16.6598 20.5802C17.358 20.2097 18.1545 19.9999 19 19.9999C21.7614 19.9999 24 22.2385 24 24.9999C24 27.7613 21.7614 29.9999 19 29.9999C18.9878 29.9999 18.9756 29.9998 18.9634 29.9998L11.5388 29.9998V29.9997C11.5258 29.9997 11.5129 29.9998 11.5 29.9998C7.35787 29.9998 4 26.6419 4 22.4998C4 18.3576 7.35787 14.9998 11.5 14.9998C14.7721 14.9998 17.5548 17.0951 18.5794 20.0173C17.889 20.0748 17.2385 20.2725 16.6564 20.5819C15.878 18.49 13.8631 16.9998 11.5 16.9998C8.46244 16.9998 6 19.4622 6 22.4998C6 25.5373 8.46244 27.9998 11.5 27.9998Z"
                fill="url(#paint1_linear_9_1432)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_1432"
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="23.866"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EFC977" />
                  <stop offset="1" stop-color="#E07256" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_1432"
                  x1="14"
                  y1="14.9998"
                  x2="14"
                  y2="29.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2D4F7" />
                  <stop offset="1" stop-color="#D9E2F3" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-slate-900 text-lg font-medium tracking-wide mt-1">
              WeatherDashboard
            </p>
            <p className="text-slate-700 text-sm font-light tracking-tight	">
              Current weather conditions and forecasts
            </p>
            <a
              href="https://weatherdashboard.rasaboun.me/"
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
