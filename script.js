function countWeekdays(startDate, endDate) {
    let count = 0;
    const curDate = new Date(startDate);

    while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        if (1==1) {
            count++;
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

const targetDate = new Date('June 4, 2025 12:30:00');

const countdownInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();

    // Calculate total days excluding weekends
    const totalDays = countWeekdays(now, targetDate);

    // Calculate remaining hours, minutes, and seconds
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the DOM with the new values
    document.getElementById('days').textContent = totalDays;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "School's Out!";
    }
}, 1000);


    // Confetti animation
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 500; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confettiPiece);
    }

    // Balloon animation
    const balloonContainer = document.querySelector('.balloons');
    for (let i = 0; i < 500; i++) {
        const balloon = document.createElement('p');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 5 + 3 + 's';
        balloon.textContent="🎈";
        balloonContainer.appendChild(balloon);
    }
