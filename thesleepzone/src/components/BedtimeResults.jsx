import React from 'react';
import { useState } from 'react';

export const BedtimeResults = ({ wakeUp }) => {
	const [showInfo, setShowInfo] = useState(false);

	// CONVERT TIME IN MINUTES TO HOURS:MINUTES (——)
	function timeConvert(num) {
		let hours = Math.floor(num / 60); // math.floor rounds down to the nearest integer
		let minutes = num % 60; // the remainder is the minutes

		// resets day when it reaches 24
		if (hours >= 24) {
			hours -= 24;
		}

		// add leading 0
		if (hours < 10) {
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return hours + ':' + minutes;
	}

	// calculate the best bedtime according to targeted wakeup
	const calculateOptimalBedtime = () => {
		wakeUp = wakeUp.split(':');

		let hours = parseInt(wakeUp[0]);
		let minutes = parseInt(wakeUp[1]);

		let totalMinutes = hours * 60 + minutes;
		// 7h 44 minutes = 464 minutes (7.5h cycles + 14mins fall asleep time)
		totalMinutes -= 464;
		console.log(totalMinutes);

		// if the time is negative, add 24 hours
		if (totalMinutes < 0) {
			totalMinutes = 24 * 60 - Math.abs(totalMinutes); // use the module to avoid errors (since totalminutes is negative)
			console.log(totalMinutes);
		}

		let time = timeConvert(totalMinutes);

		return time;
	};

	// info show/hide
	const handleInfoClick = () => {
		setShowInfo(!showInfo);
	};

	return (
		<>
			<div className='container-lg border rounded mt-4 p-1'>
				<div className='container-fluid p-4'>
					<h5 className='text-center'>
						Optimal Bedtime{' '}
						<span onClick={handleInfoClick} className='span'>
							ℹ
						</span>
					</h5>

					{showInfo && (
						<>
							<hr />
							<p className='text-center'>Your optimal bedtime is determined by ensuring you have a sleep duration of 5 cycles, which is approximately 7.5 hours, before waking up.</p>
						</>
					)}
					<hr />
					<ul className='list-unstyled text-center'>
						<li>{calculateOptimalBedtime()}</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default BedtimeResults;
