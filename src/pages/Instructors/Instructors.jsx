import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
	useTitle('Instructors');

	const [axiosSecure] = useAxiosSecure();

	const { data: instructors = [], refetch } = useQuery({
		queryKey: ['instructors'],
		queryFn: async () => {
			const res = axiosSecure.get('/instructors');
			return (await res).data;
		},
	});

	return (
		<div className='container my-14'>
			<SectionTitle title='Instructors' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
				{instructors?.map(instructor => (
					<div
						key={instructor._id}
						className='flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-primary rounded-lg p-5 md:p-10'
					>
						<div className='max-w-sm h-64'>
							<img
								className='rounded-lg max-w-full h-full'
								src={instructor.image}
								alt=''
							/>
						</div>
						<div className='pt-5'>
							<h2 className='text-2xl text-center font-semibold mb-1'>
								{instructor.name}
							</h2>
							<p>
								<b>Email: </b> {instructor.email}
							</p>
							{/* <p>
								<b>Number of classes:</b> jani na
							</p>
							<p>
								<b>Name of the classes:</b> jani na
							</p>
							<Link className='flex justify-center'>
								<button className='btn btn-primary mt-5'>See Classes</button>
							</Link> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Instructors;
