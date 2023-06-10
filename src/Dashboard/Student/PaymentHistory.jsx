import SectionTitle from '../../components/SectionTitle';
import useTitle from '../../hooks/useTitle';

const PaymentHistory = () => {
	useTitle('Payment History');
	return (
		<div>
			<SectionTitle title='Payment History' />
			<div className='overflow-x-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class Name</th>
							<th>Price</th>
							<th>Payment Date</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>1</td>
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
