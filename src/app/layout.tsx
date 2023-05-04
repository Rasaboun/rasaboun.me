import "./globals.css";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import { NavBar } from "./NavBar";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="57027048-aa0d-4e07-8092-14d9b76ec80b"
        ></Script>
      </head>

      <body className="bg-gradient-to-tr from-slate-950 via-[#021348] to-slate-950 min-h-screen">
        <NavBar />

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
                  <Link className="hover:underline" href="/">
                    Rasaboun
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/Portfolio">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-50 uppercase">
                Follow Me
              </h2>
              <ul className="text-sky-100 font-medium flex flex-col space-y-4">
                <li className="">
                  <button data-umami-event="Github Button">
                    <a
                      href="https://github.com/Rasaboun"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </button>
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
