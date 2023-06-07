import { useEffect } from 'react';

const useTheme = theme => {
	useEffect(() => {
		theme
			? document.querySelector('html').setAttribute('data-theme', 'lemonade')
			: document.querySelector('html').setAttribute('data-theme', 'forest');
	}, [theme]);
};
export default useTheme;
