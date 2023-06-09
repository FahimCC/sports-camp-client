import useTitle from '../../hooks/useTitle';
import Photos from './Photos';
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
			<Photos />
		</div>
	);
};

export default Home;
