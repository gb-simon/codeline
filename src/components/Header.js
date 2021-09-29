import React from 'react';
import {MdExposure} from 'react-icons/md';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Code Line</h1>
			<MdExposure
				size={35}
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='darkmode-icon'
			> darkMode 
			</MdExposure>
		</div>
	);
};

export default Header;
