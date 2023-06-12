import { useQuery } from '@tanstack/react-query';
import { BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useUser from '../../hooks/UseUser';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const MySelectedClasses = () => {
	useTitle('My Selected Classes');

	const [axiosSecure] = useAxiosSecure();
	const { user } = useUser();

	const { data: classes = [], refetch } = useQuery({
		queryKey: ['classes', user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/select-class?email=${user?.email}&paymentStatus=pending`
			);
			// console.log(user?.email, res.data);
			return res.data;
		},
	});

	const handleDelete = id => {
		axiosSecure.delete(`/select-class/${id}`).then(res => {
			if (res.data.deletedCount > 0) {
				refetch();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Class has been deleted',
					showConfirmButton: false,
					timer: 1000,
				});
			}
		});
	};

	return (
		<div>
			<SectionTitle title='My Selected Classes' />
			<div className='min-h-fit  h-[500px] overflow-x-auto overflow-y-auto rounded-lg'>
				{classes.length === 0 ? (
					<p className='mt-10 text-lg text-medium'>
						No class was selected. Please select first...
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
								<th>Available Seat</th>
								<th>Price</th>
								<th>Pay</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{refetch() &&
								classes?.map((clas, index) => (
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
										<td>{clas.availableSeat}</td>
										<td>${clas.price}</td>
										<td>
											<Link to={`/dashboard/payment/${clas._id}`}>
												<button className='btn btn-xs bg-sky-400 text-black squeeze'>
													Payment
												</button>
											</Link>
										</td>
										<td>
											<button
												onClick={() => handleDelete(clas._id)}
												className='p-2 rounded-lg bg-red-400 text-black squeeze'
											>
												<BsTrashFill className='text-lg' />
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default MySelectedClasses;
