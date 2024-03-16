import Image from 'next/image';

const FeatureCard = ({ title, description, image }) => {
	return (
		<div className='flex flex-col items-center justify-center card rounded bg-gradient-to-br from-slate-50 to-slate-300 shadow-2xl ring-1 p-5'>
			<Image src={image} alt={title} width={200} height={200} />
			<h2 className='text-xl font-semibold m-2'>{title}</h2>
			<p className='text-md text-gray-600 m-2'>{description}</p>
		</div>
	);
};

export default FeatureCard;
