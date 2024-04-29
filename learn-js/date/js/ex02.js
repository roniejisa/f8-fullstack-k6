const expires = `2024-04-30 09:30:30`;

function countdown(date) {
    const countdown = document.querySelector('.countdown');
    const daysEl = countdown.querySelector('.days .number');
    const hoursEl = countdown.querySelector('.hours .number');
    const secondsEl = countdown.querySelector('.seconds .number');
    const minutesEl = countdown.querySelector('.minutes .number');
    const expires = new Date(date);
    const secondExpires = expires.getTime();
    let timeInterval = setInterval(() => {
        const timeCurrent = new Date();
        const secondCurrent = timeCurrent.getTime();
        let totalSeconds = Math.floor((secondExpires - secondCurrent) / 1000);
        if (totalSeconds > 0) {
            const days = Math.floor(totalSeconds / (60 * 60 * 24));
            totalSeconds -= days * 24 * 60 * 60;
            const hours = Math.floor(totalSeconds / (60 * 60));
            totalSeconds -= hours * 60 * 60;
            const minutes = Math.floor(totalSeconds / 60);
            totalSeconds -= minutes * 60;
            const seconds = totalSeconds;
            daysEl.innerText = days;
            hoursEl.innerText = hours;
            minutesEl.innerText = minutes;
            secondsEl.innerText = seconds;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000)
}

countdown(expires)
