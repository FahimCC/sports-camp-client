import SectionTitle from '../../components/SectionTitle';
import useTitle from '../../hooks/useTitle';

const PaymentHistory = () => {
	useTitle('Payment History');
	return (
		<div>
			<SectionTitle title='Payment History' />
			<div className='min-h-fit  h-[500px] overflow-x-auto overflow-y-auto rounded-lg'>
				<table className='table md:text-lg'>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class Image</th>
							<th>Class Name</th>
							<th>Price</th>
							<th>Payment Date</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>1</td>
							<td>
								<div className='avatar'>
									<div className='mask mask-squircle w-12 h-12'>
										<img src='' alt='Avatar Tailwind CSS Component' />
									</div>
								</div>
							</td>
							<td>Cricket</td>
							<td>$200</td>
							<td>Monday, 09 Jun 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentHistory;
