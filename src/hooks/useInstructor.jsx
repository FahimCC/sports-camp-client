import { useQuery } from '@tanstack/react-query';
import useUser from './UseUser';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user, loading } = useUser();
	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ['isInstructor', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
			return res.data.instructor;
		},
	});

	return { isInstructor, isInstructorLoading };
};

export default useInstructor;
