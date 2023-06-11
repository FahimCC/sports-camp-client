import { useQuery } from '@tanstack/react-query';
import { LuClipboardEdit } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import useUser from '../../hooks/UseUser';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const MyClasses = () => {
	useTitle('My Classes');
	const [axiosSecure] = useAxiosSecure();
	const { user, loading } = useUser();

	const { data: classes } = useQuery({
		queryKey: ['classes', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/my-classes/${user?.email}`);
			// console.log('my-classes: ', res.data);
			return (await res).data;
		},
	});

	return (
		<div>
			<SectionTitle title='My Classes' />
			<div className='min-h-fit  h-[500px] overflow-x-auto overflow-y-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class</th>
							<th>Class Name</th>
							<th>Price</th>
							<th>Available Seats</th>
							<th>Total Enrolled Students</th>
							<th>Status</th>
							<th>Feedback</th>
							<th>Update</th>
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
								<td>{clas.price}</td>
								<td className='text-center'>{clas.availableSeat}</td>
								<td className='text-center'>{clas.availableSeat}</td>
								<td className='text-center'>
									{clas.status === 'pending' ? (
										<span className='btn-custom border-yellow-400 text-yellow-400'>
											Pending
										</span>
									) : clas.status === 'approved' ? (
										<span className='btn-custom border-green-400 text-green-400'>
											Approved
										</span>
									) : (
										<span className='btn-custom border-red-400 text-red-400 '>
											Denied
										</span>
									)}
								</td>
								<td className='text-center'>{clas.feedback}</td>
								<td className='text-center'>
									<Link
										to={`/dashboard/update-class/${clas._id}`}
										className='p-2 rounded-lg btn btn-sm btn-warning squeeze'
									>
										<LuClipboardEdit className='text-lg' />
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyClasses;
