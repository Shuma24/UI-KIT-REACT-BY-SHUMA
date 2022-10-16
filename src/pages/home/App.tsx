import React from 'react';
import { Header } from '@/layouts/Header/Header';
import { Sidebar } from '@/layouts/Sidebar/Sidebar';

import '@/pages/home/app.scss';
import { Buttons } from '../buttons/Buttons';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
	const [statusSidebar, setStatusSidebar] = React.useState<boolean>(true);

	const openCloseSidebar = () => {
		return setStatusSidebar(!statusSidebar);
	};

	return (
		<div className="container">
			<div className="sidebar-toggle" onClick={openCloseSidebar}>
				&#5125;
			</div>
			<Header />
			<Sidebar status={statusSidebar} />
			<div className={statusSidebar ? 'content' : 'content content__full'}>
				<Outlet />
			</div>
		</div>
	);
};
