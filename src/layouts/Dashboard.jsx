import { useEffect, useState } from 'react';
import { BiSelectMultiple } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { CgLogOut } from 'react-icons/cg';
import { FaHome, FaUserCog, FaUserTie, FaUsers } from 'react-icons/fa';
import { GiBookshelf, GiWallet } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { IoMdLogIn } from 'react-icons/io';
import { MdAssignmentAdd, MdKeyboardBackspace } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import useUser from '../hooks/UseUser';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import './Dashboard.css';

const Dashboard = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'lemonade'
	);

	// update state on toggle
	const handleToggle = e => {
		if (e.target.checked) {
			setTheme('forest');
		} else {
			setTheme('lemonade');
		}
	};

	// set theme state in localstorage on mount & also update localstorage on state change
	useEffect(() => {
		localStorage.setItem('theme', theme);
		const localTheme = localStorage.getItem('theme');
		// add custom data-theme attribute to html tag required to update theme using DaisyUI
		document.querySelector('html').setAttribute('data-theme', localTheme);
	}, [theme]);

	const { logOut } = useUser();
	const { isAdmin } = useAdmin();
	const { isInstructor } = useInstructor();
	// console.log(isInstructor);

	return (
		<div className='drawer lg:drawer-open'>
			<input id='menu' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				<div className='container '>
					<div className='h-screen w-full flex items-center justify-center'>
						<Outlet />
					</div>
				</div>

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
					<input
						type='checkbox'
						onChange={handleToggle}
						// show toggle image based on local storage theme
						checked={theme === 'lemonade' ? false : true}
					/>

					<BsSun className='swap-on' />
					<BsMoon className='swap-off' />
				</label>
			</div>
			<div className='drawer-side w-56 lg:w-64  h-screen bg-base-200'>
				<label htmlFor='menu' className='drawer-overlay'></label>
				<div className='flex justify-center items-center pt-6'>
					<label htmlFor='menu' className='ml-5 lg:hidden'>
						<MdKeyboardBackspace className='text-2xl' />
					</label>
					<Link to='/dashboard/profile'>
						<Logo />
					</Link>
				</div>
				<ul className='menu py-4 md:px-5 mt-20 font-medium lg:text-lg'>
					<li className='hover:text-primary'>
						<Link to='profile' className='hover:text-primary'>
							<ImProfile className='text-base ' /> Profile
						</Link>
					</li>

					{/* Student content here */}
					{isAdmin ? (
						<>
							<li className=' hover:text-primary'>
								<Link to='manage-classes'>
									<GiBookshelf className='text-base' />
									Manage Classes
								</Link>
							</li>
							<li className=' hover:text-primary'>
								<Link to='manage-users'>
									<FaUserCog className='text-base' />
									Manage Users
								</Link>
							</li>
						</>
					) : isInstructor ? (
						<>
							<li className=' hover:text-primary'>
								<Link to='add-class'>
									<MdAssignmentAdd className='text-base' />
									Add a Class
								</Link>
							</li>
							<li className=' hover:text-primary'>
								<Link to='my-classes'>
									<HiUserGroup className='text-base' />
									My Classes
								</Link>
							</li>
						</>
					) : (
						<>
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
						</>
					)}

					{/* Home content here */}
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
						<Link onClick={() => logOut()} to='/'>
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
