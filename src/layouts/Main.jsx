import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Loading from '../pages/Shared/Loading';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;
