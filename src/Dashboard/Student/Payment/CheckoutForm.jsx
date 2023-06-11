import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useUser from '../../../hooks/UseUser';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckoutForm = ({ clas }) => {
	const { _id, classImage, className, price } = clas;
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const stripe = useStripe();
	const elements = useElements();
	const [axiosSecure] = useAxiosSecure();
	const { user } = useUser();
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');
	const navigation = useNavigate();

	useEffect(() => {
		axiosSecure.post('/create-payment-intent', { price }).then(res => {
			// console.log(res.data.clientSecret);
			setClientSecret(res.data.clientSecret);
		});
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			setCardError(error?.message);
			console.log('payment error: ', error);
		} else {
			setCardError('');
			// console.log('payment method', paymentMethod);
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || 'anonymous',
						email: user?.email || 'anonymous',
					},
				},
			});

		if (confirmError) {
			setCardError(confirmError);
			console.log(confirmError);
		}

		setProcessing(false);
		if (paymentIntent.status === 'succeeded') {
			setTransactionId(paymentIntent.id);

			const paymentDetails = {
				classImage,
				className,
				name: user?.displayName,
				email: user?.email,
				transactionId,
				price,
				date: new Date(),
				selectedClassId: _id,
			};
			axiosSecure.patch(`/select-class/${_id}`).then(res => {
				if (res.data.modifiedCount > 0) {
					console.log(res.data.modifiedCount);
				}
			});
			axiosSecure.post('/payment', paymentDetails).then(res => {
				if (res.data.insertedId) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Payment Successful',
						showConfirmButton: false,
						timer: 2000,
					});
					navigation('/dashboard/my-selected-classes');
				}
			});
		}
	};

	return (
		<div className='w-full md:w-[450px] lg:w-[600px] border-4 border-primary p-10 rounded-lg hover:border-double'>
			<form className='max-w-full' onSubmit={handleSubmit}>
				<div className='border-2 p-2 rounded-lg hover:border-dashed'>
					<CardElement
						options={{
							style: {
								base: {
									fontSize: '16px',
									color: '#424770',
									'::placeholder': {
										color: '#aab7c4',
									},
								},
								invalid: {
									color: '#9e2146',
								},
							},
						}}
					/>
				</div>
				<div className='text-center mt-5'>
					<button
						className='btn btn-sm btn-success text-black'
						type='submit'
						disabled={!stripe || !clientSecret || processing}
					>
						Pay
					</button>
					<p className='text-red-400 text-center text-sm mt-2'>{cardError}</p>
					{transactionId && (
						<p className='text-green-400 text-center text-sm mt-2'>
							Payment Successful
						</p>
					)}
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
