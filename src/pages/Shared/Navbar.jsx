import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import useUser from '../../hooks/UseUser';

const Navbar = () => {
	const { user, logOut } = useUser();

	// const [theme, setTheme] = useState();
	// const handleThemeChange = event => {
	// 	setTheme(event.target.checked);
	// };
	// useTheme(theme);

	// use theme from local storage if available or set light theme
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

	const navigationBar = (
		<>
			<li className=' hover:text-primary'>
				<Link to='/'>Home</Link>
			</li>
			<li className=' hover:text-primary'>
				<Link to='/instructor'>Instructors</Link>
			</li>
			<li className=' hover:text-primary'>
				<Link to='/classes'>Classes</Link>
			</li>
			{user && (
				<li className=' hover:text-primary'>
					<Link to='/dashboard/profile'>Dashboard</Link>
				</li>
			)}
		</>
	);
	return (
		<div className='border-b border-second'>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar-start '>
						<div className='dropdown'>
							<label tabIndex={0} className=' -ml-6 btn btn-ghost lg:hidden '>
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
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold z-10'
							>
								{navigationBar}
							</ul>
						</div>
						<Link to='/' className='hidden lg:block'>
							<Logo />
						</Link>
					</div>
					<Link to='/' className='lg:hidden block navbar-center'>
						<Logo />
					</Link>
					<div className='navbar-center hidden lg:flex '>
						<ul className='menu menu-horizontal px-1 text-lg font-semibold'>
							{navigationBar}
						</ul>
					</div>
					<div className='navbar-end'>
						<label className='swap swap-rotate pr-2 text-lg md:text-2xl'>
							{/* this hidden checkbox controls the state */}
							<input
								type='checkbox'
								onChange={handleToggle}
								// show toggle image based on localstorage theme
								checked={theme === 'lemonade' ? false : true}
							/>

							<BsSun className='swap-on' />
							<BsMoon className='swap-off' />
						</label>
						{!user ? (
							<Link
								to='/login'
								className='text-sm md:text-lg font-semibold px-2 py-1 md:px-4 md:py-2 outline outline-primary squeeze hover:outline-secondary rounded-lg'
							>
								Login
							</Link>
						) : (
							<>
								<div className='dropdown dropdown-end'>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-circle avatar'
									>
										<div className='w-10 rounded-full'>
											<img src={user.photoURL} />
										</div>
									</label>
									<ul
										tabIndex={0}
										className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10'
									>
										<li>
											<Link onClick={() => logOut()}>Logout</Link>
										</li>
									</ul>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
