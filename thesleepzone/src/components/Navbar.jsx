import { useState } from 'react';

function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light border text-center'>
				<div className='container'>
					<div className='collapse navbar-collapse justify-content-center'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<h1 className='d-block'>The Sleep Zone</h1>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
