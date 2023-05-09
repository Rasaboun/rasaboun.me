import Image from "next/image";
export default function Main() {
  return (
    <main className="flex flex-col items-center  ">
      <div className="py-2 px-6 bg-slate-200 rounded-xl my-10 mx-10 shadow-2xl shadow-slate-300/30">
        <div className="  text-slate-800 text-3xl font-medium bg-gradient-to-bl from-slate-900 via-slate-600 to-slate-900 text-transparent bg-clip-text ">
          Hello, I&apos;m an web developer based in Paris !
        </div>
      </div>
      <div className="flex flex-col mt-24">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-11 space-y-16 md:space-y-0">
          <div className="inline-grid grid-col-2 grid-row-2 gap-5 w-80">
            <div className="col-span-2 bg-white/5 p-2 rounded-xl text-center  flex flex-col space-y-2 shadow-2xl shadow-blue-200/30">
              <h1 className="text-2xl bg-gradient-to-bl from-slate-50 via-slate-50 to-slate-50 text-transparent bg-clip-text font-semibold ">
                Rayane Saboundji
              </h1>
              <hr className="h-1 my-8 mx-20 bg-blue-900 border-0 " />

              <p className="font-medium text-lg	text-white indent-1">
                I am Front-End developer who studied at École 42 in Paris. On
                this blog, I share my knowledge and experience in web
                development
              </p>
            </div>

            <a
              href="https://github.com/Rasaboun"
              className="bg-slate-200 p-2 rounded-xl  flex justify-center content-center shadow-lg shadow-white/40"
            >
              <svg
                fill="#181717"
                role="img"
                viewBox="0 0 24 24"
                className="w-2/3 duration-300 hover:rotate-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>{" "}
            </a>

            <div className="bg-slate-200 p-2 rounded-xl  flex justify-center content-center shadow-lg shadow-white/40">
              <svg
                fill="#1DA1F2"
                role="img"
                viewBox="0 0 24 24"
                className="w-2/3 duration-300 hover:rotate-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-6 gap-y-6  gap-x-3 max-w-lg mx-8">
            <div className="col-span-full	h-[74px] bg-white/5 rounded-xl  flex conter-center justify-center shadow-lg shadow-blue-500/50">
              <h1 className="flex flex-row items-center text-center font-semibold text-2xl tracking-wide	 bg-gradient-to-bl from-slate-50 via-slate-100 to-slate-50 text-transparent bg-clip-text  self-center">
                My Current Stack{" "}
                <span role="img" aria-label="arrow_Down">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8 fill-slate-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            <div className="md:col-span-4 row-span-1  bg-white/10 p-2 rounded-xl shadow-lg shadow-blue-200/10 border border-blue-300/10">
              <div className="flex flex-row space-x-2 justify-start items-center content-center">
                <div className="bg-[#007acc]/30 rounded-xl p-2">
                  <svg viewBox="0 0 128 128" className="h-7 w-7">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                    <path
                      data-name="original"
                      fill="#007acc"
                      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                    ></path>
                  </svg>
                </div>
                <span className="flex flex-col ">
                  <p className="text-white">TypeScript</p>
                  <p className="text-blue-100 font-light text-xs">
                    typed programming language that builds on JavaScript
                  </p>
                </span>
              </div>
            </div>
            <div className="md:col-span-2 row-span-1  bg-white/10 p-2 rounded-xl shadow-lg shadow-blue-200/10 border border-blue-300/10">
              <div className="flex flex-row space-x-2 justify-start items-center content-center">
                <div className="bg-[#61DAFB]/30 rounded-xl p-2">
                  <svg viewBox="0 0 128 128" className="h-7 w-7">
                    <g fill="#61DAFB">
                      <circle cx="64" cy="64" r="11.4"></circle>
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                    </g>
                  </svg>
                </div>
                <span className="flex flex-col ">
                  <p className="text-white">React</p>
                  <p className="text-blue-100 font-light text-xs">
                    UI Javascript Library
                  </p>
                </span>
              </div>
            </div>

            <div className="md:col-span-4 row-span-1  bg-white/10 p-2 rounded-xl shadow-lg shadow-blue-200/10 border border-blue-300/10">
              <div className="flex flex-row space-x-2 justify-start items-center content-center">
                <div className="bg-[#E44D26]/20 rounded-xl p-2">
                  <svg viewBox="0 0 128 128" className="h-7 w-7">
                    <path
                      fill="#E44D26"
                      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    ></path>
                    <path
                      fill="#F16529"
                      d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                    ></path>
                  </svg>
                </div>
                <span className="flex flex-col ">
                  <p className="text-white">HTML</p>
                  <p className="text-blue-100 font-light text-xs">
                    Standard markup language for web page creation
                  </p>
                </span>
              </div>
            </div>

            <div className="md:col-span-2 row-span-1  bg-white/10 p-2 rounded-xl shadow-lg shadow-blue-200/10 border border-blue-300/10 flex items-center">
              <div className="flex flex-row space-x-2 justify-start items-center content-center">
                <div className="bg-black/20 rounded-xl p-2">
                  <svg viewBox="0 0 128 128" className="h-7 w-7">
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
                  </svg>
                </div>
                <span className="flex flex-col ">
                  <p className="text-white">NextJS</p>
                  <p className="text-blue-100 font-light text-xs">
                    React Full-Stack Framework
                  </p>
                </span>
              </div>
            </div>





            

            <div className="md:col-span-4 row-span-1  bg-white/10 p-2 rounded-xl shadow-lg shadow-blue-200/10 border border-blue-300/10 flex items-center content-center">
              <div className="flex flex-row space-x-2 justify-start items-center content-center">
                <div className="bg-[#33A9DC]/20 rounded-xl p-2">
                  <svg viewBox="0 0 128 128" className="h-7 w-7">
                    <path
                      fill="#1572B6"
                      d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                    ></path>
                    <path
                      fill="#33A9DC"
                      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                    ></path>
                  </svg>
                </div>
                <span className="flex flex-col ">
                  <p className="text-white">CSS</p>
                  <p className="text-blue-100 font-light text-xs">
                    language use to style a Web page
                  </p>
                </span>
              </div>
            </div>

            <div className="md:col-span-2 row-span-1  bg-white/10 p-2 rounded-xl shadow-lg shadow-blue-200/10 border border-blue-300/10 flex items-center content-center">
              <div className="flex flex-row space-x-2 justify-start items-center content-center">
                <div className="bg-[#38b2ac]/20 rounded-xl p-2">
                  <svg viewBox="0 0 128 128" className="h-7 w-7">
                    <path
                      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                      fill="#38b2ac"
                    ></path>
                  </svg>
                </div>
                <span className="flex flex-col ">
                  <p className="text-white">TailwindCSS</p>
                  <p className="text-blue-100 font-light text-xs">
                    CSS Framework
                  </p>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
