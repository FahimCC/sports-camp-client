import { useEffect } from 'react';

const useTheme = isTheme => {
	useEffect(() => {
		const html = document.querySelector('html');
		if (!isTheme) {
			html.setAttribute('data-theme', 'lemonade');
			localStorage.setItem('data-theme', 'lemonade');
		} else {
			html.setAttribute('data-theme', 'forest');
			localStorage.setItem('data-theme', 'forest');
		}
	}, [isTheme]);
};
export default useTheme;
