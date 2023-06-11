import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const UpdateClass = () => {
	useTitle('Update Class');

	const [axiosSecure] = useAxiosSecure();
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: clas } = useQuery({
		queryKey: ['class', id],
		queryFn: async () => {
			const res = await axiosSecure.get(`/update-class/${id}`);
			return res.data;
		},
	});
	// console.log(clas);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		if (!data.availableSeat) {
			data.availableSeat = clas?.availableSeat;
		}
		if (!data.price) {
			data.price = clas?.price;
		}
		console.log(data);

		axiosSecure
			.patch(`/update-class/${id}`, {
				availableSeat: data.availableSeat,
				price: data.price,
			})
			.then(res => {
				if (res.data.modifiedCount) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `Class Updated Successful`,
						showConfirmButton: false,
						timer: 1500,
					});
					navigate('/dashboard/my-classes');
				}
			});
	};
	return (
		<div className=' flex flex-col'>
			<SectionTitle title='Update Class' />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='border-2 rounded-lg hover:border-secondary p-10'
			>
				<div className='form-control w-full '>
					<label className='label'>
						<span className='label-text'>Available Seats*</span>
					</label>
					<input
						type='text'
						defaultValue={clas?.availableSeat}
						placeholder='Available Seats*'
						{...register('availableSeat')}
						className='input input-bordered'
					/>
					{errors.availableSeat?.type === 'required' && (
						<small className='text-red-400 mt-1 text-xs'>
							Class Image is required
						</small>
					)}
				</div>
				<div className='form-control w-full '>
					<label className='label'>
						<span className='label-text'>Price*</span>
					</label>
					<input
						type='text'
						defaultValue={clas?.price}
						placeholder='Price*'
						{...register('price')}
						className='input input-bordered w-full '
					/>
					{errors.price?.type === 'required' && (
						<small className='text-red-400 mt-1 text-xs'>
							Class Image is required
						</small>
					)}
				</div>
				<div className='flex justify-center'>
					<input
						type='submit'
						className='btn btn-sm btn-primary mt-5 mx-auto'
						value='Update'
					/>
				</div>
			</form>
		</div>
	);
};

export default UpdateClass;
