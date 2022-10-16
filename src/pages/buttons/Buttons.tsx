import React from 'react';

import { Button } from '@/components/buttons/Button';

const handleClick = () => {
	alert('Your logic');
};

export const Buttons: React.FC = () => {
	return (
		<>
			<h1 className="items-title">Contained Buttons</h1>
			<div className="line">
				<Button label="DEFAULT" styles="default" size="small" event={handleClick} />
				<Button label="PRIMARY" styles="primary" size="medium" event={handleClick} />
				<Button label="WARN" styles="warn" size="large" event={handleClick} />
				<Button label="DISABLED" styles="disabled" size="small" disabled event={handleClick} />
				<Button label="SUCCESS" styles="success" size="large" event={handleClick}></Button>
			</div>
			<h1 className="items-title">Text Buttons</h1>
			<div className="line">
				<Button label="DEFAULT" styles="default_text" size="medium" event={handleClick} />
				<Button label="PRIMARY" styles="primary_text" size="large" event={handleClick} />
				<Button label="WARN" styles="warn_text" size="small" event={handleClick} />
				<Button label="DISABLED" styles="disabled_text" disabled size="large" event={handleClick} />
				<Button label="SUCCESS" styles="success_text" size="large" event={handleClick}></Button>
			</div>
			<h1 className="items-title">Outlined Buttons</h1>
			<div className="line">
				<Button label="DEFAULT" styles="default_outlined" size="medium" event={handleClick} />
				<Button label="PRIMARY" styles="primary_outlined" size="large" event={handleClick} />
				<Button label="WARN" styles="warn_outlined" size="small" event={handleClick} />
				<Button
					label="DISABLED"
					styles="disabled_outlined"
					disabled
					size="medium"
					event={handleClick}
				/>
				<Button label="SUCCESS" styles="success_outlined" size="large" event={handleClick}></Button>
			</div>
			<h1 className="items-title">Icons Buttons</h1>
			<div className="line">
				<Button label="UPLOAD" styles="default" size="small" icon="upload" event={handleClick} />
				<Button label="SEND" styles="primary" size="medium" icon="send" event={handleClick} />
				<Button label="DELETE" styles="warn" icon="delete" size="medium" event={handleClick} />
				<Button label="TALK" styles="default" size="large" icon="talk" event={handleClick} />
				<Button label="SAVE" styles="default" size="large" icon="save" event={handleClick} />
			</div>
		</>
	);
};
