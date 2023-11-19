import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Inter } from "next/font/google";
import Head from "next/head";
import Calendar from "@/components/Calendar";
import Team from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Canyon Crest Academy DECA</title>
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Calendar/>
      <Team/>
    </main>
  );
}
