import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const ManageUsers = () => {
	useTitle('Manage Users');
	const [axiosSecure] = useAxiosSecure();

	const { data: users = [], refetch } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await axiosSecure('/users');
			return res.data;
		},
	});

	const handleInstructor = user => {
		axios
			.patch(
				`https://sports-camp-server-zeta.vercel.app/users/instructor/${user._id}`
			)
			.then(data => {
				if (data.data.modifiedCount) {
					refetch();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `${user.name} is an Admin Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleAdmin = user => {
		axios
			.patch(
				`https://sports-camp-server-zeta.vercel.app/users/admin/${user._id}`
			)
			.then(data => {
				if (data.data.modifiedCount) {
					refetch();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `${user.name} is an Admin Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div>
			<SectionTitle title='Manage Users' />
			<div className='min-h-fit  h-[500px] overflow-x-auto overflow-y-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>User</th>
							<th>User Name</th>
							<th>User Email</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<td>{index + 1}</td>
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={user.image}
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
								</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td className='flex flex-col gap-2 justify-center items-center h-20'>
									{user.role === 'student' ? (
										<>
											<button
												onClick={() => handleInstructor(user)}
												className='btn btn-xs bg-blue-300 text-black block squeeze'
											>
												Make Instructor
											</button>
											<button
												onClick={() => handleAdmin(user)}
												className='btn btn-xs bg-blue-400 text-black block squeeze'
											>
												Make Admin
											</button>
										</>
									) : user.role === 'instructor' ? (
										<>
											<button
												className='btn-custom border-green-300 text-green-300'
												disabled
											>
												Instructor
											</button>
											<button
												onClick={() => handleAdmin(user)}
												className='btn btn-xs bg-blue-400 text-black block squeeze'
											>
												Make Admin
											</button>
										</>
									) : (
										user.role === 'admin' && (
											<>
												<button
													className='btn-custom border-green-400 text-green-400'
													disabled
												>
													Admin
												</button>
											</>
										)
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
{
	/*{user.role === 'instructor' ? (
										<button
											className='btn btn-outline btn-primary btn-sm'
											disabled
										>
											Instructor
										</button>
									) : (
										<button
											onClick={() => handleInstructor(user)}
											className='btn bg-blue-300 text-black block btn-sm'
										>
											Make Instructor
										</button>
									)}
									{user.role === 'admin' ? (
										<button
											className='btn btn-outline btn-primary btn-sm'
											disabled
										>
											Admin
										</button>
									) : (
										<button
											onClick={() => handleAdmin(user)}
											className='btn bg-blue-300 text-black block btn-sm'
										>
											Make Admin
										</button>
									)}*/
}
