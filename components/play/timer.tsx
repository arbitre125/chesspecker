import {memo, useEffect} from 'react';
import useClock from '@/hooks/use-clock';
import useTimer from '@/hooks/use-timer';

const Timer = ({value}) => {
	const {timer, updateTimer} = useTimer(0);
	const [days, hours, minutes, seconds] = useClock(timer);

	useEffect(() => {
		updateTimer(timer);
	}, [value]);

	return (
		<div className='my-2 w-fit self-center border-2 border-white px-4 py-2 text-lg font-bold text-white'>
			{days > 0 && <span>{days}&space;:&space;</span>}
			{hours > 0 && <span>{hours}&space;:&space;</span>}
			<span>{`0${minutes}`.slice(-2)} : </span>
			<span>{`0${seconds}`.slice(-2)}</span>
		</div>
	);
};

export default memo(Timer);
