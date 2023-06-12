import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const PaymentHistory = () => {
	useTitle('Payment History');

	const [axiosSecure] = useAxiosSecure();

	const { data: payments = [] } = useQuery({
		queryKey: ['clas'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/payment`);
			// console.log(res.data);
			return res.data;
		},
	});

	return (
		<div>
			<SectionTitle title='Payment History' />
			<div className='min-h-fit  h-[500px] overflow-x-auto overflow-y-auto rounded-lg'>
				{payments.length === 0 ? (
					<p className='mt-10 text-lg text-medium'>
						No payment was done. Please pay first...
					</p>
				) : (
					<table className='table md:text-lg'>
						{/* head */}
						<thead>
							<tr className='bg-base-200 text-base'>
								<th>#</th>
								<th>Class Image</th>
								<th>Class Name</th>
								<th>Billing Name</th>
								<th>Transaction Id</th>
								<th>Price</th>
								<th>Payment Date</th>
							</tr>
						</thead>
						<tbody>
							{payments?.map((payment, index) => (
								<tr key={payment._id}>
									<td>{index + 1}</td>
									<td>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<img
													src={payment.classImage}
													alt='Avatar Tailwind CSS Component'
												/>
											</div>
										</div>
									</td>
									<td>{payment.className}</td>
									<td>{payment.name}</td>
									<td>{payment.transactionId}</td>
									<td>${payment.price}</td>
									<td>{moment(payment.date).format('DD MMM, YYYY. h:mma')}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default PaymentHistory;
