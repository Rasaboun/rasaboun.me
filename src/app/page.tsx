import Image from "next/image";
export default function Main() {
  return (
    <main className="flex flex-col justify-center items-center mt-5">
      <div className="py-2 px-6 bg-gray-50 rounded-xl mb-10">
        <div className="  text-slate-800 text-2xl font-medium bg-gradient-to-tr from-gray-500 via-gray-400 to-neutral-600 text-transparent bg-clip-text drop-shadow-2xl">
          Hello, I&apos;m an web developer based in Paris !
        </div>
      </div>
      <div className="grid grid-cols-7 grid-rows-4 mx-5 gap-x-10 gap-y-3">
        <div className="bg-gray-50 p-2 rounded-xl text-center row-span-2 col-span-2 drop-shadow-lg">
          <h1 className="text-2xl text-slate-950 border-b-2 border-slate-500 font-mono bg-gradient-to-tl from-gray-400 via-zinc-500 to-neutral-700 text-transparent bg-clip-text">
            Rayane Saboundji
          </h1>
          <p className="font-mono	text-slate-500 indent-1 font-medium">
            a Front-End developer who studied at École 42 in Paris. On this
            blog, I share my knowledge and experience in web development
          </p>
        </div>
        <div className="col-span-5 bg-gray-50 rounded-xl row-span-1 flex conter-center justify-center drop-shadow-lg">
          <h1 className="text-center font-medium text-2xl text-slate-950  self-center font-mono bg-gradient-to-tl from-gray-400 via-zinc-500 to-neutral-700 text-transparent bg-clip-text">
            I can code with ⬇
          </h1>
        </div>
        <div className="bg-gray-50 p-2 rounded-xl row-span-2 flex justify-center content-center drop-shadow-lg">
          <svg
            fill="#3178C6"
            role="img"
            viewBox="0 0 24 24"
            className="w-2/3 duration-300 hover:rotate-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TypeScript</title>
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
        </div>
        <div className="bg-gray-50 p-2 rounded-xl row-span-2 flex justify-center content-center drop-shadow-lg">
          <svg
            fill="#A8B9CC"
            role="img"
            viewBox="0 0 24 24"
            className="w-2/3 duration-300 hover:-rotate-6"

            xmlns="http://www.w3.org/2000/svg"
          >
            <title>C</title>
            <path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" />
          </svg>
        </div>
        <div className="bg-gray-50 p-2 rounded-xl row-span-2 flex justify-center content-center drop-shadow-lg">
          <svg
            fill="#00599C"
            role="img"
            viewBox="0 0 24 24"
            className="w-2/3 duration-300 hover:rotate-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>C++</title>
            <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
          </svg>
        </div>
        <div className="bg-gray-50 p-2 rounded-xl row-span-2 flex justify-center content-center drop-shadow-lg">
          <svg
            fill="#E34F26"
            role="img"
            viewBox="0 0 24 24"
            className="w-2/3 duration-300 hover:-rotate-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>HTML5</title>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        </div>
        <div className="bg-gray-50 p-2 rounded-xl row-span-2 flex justify-center content-center drop-shadow-lg">
          <svg
            fill="#1572B6"
            role="img"
            viewBox="0 0 24 24"
            className="w-2/3 duration-300 hover:rotate-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CSS3</title>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          </svg>
        </div>
      </div>
    </main>
  );
}
