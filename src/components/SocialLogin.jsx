import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import google from '../assets/google.png';
import useUser from '../hooks/UseUser';

const SocialLogin = () => {
	const navigate = useNavigate();
	const { googleSignIn } = useUser();

	const handleGoogleLogin = () => {
		googleSignIn()
			.then(result => {
				const loggedUser = result.user;
				console.log('SocialLogin: ', loggedUser);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'User Login Successful.',
					showConfirmButton: false,
					timer: 1500,
				});
				navigate('/', { replace: true });
			})
			.catch(error => console.log(error));
	};
	return (
		<>
			<div className='divider px-8'>OR</div>
			<Link
				onClick={handleGoogleLogin}
				className='border-2 hover:border-primary mt-2 mx-8 h-10 flex justify-center items-center px-3 py-1 rounded-lg squeeze'
			>
				<img className='w-11 h-8' src={google} alt='' />
				<span className='-ml-1'>Continue with Google</span>
			</Link>
		</>
	);
};

export default SocialLogin;
