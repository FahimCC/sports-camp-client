import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Instructors = () => {
	return (
		<div className='container my-14'>
			<motion.div
				className='w-fit mx-auto'
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
				<h1 className='text-2xl md:text-4xl border-0 border-b-4 border-primary border-double clip font-semibold'>
					Instructors
				</h1>
			</motion.div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
				<div className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'>
					<div>
						<img
							className='rounded-lg'
							src='https://resources.pulse.icc-cricket.com/photo-resources/2020/12/21/2b578e3c-b96a-4b2d-b67f-49e05c904901/Whatmore.jpg?width=845&height=545'
							alt=''
						/>
					</div>
					<div className='pt-5'>
						<h2 className='text-2xl text-center font-semibold mb-5'>
							David Whatmore
						</h2>
						<p>
							<b>Email: </b> Whatmore@gmail.com
						</p>
						<p>
							<b>Number of classes:</b> 3
						</p>
						<p>
							<b>Name of the classes:</b> Cricket, Football, Kabaddi
						</p>
						<Link className='flex justify-center'>
							<button className='btn btn-primary mt-5'>See Classes</button>
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'>
					<div>
						<img
							className='rounded-lg'
							src='https://resources.pulse.icc-cricket.com/photo-resources/2020/12/21/2b578e3c-b96a-4b2d-b67f-49e05c904901/Whatmore.jpg?width=845&height=545'
							alt=''
						/>
					</div>
					<div className='pt-5'>
						<h2 className='text-2xl text-center font-semibold mb-5'>
							David Whatmore
						</h2>
						<p>
							<b>Email: </b> Whatmore@gmail.com
						</p>
						<p>
							<b>Number of classes:</b> 3
						</p>
						<p>
							<b>Name of the classes:</b> Cricket, Football, Kabaddi
						</p>
						<Link className='flex justify-center'>
							<button className='btn btn-primary mt-5'>See Classes</button>
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'>
					<div>
						<img
							className='rounded-lg'
							src='https://resources.pulse.icc-cricket.com/photo-resources/2020/12/21/2b578e3c-b96a-4b2d-b67f-49e05c904901/Whatmore.jpg?width=845&height=545'
							alt=''
						/>
					</div>
					<div className='pt-5'>
						<h2 className='text-2xl text-center font-semibold mb-5'>
							David Whatmore
						</h2>
						<p>
							<b>Email: </b> Whatmore@gmail.com
						</p>
						<p>
							<b>Number of classes:</b> 3
						</p>
						<p>
							<b>Name of the classes:</b> Cricket, Football, Kabaddi
						</p>
						<Link className='flex justify-center'>
							<button className='btn btn-primary mt-5'>See Classes</button>
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'>
					<div>
						<img
							className='rounded-lg'
							src='https://resources.pulse.icc-cricket.com/photo-resources/2020/12/21/2b578e3c-b96a-4b2d-b67f-49e05c904901/Whatmore.jpg?width=845&height=545'
							alt=''
						/>
					</div>
					<div className='pt-5'>
						<h2 className='text-2xl text-center font-semibold mb-5'>
							David Whatmore
						</h2>
						<p>
							<b>Email: </b> Whatmore@gmail.com
						</p>
						<p>
							<b>Number of classes:</b> 3
						</p>
						<p>
							<b>Name of the classes:</b> Cricket, Football, Kabaddi
						</p>
						<Link className='flex justify-center'>
							<button className='btn btn-primary mt-5'>See Classes</button>
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'>
					<div>
						<img
							className='rounded-lg'
							src='https://resources.pulse.icc-cricket.com/photo-resources/2020/12/21/2b578e3c-b96a-4b2d-b67f-49e05c904901/Whatmore.jpg?width=845&height=545'
							alt=''
						/>
					</div>
					<div className='pt-5'>
						<h2 className='text-2xl text-center font-semibold mb-5'>
							David Whatmore
						</h2>
						<p>
							<b>Email: </b> Whatmore@gmail.com
						</p>
						<p>
							<b>Number of classes:</b> 3
						</p>
						<p>
							<b>Name of the classes:</b> Cricket, Football, Kabaddi
						</p>
						<Link className='flex justify-center'>
							<button className='btn btn-primary mt-5'>See Classes</button>
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'>
					<div>
						<img
							className='rounded-lg'
							src='https://resources.pulse.icc-cricket.com/photo-resources/2020/12/21/2b578e3c-b96a-4b2d-b67f-49e05c904901/Whatmore.jpg?width=845&height=545'
							alt=''
						/>
					</div>
					<div className='pt-5'>
						<h2 className='text-2xl text-center font-semibold mb-5'>
							David Whatmore
						</h2>
						<p>
							<b>Email: </b> Whatmore@gmail.com
						</p>
						<p>
							<b>Number of classes:</b> 3
						</p>
						<p>
							<b>Name of the classes:</b> Cricket, Football, Kabaddi
						</p>
						<Link className='flex justify-center'>
							<button className='btn btn-primary mt-5'>See Classes</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Instructors;
