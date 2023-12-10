import { useState } from 'react';
import { SleepCyclesResults } from '../components/SleepCyclesResults';

/*  este componente recebe um input do user (bedtime) e passa-o, após a adição de 14 minutos (tempo aproximado para adormecer), para sleepcyclesresults para ser calculado o resultado*/

function SleepCyclesCalculator() {
	// states
	const [bedtime, setBedtime] = useState('22:30');
	const [showResults, setShowResults] = useState(false);

	// calculate the time user will fall asleep
	const calculateSleepTime = value => {
		value = value.split(':');
		let hours = parseInt(value[0]);
		let minutes = parseInt(value[1]);

		if (minutes + 14 > 60) {
			hours += Math.floor((minutes + 14) / 60);
			minutes = (minutes + 14) % 60;
		} else {
			minutes += 14;
		}

		hours = hours % 24;
		minutes = minutes % 60;

		if (hours < 10) {
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		let timeUserFallsAsleep = hours + ':' + minutes;

		return timeUserFallsAsleep;
	};

	// input change handler
	const bedtimeInputChange = event => {
		setShowResults(false);
		console.log(event.target.value);
		setBedtime(calculateSleepTime(event.target.value));
	};

	// calculate the cycles when button is clicked
	const calculateCyclesShow = () => {
		setShowResults(true);
		window.scrollBy(0, 100); // little scroll for visibility
		console.log('your bedtime is: ' + bedtime);
	};

	return (
		<>
			<div className='container-lg border rounded mt-5 p-5'>
				<div className='container-fluid p-4'>
					<h2>Sleep Cycles Calculator</h2>

					<div className='col-sm-6 mt-4'>
						<div className='form-group'>
							<label htmlFor='bedtimeInput'>Insert your bedtime:</label>
							<div className='d-flex align-items-center'>
								<input onChange={bedtimeInputChange} type='time' id='bedtimeInput' name='bedtimeInput' className='form-control m-3' placeholder='22:30' />

								<button onClick={calculateCyclesShow} className='btn btn-sm btn-primary p-2'>
									submit
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* if showResults is true, render SleepCyclesResults (+ props bedtime)*/}
				{showResults && <SleepCyclesResults bedtime={bedtime} />}
			</div>
		</>
	);
}

export default SleepCyclesCalculator;
