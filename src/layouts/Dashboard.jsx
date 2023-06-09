import { useState } from 'react';
import { BiSelectMultiple } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { CgLogOut } from 'react-icons/cg';
import { FaHome, FaUserTie, FaUsers } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { IoMdLogIn } from 'react-icons/io';
import { ImProfile } from 'react-icons/im';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import useTheme from '../hooks/useTheme';
import './Dashboard.css';

const Dashboard = () => {
	const [theme, setTheme] = useState();
	const handleThemeChange = event => {
		setTheme(event.target.checked);
	};
	useTheme(theme);

	return (
		<div className='drawer lg:drawer-open'>
			<input id='menu' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col items-center justify-center'>
				<Outlet />
				<label
					htmlFor='menu'
					className='btn btn-primary drawer-button lg:hidden absolute left-1 top-0.5'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h8m-8 6h16'
						/>
					</svg>
				</label>
			</div>
			<div className='absolute top-2 right-2 border-4 border-dotted border-primary rounded-full'>
				<label className='swap swap-rotate p-2 text-lg md:text-2xl '>
					{/* this hidden checkbox controls the state */}
					<input onChange={handleThemeChange} type='checkbox' />

					<BsSun className='swap-on' />
					<BsMoon className='swap-off' />
				</label>
			</div>
			<div className='drawer-side w-56 md:w-56 lg:w-64  h-screen bg-base-100'>
				<label htmlFor='menu' className='drawer-overlay bg-base-100'></label>
				<div className='flex justify-center items-center pt-6'>
					<label htmlFor='menu' className='ml-5 lg:hidden'>
						<MdKeyboardBackspace className='text-2xl' />
					</label>
					<Link to='/dashboard'>
						<Logo />
					</Link>
				</div>
				<ul className='menu py-4  text-base-content mt-20 font-medium lg:text-lg'>
					{/* Sidebar content here */}
					<li className=' hover:text-primary'>
						<Link to='profile'>
							<ImProfile className='text-base' /> Profile
						</Link>
					</li>
					<li className=' hover:text-primary'>
						<Link to='my-selected-classes'>
							<BiSelectMultiple className='text-base' />
							My Selected Classes
						</Link>
					</li>
					<li className=' hover:text-primary'>
						<Link to='my-enrolled-classes'>
							<IoMdLogIn className='text-base' />
							My Enrolled Classes
						</Link>
					</li>
					<li className=' hover:text-primary'>
						<Link to='payment-history'>
							<GiWallet />
							Payment History
						</Link>
					</li>
					<li className='border-b-2 border-primary pb-4 mb-4 bg-transparent'></li>
					<li className=' hover:text-primary'>
						<Link to='/'>
							<FaHome />
							Home
						</Link>
					</li>
					<li className=' hover:text-primary'>
						<Link to='/classes'>
							<FaUsers />
							Classes
						</Link>
					</li>
					<li className=' hover:text-primary'>
						<Link to='/instructor'>
							<FaUserTie />
							Instructor
						</Link>
					</li>
					<li className=' hover:text-primary'>
						<Link>
							<CgLogOut />
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
