export default function FirstBlock(props: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mx-16 grid-rows-6 mt-2">
      <a
        href="/rasabounconnect"
        className="col-span-1 w-full row-span-6	items-center	justify-center	  relative hover:scale-105 active:scale-100 transition-transform	duration-300	ease-in-out	shadow-2xl border-[#0C131F] rounded-3xl border-8"
      >
        {props.imgbanner}
      </a>
      <div className="w-full h-full rounded-xl col-span-1"></div>
    </div>
  );
}
