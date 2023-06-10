import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import router from './routes/Routes.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<div className=' font-inter'>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
				<Toaster />
			</div>
		</QueryClientProvider>
	</React.StrictMode>
);
