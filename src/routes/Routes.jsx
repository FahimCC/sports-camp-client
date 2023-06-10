import { createBrowserRouter } from 'react-router-dom';
import ManageClasses from '../Dashboard/Admin/ManageClasses';
import ManageUsers from '../Dashboard/Admin/ManageUsers';
import AddClass from '../Dashboard/Instructor/AddClass';
import MyClasses from '../Dashboard/Instructor/MyClasses';
import Profile from '../Dashboard/Profile';
import MyEnrolledClasses from '../Dashboard/Student/MyEnrolledClasses';
import MySelectedClasses from '../Dashboard/Student/MySelectedClasses';
import PaymentHistory from '../Dashboard/Student/PaymentHistory';
import ErrorPage from '../components/ErrorPage';
import Dashboard from '../layouts/Dashboard';
import Main from '../layouts/Main';
import Classes from '../pages/Classes/Classes';
import Home from '../pages/Home/Home';
import Instructor from '../pages/Instructors/Instructors';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from '../routes/PrivateRoute';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';

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
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
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
			{
				path: 'add-class',
				element: (
					<InstructorRoute>
						<AddClass />
					</InstructorRoute>
				),
			},
			{
				path: 'my-classes',
				element: (
					<InstructorRoute>
						<MyClasses />
					</InstructorRoute>
				),
			},
			{
				path: 'manage-classes',
				element: (
					<AdminRoute>
						<ManageClasses />
					</AdminRoute>
				),
			},
			{
				path: 'manage-users',
				element: (
					<AdminRoute>
						<ManageUsers />
					</AdminRoute>
				),
			},
		],
	},
]);

export default router;
