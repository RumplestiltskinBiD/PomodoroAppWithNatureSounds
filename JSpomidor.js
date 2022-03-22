
let world = document.querySelector('.world')

const options ={
    'capture': false,
    'once': false,
    'passive': false
}
let audioBonfire = new Audio('NatureSounds\\bonfire.mp3')
let audioOcean = new Audio('NatureSounds\\ocean.mp3')
let audioRain = new Audio('NatureSounds\\rain.mp4')
let audioCafe = new Audio('NatureSounds\\cafe.mp3')

audioBonfire.loop = true
audioOcean.loop = true
audioRain.loop = true
audioCafe.loop = true

let isPlayingRain = false
let isPlayingOcean = false
let isPlayingBonfire = false
let isPlayingCafe = false

function playAudioRain() {
console.log('rain')

    if(isPlayingRain === false){
        audioRain.play();
        audioBonfire.pause();
        audioOcean.pause();
        audioCafe.pause();
        console.log(isPlayingRain)
        isPlayingBonfire = false
        isPlayingOcean = false
        isPlayingCafe = false
        return isPlayingRain = true
    }
    else {
        audioRain.pause();
        console.log(isPlayingRain)
        return isPlayingRain = false
    }

}

function playAudioOcean() {
    console.log('ocean')

    if(isPlayingOcean === false){
        audioOcean.play();
        audioBonfire.pause();
        audioRain.pause();
        audioCafe.pause();
        console.log(isPlayingRain)
        isPlayingBonfire = false
        isPlayingRain = false
        isPlayingCafe = false
        return isPlayingOcean = true
    }
    else {
        audioOcean.pause();
        console.log(isPlayingOcean)
        return isPlayingOcean = false
    }

}

function playAudioBonfire() {
    console.log('bonfire')

    if(isPlayingBonfire === false){
        audioBonfire.play();
        audioOcean.pause();
        audioRain.pause();
        audioCafe.pause();
        console.log(isPlayingBonfire)
        isPlayingOcean = false
        isPlayingRain = false
        isPlayingCafe = false
        return isPlayingBonfire = true
    }
    else {
        audioBonfire.pause();
        console.log(isPlayingBonfire)
        return isPlayingBonfire = false
    }

}

function playAudioCafe() {
    console.log('cafe')

    if(isPlayingCafe === false){
        audioCafe.play();
        audioRain.pause();
        audioBonfire.pause();
        console.log(isPlayingCafe)
        isPlayingBonfire = false
        isPlayingOcean = false
        isPlayingRain = false

        return isPlayingCafe = true
    }
    else {
        audioCafe.pause();
        console.log(isPlayingCafe)
        return isPlayingCafe = false
    }

}

function changeStyleBonfire() {
    world.style.backgroundImage = "url('Pictures/bonfire.jpg')"

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
document.getElementById('bonfire').addEventListener('click', playAudioBonfire, options)
document.getElementById('ocean').addEventListener('click', playAudioOcean, options)
document.getElementById('rain').addEventListener('click', playAudioRain, options)
document.getElementById('cafe').addEventListener('click', playAudioCafe, options)

document.getElementById('bonfire').addEventListener('click', changeStyleBonfire)
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







