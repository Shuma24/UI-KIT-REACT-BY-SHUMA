import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@/pages/Error/Error';
import { App } from '@/pages/home/App';
import { Buttons } from '@/pages/buttons/Buttons';
import { Button } from '@/components/buttons/Button';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/buttons',
				element: <Buttons />,
			},
			{
				path: '/test',
				element: <h1>hello</h1>,
			},
		],
	},
]);
