import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import registration from '../../assets/registration.svg';
import SocialLogin from '../../components/SocialLogin';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div className='hero my-2'>
			<div className='hero-content flex-col lg:flex-row-reverse gap-20'>
				<figure className='max-w-xl'>
					<img src={registration} alt='' />
				</figure>
				<div className='card  w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-4'>
					<h1 className='text-3xl text-center font-medium'>Register</h1>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body -my-6'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								placeholder='name'
								{...register('name', { required: true })}
								className='input input-bordered'
							/>
							{errors.name?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Name is required
								</small>
							)}
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Photo</span>
							</label>
							<input
								type='file'
								className='file-input file-input-bordered file-input-primary w-full max-w-xs'
								{...register('photo', { required: true })}
							/>
							{errors.photo?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Photo is required
								</small>
							)}
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								placeholder='email'
								{...register('email', { required: true })}
								className='input input-bordered'
							/>
							{errors.email?.type === 'required' && (
								<small className='text-error mt-1  text-xs'>
									Email is required
								</small>
							)}
						</div>
						<div className='form-control justify-center relative'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='password'
								{...register('password', {
									required: true,
									minLength: 6,
									pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
								})}
								className='input input-bordered'
							/>
							{errors.password?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Password is required
								</small>
							)}
							{errors.password?.type === 'minLength' && (
								<small className='text-error mt-1 text-xs'>
									Password must be 6 characters
								</small>
							)}
							{errors.password?.type === 'pattern' && (
								<small className='text-error mt-1 text-xs'>
									Password must be contains at least one uppercase and one
									special character.
								</small>
							)}
						</div>
						<div className='form-control justify-center relative'>
							<label className='label'>
								<span className='label-text'>Confirm Password</span>
							</label>
							<input
								type='password'
								placeholder='confirm password'
								{...register('confirmPassword', {
									required: true,
									validate: value => {
										if (watch('password') !== value) {
											// watch('password');
											return 'Your passwords do no match';
										}
									},
								})}
								className='input input-bordered'
							/>
							{errors.confirmPassword?.message && (
								<small className='text-error mt-1 text-xs'>
									{errors.confirmPassword?.message}
								</small>
							)}
						</div>
						<div className='form-control mt-6'>
							<button type='submit' className='btn bg-first hover:bg-second'>
								Register
							</button>
						</div>
					</form>
					<SocialLogin />
					<p className='text-center my-4'>
						Already registered?
						<Link to='/login' className='text-primary hover:underline pl-2'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
