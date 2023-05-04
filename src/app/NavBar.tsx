'use client';


import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';



export const NavBar = () => {

	const segment = useSelectedLayoutSegment();
	let linkclass = "  rounded-2xl p-2 text-transparent bg-clip-text bg-gradient-to-l from-gray-500 via-zinc-600 to-slate-800"


	return (
		<nav className="fixed inset-x-0 bottom-0 text-black flex flex-row justify-center items-center mx-5 mb-5 z-50	">
		
		<div className="font-semibold text-slate-800 text-lg flex flex-row items-center rounded-3xl border-gray-300 border-2 p-2 space-x-2 lg:space-x-8 shadow-2xl shadow-gray-950/60 backdrop-blur-md bg-white/80">
		  <Link
			href="/"
			className={segment == null ? "border-gray-500 border-2" + linkclass : linkclass}
		  >
			Home
		  </Link>
		  <Link
			href="/Blog"
			className={segment == "Blog" ? "border-gray-500 border-2" + linkclass : linkclass}
		  >
			Blog
		  </Link>
		  <Link
			href="/Portfolio"
			className={segment == "Portfolio" ? "border-gray-500 border-2" + linkclass : linkclass}
		  >
			Portfolio
		  </Link>
		  <a
			href="https://github.com/Rasaboun"
			className="hover:border-gray-500 border-2 border-transparent rounded-2xl p-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-zinc-600 to-slate-800"
			data-umami-event="Github Button"
		  >
			Github
		  </a>
		</div>

	  </nav>
	)
}