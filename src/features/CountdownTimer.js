import { useEffect, useState, useRef, useCallback } from 'react';

const CountdownTimer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = useCallback(() => {
        const countdownDate = new Date('August 19, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop time
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    },[]);

    useEffect(() => {
        startTimer();
        // console.log(1);
        return () => {
            clearInterval(interval.current);
        }
    }, [startTimer]);

    return (
        <section className='timer text-white m-3' style={{ fontSize: '2vw'}}>
            <div className=''>
                <section>
                    <p className='mt-3 mb-0 pb-0'>{timerDays}</p>
                    <p><small>Days</small></p>
                </section>
            </div>
            <span className='mt-3 mb-0 pb-0'>:</span>
            <div>
                <section>
                    <p className='mt-3 mb-0 pb-0'>{timerHours}</p>
                    <p><small>Hrs</small></p>
                </section>
            </div>
            <span className='mt-3 mb-0 pb-0'>:</span>
            <div>
                <section>
                    <p className='mt-3 mb-0 pb-0'>{timerMinutes}</p>
                    <p><small>Mins</small></p>
                </section>
            </div>
            <span className='mt-3 mb-0 pb-0'>:</span>
            <div>
                <section>
                    <p className='mt-3 mb-0 pb-0'>{timerSeconds}</p>
                    <p><small>Secs</small></p>
                </section>
            </div>
        </section>
    );
};

export default CountdownTimer;