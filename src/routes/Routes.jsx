import { createBrowserRouter } from 'react-router-dom';
import MyEnrolledClasses from '../Dashboard/MyEnrolledClasses';
import MySelectedClasses from '../Dashboard/MySelectedClasses';
import PaymentHistory from '../Dashboard/PaymentHistory';
import Profile from '../Dashboard/Profile';
import Dashboard from '../layouts/Dashboard';
import Main from '../layouts/Main';
import Classes from '../pages/Classes/Classes';
import Home from '../pages/Home/Home';
import Instructor from '../pages/Instructors/Instructors';
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
	{
		path: '/dashboard',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'my-selected-classes',
				element: <MySelectedClasses />,
			},
			{
				path: 'my-enrolled-classes',
				element: <MyEnrolledClasses />,
			},
			{
				path: 'payment-history',
				element: <PaymentHistory />,
			},
		],
	},
]);

export default router;
