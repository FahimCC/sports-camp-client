import { useEffect } from 'react';

const useTheme = isTheme => {
	useEffect(() => {
		const html = document.querySelector('html');
		if (!isTheme) {
			html.setAttribute('data-theme', 'lemonade');
			document.body.setAttribute('class', 'bg-[#fff] h-screen');
			localStorage.setItem('data-theme', 'lemonade');
		} else {
			html.setAttribute('data-theme', 'forest');
			document.body.setAttribute('class', 'bg-[#1a222c]');

			localStorage.setItem('data-theme', 'forest');
		}
	}, [isTheme]);
};
export default useTheme;
