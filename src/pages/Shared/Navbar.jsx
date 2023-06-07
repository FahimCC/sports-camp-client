import { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
	const [theme, setTheme] = useState(true);

	useTheme(theme ? 'lemonade' : 'forest');
	const user = true;

	const logo = (
		<>
			<Link
				to='/'
				className='btn btn-ghost normal-case text-xl font-semibold mt-2 font-bubblegum'
			>
				Sports
				<svg
					className='-mt-4 -mx-4'
					stroke='#66cc8a'
					fill='none'
					strokeWidth='1.5'
					viewBox='0 0 24 24'
					strokeLinecap='round'
					strokeLinejoin='round'
					height='3em'
					width='3em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
					<path d='M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0'></path>
					<path d='M10.5 11h2.5l-1.5 5'></path>
				</svg>
				Camp
			</Link>
		</>
	);

	const navigationBar = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/'>Instructors</Link>
			</li>
			<li>
				<Link to='/'>Classes</Link>
			</li>
		</>
	);
	return (
		<div className='shadow-lg'>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar-start '>
						<div className='dropdown'>
							<label tabIndex={0} className=' -ml-3 btn btn-ghost lg:hidden '>
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
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold'
							>
								{navigationBar}
							</ul>
						</div>
						<Link to='/' className='hidden lg:block'>
							{logo}
						</Link>
					</div>
					<Link to='/' className='lg:hidden block navbar-center'>
						{logo}
					</Link>
					<div className='navbar-center hidden lg:flex '>
						<ul className='menu menu-horizontal px-1 text-lg font-semibold'>
							{navigationBar}
						</ul>
					</div>
					<div className='navbar-end'>
						{!user ? (
							<Link className='text-sm md:text-base px-2 py-1 md:px-4 md:py-2 outline outline-primary squeeze hover:outline-secondary rounded-lg'>
								Login
							</Link>
						) : (
							<>
								<label className='swap swap-rotate text-lg md:text-2xl'>
									{/* this hidden checkbox controls the state */}
									<input onClick={() => setTheme(!theme)} type='checkbox' />

									<BsSun className='swap-on' />
									<BsMoon className='swap-off' />
								</label>
								<div className='dropdown dropdown-end'>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-circle avatar'
									>
										<div className='w-10 rounded-full'>
											<img src='' />
										</div>
									</label>
									<ul
										tabIndex={0}
										className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
									>
										<li>
											<Link>Logout</Link>
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
