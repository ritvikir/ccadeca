import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
	return (
		<div className='bg-slate-100'>
			<div className='flex justify-between'>
				<div className='w-1/2 mx-10'>
					<Image src='/banner.png' width={5358} height={1} alt='logo' />
					<div className='flex justify-center items-center pb-10'>
						<Link
							href='https://docs.google.com/forms/u/1/d/e/1FAIpQLScOLfkmFsTZop_cca565deD4huYJtvuWMTzla1VEDlknbZl-w/viewform?vc=0&c=0&w=1&flr=0'
							className='rounded-md bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Order Now
						</Link>
					</div>
				</div>
				<div className='w-1/2 mx-10'>
					<Image className='crop' src='/stationery.jpg' width={5358} height={1} alt='logo' />
				</div>
			</div>
		</div>
	);
}
