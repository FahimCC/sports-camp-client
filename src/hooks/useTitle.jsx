import { useEffect } from 'react';

const useTitle = title => {
	useEffect(() => {
		document.title = `Sport Camp | ${title}`;
	}, [title]);
};

export default useTitle;
