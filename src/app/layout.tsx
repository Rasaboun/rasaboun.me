import "./globals.css";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const robotmono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Rasaboun.me",
  description: "Rasaboun Website !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        <nav className="fixed inset-x-0 bottom-0 text-black flex flex-row justify-center lg:justify-between items-center mx-5 mb-5 ">
          <b className="hidden lg:block text-2xl font-bold bg-gradient-to-tl from-gray-600 via-slate-500 to-cyan-400 text-transparent bg-clip-text">
            Rasaboun
          </b>
          <div className="font-semibold text-slate-800 text-lg flex flex-row items-center rounded-3xl border-gray-300 border-2 p-2 space-x-2 lg:space-x-8 shadow-2xl shadow-gray-950/60 backdrop-blur-md bg-white/80">
            <Link
              href="/"
              className="hover:border-gray-500 border-2 border-transparent rounded-2xl p-2 text-transparent bg-clip-text bg-gradient-to-l from-gray-500 via-zinc-600 to-slate-800"
            >
              Home
            </Link>
            <Link
              href="/Blog"
              className="hover:border-gray-500 border-2 border-transparent rounded-2xl p-2 text-transparent bg-clip-text bg-gradient-to-bl from-gray-500 via-zinc-600 to-slate-800"
            >
              Blog
            </Link>
            <Link
              href="/Portfolio"
              className="hover:border-gray-500 border-2 border-transparent rounded-2xl p-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-zinc-600 to-slate-800"
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

        {children}
        <Footer />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-transparent border-t-0 border-sky-50 mx-4 mb-24 my-10">
      <div className="flex flex-col space-y-8 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid gap-y-10 gap-x-12 sm:gap-x-24 grid-cols-3 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-50 uppercase">
                SiteMap
              </h2>
              <ul className="text-sky-100 font-medium flex flex-col space-y-4">
                <li className="">
                  <Link className="hover:underline" href="/">Rasaboun</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/Blog">Blog</Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/Portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-50 uppercase">
                Follow Me
              </h2>
              <ul className="text-sky-100 font-medium flex flex-col space-y-4">
                <li className="">
                  <a
                    href="https://github.com/Rasaboun"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <span className="hover:underline">Twitter</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-50 uppercase">
                Legal
              </h2>
              <ul className="text-sky-100 font-medium flex flex-col space-y-4">
                <li className="">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base text-sky-50 sm:text-center ">
            © 2023 Rasaboun . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
