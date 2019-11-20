

var timer = () => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minuts = time.getMinutes().toString();
    let second = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minuts.length < 2) {
        minuts = "0" + minuts;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    let resultTime = document.getElementById("message");
    if (time.getHours() < 12) {
        resultTime.innerHTML = hours + ":" + minuts + ":" + second +":" + "AM";
        document.getElementById("message").innerHTML = " Good morning!";
    } else {
        resultTime.innerHTML = hours + ":" + minuts + ":" + second + "PM";
        document.getElementById("message").innerHTML = " Good afternoon!";
    }
    if (time.getHours() == 12) {
        resultTime = document.getElementById("message").innerHTML = hours + ":" + minuts + ":" + second + ":" + "PM";

    }
    if (time.getHours() >= 16) {
        resultTime.innerHTML = hours + ":" + minuts + ":" + second + "PM";
        document.getElementById("message").innerHTML = " Good evening!";
    } 
    if(time.getHours() >= 20){
        resultTime.innerHTML = hours + ":" + minuts + ":" + second + "PM";
        document.getElementById("message").innerHTML = " Good night!"; 
    }
    document.getElementById("timer").innerHTML = hours + ":" + minuts + ":" + second;

}
setInterval(timer, 1000);