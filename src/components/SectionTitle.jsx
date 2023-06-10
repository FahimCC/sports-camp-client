import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => {
	return (
		<motion.div
			className='w-fit mx-auto my-10'
			animate={{
				x: 0,
				y: 0,
				scale: 1.3,
				rotate: 0,
			}}
			transition={{
				duration: 2,
				ease: 'easeInOut',
				times: [0, 0.2, 0.5, 0.8, 1],
				repeat: Infinity,
				repeatDelay: 1,
			}}
		>
			<h1 className='text-2xl md:text-4xl clip font-semibold font-bubblegum'>
				{title}
			</h1>
		</motion.div>
	);
};

export default SectionTitle;
