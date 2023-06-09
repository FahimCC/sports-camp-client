import { BsTrashFill } from 'react-icons/bs';
import { RiSecurePaymentFill } from 'react-icons/ri';
import SectionTitle from '../../components/SectionTitle';

const MySelectedClasses = () => {
	return (
		<div>
			<SectionTitle title='My Selected Classes' />
			<div className='overflow-x-auto'>
				<table className='table md:text-lg rounded-t-lg'>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Price</th>
							<th>Pay</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>1</td>
							<td>Cricket</td>
							<td>David Whatmore</td>
							<td>$200</td>
							<td>
								<button className='p-2 rounded-lg bg-sky-400 text-black squeeze'>
									<RiSecurePaymentFill className='text-xl' />
								</button>
							</td>
							<td>
								<button className='p-2 rounded-lg bg-red-400 text-black squeeze'>
									<BsTrashFill className='text-lg' />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MySelectedClasses;
