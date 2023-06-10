import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import useUser from '../hooks/UseUser';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {
	const { user, loading } = useUser();
	const { isInstructor, isInstructorLoading } = useInstructor();
	const location = useLocation();

	if (loading || isInstructorLoading) {
		return <Loader />;
	}
	if (user && isInstructor) {
		return children;
	} else {
		return (
			<Navigate
				to='/dashboard/profile'
				state={{ from: location }}
				replace
			></Navigate>
		);
	}
};

export default InstructorRoute;
