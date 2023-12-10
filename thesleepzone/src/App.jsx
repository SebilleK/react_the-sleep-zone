import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Info from './components/Info';
import ThemeSwitcher from './components/themeswitcher';
import Navbar from './components/Navbar';
import SleepCyclesCalculator from './components/SleepCyclesCalculator';
import BedtimeCalculator from './components/BedtimeCalculator';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<ThemeSwitcher />
			<div className='container-lg mt-3'>
				<div className='row'>
					<div className='col-md-6'>
						<Info />
					</div>
					<div className='col-md-6'>
						<div className='row'>
							<div className='col-md-12 mb-3'>
								<SleepCyclesCalculator />
							</div>
							<div className='col-md-12'>
								<BedtimeCalculator />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default App;
