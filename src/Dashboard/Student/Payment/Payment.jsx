import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
	const { id } = useParams();
	console.log('payment: ', id);
	const [axiosSecure] = useAxiosSecure();

	const { data: clas = [] } = useQuery({
		queryKey: ['clas', id],
		queryFn: async () => {
			const res = await axiosSecure.get(`/remove-select-class/${id}`);
			console.log(res.data);
			return res.data;
		},
	});
	console.log(clas);

	return (
		<div>
			<SectionTitle title={'Payment'} />
			<Elements stripe={stripePromise}>
				<CheckoutForm clas={clas} />
			</Elements>
		</div>
	);
};

export default Payment;
