import React from 'react';
import Image from 'next/legacy/image'; // Import from 'next/image'

const officers = [
	{ name: 'Ruby Gao', position: 'President', imageUrl: '/ruby_beautify.jpg' },
	{ name: 'Lynn Huang', position: 'Vice President', imageUrl: '/lynn.png' },
	{ name: 'Sydney Danon', position: 'Secretary', imageUrl: '/sydney.png' },
	{ name: 'Ritvik Irigireddy', position: 'Treasurer', imageUrl: '/ritvik.jpeg' },
	{
		name: 'Nathan Dai',
		position: 'Director of Corporate Synergy and Strategic Alignment',
		imageUrl: '/wayne.jpeg',
	},
	{ name: 'Cole Terjesen', position: 'President Elect', imageUrl: '/cole-cropped.jpg' },
	// ... add more officers as needed
];

export default function MeetYourOfficers() {
	return (
		<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10 mb-12'>
			<h1 className='text-4xl font-bold mb-10 text-blue-500'>Meet Your Officers</h1>
			<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{officers.map((officer, index) => (
					<div
						key={index}
						className={'officer-info p-4 text-center' + ((officer.name === 'Nathan Dai') ? ' rounded-lg bg-gradient-to-br from-slate-50 to-slate-300 shadow-2xl ring-1 ring-blue-500/50 hover:ring-blue-500' : '')}
						id={officer.name.split(' ')[0].toLowerCase()}
					>
						<div className='relative inline-block w-40 h-40 mx-auto mb-4'>
							<Image
								src={officer.imageUrl}
								alt={`Image of ${officer.name}`}
								layout='fill'
								objectFit='cover' // This will cover the area of the div, you can also use 'contain' if you don't want to crop the image
								className='rounded-full'
							/>
						</div>
						<h2 className='text-xl font-semibold'>{officer.name}</h2>
						<p className='text-md text-gray-600'>{officer.position}</p>
					</div>
				))}
			</div>
		</div>
	);
}
