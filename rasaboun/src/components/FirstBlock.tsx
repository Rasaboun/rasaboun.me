export default function FirstBlock(props: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mx-4 md:mx-16 grid-rows-6 mt-8">
      <a
        href="/me"
        className="h-[280px] bg-indigo-600 col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgme}
      </a>
      <a
        href="/rasabounconnect"
        className="h-[280px] col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl rounded-xl"
      >
        {props.imgbanner}
      </a>
    </div>
  );
}
