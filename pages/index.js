import Image from "next/image";
import Navbar from "../components/Navbar"
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1>aslklaks</h1>
      </div>
      
    </main>
  );
}
