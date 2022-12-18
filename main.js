const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const milisec = document.querySelector(".milisseconds");

const startTimer = document.querySelector(".start");
const pauseTimer = document.querySelector(".pause");
const resetTimer = document.querySelector(".reset");

//VÁRIAVEIS
let miliNum = 0
let secNum = 0
let minNum = 0
let INTERVALO



function miliseconds() {
    miliNum++
    if (miliNum < 10) {
        milisec.innerHTML = '0' + miliNum
    } else {
        milisec.innerHTML = miliNum
    }
    if (miliNum == 99) {
        miliNum = 0
        seconds()
    }
}

function seconds () {
    secNum++
    if (secNum < 10) {
        sec.innerHTML = '0' + secNum
    } else {
        sec.innerHTML = secNum
    }
    if (secNum == 60) {
        secNum = 0
        minute()
    }

}

function minute () {
    minNum++
    if (minNum < 10) {
        min.innerHTML = '0' + minNum
    } else {
        min.innerHTML = minNum
    }
}

//EVENTOS INICIAR PAUSAR E RESETAR

startTimer.addEventListener('click', function (s) {
    s.preventDefault;

    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
        miliseconds()
    }, 10)

    
})

pauseTimer.addEventListener('click', function (p) {
    p.preventDefault

    clearInterval(INTERVALO)
})

resetTimer.addEventListener('click', function (r) {
    r.preventDefault
    clearInterval(INTERVALO)

    miliNum = 0
    secNum = 0
    minNum = 0

    milisec.innerHTML = '00'
    sec.innerHTML = '00'
    min.innerHTML = '00'
})






