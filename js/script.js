const birthday = "5 Jan 2023";

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);

    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

}

function formatTime(time) {
    if(time<10){
        return '0'+time;
    }
    else{
        return time;
    }
}

countdown();
setInterval(countdown, 1000);