export default function Header() {
  let now = new Date().toUTCString().slice(0,16)
  return (
    <div className="flex flex-row justify-between mx-16 mt-6 items-end border-b-[1px] pb-2 border-slate-300    ">
      <div className="flex flex-col space-y-2">
        <p className="text-slate-500 uppercase text-sm">{now}</p>
        <p className="text-slate-900 font-semibold text-4xl">Welcome to my Portfolio</p>
      </div>
      <div>
        <p className="p-1 px-3 bg-slate-200 rounded-full">R</p>
      </div>
    </div>
  );
}
