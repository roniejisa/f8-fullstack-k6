let status = "start";
let apiURL = 'http://localhost:3000/questions';
let mediaRight = new Audio("./mp3/rightAnswer.mp3");
let mediaWrong = new Audio("./mp3/wrongAnswer.mp3");
let settings = {
    point: 500,
    streak: 3,
    pointForStreak: 500,
    secondAnswer: 5,
    timeStart: 3,
    timeCountDownCurrent: 0
}
let timeOfQuestion = {}, questionContainerEl, arrayQuestions = [], index = 0, progress;

function screenStart() {
    const play = document.createElement('div');
}

const eventChangeQuestion = new Event('change-question');

window.addEventListener('change-question', () => {
    console.log(timeOfQuestion);
    if (timeOfQuestion[index] / 100 === settings.secondAnswer) {
        index++;
        if (arrayQuestions[index]) {
            return renderQuestionData(questionContainerEl, arrayQuestions, index);
        } else {
            screenEnd();
        }
    }
})

async function screenPlay(divStart) {
    if (status === 'play') {
        const response = await fetch(apiURL);
        const questions = await response.json();
        questions.forEach((question, i) => {
            arrayQuestions.push(question);
            timeOfQuestion[i] = 0;
        })
        index = 0;
        divStart.animate([
            {
                height: divStart.style.height
            }, {
                height: 0
            }
        ], {
            duration: 200,
            fill: "forwards"
        }).finished.then(async () => {
            divStart.remove();
            const screenPlayEl = document.createElement('div');
            Object.assign(screenPlayEl.style, {
                height: '100vh',
                position: "relative",
                width: "100%"
            })
            const progressBar = document.createElement('div');
            Object.assign(progressBar.style, {
                height: "5px",
                width: "100%"
            });

            progress = document.createElement('div');
            progressBar.append(progress);
            screenPlayEl.append(progressBar);
            questionContainerEl = document.createElement('div');
            screenPlayEl.append(questionContainerEl);
            document.body.append(screenPlayEl);
            renderQuestionData(questionContainerEl, arrayQuestions, index);
        })
    }
}

function renderQuestionData(questionContainerEl, arrayQuestions, index) {
    let flag = false;
    questionContainerEl.innerHTML = renderQuestion(arrayQuestions[index]);
    countdown(settings.secondAnswer, timeOfQuestion, index, (timeCurrent, time, totalTime) => {
        if (timeCurrent === "END" && !flag) {
            flag = true;
            window.dispatchEvent(eventChangeQuestion);
        }
    })
}


function screenEnd() {
    console.log(2);
}

function countdown(time, object, key, cb, speed = 100) {
    object[key] += 1;
    const timeCurrent = Math.ceil(+time - (+object[key] / speed));
    if (timeCurrent < 1) {
        cb('END', object[key], time);
        return cancelAnimationFrame(object[key]);
    } else {
        if (typeof cb === 'function') {
            cb(timeCurrent, object[key], time);
        }
        requestAnimationFrame(function () {
            countdown(time, object, key, cb, speed);
        });
    }
}


function startGame() {
    if (status === 'start') {
        document.body.innerHTML = '';
        Object.assign(document.body.style, {
            height: "100vh",
            backgroundImage: `url(https://picsum.photos/1920/900)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'
        })
        const divStart = document.createElement('div');
        Object.assign(divStart.style, {
            height: "200px",
            width: "100%",
            overflow: "hidden",
            background: "black",
            color: "white",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'
        })
        const buttonStart = document.createElement('button');
        buttonStart.innerHTML = "Bắt đầu";
        divStart.append(buttonStart);
        document.body.append(divStart);
        buttonStart.addEventListener('click', () => {
            countdown(settings.timeStart, settings, 'timeCountDownCurrent', (timeCurrent) => {
                let countdownEl = document.querySelector('.countdown');
                if (!countdownEl) {
                    buttonStart.remove();
                    countdownEl = document.createElement('div');
                    countdownEl.style.fontSize = "48px";
                    countdownEl.className = "countdown";
                    divStart.append(countdownEl);
                    countdownEl.innerText = timeCurrent;
                    countdownEl.animate([
                        { transform: `scale(0)` },
                        { transform: `scale(1)` }
                    ], {
                        duration: 200,
                        easing: "ease-in-out",
                        fill: "forwards"
                    })
                }
                if (timeCurrent === 'END') {
                    countdownEl.innerText = 'GO';
                    status = 'play'
                    screenPlay(divStart);
                } else {
                    countdownEl.innerText = timeCurrent;
                }
            }, 50);
        })
    }
}

startGame();


function renderQuestion(data) {
    return `<div class="question">
        <div class="question" data-id="${data.id}">
            <p>${data.content}</p>
            (Chọn ${data.answers.filter(answer => answer.isRight).length} trả lời)
        </div>
        <div class="answers" style="display:gird; grid-template-columns: ${data.answers.length}">
            ${data.answers.map(answer => {
        return `<div class="item">
                    ${answer.value}
                </div>`
    }).join("")}
        </div>
    </div>`
}