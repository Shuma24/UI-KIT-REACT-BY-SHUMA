import React from 'react';
import '@/components/buttons/button.scss';

interface IProps {
	label: string;
	disabled?: boolean;
	styles:
		| 'default'
		| 'primary'
		| 'success'
		| 'info'
		| 'warn'
		| 'disabled'
		| 'success_text'
		| 'info_text'
		| 'disabled_text'
		| 'default_text'
		| 'primary_text'
		| 'warn_text'
		| 'success_outlined'
		| 'info_outlined'
		| 'default_outlined'
		| 'primary_outlined'
		| 'warn_outlined'
		| 'disabled_outlined';
	size: 'small' | 'medium' | 'large';
	icon?: 'delete' | 'send' | 'upload' | 'talk' | 'save';
	event: () => void;
}

const buttonsSize = ['small', 'medium', 'large'];
const buttonType = [
	'default',
	'primary',
	'success',
	'warn',
	'disabled',
	'success_text',
	'disabled_text',
	'default_text',
	'primary_text',
	'warn_text',
	'success_outlined',
	'default_outlined',
	'primary_outlined',
	'warn_outlined',
	'disabled_outlined',
];

const buttonIcons = {
	none: null,
	delete: (
		<svg
			className="button_icon"
			width="14"
			height="18"
			viewBox="0 0 14 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
				fill="white"
			/>
		</svg>
	),

	send: (
		<svg
			className="button_icon"
			width="21"
			height="18"
			viewBox="0 0 21 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.01 18L21 9L0.01 0L0 7L15 9L0 11L0.01 18Z"
				fill="white"
			/>
		</svg>
	),

	upload: (
		<svg
			className="button_icon"
			width="24"
			height="16"
			viewBox="0 0 24 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.35 6.04C18.6573 2.52946 15.5782 -0.000809104 12 1.94082e-07C9.11 1.94082e-07 6.6 1.64 5.35 4.04C2.30633 4.36892 -0.000355612 6.9386 4.11215e-08 10C4.11215e-08 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM14 9V13H10V9H7L12 4L17 9H14Z"
				fill="black"
				fillOpacity="0.87"
			/>
		</svg>
	),

	talk: (
		<svg
			className="button_icon"
			width="14"
			height="19"
			viewBox="0 0 14 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7 12C8.66 12 9.99 10.66 9.99 9L10 3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM12.3 9C12.3 12 9.76 14.1 7 14.1C4.24 14.1 1.7 12 1.7 9H0C0 12.42 2.72 15.23 6 15.72V19H8V15.72C11.28 15.24 14 12.42 14 9H12.3Z"
				fill="black"
				fillOpacity="0.7"
			/>
		</svg>
	),

	save: (
		<svg
			className="button_icon"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.4444 0H1.77778C0.795938 0 0 0.795938 0 1.77778V14.2222C0 15.2041 0.795938 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V3.55556L12.4444 0ZM8 14.2222C6.52444 14.2222 5.33333 13.0311 5.33333 11.5556C5.33333 10.08 6.52444 8.88889 8 8.88889C9.47556 8.88889 10.6667 10.08 10.6667 11.5556C10.6667 13.0311 9.47556 14.2222 8 14.2222ZM10.6667 5.33333H1.77778V1.77778H10.6667V5.33333Z"
				fill="#1D1D1D"
			/>
		</svg>
	),
};

export const Button: React.FC<IProps> = ({ label, disabled, styles, size, icon, event }) => {
	const checkButtonSize: string = buttonsSize.includes(size) ? size : buttonsSize[0];
	const checkButtonType: string = buttonType.includes(styles) ? styles : buttonType[0];
	const checkButtonIcon = Object.hasOwn(buttonIcons, icon as string)
		? buttonIcons[icon!]
		: buttonIcons.none;

	return (
		<>
			<button
				className={`button  ${checkButtonType} ${checkButtonSize} `}
				disabled={disabled}
				onClick={event}
			>
				{label}
				{checkButtonIcon}
			</button>
		</>
	);
};
