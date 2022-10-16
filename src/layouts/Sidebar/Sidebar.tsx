import React from 'react';
import { Link } from 'react-router-dom';
import '@/layouts/Sidebar/sidebar.scss';

interface IProps {
	status: boolean;
}

export const Sidebar: React.FC<IProps> = ({ status }) => {
	const links = [
		{
			name: 'Button',
			link: '/buttons',
		},
		{
			name: 'Test',
			link: '/test',
		},
	];

	return (
		<div className={status ? 'sidebar sidebar__open' : 'sidebar'}>
			{links.map((el) => (
				<Link className="sidebar__link" to={el.link} key={el.name}>
					{el.name}
				</Link>
			))}
		</div>
	);
};
