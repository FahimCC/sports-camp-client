import useTitle from '../hooks/useTitle';
import useUser from '../hooks/useUser';
import './Profile.css';

const Profile = () => {
	const { user } = useUser();
	useTitle(user.displayName);
	return (
		<div className='w-full md:w-1/3 rounded-2xl'>
			<div className='relative'>
				<img className='rounded-2xl' src={user.photoURL} alt='' />
				<div className='poly bg-black bg-opacity-70 p-6 absolute bottom-0 right-0 left-0  text-right rounded-b-2xl'>
					<h1 className='clip text-2xl font-semibold'>{user.displayName}</h1>
					<p className='text-warning'>Student</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
