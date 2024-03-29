export default function GridProject(props: any) {
  return (
    <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2  gap-14 mx-4 md:mx-16 grid-rows-6 mt-10">
      <a
        href="/me"
        className="h-[280px] bg-indigo-600 col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgme}
      </a>
      <a
        href="/rasabounconnect"
        className="h-[280px] bg-slate-900 col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgbanner}
      </a>
      <a
        href="/cub3d"
        className="h-[280px] bg-sky-950 col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgcub3d}
      </a>
      <a
        href="/minishell"
        className="h-[280px] bg-stone-900 flex col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgminishell}
      </a>
      <a
        href="/weatherdashboard"
        className="h-[280px] bg-sky-700 flex col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgweather}
      </a>
    </div>
  );
}
