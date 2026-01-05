var lang = "";
var seconds = 0;
var intervalId = null;

const TXT = {
    en: {
        welcome: "Breath Awareness",
        l1: "Listen to your body.",
        l2: "This simple test measures your CO2 tolerance.",
        cont: "Start Journey",
        instT: "Instructions",
        inst: "1. Relax for 5 mins.<br>2. Take a normal breath in and out.<br>3. Hold your breath after exhale.<br>4. Stop at the first urge to breathe.",
        ready: "Ready",
        timerT: "Holding...",
        support: "Be calm. Don't push too hard.",
        start: "Start Timer",
        stop: "I need to breathe",
        resultT: "Your BOLT Score",
        disc: "This is for educational purposes only.",
        restart: "Test Again",
        table: "<h3>Score Guide</h3><table><tr><th>Score</th><th>Status</th></tr><tr><td><20s</td><td>Poor</td></tr><tr><td>20-40s</td><td>Good</td></tr><tr><td>40s+</td><td>Excellent</td></tr></table>",
        benefits: "<h3>Benefits</h3><p>• Less Breathlessness<br>• Better Focus</p>",
        resultMsg: (s) => s < 20 ? "Your score is low. Try light breathing exercises." : "Great job! Your respiratory health is stable."
    },
    hi: {
        welcome: "साँस जागरूकता",
        l1: "अपने शरीर की सुनें।",
        l2: "यह टेस्ट आपकी CO2 सहनशक्ति को मापता है।",
        cont: "शुरू करें",
        instT: "कैसे करें?",
        inst: "1. आराम से बैठें।<br>2. सामान्य साँस छोड़ें।<br>3. अब अपनी नाक बंद करें।<br>4. जैसे ही पहली बार साँस लेने की इच्छा हो, रुकें।",
        ready: "तैयार हूँ",
        timerT: "साँस रोकें...",
        support: "शांत रहें। शरीर को तय करने दें।",
        start: "शुरू करें",
        stop: "साँस लेनी है",
        resultT: "आपका स्कोर",
        disc: "यह केवल जागरूकता के लिए है।",
        restart: "फिर से टेस्ट करें",
        table: "<h3>स्कोर गाइड</h3><table><tr><th>स्कोर</th><th>मतलब</th></tr><tr><td><20s</td><td>कम है</td></tr><tr><td>20-40s</td><td>अच्छा है</td></tr><tr><td>40s+</td><td>बेहतरीन</td></tr></table>",
        benefits: "<h3>फायदे</h3><p>• कम थकान<br>• बेहतर एकाग्रता</p>",
        resultMsg: (s) => s < 20 ? "आपका स्कोर कम है। प्राणायाम का अभ्यास करें।" : "बहुत बढ़िया! आपकी ब्रीथिंग हेल्थ अच्छी है।"
    }
};

function hideAll() {
    ['lang', 'welcome', 'instructions', 'timerScreen', 'result'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

function setLang(l) {
    lang = l; hideAll();
    document.getElementById("welcome").classList.remove("hidden");
    document.getElementById("wTitle").innerText = TXT[l].welcome;
    document.getElementById("w1").innerText = TXT[l].l1;
    document.getElementById("w2").innerText = TXT[l].l2;
    document.getElementById("wBtn").innerText = TXT[l].cont;
}

function goInstructions() {
    hideAll();
    document.getElementById("instructions").classList.remove("hidden");
    document.getElementById("iTitle").innerText = TXT[lang].instT;
    document.getElementById("iText").innerHTML = TXT[lang].inst;
    document.getElementById("iBtn").innerText = TXT[lang].ready;
}

function goTimer() {
    hideAll();
    document.getElementById("timerScreen").classList.remove("hidden");
    document.getElementById("tTitle").innerText = TXT[lang].timerT;
    document.getElementById("support").innerText = TXT[lang].support;
    document.getElementById("startBtn").innerText = TXT[lang].start;
    document.getElementById("stopBtn").innerText = TXT[lang].stop;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function startHold() {
    seconds = 0;
    document.getElementById("timer").innerText = "0";
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    intervalId = setInterval(() => {
        seconds++;
        document.getElementById("timer").innerText = seconds;
    }, 1000);
}

function stopHold() {
    clearInterval(intervalId);
    hideAll();
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("rTitle").innerText = TXT[lang].resultT;
    document.getElementById("rExplain").innerText = TXT[lang].resultMsg(seconds);
    document.getElementById("rTable").innerHTML = TXT[lang].table;
    document.getElementById("rBenefits").innerHTML = TXT[lang].benefits;
    document.getElementById("rDisc").innerText = TXT[lang].disc;
    document.getElementById("rBtn").innerText = TXT[lang].restart;
}

function restart() {
    location.reload();
}