import { useEffect } from 'react';

const useTheme = theme => {
	useEffect(() => {
		document.querySelector('html').setAttribute('data-theme', theme);
	}, [theme]);
};
export default useTheme;
