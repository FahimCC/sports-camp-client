import useTitle from '../../hooks/useTitle';
import Slider from './Slider';

const Home = () => {
	useTitle('Home');
	return (
		<div>
			<Slider />
		</div>
	);
};

export default Home;
