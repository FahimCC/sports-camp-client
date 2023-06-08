import useTitle from '../../hooks/useTitle';
import PopularClasses from './PopularClasses';
import Slider from './Slider';

const Home = () => {
	useTitle('Home');
	return (
		<div>
			<Slider />
			<PopularClasses />
		</div>
	);
};

export default Home;
