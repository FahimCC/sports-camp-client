import useTitle from '../hooks/useTitle';
import useUser from '../hooks/useUser';
import './Profile.css';

const Profile = () => {
	const { user } = useUser();
	useTitle(user.displayName);
	return (
		<div className='w-full md:w-1/3 rounded-2xl'>
			<div className='relative'>
				<img
					className='rounded-2xl'
					src='https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/284841278_3066764866909940_520334753155834408_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q3slq3N_qmAAX9mkks6&_nc_ht=scontent.fdac41-1.fna&oh=00_AfD1aB0XpR-pOS4LP4xBsgnoB_RMEm3E4wUdS7aln52eQA&oe=64889B3F'
					alt=''
				/>
				<div className='poly bg-black bg-opacity-70 p-6 absolute bottom-0 right-0 left-0  text-right rounded-b-2xl'>
					<h1 className='clip text-2xl font-semibold'>{user.displayName}</h1>
					<p className='text-warning'>Student</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
