import Lottie from 'lottie-react';
import { Link, useRouteError } from 'react-router-dom';
import Error from '../../assets/Error.json';

const ErrorPage = () => {
	const { status, error } = useRouteError();
	console.log(error);
	return (
		<div className='flex flex-col justify-center items-center'>
			<Lottie
				className='max-w-full md:max-w-4xl'
				animationData={Error}
				loop={true}
			/>
			<h2 className='text-4xl md:text-8xl font-bold '>{status}</h2>
			<h4 className='text-xl font-semibold my-3'>{error.message}</h4>
			<Link to='/'>
				<button className='btn btn-primary'>Back to home</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
