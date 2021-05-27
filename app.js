

const countDown = () => {
    const launchDay = new Date('19 June, 2021 01:30:00').getTime();
    const now = new Date().getTime();

    let gap = launchDay - now;

    const seconds = 1000;
    const minute = 60 * seconds;
    const hour = 60 * minute;
    const day = 24 * hour;
    
    let leftDays = Math.floor(gap / day);
    let leftHours = Math.floor((gap % day) / hour);
    let leftMinutes = Math.floor((gap % hour) / minute);
    let leftSeconds = Math.floor((gap % minute) / seconds);

    document.querySelector('.day').innerHTML = leftDays;
    document.querySelector('.hour').innerHTML = leftHours;
    document.querySelector('.minute').innerHTML = leftMinutes;
    document.querySelector('.second').innerHTML = leftSeconds;

}

setInterval(countDown, 1000);
