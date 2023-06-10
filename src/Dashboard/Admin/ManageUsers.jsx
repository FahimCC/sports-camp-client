import SectionTitle from '../../components/SectionTitle';
import useTitle from '../../hooks/useTitle';

const ManageUsers = () => {
	useTitle('Manage Users');
	return (
		<div>
			<SectionTitle title='Manage Users' />
			<div className='overflow-x-auto rounded-lg'>
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
						{/* row 1 */}
						<tr>
							<td>1</td>
							<td>
								<div className='avatar'>
									<div className='mask mask-squircle w-12 h-12'>
										<img
											src='/tailwind-css-component-profile-2@56w.png'
											alt='Avatar Tailwind CSS Component'
										/>
									</div>
								</div>
							</td>
							<td>Fahim Faysal</td>
							<td>ffnasi@gmail.com</td>
							<td className='text-center space-y-2 '>
								<span className='badge bg-green-400 text-black block squeeze cursor-pointer'>
									Make Instructor
								</span>
								<span className='badge bg-red-400 text-black squeeze cursor-pointer'>
									Make Admin
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
