import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useUser from '../hooks/UseUser';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useTitle from '../hooks/useTitle';
import './Profile.css';

const Profile = () => {
	const { user } = useUser();
	const { isAdmin } = useAdmin();
	const { isInstructor } = useInstructor();
	useTitle(user.displayName);
	const location = useLocation();

	const from = location?.state?.from?.pathname;
	if (from) {
		// toast.error('Unauthorized Access');
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Unauthorized Access',
			showConfirmButton: false,
			timer: 2000,
		});
	}

	return (
		<div className='w-full md:w-1/3 rounded-2xl'>
			<div className='relative'>
				<img className='rounded-2xl w-full' src={user.photoURL} alt='' />
				<div className='poly bg-black bg-opacity-70 p-6 absolute bottom-0 right-0 left-0  text-right rounded-b-2xl'>
					<h1 className='clip text-2xl font-semibold'>{user.displayName}</h1>
					<p className='text-warning'>
						{isAdmin ? 'ADMIN' : isInstructor ? 'INSTRUCTOR' : 'STUDENT'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
