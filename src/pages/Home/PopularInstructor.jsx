import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PopularInstructor = () => {
	const [axiosSecure] = useAxiosSecure();

	const { data: instructors = [] } = useQuery({
		queryKey: ['instructors'],
		queryFn: async () => {
			const res = axiosSecure.get('/instructors');
			return (await res).data;
		},
	});
	return (
		<div className='container my-36'>
			<div className='w-fit mx-auto'>
				<h1 className='text-2xl md:text-4xl clip font-semibold'>
					Popular Instructors
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
				{instructors?.slice(0, 6).map(instructor => (
					<div
						key={instructor._id}
						className='flex flex-col items-center justify-center  border-2 border-secondary hover:border-dashed rounded-lg p-5'
					>
						<div className='max-w-sm h-64'>
							<img
								className='rounded-lg max-w-full h-full'
								src={instructor.image}
								alt=''
							/>
						</div>
						<h2 className='text-2xl text-center font-semibold pt-5'>
							{instructor.name}
						</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularInstructor;
