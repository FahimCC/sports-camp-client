import SectionTitle from '../../components/SectionTitle';

const ManageClasses = () => {
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
							<td>Cricket</td>
							<td>David Whatmore</td>
							<td>davidwhatmore@gmail.com</td>
							<td className='text-center'>5</td>
							<td>
								<span className='badge badge-outline badge-warning'>
									Pending
								</span>
							</td>
							<td className='text-center space-y-2 '>
								<span className='badge bg-green-400 text-black squeeze cursor-pointer'>
									Approved
								</span>
								<span className='badge bg-red-400 text-black squeeze cursor-pointer'>
									Denied
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageClasses;
