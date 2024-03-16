import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Calendar from '@/components/Calendar';
import Team from '@/components/Team';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import FeatureCardCollection from '@/components/FeatureCardCollection';

const features = [
	{
		title: 'Long-Lasting',
		description:
			'EnduraScribe dry erase markers can write up to 1.5X of traditional dry erase markers which means you get more writing for your money. Tested on a Pen-Core Circle Writing Tester, our markers last 50% longer than leading brands.',
		image: '/stationery.png',
	},
	{
		title: 'Reliable',
		description: 'Our liquid ink dries quickly and erases easily from most non-porous surfaces and glass. It is also low odor and emits no unpleasant smells like other markers.',
		image: '/stationery.png',
	},
	{
		title: 'Visible Ink Gague',
		description: 'We incorporate a transparent barrel with a printed gauge so you always know how much ink is left in your dry erase marker. No more guessing or running out of ink unexpectedly!',
		image: '/stationery.png',
	},
];

export default function Home() {
	return (
		<main>
			<Head>
				<title>EnduraScribe</title>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<Navbar />
			<Hero />
			<FeatureCardCollection features={features} />

			{/* <About /> */}
			{/* <Calendar /> */}
			{/* <Team /> */}
			{/* <Faq /> */}
			<Footer />
		</main>
	);
}
