var lang = "";
var seconds = 0;
var intervalId = null;

const TXT = {
    en: {
        welcome: "What is the BOLT Test?",
        w1: "The Body Oxygen Level Test (BOLT) is a simple tool to check your breathing efficiency.",
        w2: "It measures how well your body uses oxygen and your fitness level by seeing how long you can comfortably hold your breath after a normal exhale.",
        cont: "Continue to Instructions",
        instT: "How to perform the test",
        inst: "1. Sit comfortably and relax.<br>2. Take a normal breath in and out.<br>3. After exhaling, hold your nose and start timer.<br>4. <b>Stop at the first physical urge to breathe.</b>",
        ready: "I'm Ready",
        timerT: "Holding Breath...",
        support: "Listen to your body. Do not push too hard.",
        start: "Start Timer",
        stop: "Stop (First Urge)",
        resultT: "Your BOLT Score",
        importance: `<h3>💡 Why this score matters?</h3>
                     <p>Your score reflects your <b>CO2 Tolerance</b>. If it's low, your brain's breathing center is over-sensitive, which can lead to fatigue and stress.</p>`,
        table: `<h3>📊 Detailed Score Guide</h3>
                <table>
                    <tr style="background:#ff7675; color:white;"><td><b>Below 10s</b></td><td>Critical: High stress on system.</td></tr>
                    <tr style="background:#fab1a0;"><td><b>10-20s</b></td><td>Moderate: Frequent 'alert' mode.</td></tr>
                    <tr style="background:#55efc4;"><td><b>20-30s</b></td><td>Good: Stable health.</td></tr>
                    <tr style="background:#74b9ff;"><td><b>40s+</b></td><td>Elite: Peak efficiency.</td></tr>
                </table>`,
        benefits: `<h3>🚀 Benefits of Improving</h3>
                   <div class="box">
                   <p>• <b>Peak Stamina:</b> Better oxygen flow to cells.</p>
                   <p>• <b>Deep Sleep:</b> Higher BOLT = Quieter sleep.</p>
                   <p>• <b>Mental Calm:</b> Calm body = Sharp focus.</p>
                   </div>`,
        disc: "Self-awareness tool. Not medical advice.",
        restart: "Retake Test",
        resultMsg: (s) => s < 10 ? "<b>Attention:</b> Your score is quite low. Focus on soft, silent nasal breathing only." : "<b>Great:</b> Your breathing efficiency is in a healthy range."
    },
    hi: {
        welcome: "BOLT टेस्ट क्या है?",
        w1: "यह एक सिंपल टेस्ट है जो बताता है कि आपका शरीर ऑक्सीजन को कितने अच्छे से यूज़ कर रहा है और आपकी फिटनेस का लेवल क्या है।",
        w2: "इसमें हम यह देखते हैं कि साँस छोड़ने के बाद, आप कितनी देर तक बिना 'strained' (बेचैनी) महसूस किए रुक सकते हैं।",
        cont: "आगे बढ़ें",
        instT: "कैसे करें?",
        inst: "1. आराम से बैठें।<br>2. नाक से एक सामान्य साँस छोड़ें।<br>3. अब नाक बंद करें और टाइमर शुरू करें।<br>4. <b>जैसे ही साँस लेने की पहली इच्छा हो</b>, रुकें।",
        ready: "तैयार हूँ",
        timerT: "साँस रोकी हुई है...",
        support: "जबरदस्ती न रोकें, शरीर की सुनें।",
        start: "शुरू करें",
        stop: "रुकें (पहली इच्छा पर)",
        resultT: "आपका BOLT स्कोर",
        importance: `<h3>💡 यह स्कोर क्यों महत्वपूर्ण है?</h3>
                     <p>आपका स्कोर आपकी <b>CO2 सहनशक्ति</b> को दर्शाता है। स्कोर जितना अधिक होगा, आपका शरीर उतना ही शांत रहेगा और ऊर्जा बेहतर होगी।</p>`,
        table: `<h3>📊 विस्तृत स्कोर गाइड</h3>
                <table>
                    <tr style="background:#ff7675; color:white;"><td><b>10s से कम</b></td><td>चिंताजनक: नर्वस सिस्टम पर अधिक दबाव।</td></tr>
                    <tr style="background:#fab1a0;"><td><b>10-20s</b></td><td>साधारण: जल्दी थकान और कम स्टेमिना।</td></tr>
                    <tr style="background:#55efc4;"><td><b>20-30s</b></td><td>अच्छा: स्थिर स्वास्थ्य और बेहतर ऊर्जा।</td></tr>
                    <tr style="background:#74b9ff;"><td><b>40s+</b></td><td>आदर्श: बेहतरीन स्टेमिना और शांत दिमाग।</td></tr>
                </table>`,
        benefits: `<h3>🚀 स्कोर बढ़ाने के फायदे</h3>
                   <div class="box">
                   <p>• <b>जबरदस्त स्टेमिना:</b> चलते या कसरत करते वक्त आपकी साँस नहीं फूलेगी।</p>
                   <p>• <b>गहरी नींद:</b> बढ़ा हुआ स्कोर खर्राटों को कम करने और गहरी नींद लाने में मदद करता है।</p>
                   <p>• <b>तनाव में कमी:</b> यह आपके नर्वस सिस्टम को शांत रखता है जिससे फोकस बढ़ता है।</p>
                   </div>`,
        disc: "यह केवल जागरूकता के लिए है, मेडिकल सलाह नहीं।",
        restart: "फिर से टेस्ट करें",
        resultMsg: (s) => s < 10 ? "<b>खास सलाह:</b> आपका स्कोर काफी कम है। दिन भर केवल नाक से बहुत हल्की और शांत साँस लेने का अभ्यास करें।" : "<b>बहुत बढ़िया:</b> आपकी ब्रीथिंग एफिशिएंसी अच्छी है।"
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
    document.getElementById("wText1").innerText = TXT[l].w1;
    document.getElementById("wText2").innerText = TXT[l].w2;
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
    document.getElementById("rTitle").innerHTML = `<h1>${TXT[lang].resultT}</h1><div class="timer">${seconds}s</div>`;
    document.getElementById("rExplain").innerHTML = `<div class="box" style="border-left: 5px solid #3baea0; background:#f0f9f8;">${TXT[lang].resultMsg(seconds)}</div>`;
    document.getElementById("rTable").innerHTML = TXT[lang].importance + TXT[lang].table;
    document.getElementById("rBenefits").innerHTML = TXT[lang].benefits;
    document.getElementById("rDisc").innerText = TXT[lang].disc;
    document.getElementById("rBtn").innerText = TXT[lang].restart;
}

function restart() {
    location.reload();
}