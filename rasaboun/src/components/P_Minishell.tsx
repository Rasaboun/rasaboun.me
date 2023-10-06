import video from "./videos/minishell1.mp4";
import video3 from "./videos/minishell2.mp4";
import img1 from "./images/minishell-1.png";
import img3 from "./images/minishell-2.png";
export default function P_Minishell(props: any) {
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
        <div className="w-full h-[320px]			flex items-center mt-6 relative bg-stone-900 rounded-t-2xl">
          {props.imgbanner}
        </div>
        <div className="items-center flex flex-col  bg-white rounded-b-2xl animate-openning pb-8 w-full">
          <p className="text-slate-500 mx-8 mt-4 text-lg md:border-b-4 md:pb-6 self-start w-11/12">
            <span className="font-medium text-slate-950 mr-1">
              A simple C shell
            </span>
            that is perfect for users who want a simple, efficient shell write in C.
          </p>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6">
            Compilation and Execution
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              To compile, open a terminal and navigate to the root directory.
              Then, run the make command. Then run ./minishell
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
              <p>To quit type ctrl-q</p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6 md:border-t-4 w-11/12 md:pt-6">
              Features
            </p>

            <ul className="list-disc self-start mx-12 text-slate-500">
              <li>Displays the command history.</li>
              <li>
                Redirections ({">"}, {"<"}, {">>"}, {"<<"})
              </li>
              <li>Pipes (|)</li>
              <li>Builtins (echo, cd, pwd, export, unset, env, exit)</li>
              <li>Environment variable handling</li>
            </ul>
          </div>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6 md:border-t-4 w-11/12 md:pt-6">
            Demo
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              Tour of simple command
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
              <p>You can use ";" to join multiple command</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full bg-slate-100 mt-6">
            <svg
              width="48"
              height="36"
              viewBox="0 0 48 36"
              fill="none"
              version="1.1"
              id="svg136"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-40 rounded-xl mt-4"
            >
              <path
                d="M 0,7 H 16 V 0 H 2 C 0.9,0 0,0.9 0,2 Z"
                fill="#cccccc"
                id="path2"
              />
              <path d="M 32,0 H 16 v 7 h 16 z" fill="#999999" id="path4" />
              <path
                d="M 48,7 H 32 V 0 h 14 c 1.1,0 2,0.9 2,2 z"
                fill="#666666"
                id="path6"
              />
              <path
                d="M 46,36 H 2 C 0.9,36 0,35.1 0,34 V 6 h 48 v 28 c 0,1.1 -0.9,2 -2,2 z"
                fill="url(#paint0_linear)"
                id="path8"
              />
              <g filter="url(#filter0_dd)" id="g23" transform="translate(0,-6)">
                <path
                  d="m 15.2,24.3 -8.80001,8.8 c -0.5,0.5 -0.5,1.2 0,1.6 l 1.8,1.8 C 8.69999,37 9.4,37 9.8,36.5 l 8.8,-8.8 c 0.5,-0.5 0.5,-1.2 0,-1.6 l -1.8,-1.8 c -0.4,-0.4 -1.2,-0.4 -1.6,0 z"
                  fill="url(#paint1_linear)"
                  id="path10"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="6"
                  y="24"
                  width="13"
                  height="13"
                >
                  <path
                    d="m 15.2,24.3 -8.80001,8.8 c -0.5,0.5 -0.5,1.2 0,1.6 l 1.8,1.8 C 8.69999,37 9.4,37 9.8,36.5 l 8.8,-8.8 c 0.5,-0.5 0.5,-1.2 0,-1.6 l -1.8,-1.8 c -0.4,-0.4 -1.2,-0.4 -1.6,0 z"
                    fill="url(#paint2_linear)"
                    id="path12"
                  />
                </mask>
                <g mask="url(#mask0)" id="g19">
                  <g filter="url(#filter1_dd)" id="g17">
                    <path
                      d="m 9.8,17.3 8.8,8.8 c 0.5,0.5 0.5,1.2 0,1.6 l -1.8,1.8 c -0.5,0.5 -1.2,0.5 -1.6,0 L 6.39999,20.7 c -0.5,-0.5 -0.5,-1.2 0,-1.6 l 1.8,-1.8 C 8.59999,16.9 9.4,16.9 9.8,17.3 Z"
                      fill="url(#paint3_linear)"
                      id="path15"
                    />
                  </g>
                </g>
                <path
                  d="m 9.8,17.3 8.8,8.8 c 0.5,0.5 0.5,1.2 0,1.6 l -1.8,1.8 c -0.5,0.5 -1.2,0.5 -1.6,0 L 6.39999,20.7 c -0.5,-0.5 -0.5,-1.2 0,-1.6 l 1.8,-1.8 C 8.59999,16.9 9.4,16.9 9.8,17.3 Z"
                  fill="url(#paint4_linear)"
                  id="path21"
                />
              </g>
              <g filter="url(#filter2_dd)" id="g27" transform="translate(0,-6)">
                <path
                  d="M 40,32 H 24 c -0.6,0 -1,0.4 -1,1 v 3 c 0,0.6 0.4,1 1,1 h 16 c 0.6,0 1,-0.4 1,-1 v -3 c 0,-0.6 -0.4,-1 -1,-1 z"
                  fill="url(#paint5_linear)"
                  id="path25"
                />
              </g>
              <defs id="defs134">
                <filter
                  id="filter0_dd"
                  x="3.0249901"
                  y="15"
                  width="18.950001"
                  height="25.875"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                    id="feFlood29"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    id="feColorMatrix31"
                  />
                  <feOffset dy="0.5" id="feOffset33" />
                  <feGaussianBlur stdDeviation="0.5" id="feGaussianBlur35" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    id="feColorMatrix37"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                    id="feBlend39"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    id="feColorMatrix41"
                  />
                  <feOffset dy="1" id="feOffset43" />
                  <feGaussianBlur stdDeviation="1.5" id="feGaussianBlur45" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    id="feColorMatrix47"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow"
                    result="effect2_dropShadow"
                    id="feBlend49"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow"
                    result="shape"
                    id="feBlend51"
                  />
                </filter>
                <filter
                  id="filter1_dd"
                  x="3.0249901"
                  y="15"
                  width="18.950001"
                  height="18.875"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                    id="feFlood54"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    id="feColorMatrix56"
                  />
                  <feOffset dy="0.5" id="feOffset58" />
                  <feGaussianBlur stdDeviation="0.5" id="feGaussianBlur60" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    id="feColorMatrix62"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                    id="feBlend64"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    id="feColorMatrix66"
                  />
                  <feOffset dy="1" id="feOffset68" />
                  <feGaussianBlur stdDeviation="1.5" id="feGaussianBlur70" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    id="feColorMatrix72"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow"
                    result="effect2_dropShadow"
                    id="feBlend74"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow"
                    result="shape"
                    id="feBlend76"
                  />
                </filter>
                <filter
                  id="filter2_dd"
                  x="20"
                  y="30"
                  width="24"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                    id="feFlood79"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    id="feColorMatrix81"
                  />
                  <feOffset dy="0.5" id="feOffset83" />
                  <feGaussianBlur stdDeviation="0.5" id="feGaussianBlur85" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    id="feColorMatrix87"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                    id="feBlend89"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    id="feColorMatrix91"
                  />
                  <feOffset dy="1" id="feOffset93" />
                  <feGaussianBlur stdDeviation="1.5" id="feGaussianBlur95" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    id="feColorMatrix97"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow"
                    result="effect2_dropShadow"
                    id="feBlend99"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow"
                    result="shape"
                    id="feBlend101"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="36.446201"
                  y1="47.825699"
                  x2="11.8217"
                  y2="5.1747999"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0,-6)"
                >
                  <stop stopColor="#333333" id="stop104" />
                  <stop offset="1" stopColor="#4D4D4D" id="stop106" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="14.5276"
                  y1="33.995899"
                  x2="10.4841"
                  y2="26.992399"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#999999" id="stop109" />
                  <stop offset="1" stopColor="#B3B3B3" id="stop111" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="14.5276"
                  y1="33.995899"
                  x2="10.4841"
                  y2="26.992399"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#999999" id="stop114" />
                  <stop offset="1" stopColor="#B3B3B3" id="stop116" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="16.2747"
                  y1="30.0336"
                  x2="8.73699"
                  y2="16.9781"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CCCCCC" id="stop119" />
                  <stop offset="1" stopColor="#E6E6E6" id="stop121" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="16.2747"
                  y1="30.0336"
                  x2="8.73699"
                  y2="16.9781"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CCCCCC" id="stop124" />
                  <stop offset="1" stopColor="#E6E6E6" id="stop126" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear"
                  x1="35.149601"
                  y1="39.955299"
                  x2="28.850401"
                  y2="29.044701"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CCCCCC" id="stop129" />
                  <stop offset="1" stopColor="#E6E6E6" id="stop131" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-slate-900 text-lg font-medium tracking-wide mt-1">
              Minishell
            </p>
            <p className="text-slate-700 text-sm font-light tracking-tight	">
              Simple bash clone
            </p>
            <a
              href="https://github.com/Rasaboun/minishell"
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
