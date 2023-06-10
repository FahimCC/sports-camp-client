import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BiRun } from 'react-icons/bi';
import SectionTitle from '../../components/SectionTitle';
import useTitle from '../../hooks/useTitle';

const AddClass = () => {
	useTitle('Add Class');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data);
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
								{...register('photo', { required: true })}
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
								defaultValue={'Fahim Faysal'}
								className='input input-bordered'
								{...register('instructorName', { required: true })}
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Instructor Email*</span>
							</label>
							<input
								type='email'
								defaultValue={'ffnasi@gmail.com'}
								className='input input-bordered'
								{...register('instructorEmail', { required: true })}
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
