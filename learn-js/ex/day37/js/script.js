let status = "start";
let apiEndpoint = 'https://json-server-fawn-nine.vercel.app';
let apiQuestion = "/questions";
let apiResult = "/resultQuestions";
let mediaRight = new Audio("./mp3/rightAnswer.mp3");
let mediaWrong = new Audio("./mp3/wrongAnswer.mp3");
let settings = {
    score: 0,
    totalRight: 0,
    totalWrong: 0,
    point: 500,
    streak: 0,
    pointForStreak: 100,
    secondAnswer: 5,
    timeStart: 3,
    timeCountDownCurrent: 0,
    timeStop: false
}
let timeOfQuestion = {},
    questionContainerEl,
    arrayQuestions = [],
    index = 0,
    progressEl,
    scoreEl,
    stepEl,
    streakEl,
    streakPointNode,
    textScoreNode,
    textStepNodeEl,
    actionEl,
    screenPlayEl;


function screenStart() {
    const play = document.createElement('div');
}

const eventChangeQuestion = new Event('change-question');

window.addEventListener('change-question', async (e) => {
    if (timeOfQuestion[index] / 100 === settings.secondAnswer || e.endTime || e.result) {
        await calculatorScore(e.result);
        delete eventChangeQuestion.endTime;
        delete eventChangeQuestion.result;
        index++;

        if (arrayQuestions[index]) {
            textStepNodeEl.data = index + 1;
            return renderQuestionData(questionContainerEl, arrayQuestions, index);
        } else {
            screenEnd();
        }
    }
})

async function calculatorScore(result) {
    if (!result) {
        settings.streak = 0;
    } else {
        const answerEl = questionContainerEl.querySelectorAll('.answers .item');
        const response = await fetch(apiEndpoint + apiResult + '/' + arrayQuestions[index].id);
        const { answers } = await response.json();
        const totalRight = answers.filter((item) => result.includes(item));
        if (totalRight.length === result.length) {
            settings.score += settings.point;
            settings.score += settings.streak * settings.pointForStreak;
            if (settings.streak < 3) {
                settings.streak += 1;
            }
            changeStreak();
            mediaRight.currentTime = 0;
            textScoreNode.data = settings.score;
            settings.totalRight += 1;
            mediaRight.play();
            return new Promise(resolve => {
                mediaRight.onended = () => {
                    resolve("ok");
                };
            })
        } else {
            answerEl.forEach((answer, index) => {
                if (result.includes(index) && !answers.includes(index)) {
                    answer.style.border = "1px solid red";
                    answer.style.background = "red";
                } else if (!result.includes(index) && answers.includes(index)) {
                    answer.style.border = "1px solid white";
                    answer.style.background = "green";
                }
            })
            settings.totalWrong += 1;
            settings.streak = 0;
            mediaWrong.currentTime = 0;
            mediaWrong.play();
            changeStreak();
            return new Promise(resolve => {
                mediaWrong.onended = () => {
                    resolve("ok");
                };
            })
        }
    }
    changeStreak();
    return;
}

function changeStreak() {
    if (settings.streak === 0) {
        streakPointNode.data = "";
    } else {
        streakPointNode.data = `+${settings.streak * settings.pointForStreak}`;
    }
    Array.from(streakEl.children).forEach((item, index) => {
        if (index + 1 <= settings.streak) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}

async function screenPlay(divStart) {
    if (status === 'play') {
        const response = await fetch(apiEndpoint + apiQuestion);
        let questions = await response.json();
        arrayQuestions = [];
        index = 0;
        questions.forEach((question, i) => {
            timeOfQuestion[i] = 0;
        })

        while (questions.length) {
            const index = Math.floor(Math.random() * questions.length);
            if (!questions[index]) {
                index = 0;
            }
            arrayQuestions.push(questions[index]);
            questions.splice(index, 1);
            settings.totalQuestion += 1;
        }

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
            screenPlayEl = document.createElement('div');
            Object.assign(screenPlayEl.style, {
                height: '100vh',
                position: "relative",
                width: "100%"
            })

            const progressBar = document.createElement('div');
            Object.assign(progressBar.style, {
                height: "5px",
                width: "100%",
                marginTop: '5px',
                position: "relative",
            });

            progressEl = document.createElement('div');
            Object.assign(progressEl.style, {
                height: "100%",
                position: "absolute",
                background: "coral",
                borderRadius: "25px",
                boxShadow: "0 0 5px white",
                top: 0,
                left: 0
            });

            progressBar.append(progressEl);
            screenPlayEl.append(progressBar);
            actionEl = document.createElement('div');
            Object.assign(actionEl.style, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
                background: "rgba(0,0,0,.5)",
                padding: "10px"
            })

            const actionLeft = document.createElement('div');
            Object.assign(actionLeft.style, {
                display: "flex",
                gap: "12px",
                color: "white",
                alignItems: "center"
            })
            stepEl = document.createElement('div');
            textStepNodeEl = document.createTextNode(index + 1);
            const totalStep = document.createTextNode(` / ` + arrayQuestions.length);
            stepEl.append(textStepNodeEl, totalStep);
            Object.assign(stepEl.style, {
                background: "coral",
                padding: "10px",
                borderRadius: "10px",
                color: "white"
            })
            streakEl = document.createElement('div');
            streakEl.innerHTML = `<div class="streak-item">Streak</div><div class="streak-item"></div><div class="streak-item"></div>`;

            Object.assign(streakEl.style, {
                display: "flex",
                border: "1px solid white",
                borderRadius: "7px"
            });

            streakPointNode = document.createTextNode("");
            actionLeft.append(stepEl, streakEl, streakPointNode);
            scoreEl = document.createElement('div');
            scoreEl.innerText = 'Score: ';
            textScoreNode = document.createTextNode(settings.score);
            scoreEl.append(textScoreNode);
            actionEl.append(actionLeft, scoreEl);
            screenPlayEl.append(actionEl);

            Object.assign(scoreEl.style, {
                padding: "5px 20px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flex: "1",
                fontSize: "32px"
            });

            questionContainerEl = document.createElement('div');
            Object.assign(questionContainerEl.style, {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "calc(100vh - 40px - 90px)",
                width: "100%",
                padding: "20px"
            })
            screenPlayEl.append(questionContainerEl);
            document.body.append(screenPlayEl);
            renderQuestionData(questionContainerEl, arrayQuestions, index);
        })
    }
}

function renderQuestionData(questionContainerEl, arrayQuestions, index) {
    settings.timeStop = false;
    questionContainerEl.innerHTML = renderQuestion(arrayQuestions[index]);
    addEvent();
    countdown(settings.secondAnswer, timeOfQuestion, index, (timeCurrent, time, totalTime) => {
        if (!settings.timeStop) {
            progressEl.style.width = `${100 - (time / 100 / totalTime * 100)}%`;
        }
        if (timeCurrent === "END" && !settings.timeStop) {
            settings.timeStop = true;
            eventChangeQuestion.endTime = true;
            window.dispatchEvent(eventChangeQuestion);
            timeOfQuestion[index] = settings.secondAnswer * 100;
        }
    })
}
function addEvent() {
    const answerEl = questionContainerEl.querySelectorAll('.answers .item');
    const result = [];
    answerEl.forEach((answer, index) => {
        answer.addEventListener('click', () => chooseAnswer(index, answer))
    })

    function chooseAnswer(i, answer) {
        result.push(i);
        answer.style.background = "green";
        if (result.length >= arrayQuestions[index].totalRight) {
            settings.timeStop = true;
            timeOfQuestion[index] = settings.secondAnswer * 100;
            eventChangeQuestion.result = result;
            window.dispatchEvent(eventChangeQuestion);
            answerEl.forEach(answer => {
                answer.style.pointerEvents = "none";
            })
        }
        answer.style.pointerEvents = "none";
    }
}

function screenEnd() {
    screenPlayEl.innerHTML = `<div class="result-container">
        <div class="title">
            Game performance
        </div>
        <div class="accuracy">
            <span>Accuracy</span>
            <div class="progress-result">
                <div class="progress" style="width:${(settings.totalRight / settings.totalQuestion * 100).toFixed(0)}%">
                    ${(settings.totalRight / settings.totalQuestion * 100).toFixed(0)}%
                </div>
            </div>
        </div>
        <div class="items">
            <div class="item">
                <div class="big">${settings.score}</div>
                <div class="small">Score</div>
            </div> 
            <div class="item">
                <div class="big">${settings.streak}</div>
                <div class="small">Streak</div>
            </div> 
            <div class="item">
                <div class="big">${settings.totalRight}</div>
                <div class="small">Correct</div>
            </div> 
            <div class="item">
                <div class="big">${settings.totalWrong}</div>
                <div class="small">Incorrect</div>
            </div>
        </div>
        <button class="play-again">Play again</button>
    </div>`
    screenPlayEl.querySelector('.play-again').addEventListener('click', () => {
        status = 'start';
        startGame();
    })
}

function countdown(time, object, key, cb, speed = 100) {
    object[key] += 1;
    const timeCurrent = Math.ceil(+time - (+object[key] / speed));
    if (timeCurrent < 1) {
        cb('END', object[key], time);
        return window.cancelAnimationFrame(object[key]);
    } else if (timeCurrent >= 0) {
        if (typeof cb === 'function') {
            cb(timeCurrent, object[key], time);
        }
        window.requestAnimationFrame(function () {
            countdown(time, object, key, cb, speed);
        });
    }
}


function startGame() {
    if (status === 'start') {
        resetSetting();
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
        Object.assign(buttonStart.style, {
            padding: "10px 12px",
            fontSize: "30px",
            border: "none",
            borderRadius: "6px",
            background: "coral",
            cursor: "pointer",
            color: "white"
        })
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

function resetSetting() {
    settings = {
        score: 0,
        totalRight: 0,
        totalWrong: 0,
        totalQuestion: 0,
        point: 500,
        streak: 0,
        pointForStreak: 100,
        secondAnswer: 5,
        timeStart: 3,
        timeCountDownCurrent: 0,
        timeStop: false
    }
}
startGame();


function renderQuestion(data) {
    return `<div class="question-container" style="width:100%; height: calc(100vh - 60px - 80px)">
        <div class="question" data-id="${data.id}" style="padding:10px;border-radius:10px;width:100%;background:purple;color:white;height:40vh;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:32px;margin-bottom:10px">
            <p>${data.content}</p>
            <div style="font-size:24px">
                (Chọn ${data.totalRight} câu trả lời)
            </div>
        </div>
        <div class="answers" style="display:grid;grid-gap:10px;grid-template-columns: repeat(auto-fit,minmax(calc(100% / 5), 1fr))">
            ${data.answers.map(answer => {
        return `<div class="item" style="border-radius:10px;display:flex; align-items:center; justify-content:center; height: 30vh; cursor:pointer; font-size:28px; color:white; background:rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},10)">${answer.value}</div>`;
    }).join("")}
        </div>
    </div>`
}