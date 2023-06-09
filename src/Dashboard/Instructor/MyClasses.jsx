import { LuClipboardEdit } from 'react-icons/lu';
import SectionTitle from '../../components/SectionTitle';

const MyClasses = () => {
	return (
		<div>
			<SectionTitle title='My Classes' />
			<div className='overflow-x-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class</th>
							<th>Class Name</th>
							<th>Status</th>
							<th>Total Enrolled Students</th>
							<th>Feedback</th>
							<th>Update</th>
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
							<td>
								<span className='badge badge-outline badge-warning'>
									Approved
								</span>
							</td>
							<td className='text-center'>5</td>
							<td>None</td>
							<td className='text-center'>
								<button className='p-2 rounded-lg btn-warning squeeze'>
									<LuClipboardEdit className='text-lg' />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyClasses;
