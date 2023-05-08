import Logo from "./react-icon.svg"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <main className="flex flex-col space-y-8 justify-center items-center h-screen mx-8">

    <Link href="/Blog/SSR">
    <Image src={Logo} alt="react logo" className="rounded-lg w-64 shadow-lg shadow-blue-500 p-4"/>
    </Link>
    <h1 className="text-white">The Benefits of Server-Side Rendering (SSR) for Web Development</h1>

    <Link href="/Blog/SSR">
    <Image src={Logo} alt="react logo" className="rounded-lg w-64 shadow-lg shadow-white p-4"/>
    </Link>
    <h1 className="text-white">Les avantages du rendu côté serveur (SSR) pour le développement web</h1>
  </main>;
}