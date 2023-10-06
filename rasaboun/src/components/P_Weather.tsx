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
              width="392"
              height="284"
              viewBox="0 0 392 284"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-44 rounded-xl mt-4"
            >
              <g filter="url(#filter0_d_102_2)">
                <path
                  d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                  fill="url(#paint0_linear_102_2)"
                />
                <path
                  d="M242.941 233C250.227 233 257.508 232.302 264.581 230.926C271.475 229.585 278.255 227.584 284.733 224.978C291.094 222.42 297.229 219.254 302.967 215.568C308.65 211.917 313.994 207.725 318.851 203.107C323.706 198.49 328.114 193.411 331.952 188.009C335.826 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.681 158.093 348.09 151.547C349.535 144.831 350.268 137.917 350.268 131C350.268 124.082 349.535 117.169 348.09 110.452C346.681 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.826 79.4433 331.952 73.991C328.114 68.5893 323.706 63.5095 318.851 58.8928C313.994 54.2752 308.65 50.0829 302.967 46.4323C297.229 42.7461 291.094 39.5801 284.733 37.0221C278.255 34.4165 271.475 32.4154 264.581 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.254 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1807C82.6072 91.1747 73.3205 93.0495 64.5787 96.747C60.3771 98.5242 56.3245 100.724 52.5336 103.285C48.7784 105.822 45.2472 108.735 42.038 111.945C38.8288 115.154 35.9152 118.685 33.3783 122.44C30.8172 126.231 28.6175 130.284 26.8404 134.485C23.1429 143.227 21.2681 152.514 21.2681 162.087C21.2681 171.661 23.1429 180.948 26.8404 189.689C28.6175 193.891 30.8172 197.944 33.3783 201.735C35.9152 205.49 38.8288 209.021 42.038 212.23C45.2472 215.439 48.7784 218.353 52.5336 220.89C56.3245 223.451 60.3771 225.651 64.5787 227.428C73.3205 231.125 82.6072 233 92.1807 233H229.705C231.628 233 233.572 232.922 235.482 232.768L235.554 232.762L235.626 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.461 234 238 233.921 235.562 233.765C233.632 233.92 231.676 234 229.705 234H92.1807C52.4646 234 20.2681 201.803 20.2681 162.087C20.2681 122.371 52.4646 90.1747 92.1807 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.768 28 351.268 74.1151 351.268 131C351.268 187.885 302.768 234 242.941 234Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </g>
              <g filter="url(#filter1_f_102_2)">
                <path
                  d="M245.506 172.393C264.234 172.393 279.415 159.763 279.415 144.183C279.415 128.603 264.234 115.973 245.506 115.973C226.778 115.973 211.597 128.603 211.597 144.183C211.597 159.763 226.778 172.393 245.506 172.393Z"
                  fill="#FA9E42"
                />
                <path
                  d="M245.506 178.27C268.135 178.27 286.48 163.009 286.48 144.183C286.48 125.357 268.135 110.096 245.506 110.096C222.877 110.096 204.532 125.357 204.532 144.183C204.532 163.009 222.877 178.27 245.506 178.27Z"
                  stroke="#FA9E42"
                  stroke-width="10"
                  stroke-linecap="round"
                  stroke-dasharray="1 66"
                />
                <g filter="url(#filter2_f_102_2)">
                  <path
                    d="M241.707 138.412C253.726 133.102 260.525 124.184 256.893 118.495C253.261 112.806 240.573 112.5 228.553 117.81C216.534 123.121 209.735 132.039 213.367 137.728C216.999 143.417 229.688 143.723 241.707 138.412Z"
                    fill="#F8E36F"
                  />
                </g>
              </g>
              <g filter="url(#filter3_df_102_2)">
                <g filter="url(#)">
                  <path
                    d="M258.048 186.53V106.57C258.048 101.115 260.653 95.8828 265.29 92.0252C269.927 88.1676 276.216 86.0005 282.773 86.0005C289.331 86.0005 295.62 88.1676 300.257 92.0252C304.894 95.8828 307.499 101.115 307.499 106.57V188.243C313.911 192.427 318.738 198.059 321.402 204.466C324.066 210.873 324.454 217.782 322.519 224.368C320.585 230.953 316.41 236.935 310.494 241.598C304.579 246.26 297.173 249.406 289.165 250.657C286.258 251.299 283.236 251.498 280.244 251.245C271.221 251.05 262.509 248.463 255.376 243.863C248.243 239.262 243.061 232.888 240.584 225.668C238.108 218.447 238.466 210.758 241.607 203.719C244.748 196.679 250.508 190.658 258.048 186.531V186.53Z"
                    fill="url(#paint1_linear_102_2)"
                  />
                  <path
                    d="M239.663 215.993C239.663 220.601 240.732 225.077 242.84 229.295C244.876 233.369 247.795 237.043 251.518 240.215C253.351 241.777 255.371 243.202 257.52 244.45C259.689 245.709 262.01 246.799 264.418 247.69C269.421 249.542 274.752 250.54 280.262 250.657L280.289 250.657L280.316 250.659C281.126 250.728 281.953 250.763 282.774 250.763C284.879 250.763 286.968 250.536 288.983 250.089L289.009 250.083L289.035 250.079C293.796 249.34 298.329 247.925 302.506 245.873C306.597 243.863 310.223 241.306 313.284 238.272C316.368 235.216 318.773 231.778 320.434 228.054C322.153 224.2 323.024 220.142 323.024 215.993C323.024 213.275 322.645 210.569 321.897 207.949C321.17 205.403 320.09 202.923 318.688 200.577C317.311 198.273 315.618 196.09 313.657 194.09C311.707 192.102 309.488 190.29 307.063 188.705L306.793 188.529V188.243V106.57C306.793 103.872 306.158 101.255 304.905 98.7919C303.696 96.4126 301.964 94.2755 299.758 92.4402C297.552 90.605 294.983 89.1641 292.123 88.1577C289.162 87.1159 286.017 86.5877 282.774 86.5877C279.531 86.5877 276.385 87.1159 273.424 88.1577C270.564 89.1641 267.996 90.605 265.789 92.4402C263.583 94.2755 261.851 96.4126 260.642 98.7919C259.389 101.255 258.754 103.872 258.754 106.57V186.529V186.846L258.437 187.02C252.783 190.12 248.07 194.363 244.808 199.291C243.15 201.796 241.871 204.466 241.006 207.228C240.115 210.075 239.663 213.024 239.663 215.993ZM238.957 215.993C238.957 203.677 246.546 192.836 258.048 186.529V106.57C258.048 95.2093 269.118 86 282.774 86C296.429 86 307.499 95.2093 307.499 106.57V188.243C317.381 194.699 323.73 204.73 323.73 215.993C323.73 233.245 308.838 247.604 289.165 250.657C287.126 251.109 284.984 251.35 282.774 251.35C281.919 251.35 281.076 251.314 280.244 251.244C257.342 250.76 238.957 235.163 238.957 215.993Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <path
                  d="M281.626 190.365C287.843 190.275 293.952 191.72 299.181 194.518C304.411 197.316 308.525 201.342 311.004 206.085C313.484 210.829 314.216 216.077 313.11 221.167C312.004 226.257 309.108 230.96 304.789 234.681C300.469 238.402 294.921 240.974 288.845 242.071C282.769 243.169 276.438 242.742 270.653 240.847C264.868 238.951 259.889 235.671 256.345 231.421C252.801 227.171 250.851 222.142 250.743 216.97C250.597 210.035 253.769 203.336 259.561 198.346C265.353 193.357 273.29 190.486 281.626 190.365V190.365Z"
                  fill="white"
                />
                <path
                  d="M297.06 151.091H267.39V193.993H297.06V151.091Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_102_2"
                  x="0"
                  y="0"
                  width="391.268"
                  height="266"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="10" dy="2" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_102_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_102_2"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_f_102_2"
                  x="197.532"
                  y="103.096"
                  width="95.9473"
                  height="82.1738"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    result="effect1_foregroundBlur_102_2"
                  />
                </filter>
                <filter
                  id="filter2_f_102_2"
                  x="192.389"
                  y="94.0195"
                  width="85.4814"
                  height="68.1841"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="10"
                    result="effect1_foregroundBlur_102_2"
                  />
                </filter>
                <filter
                  id="filter3_df_102_2"
                  x="218.957"
                  y="58"
                  width="144.774"
                  height="225.352"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="10" dy="2" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_102_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_102_2"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    result="effect2_foregroundBlur_102_2"
                  />
                </filter>
                <filter
                  id="filter4_d_102_2"
                  x="218.957"
                  y="58"
                  width="144.774"
                  height="225.352"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="10" dy="2" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.302 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_102_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_102_2"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_102_2"
                  x1="154.164"
                  y1="53.9561"
                  x2="220.206"
                  y2="245.168"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.596" />
                  <stop offset="1" stop-color="#F7F7F7" stop-opacity="0.204" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_102_2"
                  x1="313.05"
                  y1="152.968"
                  x2="231.581"
                  y2="176.166"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.596" />
                  <stop offset="1" stop-color="#F7F7F7" stop-opacity="0.204" />
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
              href="https://github.com/Rasaboun/WeatherDashboard"
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
