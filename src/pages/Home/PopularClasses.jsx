import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PopularClasses = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: classes = [] } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const res = await axiosSecure.get('/popular-classes');
			return res.data;
		},
	});

	return (
		<div className='container my-36'>
			<div className='w-fit mx-auto'>
				<h1 className='text-2xl md:text-4xl border-0 border-b-8 border-primary border-double clip font-semibold'>
					Popular Classes
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
				{classes?.slice(0, 6).map(clas => (
					<Link key={clas._id} className='relative squeeze'>
						<img
							src={clas.classImage}
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h1 className='rounded-lg text-secondary text-2xl md:text-4xl font-bold'>
								{clas.className}
							</h1>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PopularClasses;
