function showTime() {
    let time = new Date().toLocaleTimeString('en-US');
    document.getElementById('clock').innerText = time;
}

showTime();
setInterval(showTime, 1000);