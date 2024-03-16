import FeatureCard from './FeatureCard';

const FeatureCardCollection = ({ features }) => {
	return (
		<div className='flex justify-center py-10'>
			<div className='grid grid-cols-3 gap-10 w-3/5'>
				{features.map((feature, index) => (
					<div key={index} className='card'>
						<FeatureCard key={feature.title} {...feature} />
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureCardCollection;
