import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const ManageClasses = () => {
	useTitle('Manage Classes');

	const [axiosSecure] = useAxiosSecure();

	const { data: classes = [], refetch } = useQuery({
		queryKey: ['class'],
		queryFn: async () => {
			const res = await axiosSecure.get('/my-classes');
			return res.data;
		},
	});

	const handleApproval = (clas, status) => {
		axiosSecure.patch(`/my-classes/${clas._id}`, { status }).then(res => {
			if (res.data.modifiedCount) {
				refetch();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: `${clas.className} class has been  ${status}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	const handleFeedback = async clas => {
		const { value: text } = await Swal.fire({
			input: 'textarea',
			inputLabel: 'Feedback',
			inputPlaceholder: 'Feedback...',
			confirmButtonText: 'Send Feedback',
			inputAttributes: {
				'aria-label': 'Feedback...',
			},
		});

		if (text) {
			// Swal.fire(text);
			axiosSecure
				.patch(`/my-classes-feedback/${clas._id}`, { feedback: text })
				.then(res => {
					if (res.data.modifiedCount) {
						refetch();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: `Feedback class has been send to the Instructor`,
							showConfirmButton: false,
							timer: 2000,
						});
					}
				});
		}
	};

	return (
		<div>
			<SectionTitle title='Manage Classes' />
			<div className='overflow-x-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class Image</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Instructor Email</th>
							<th>Available seats</th>
							<th className='text-center'>Status</th>
							<th className='text-center'>Action</th>
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
								<td>{clas.instructorEmail}</td>
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
								<td className='flex flex-wrap h-20 items-center justify-center gap-1 '>
									{clas.status === 'approved' ? (
										<>
											<button
												onClick={() => handleApproval(clas, 'approved')}
												className='btn btn-xs btn-success squeeze'
												disabled
											>
												Approved
											</button>
											<button
												onClick={() => handleApproval(clas, 'denied')}
												className='btn btn-xs btn-error squeeze'
												disabled
											>
												Denied
											</button>
										</>
									) : clas.status === 'denied' ? (
										<>
											<button
												onClick={() => handleApproval(clas, 'approved')}
												className='btn btn-xs btn-success squeeze'
												disabled
											>
												Approved
											</button>
											<button
												onClick={() => handleApproval(clas, 'denied')}
												className='btn btn-xs btn-error squeeze'
												disabled
											>
												Denied
											</button>
										</>
									) : (
										<>
											<button
												onClick={() => handleApproval(clas, 'approved')}
												className='btn btn-xs btn-success squeeze'
											>
												Approved
											</button>
											<button
												onClick={() => handleApproval(clas, 'denied')}
												className='btn btn-xs btn-error squeeze'
											>
												Denied
											</button>
										</>
									)}
									<button
										onClick={() => handleFeedback(clas)}
										className='btn btn-xs bg-info squeeze text-black'
									>
										Feedback
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageClasses;
