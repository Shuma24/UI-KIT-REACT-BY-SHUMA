import React from 'react';
import { Link } from 'react-router-dom';

import '@/layouts/Header/header.scss';

export const Header: React.FC = () => {
	return (
		<header className="header">
			<Link to="/">MATERIAL-UI COMPONENTS BY SHUMA</Link>
		</header>
	);
};
