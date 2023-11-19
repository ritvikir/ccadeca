import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Inter } from "next/font/google";
import Head from "next/head";
import Calendar from "@/components/Calendar";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Canyon Crest Academy DECA</title>
        <meta
          name="description"
          content="Join DECA to explore the realms of marketing, finance, hospitality, and management while developing leadership and entrepreneurial skills."
          key="desc"
        />
        <meta
          property="og:title"
          content="DECA: Empowering Emerging Leaders and Entrepreneurs"
        />
        <meta
          property="og:description"
          content="DECA prepares the next generation of leaders and innovators, offering students unique opportunities to grow through competitions, conferences, and networking."
        />
        <meta
          property="og:image"
          content="https://wadeca.org/wp-content/uploads/2019/09/DECA-Diamond-1.png"
        />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Calendar />
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}
