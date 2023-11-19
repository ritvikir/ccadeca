import Image from "next/image";
import Navbar from "../components/Navbar"
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>

    </main>
  );
}
