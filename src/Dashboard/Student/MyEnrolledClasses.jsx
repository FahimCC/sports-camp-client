import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/SectionTitle';
import useUser from '../../hooks/UseUser';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const MyEnrolledClasses = () => {
	useTitle('My Enrolled Classes');

	const [axiosSecure] = useAxiosSecure();
	const { user } = useUser();

	const { data: classes = [] } = useQuery({
		queryKey: ['classes', user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/select-class?email=${user?.email}&paymentStatus=paid`
			);
			// console.log(user?.email, res.data);
			return res.data;
		},
	});

	return (
		<div>
			<SectionTitle title='My Enrolled Classes' />
			<div className='min-h-fit  h-[500px] overflow-x-auto overflow-y-auto rounded-lg'>
				{classes.length === 0 ? (
					<p className='mt-10 text-lg text-medium'>
						No payment was done. Please pay first...
					</p>
				) : (
					<table className='table md:text-lg'>
						{/* head */}
						<thead>
							<tr className='bg-base-200 text-base'>
								<th>#</th>
								<th>Class Image</th>
								<th>Class Name</th>
								<th>Instructor Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{classes?.map((clas, index) => (
								<tr key={clas._id}>
									<td>{index + 1}</td>
									<td>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<img
													src={clas.classImage}
													alt='Avatar Tailwind CSS Component'
												/>
											</div>
										</div>
									</td>
									<td>{clas.className}</td>
									<td>{clas.instructorName}</td>
									<td className='text-right'>${clas.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default MyEnrolledClasses;
