import React from 'react';
import { useState } from 'react';

/* accepts a 'bedtime' prop */
export const SleepCyclesResults = ({ bedtime }) => {
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

	// calculate wake up times, returning an array with them
	const calculateCyclesArray = () => {
		let wakeTimes = [];

		bedtime = bedtime.split(':');
		let hours = parseInt(bedtime[0]);
		let minutes = parseInt(bedtime[1]);

		let totalMinutes = hours * 60 + minutes; // use minutes to avoid rounding
		//		console.log(totalMinutes);

		for (let i = 90; i <= 450; i += 90) {
			// 1.5 hours = 90 minutes
			totalMinutes += i;
			console.log(`i: ${i}, totalMinutes: ${totalMinutes}, time: ${timeConvert(totalMinutes)}`);
			let time = timeConvert(totalMinutes);

			wakeTimes.push({ time: time, cycles: Math.floor(i / 90) }); // push the wake up time to the array
			totalMinutes -= i; // reset totalMinutes for the next iteration
		}
		// return the array of wake up times
		return wakeTimes;
	};

	// show/hide information
	const handleInfoClick = () => {
		setShowInfo(!showInfo);
	};

	return (
		<>
			<div className='container-lg border rounded mt-4 p-1'>
				<div className='container-fluid p-4'>
					<h5 className='text-center'>
						Recommended Wake Up Times{' '}
						<span onClick={handleInfoClick} className='span'>
							ℹ
						</span>
					</h5>

					{showInfo && (
						<>
							<hr />
							<p className='text-center'>
								14 minutes have been added to your bedtime to account for the time it takes the average human to fall asleep. If you wake up at one of these suggested times, you won't disrupt your
								sleep. It is always recommended to sleep for at least 4 sleep cycles, which is 6 hours.{' '}
							</p>
						</>
					)}
					<hr />
					<ul className='list-unstyled text-center'>
						{/* map through the array of wake up times */}
						{calculateCyclesArray()
							.reverse()
							.map((timeObj, index) => (
								<li className='m-2 p-1' key={index}>
									{timeObj.time}
									{' | '}
									{timeObj.cycles} cycles
								</li>
							))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default SleepCyclesResults;
