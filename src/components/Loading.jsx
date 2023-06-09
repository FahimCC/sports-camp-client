import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

const Loading = () => {
	return (
		<div className='w-full flex items-center justify-center h-[calc(100vh-335px)]'>
			<Lottie
				className='max-w-full md:w-40'
				animationData={loading}
				loop={true}
			/>
		</div>
	);
};

export default Loading;
