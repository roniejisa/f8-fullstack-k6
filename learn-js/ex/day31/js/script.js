var secondEnd = 10;
var counter = document.querySelector(".counter");
var button = document.querySelector('button');
var check = null;
let second = null;
var endTime = new Date().getTime() + secondEnd * 1000;

function getRemainingTime(deadline) {
    const currentTime = new Date().getTime();
    return deadline - currentTime;
}

function countdown(currentTime) {
    console.log(currentTime);
    const remainingTime = getRemainingTime(endTime);
    const newSecond = Math.ceil(remainingTime / 1000);
    if (newSecond !== second) {
        second = newSecond;
        counter.innerText = second;
    }
    if (remainingTime >= 0) {
        check = window.requestAnimationFrame(countdown);
    }
    if (remainingTime <= 0 && second === 0) {
        window.cancelAnimationFrame(check);
        activeButton(false);
        button.addEventListener('click', function () {
            const aEl = document.createElement('a');
            aEl.href = "https://fullstack.edu.vn";
            aEl.target = "_blank";
            aEl.click();
        })
    }
}

function activeButton(isDisabled = true) {
    if (isDisabled) {
        button.setAttribute('disabled', isDisabled);
        button.style.cursor = "not-allowed";
    } else {
        button.removeAttribute('disabled', isDisabled);
        button.style.cursor = "pointer";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    activeButton();
    check = window.requestAnimationFrame(countdown);
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        endTime = new Date().getTime() + second * 1000;
        check = window.requestAnimationFrame(countdown)
    } else {
        window.cancelAnimationFrame(check);
    }
})
