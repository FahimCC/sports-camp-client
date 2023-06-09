const Logo = () => {
	return (
		<div className='btn btn-ghost normal-case text-xl font-semibold mt-2 font-bubblegum hover:bg-transparent bg-transparent'>
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
		</div>
	);
};
export default Logo;
