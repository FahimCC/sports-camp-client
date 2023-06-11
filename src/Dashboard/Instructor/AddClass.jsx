import axios from 'axios';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BiRun } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useUser from '../../hooks/UseUser';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const AddClass = () => {
	useTitle('Add Class');

	const navigate = useNavigate();

	const imageHostingURL = `https://api.imgbb.com/1/upload?key=${
		import.meta.env.VITE_IMAGE_API
	}`;

	const { user } = useUser();
	const [axiosSecure] = useAxiosSecure();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		const formData = new FormData();
		formData.append('image', data.classImage[0]);

		axios.post(imageHostingURL, formData, { mode: 'no-cors' }).then(imgRes => {
			console.log(imgRes.data);
			if (imgRes.data.success) {
				data.classImage = imgRes.data.data.display_url;
				data.price = parseFloat(data.price);
				data.availableSeat = parseInt(data.availableSeat);
				console.log(data);

				axiosSecure.post('/add-class', data).then(data => {
					if (data.data.insertedId) {
						reset();
						Swal.fire({
							position: 'top-end',
							icon: 'info',
							title: 'The class has been recorded. Please wait for approval.',
							showConfirmButton: false,
							timer: 3000,
						});
						navigate('/dashboard/my-classes');
					}
				});
			}
		});
	};
	console.log(errors);
	return (
		<div>
			<SectionTitle title='Add Class'></SectionTitle>
			<div className='border-2 hover:border-secondary rounded-lg'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='p-5 md:p-10 space-y-5'
				>
					<div className='flex gap-8'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Class Name*</span>
							</label>
							<input
								type='text'
								placeholder='Class Name*'
								{...register('className', { required: true })}
								className='input input-bordered'
							/>
							{errors.className?.type === 'required' && (
								<small className='text-red-400 mt-1 text-xs'>
									Class Name is required
								</small>
							)}
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Class Image*</span>
							</label>
							<input
								type='file'
								className='file-input file-input-bordered file-input-primary w-full max-w-xs'
								{...register('classImage', { required: true })}
							/>
							{errors.photo?.type === 'required' && (
								<small className='text-red-400 mt-1 text-xs'>
									Class Image is required
								</small>
							)}
						</div>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Instructor Name*</span>
							</label>
							<input
								type='text'
								value={user?.displayName}
								className='input input-bordered'
								{...register('instructorName', {})}
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Instructor Email*</span>
							</label>
							<input
								type='email'
								value={user?.email}
								className='input input-bordered'
								{...register('instructorEmail', {})}
							/>
						</div>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Available Seats*</span>
							</label>
							<input
								type='text'
								placeholder='Available Seats*'
								{...register('availableSeat', { required: true })}
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
								placeholder='Price*'
								{...register('price', { required: true })}
								className='input input-bordered w-full '
							/>
							{errors.price?.type === 'required' && (
								<small className='text-red-400 mt-1 text-xs'>
									Class Image is required
								</small>
							)}
						</div>
					</div>
					<div className='text-center'>
						<button type='submit' className='btn btn-primary'>
							<motion.span
								className='mr-4'
								animate={{
									x: 20,
									y: 0,
									scale: 1,
									rotate: 0,
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
								}}
							>
								<BiRun className='text-2xl' />
							</motion.span>
							Add Class
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddClass;
