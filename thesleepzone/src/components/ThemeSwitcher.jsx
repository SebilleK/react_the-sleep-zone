import { useState } from 'react';

function ThemeSwitcher() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			document.documentElement.setAttribute('data-bs-theme', 'dark');
		} else {
			setTheme('light');
			document.documentElement.setAttribute('data-bs-theme', 'light');
		}
	};

	return (
        <div className='form-check form-switch d-flex align-items-center justify-content-center gap-3
        border p-2'>
			<input className='form-check-input' type='checkbox' role='switch' id='flexSwitchCheckDefault' onChange={toggleTheme} />
			<label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
				{theme === 'light' ? <>💡 Light Theme </> : <>Dark Theme 🌌</>}
			</label>
		</div>
	);
}

export default ThemeSwitcher;