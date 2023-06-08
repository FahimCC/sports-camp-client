import useTitle from '../../hooks/useTitle';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import Slider from './Slider';

const Home = () => {
	useTitle('Home');
	return (
		<div>
			<Slider />
			<PopularClasses />
			<PopularInstructor />
		</div>
	);
};

export default Home;
