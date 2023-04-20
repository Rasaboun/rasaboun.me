'use client';


import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';



export const NavBar = () => {

	const segment = useSelectedLayoutSegment();
	let linkclass = "  rounded-2xl p-2 text-transparent bg-clip-text bg-gradient-to-l from-gray-500 via-zinc-600 to-slate-800"


	return (
		<nav className="fixed inset-x-0 bottom-0 text-black flex flex-row justify-center lg:justify-between items-center mx-5 mb-5 z-50	">
		<b className="hidden lg:block text-2xl font-bold bg-gradient-to-tl from-gray-600 via-slate-500 to-cyan-400 text-transparent bg-clip-text">
		  Rasaboun
		</b>
		<div className="font-semibold text-slate-800 text-lg flex flex-row items-center rounded-3xl border-gray-300 border-2 p-2 space-x-2 lg:space-x-8 shadow-2xl shadow-gray-950/60 backdrop-blur-md bg-white/70">
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
		  >
			Github
		  </a>
		</div>
		<div className="hidden lg:block">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill={"url(#lightGradient)"}
			className="w-6 h-6 "
		  >
			<defs>
			  <linearGradient
				id="lightGradient"
				gradientTransform="rotate(90)"
			  >
				<stop offset="5%" stopColor="#9ca3af" />
				<stop offset="95%" stopColor="#404040" />
			  </linearGradient>
			</defs>
			<path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.572.729 6.016 6.016 0 002.856 0A.75.75 0 0012 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.553 7.553 0 01-2.274 0z" />
		  </svg>
		</div>
	  </nav>
	)
}