import { useState } from 'react';
import BedtimeResults from './BedtimeResults';

function BedtimeCalculator() {
	const [wakeUp, setWakeUp] = useState('07:00');
	const [showBestBedtimeForWakeUp, setshowBestBedtimeForWakeUp] = useState(false);

	const wakeUpChange = event => {
		setshowBestBedtimeForWakeUp(false);
		setWakeUp(event.target.value);
	};

	const handleSubmitWakeUp = () => {
		window.scrollBy(0, 200);
		setshowBestBedtimeForWakeUp(true);
	};

	return (
		<div className='container-lg border rounded mt-3 p-5'>
			<div className='container-fluid p-4'>
				<h2>Bedtime Calculator</h2>
				<div className='col-sm-6 mt-4'>
					<div className='form-group'>
						<label htmlFor='wakeupInput'>Insert your usual wake up time:</label>
						<div className='d-flex align-items-center'>
							<input onChange={wakeUpChange} type='time' id='wakeupInput' name='wakeupInput' className='form-control m-3' placeholder='07:00' />
							<button onClick={handleSubmitWakeUp} className='btn btn-sm btn-primary p-2'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* if showResults is true, render bedtimeResults (+ props bedtime)*/}
			{showBestBedtimeForWakeUp && <BedtimeResults wakeUp={wakeUp} />}
		</div>
	);
}

export default BedtimeCalculator;
