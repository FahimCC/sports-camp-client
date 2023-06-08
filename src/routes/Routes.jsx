import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Classes from '../pages/Classes/Classes';
import Home from '../pages/Home/Home';
import Instructor from '../pages/Instructor/Instructor';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/Shared/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/classes',
				element: <Classes />,
			},
			{
				path: '/instructor',
				element: <Instructor />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

export default router;
