const buttonEl = document.querySelector('.start-voice');
const startSpeechEl = document.querySelector('.result p.start');
const result = document.querySelector('.result p.done');
const textNode = document.createTextNode('');
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
const synth = window.speechSynthesis;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "vi-VN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    const string = event.results[0][0].transcript;
    speaking(string);
    setData('Đang thực hiện: ' + string, true);
    const a = document.createElement('a');
    a.target = "_blank";
    let value = string.toLowerCase();
    startSpeechEl.classList.add('hidden');
    if (value.includes('đường')) {
        if (value.indexOf('tới') !== - 1) {
            value = getValue(value, 'tới');
        }
        a.href = "https://www.google.com/maps/search/" + value;
    } else if (value.includes('bài hát')) {
        value = getValue(value, 'bài hát');
        a.href = "https://open.spotify.com/search/" + value;
    } else if (value.includes('video')) {
        value = getValue(value, 'video');
        a.href = "https://www.youtube.com/results?search_query=" + value;
    } else if (value.includes('phát nhạc') || value.includes('mở nhạc')) {
        a.href = "https://roniejisa.github.io/game/karaoke-player/";
    } else if (value.includes('facebook')) {
        a.href = "https://facebook.com";
    } else if (value.includes('google')) {
        a.href = "https://google.com";
    } else if (value.includes('instagram')) {
        a.href = "https://instagram.com";
    } else if (value.includes('tiktok')) {
        a.href = "https://tiktok.com";
    } else if (value.includes('messenger')) {
        a.href = "https://messenger.com";
    } else if (value.includes('google maps')) {
        a.href = "https://www.google.com/maps";
    } else if (value.includes('google drive')) {
        a.href = "https://drive.google.com/drive/my-drive";
    } else if (value.includes('youtube')) {
        a.href = "https://youtube.com";
    }else if (value.includes('chat')) {
        a.href = "https://chat.openai.com/";
    } else if (value.includes('tắt đi') || value.includes('exit') || value.includes('quit')) {
        setTimeout(() => {
            window.close();
        }, 1000);
    } else {
        return setData('Không thực hiện được: ' + string, false);
    }

    setTimeout(() => {
        a.click();
    }, 1000);
    // diagnostic.textContent = `Result received: ${color}.`;
    // bg.style.backgroundColor = color;
    // console.log(`Confidence: ${event.results[0][0].confidence}`);
};

recognition.onspeechend = () => {
    buttonEl.removeAttribute('disabled');
    recognition.stop();
};

recognition.onerror = (event) => {
    startSpeechEl.classList.add('hidden');
    setData('Chưa nghe được bạn nói gì? Nói lại đi...', false);
    buttonEl.removeAttribute('disabled');
    setTimeout(() => {
        buttonEl.click();
    }, 2000);
};

buttonEl.addEventListener('click', function () {
    recognition.start();
    startSpeechEl.classList.remove('hidden');
    result.append(textNode);
    result.classList.remove('success', 'error');
    buttonEl.setAttribute('disabled', true);
})

function getValue(string, key) {
    return string.slice(string.indexOf(key) + key.length, string.length - 1);
}

function setData(value, isSuccess) {
    if (isSuccess) {
        result.classList.add('success');
        result.classList.remove('error');
    } else {
        result.classList.add('error');
        result.classList.remove('success');
    }
    textNode.data = `${value}`;
}

// Để nói
function speaking(value) {
    const utterThis = new SpeechSynthesisUtterance(value);
    utterThis.lang = 'vi-VN';
    synth.speak(utterThis);
}