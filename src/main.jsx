import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='font-inter'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
