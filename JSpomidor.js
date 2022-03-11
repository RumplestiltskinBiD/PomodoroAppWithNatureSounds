
let world = document.querySelector('.world')

function changeStyleForest() {
    world.style.backgroundImage = "url('Pictures/forest.jpg')"

}

function changeStyleOcean() {
    world.style.backgroundImage = "url('Pictures/ocean.jpg')"

}

function changeStyleRain() {
    world.style.backgroundImage = "url('Pictures/rain.jpg')"

}

function changeStyleCafe() {
    world.style.backgroundImage = "url('Pictures/cafe.jpg')"

}
document.getElementById('forest').addEventListener('click', changeStyleForest)
document.getElementById('ocean').addEventListener('click', changeStyleOcean)
document.getElementById('rain').addEventListener('click', changeStyleRain)
document.getElementById('cafe').addEventListener('click', changeStyleCafe)


let setHours = document.getElementById('hours').value
let setMinutes = document.getElementById('minutes').value
let resultTimer = document.getElementById('timer')

resultTimer.innerHTML = setHours + ':' + setMinutes



let time_div = document.getElementById('timer');

console.log(time_div)
function timerJS() {


    let i = document.getElementById('hours').value;
    let i2 = document.getElementById('minutes').value;


function startTimer() {
    if (i <= 0 && i2 <= 0) {
        time_div.innerHTML = 'Timeout'
    }

    else if (i2 <= 0) {
        i2 = 59
        i--
        time_div.innerHTML = i + ":" + i2;
        setTimeout(startTimer, 1000);
    }

    else {
        i2--
        time_div.innerHTML = i + ":" + i2;
        setTimeout(startTimer, 1000);
    }
}
startTimer()
    document.getElementById('play').removeEventListener('click', timerJS)
}

function returnTimer() {
    if(time_div.innerHTML === 'Timeout'){
        document.getElementById('play').addEventListener('click', timerJS)
    }
}
document.getElementById('play').addEventListener('click', returnTimer)
document.getElementById('play').addEventListener('click', timerJS)







