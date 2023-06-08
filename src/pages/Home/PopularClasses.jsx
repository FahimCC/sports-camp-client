import { Link } from 'react-router-dom';

const PopularClasses = () => {
	return (
		<div className='container my-28'>
			<div className='w-fit mx-auto'>
				<h1 className='text-2xl md:text-4xl border-0 border-b-8 border-primary border-double clip font-semibold'>
					Popular Classes
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
				<Link className='relative squeeze'>
					<img
						src='https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='rounded-lg object-cover w-full h-72'
						alt=''
					/>
					<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
						<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
							Cricket
						</h1>
					</div>
				</Link>
				<Link className='relative  squeeze'>
					<img
						src='https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='rounded-lg object-cover w-full h-72'
						alt=''
					/>
					<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
						<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
							Cricket
						</h1>
					</div>
				</Link>
				<Link className='relative  squeeze'>
					<img
						src='https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='rounded-lg object-cover w-full h-72'
						alt=''
					/>
					<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
						<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
							Cricket
						</h1>
					</div>
				</Link>
				<Link className='relative squeeze'>
					<img
						src='https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='rounded-lg object-cover w-full h-72'
						alt=''
					/>
					<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
						<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
							Cricket
						</h1>
					</div>
				</Link>
				<Link className='relative  squeeze'>
					<img
						src='https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='rounded-lg object-cover w-full h-72'
						alt=''
					/>
					<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
						<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
							Cricket
						</h1>
					</div>
				</Link>
				<Link className='relative  squeeze'>
					<img
						src='https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='rounded-lg object-cover w-full h-72'
						alt=''
					/>
					<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
						<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
							Cricket
						</h1>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default PopularClasses;
