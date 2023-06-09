import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

const Loader = () => {
	return (
		// <div className='w-full flex items-center justify-center h-[calc(100vh-335px)]'>
		<div className='w-full flex items-center justify-center h-screen'>
			<Lottie
				className='w-20 md:w-32 lg:44'
				animationData={loading}
				loop={true}
			/>
		</div>
	);
};

export default Loader;
