 

// ============================================
// AUDIO PLAYER FUNCTIONS
// ============================================

/**
 * Toggle Play/Pause
 */
function togglePlayPause(audioId) {
    const audio = document.getElementById(audioId);
    const dialogNum = audioId.split('-').pop();
    const playPauseBtn = document.getElementById('play-pause-' + dialogNum);
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');

    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
}

/**
 * Change Playback Speed
 */
function changePlaybackSpeed(audioId, speed) {
    const audio = document.getElementById(audioId);
    audio.playbackRate = parseFloat(speed);

    let speedText = '';
    switch(speed) {
        case '0.5': speedText = 'خیلی آهسته 🐌'; break;
        case '0.75': speedText = 'آهسته 🐢'; break;
        case '1': speedText = 'عادی ▶️'; break;
        case '1.25': speedText = 'سریع 🐇'; break;
        case '1.5': speedText = 'خیلی سریع ⚡'; break;
        case '2': speedText = 'فوق سریع 🚀'; break;
    }

    showToast(`سرعت تغییر کرد: ${speedText}`, 'success');
}

/**
 * Skip Backward
 */
function skipBackward(audioId, seconds) {
    const audio = document.getElementById(audioId);
    audio.currentTime = Math.max(0, audio.currentTime - seconds);
    showToast(`⏪ ${seconds} ثانیه به عقب`, 'success');
}

/**
 * Skip Forward
 */
function skipForward(audioId, seconds) {
    const audio = document.getElementById(audioId);
    audio.currentTime = Math.min(audio.duration, audio.currentTime + seconds);
    showToast(`⏩ ${seconds} ثانیه به جلو`, 'success');
}

/**
 * Toggle Loop
 */
function toggleLoop(audioId) {
    const audio = document.getElementById(audioId);
    const dialogNum = audioId.split('-').pop();
    const loopBtn = document.getElementById('loop-btn-' + dialogNum);

    audio.loop = !audio.loop;

    if (audio.loop) {
        loopBtn.style.background = 'var(--accent-cyan)';
        loopBtn.style.color = 'white';
        loopBtn.style.borderColor = 'var(--accent-cyan)';
        showToast('🔁 تکرار فعال شد', 'success');
    } else {
        loopBtn.style.background = '';
        loopBtn.style.color = '';
        loopBtn.style.borderColor = '';
        showToast('🔁 تکرار غیرفعال شد', 'success');
    }
}

/**
 * Seek Audio
 */
function seekAudio(event, audioId) {
    const audio = document.getElementById(audioId);
    const progressBar = event.currentTarget.querySelector('.audio-progress-bar');
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
}

/**
 * Download Audio
 */
function downloadAudio(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('📥 دانلود شروع شد...', 'success');
}

/**
 * Format Time
 */
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Update Progress Bar
 */
function updateProgress(audioId) {
    const audio = document.getElementById(audioId);
    const dialogNum = audioId.split('-').pop();
    const progressFilled = document.getElementById('progress-' + dialogNum);
    const currentTimeEl = document.getElementById('current-time-' + dialogNum);
    const durationEl = document.getElementById('duration-' + dialogNum);

    if (audio && progressFilled) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFilled.style.width = percent + '%';

        if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
        if (durationEl) durationEl.textContent = formatTime(audio.duration);
    }
}

/**
 * Sync Lyrics with Audio - نسخه اصلاح شده
 */
function syncLyrics(audioId) {
    const audio = document.getElementById(audioId);
    const dialogNum = audioId.split('-').pop();
    const lyricsContainer = document.getElementById('lyrics-' + dialogNum);

    if (!lyricsContainer) return;

    const currentTime = audio.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');

    lyricLines.forEach(line => {
        const startTime = parseFloat(line.dataset.time);
        const endTime = parseFloat(line.dataset.end);

        if (currentTime >= startTime && currentTime < endTime) {
            // فعال کردن خط فعلی
            if (!line.classList.contains('active')) {
                line.classList.add('active');

                // اسکرول خودکار
                line.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                });
            }
        } else {
            // غیرفعال کردن خط‌های دیگر
            line.classList.remove('active');
        }
    });
}

/**
 * تکرار یک جمله خاص
 */
function repeatLine(button) {
    const lyricLine = button.closest('.lyric-line');
    const germanText = lyricLine.querySelector('.lyric-german').textContent;

    // جلوگیری از پخش همزمان چند صدا
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    // پخش جمله
    speakGerman(germanText);

    // انیمیشن دکمه
    button.style.transform = 'translateY(-50%) rotate(360deg)';
    setTimeout(() => {
        button.style.transform = 'translateY(-50%) rotate(0deg)';
    }, 500);

    showToast('🔁 در حال تکرار جمله...', 'success');
}

// ============================================
// INITIALIZE AUDIO PLAYERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all audio players
    const audioPlayers = ['dialog-audio-1', 'dialog-audio-2', 'dialog-audio-3'];

audioPlayers.forEach(audioId => {
    const audio = document.getElementById(audioId);
    if (!audio) return;

    // تنظیم سرعت پیش‌فرض
    audio.playbackRate = 0.75;

    // Update progress
    audio.addEventListener('timeupdate', () => {
        updateProgress(audioId);
        syncLyrics(audioId);
    });

        // Update duration when loaded
        audio.addEventListener('loadedmetadata', () => {
            const dialogNum = audioId.split('-').pop();
            const durationEl = document.getElementById('duration-' + dialogNum);
            if (durationEl) {
                durationEl.textContent = formatTime(audio.duration);
            }
        });

        // Reset play button when ended
        audio.addEventListener('ended', () => {
            const dialogNum = audioId.split('-').pop();
            const playPauseBtn = document.getElementById('play-pause-' + dialogNum);
            const playIcon = playPauseBtn.querySelector('.play-icon');
            const pauseIcon = playPauseBtn.querySelector('.pause-icon');

            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';

            showToast('✅ پخش تمام شد', 'success');
        });

        // Error handling
        audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            showToast('⚠️ خطا در بارگذاری فایل صوتی. لطفاً مسیر فایل را بررسی کنید.', 'error');
        });
    });
});


// ============================================
// GLOBAL VARIABLES
// ============================================
let fcIndex = 0;
let fcFilter = 'all';
let fcCards = [];
let quizType = 'meaning';
let quizIndex = 0;
let quizData = [];
let quizCorrectAnswer = '';
let scoreCorrect = 0;
let scoreWrong = 0;
let answered = false;
let currentAudio = null;

// Exercise variables
let selectedSpeaker = null;
let selectedSentence = null;
const matchingAnswers = {
    '1': 'nicole',
    '2': 'paco',
    '3': 'nicole',
    '4': 'yaco',
    '5': 'yaco'
};

const checkboxAnswers = {
    'q1': ['nicole'],
    'q2': ['paco'],
    'q3': ['wachter'],
    'q4': ['paco'],
    'q5': ['wachter']
};

let selectedQuestion = null;
let selectedAnswer = null;
const connections = {};

// ============================================
// SIDEBAR MENU
// ============================================
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('show');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
}

// ============================================
// TEXT-TO-SPEECH - صدای واقعی آلمانی
// ============================================
// ============================================
// TEXT-TO-SPEECH - با پشتیبانی از فایل صوتی محلی
// ============================================

/**
 * پخش صدای آلمانی - ابتدا فایل محلی، سپس Google TTS
 */
function speakGerman(text, callback = null) {
    // متوقف کردن صدای قبلی
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    speechSynthesis.cancel();

    // پیدا کردن کلمه در داده‌ها
    const word = findWordByGerman(text);
    
    // اگر فایل صوتی محلی وجود داره، اول اون رو پخش کن
    if (word && word.audio) {
        playLocalAudio(word.audio, text, callback);
    } else {
        // اگر فایل محلی نیست، از Google TTS استفاده کن
        playGoogleTTS(text, callback);
    }
}

/**
 * پیدا کردن کلمه در داده‌ها بر اساس متن آلمانی
 */
function findWordByGerman(text) {
    // جستجو در واژگان
    if (typeof allWords !== 'undefined') {
        const found = allWords.find(w => 
            w.german.toLowerCase() === text.toLowerCase() ||
            w.example.toLowerCase().includes(text.toLowerCase())
        );
        if (found) return found;
    }
    
    // جستجو در کشورها
    if (typeof countries !== 'undefined') {
        const found = countries.find(c => 
            c.german.toLowerCase() === text.toLowerCase()
        );
        if (found) return found;
    }
    
    // جستجو در دیالوگ‌ها
    if (typeof lesson1Dialogs !== 'undefined') {
        for (const dialog of lesson1Dialogs) {
            for (const line of dialog.lines) {
                if (line.german.toLowerCase() === text.toLowerCase()) {
                    return line;
                }
            }
        }
    }
    
    return null;
}

/**
 * پخش فایل صوتی محلی
 */
function playLocalAudio(audioPath, text, callback) {
    currentAudio = new Audio(audioPath);
    currentAudio.volume = 1;

    currentAudio.onended = () => {
        currentAudio = null;
        if (callback) callback();
    };

    currentAudio.onerror = (e) => {
        console.warn('⚠️ فایل صوتی محلی یافت نشد:', audioPath);
        console.warn('🔄 استفاده از Google TTS...');
        // اگر فایل محلی کار نکرد، از Google TTS استفاده کن
        playGoogleTTS(text, callback);
    };

    currentAudio.play().catch((err) => {
        console.warn('⚠️ خطا در پخش فایل محلی:', err);
        playGoogleTTS(text, callback);
    });
}

/**
 * پخش با Google TTS
 */
function playGoogleTTS(text, callback) {
    const googleTTS = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encodeURIComponent(text)}`;

    currentAudio = new Audio(googleTTS);
    currentAudio.volume = 1;

    currentAudio.onended = () => {
        currentAudio = null;
        if (callback) callback();
    };

    currentAudio.onerror = () => {
        console.warn('⚠️ Google TTS هم کار نکرد، استفاده از Web Speech...');
        speakWithWebSpeech(text, callback);
    };

    currentAudio.play().catch(() => {
        speakWithWebSpeech(text, callback);
    });
}

function speakWithWebSpeech(text, callback = null) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.85;
    utterance.pitch = 1;

    const voices = speechSynthesis.getVoices();
    const germanVoice = voices.find(v => v.lang.includes('de'));
    if (germanVoice) utterance.voice = germanVoice;

    utterance.onend = () => {
        if (callback) callback();
    };

    speechSynthesis.speak(utterance);
}

// ============================================
// TAB NAVIGATION
// ============================================
function showTab(tabName, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById('tab-' + tabName).classList.add('active');
    if (btn) btn.classList.add('active');

    if (tabName === 'flashcard') initFlashcards();
    if (tabName === 'quiz') initQuiz();
}
// ============================================
// GOOGLE NOTEBOOKLM STUDIO FUNCTIONS
// ============================================

/**
 * سوئیچ کردن بین محتوای Studio
 */
function switchStudio(contentType, btn) {
    // حذف active از تمام دکمه‌ها
    document.querySelectorAll('.studio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // حذف active از تمام محتوا
    document.querySelectorAll('.studio-content').forEach(content => {
        content.classList.remove('active');
    });

    // اضافه کردن active به محتوای انتخاب شده
    const contentId = contentType + '-content';
    const element = document.getElementById(contentId);
    if (element) {
        element.classList.add('active');
    }

    // بارگذاری داده‌های مخصوص
    loadStudioContent(contentType);
}

/**
 * بارگذاری محتوای Studio
 */
function loadStudioContent(contentType) {
    switch(contentType) {
        case 'audio-overview':
            loadAudioOverview();
            break;
        case 'mind-map':
            loadMindMap();
            break;
        case 'flashcards':
            loadStudioFlashcards();
            break;
        case 'quiz':
            loadStudioQuiz();
            break;
        case 'infographic':
            loadInfographic();
            break;
        case 'slide-deck':
            loadSlideDeck();
            break;
        case 'data-table':
            loadDataTable();
            break;
    }
}

/**
 * بارگذاری Audio Overview
 */
function loadAudioOverview() {
    const audioOverviewText = `
        <strong>📌 خلاصه درس ۱: سلام! من ... هستم</strong><br><br>

        در این درس یاد می‌گیریم:
        <br>✅ <strong>سلام و احوالپرسی:</strong> Hallo, Guten Tag, Wie geht es dir?
        <br>✅ <strong>معرفی خود:</strong> Ich heiße..., Ich bin...
        <br>✅ <strong>پرسیدن منشأ:</strong> Woher kommst du? Ich komme aus...
        <br>✅ <strong>ضمایر شخصی:</strong> ich, du, er, sie, es, wir, ihr, sie, Sie
        <br>✅ <strong>سه فعل مهم:</strong> sein (بودن)، heißen (نام داشتن)، kommen (آمدن)
        <br>✅ <strong>کشورها:</strong> Deutschland, Österreich, die Schweiz, Spanien, Mexiko...
        <br><br>

        <strong>🎯 اهداف یادگیری:</strong>
        <br>• توانایی معرفی خود به صورت رسمی و غیررسمی
        <br>• فهم و پاسخ به سؤالات احوالپرسی
        <br>• شناخت تفاوت بین du (غیررسمی) و Sie (رسمی)
        <br>• صرف فعل‌های sein، heißen، kommen
        <br>• آشنایی با کشورهای سخن‌گو و استفاده از حروف تعریف
    `;

    document.getElementById('audio-overview-text').innerHTML = audioOverviewText;
}

/**
 * بارگذاری Mind Map
 */
function loadMindMap() {
    const svgContent = `
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <!-- مرکز -->
            <circle cx="400" cy="300" r="40" fill="#667eea" opacity="0.9"/>
            <text x="400" y="310" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
                Lektion 1
            </text>

            <!-- شاخه 1: سلام و احوالپرسی -->
            <line x1="400" y1="300" x2="150" y2="150" stroke="#64d2ff" stroke-width="2"/>
            <circle cx="150" cy="150" r="30" fill="#64d2ff" opacity="0.8"/>
            <text x="150" y="155" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
                Grüße
            </text>
            <text x="150" y="200" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Hallo, Guten Tag
            </text>
            <text x="150" y="215" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Wie geht es dir?
            </text>

            <!-- شاخه 2: معرفی خود -->
            <line x1="400" y1="300" x2="400" y2="450" stroke="#bf5af2" stroke-width="2"/>
            <circle cx="400" cy="480" r="30" fill="#bf5af2" opacity="0.8"/>
            <text x="400" y="485" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
                Vorstellung
            </text>
            <text x="400" y="525" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Ich heiße...
            </text>
            <text x="400" y="540" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Ich bin...
            </text>

            <!-- شاخه 3: منشأ -->
            <line x1="400" y1="300" x2="650" y2="150" stroke="#30d158" stroke-width="2"/>
            <circle cx="650" cy="150" r="30" fill="#30d158" opacity="0.8"/>
            <text x="650" y="155" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
                Herkunft
            </text>
            <text x="650" y="200" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Woher kommst du?
            </text>
            <text x="650" y="215" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Ich komme aus...
            </text>

            <!-- شاخه 4: گرامر -->
            <line x1="400" y1="300" x2="200" y2="450" stroke="#ff9500" stroke-width="2"/>
            <circle cx="200" cy="480" r="30" fill="#ff9500" opacity="0.8"/>
            <text x="200" y="485" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
                Grammatik
            </text>
            <text x="200" y="525" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                sein, heißen
            </text>
            <text x="200" y="540" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                kommen
            </text>

            <!-- شاخه 5: ضمایر -->
            <line x1="400" y1="300" x2="600" y2="450" stroke="#00c7be" stroke-width="2"/>
            <circle cx="600" cy="480" r="30" fill="#00c7be" opacity="0.8"/>
            <text x="600" y="485" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
                Pronomen
            </text>
            <text x="600" y="525" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                ich, du, er, sie
            </text>
            <text x="600" y="540" text-anchor="middle" fill="var(--text-secondary)" font-size="10">
                Sie (formal)
            </text>
        </svg>
    `;

    document.getElementById('mind-map-svg').innerHTML = svgContent;
}

/**
 * بارگذاری Flashcards از Studio
 */
function loadStudioFlashcards() {
    const studioFlashcards = [
        { word: 'Hallo', meaning: 'سلام' },
        { word: 'Guten Tag', meaning: 'روز بخیر' },
        { word: 'Wie geht es dir?', meaning: 'چطوری؟' },
        { word: 'Ich heiße...', meaning: 'اسم من...' },
        { word: 'Woher kommst du?', meaning: 'از کجا می‌آیی؟' },
        { word: 'Ich komme aus...', meaning: 'من از...می‌آیم' },
        { word: 'sein', meaning: 'بودن' },
        { word: 'heißen', meaning: 'نام داشتن' },
        { word: 'kommen', meaning: 'آمدن' },
        { word: 'du / Sie', meaning: 'تو / شما' }
    ];

    const container = document.getElementById('studio-flashcards-container');
    container.innerHTML = studioFlashcards.map((card, i) => `
        <div class="studio-flashcard" onclick="speakGerman('${card.word}')">
            <div class="studio-flashcard-word">${card.word}</div>
            <div class="studio-flashcard-meaning">${card.meaning}</div>
            <div style="font-size: 0.8rem; margin-top: 10px; opacity: 0.8;">🔊 کلیک کنید</div>
        </div>
    `).join('');
}

/**
 * بارگذاری Quiz از Studio
 */
function loadStudioQuiz() {
    const studioQuestions = [
        {
            q: 'سلام رسمی به چه صورت است؟',
            opts: ['Hallo', 'Guten Tag', 'Tschüs', 'Auf Wiedersehen'],
            correct: 'Guten Tag'
        },
        {
            q: 'برای پرسیدن از منشأ از کدام جمله استفاده می‌کنیم؟',
            opts: ['Wie heißt du?', 'Woher kommst du?', 'Wie geht es dir?', 'Wer bist du?'],
            correct: 'Woher kommst du?'
        },
        {
            q: 'معادل "تو" در آلمانی چیست؟',
            opts: ['er', 'du', 'Sie', 'wir'],
            correct: 'du'
        },
        {
            q: 'فعل "بودن" در آلمانی چیست؟',
            opts: ['heißen', 'kommen', 'sein', 'sprechen'],
            correct: 'sein'
        },
        {
            q: 'برای معرفی خود از کدام جمله استفاده می‌کنیم؟',
            opts: ['Du bist...', 'Ich bin...', 'Er ist...', 'Sie sind...'],
            correct: 'Ich bin...'
        }
    ];

    const container = document.getElementById('studio-quiz-container');
    container.innerHTML = studioQuestions.map((q, i) => `
        <div class="studio-quiz-question">
            <h4>سؤال ${i + 1}: ${q.q}</h4>
            <div class="studio-quiz-options">
                ${q.opts.map(opt => `
                    <div class="studio-quiz-option" onclick="checkStudioAnswer(this, '${opt}', '${q.correct}')">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/**
 * بررسی جواب Quiz
 */
function checkStudioAnswer(element, selected, correct) {
    if (selected === correct) {
        element.style.background = 'rgba(48, 209, 88, 0.2)';
        element.style.borderColor = 'var(--accent-green)';
        element.style.color = 'var(--accent-green)';
        showToast('✅ آفرین! جواب درست است!', 'success');
    } else {
        element.style.background = 'rgba(255, 45, 85, 0.2)';
        element.style.borderColor = 'var(--accent-red)';
        element.style.color = 'var(--accent-red)';
        showToast('❌ اشتباه! جواب صحیح: ' + correct, 'error');
    }

    // غیرفعال کردن بقیه گزینه‌ها
    element.parentElement.querySelectorAll('.studio-quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.style.opacity = '0.6';
    });
}

/**
 * بارگذاری Infographic
 */
function loadInfographic() {
    const infographicImage = document.getElementById('infographic-image');
    infographicImage.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
    infographicImage.alt = 'German Lesson 1 Infographic';
}

/**
 * بارگذاری Slide Deck
 */
function loadSlideDeck() {
    const slides = [
        {
            title: 'درس ۱: سلام! من ... هستم',
            subtitle: 'Hallo! Ich bin...',
            content: 'آموزش مقدماتی معرفی خود و احوالپرسی'
        },
        {
            title: 'سلام و احوالپرسی',
            subtitle: 'Begrüßung',
            content: 'Hallo • Guten Tag • Guten Morgen • Wie geht es dir?'
        },
        {
            title: 'معرفی خود',
            subtitle: 'Vorstellung',
            content: 'Ich heiße... • Ich bin... • Mein Name ist...'
        },
        {
            title: 'پرسیدن از منشأ',
            subtitle: 'Herkunft',
            content: 'Woher kommst du? • Ich komme aus... • Aus welchem Land?'
        },
        {
            title: 'ضمایر شخصی',
            subtitle: 'Personalpronomen',
            content: 'ich • du • er • sie • es • wir • ihr • Sie'
        },
        {
            title: 'سه فعل مهم',
            subtitle: 'Wichtige Verben',
            content: 'sein (بودن) • heißen (نام داشتن) • kommen (آمدن)'
        }
    ];

    const container = document.getElementById('slide-viewer');
    let currentSlide = 0;

    function renderSlide(index) {
        const slide = slides[index];
        container.innerHTML = `
            <div style="
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 40px;
                text-align: center;
                background: linear-gradient(135deg, var(--bg-card), var(--bg-elevated));
            ">
                <h2 style="
                    font-size: 2.5rem;
                    color: var(--accent-cyan);
                    margin-bottom: 16px;
                    font-weight: 900;
                ">${slide.title}</h2>
                <h3 style="
                    font-size: 1.8rem;
                    color: var(--accent-purple);
                    margin-bottom: 32px;
                ">${slide.subtitle}</h3>
                <p style="
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    line-height: 1.8;
                ">${slide.content}</p>
                <div style="
                    position: absolute;
                    bottom: 20px;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                ">
                    اسلاید ${index + 1} از ${slides.length}
                </div>
            </div>
        `;
    }

    renderSlide(currentSlide);

    // دکمه‌های navigation
    const navContainer = document.createElement('div');
    navContainer.style.cssText = 'display: flex; gap: 12px; justify-content: center; margin-top: 20px;';
    navContainer.innerHTML = `
        <button class="btn btn-secondary" onclick="previousSlide()">⬅️ قبلی</button>
        <button class="btn btn-secondary" onclick="nextSlide()">بعدی ➡️</button>
    `;

    document.getElementById('slide-deck-container').appendChild(navContainer);

    window.previousSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        renderSlide(currentSlide);
    };

    window.nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        renderSlide(currentSlide);
    };
}

/**
 * بارگذاری Data Table
 */
function loadDataTable() {
    const tableData = [
        { category: 'سلام', german: 'Hallo', persian: 'سلام', formal: '❌' },
        { category: 'سلام', german: 'Guten Tag', persian: 'روز بخیر', formal: '✅' },
        { category: 'احوالپرسی', german: 'Wie geht es dir?', persian: 'چطوری؟', formal: '❌' },
        { category: 'احوالپرسی', german: 'Wie geht es Ihnen?', persian: 'حالتان چطور است؟', formal: '✅' },
        { category: 'معرفی', german: 'Ich heiße...', persian: 'اسم من...', formal: 'هر دو' },
        { category: 'معرفی', german: 'Ich bin...', persian: 'من...هستم', formal: 'هر دو' },
        { category: 'منشأ', german: 'Woher kommst du?', persian: 'از کجا می‌آیی؟', formal: '❌' },
        { category: 'منشأ', german: 'Woher kommen Sie?', persian: 'از کجا می‌آیید؟', formal: '✅' }
    ];

    const table = document.getElementById('studio-data-table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>دسته</th>
                <th>آلمانی</th>
                <th>فارسی</th>
                <th>رسمی؟</th>
            </tr>
        </thead>
        <tbody>
            ${tableData.map(row => `
                <tr>
                    <td>${row.category}</td>
                    <td style="font-weight: 600; color: var(--accent-cyan);">${row.german}</td>
                    <td>${row.persian}</td>
                    <td>${row.formal}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}
// ============================================
// RENDER FUNCTIONS
// ============================================
function renderWordCards(containerId, category) {
    const container = document.getElementById(containerId);
    const words = allWords.filter(w => w.category === category);

    container.innerHTML = words.map(w => `
        <div class="word-card" onclick="playWordAudio(${w.id})">
            <span class="word-category-badge">${getCategoryLabel(w.category)}</span>
            <div class="word-card-image">
                <img src="${w.image}" alt="${w.german}" onerror="this.style.display='none'">
                <div class="word-card-emoji">${w.emoji}</div>
            </div>
            <div class="word-card-body">
                <div class="word-card-header">
                    <div class="word-german">${w.german}</div>
                    <button class="word-sound-btn" onclick="event.stopPropagation(); playWordExample(${w.id})">
                        💬
                    </button>
                </div>
                <div class="word-ipa">${w.ipa}</div>
                <div class="word-pron">🔊 ${w.pron}</div>
                <div class="word-meaning">${w.meaning}</div>
                <div class="word-example">
                    <div class="word-example-de">
                        <span>🗣️</span>
                        ${w.example}
                    </div>
                    <div class="word-example-fa">${w.exampleFa}</div>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * پخش صدای کلمه با استفاده از ID
 * فقط کلمه اصلی رو می‌گه (نه جمله)
 */
function playWordAudio(wordId) {
    const word = allWords.find(w => w.id === wordId);
    if (!word) return;

    // ✅ فقط کلمه آلمانی رو پخش کن (نه جمله)
    const textToSpeak = word.german;

    // اگر فایل صوتی محلی داره
    if (word.audio) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }

        currentAudio = new Audio(word.audio);
        currentAudio.volume = 1;

        currentAudio.onended = () => {
            currentAudio = null;
        };

        currentAudio.onerror = () => {
            console.warn('⚠️ فایل صوتی یافت نشد:', word.audio);
            // اگر فایل نبود، فقط کلمه رو با TTS بگو
            playGoogleTTS(textToSpeak);
        };

        currentAudio.play().catch(() => {
            playGoogleTTS(textToSpeak);
        });

        showToast(`🔊 ${textToSpeak}`, 'success');
    } else {
        // اگر فایل محلی نداره، فقط کلمه رو با TTS بگو
        playGoogleTTS(textToSpeak);
        showToast(`🔊 ${textToSpeak}`, 'success');
    }
}

/**
 * پخش مثال کلمه (جمله کامل)
 * وقتی روی دکمه 💬 کلیک می‌شه
 */
function playWordExample(wordId) {
    const word = allWords.find(w => w.id === wordId);
    if (!word) return;

    // ✅ جمله کامل رو پخش کن
    speakGerman(word.example);
    showToast(`💬 ${word.example}`, 'success');
}
function getCategoryLabel(category) {
    const labels = {
        'greeting': 'سلام',
        'farewell': 'خداحافظی',
        'pronoun': 'ضمیر',
        'question': 'سؤال',
        'answer': 'جواب',
        'phrase': 'عبارت',
        'country': 'کشور'
    };
    return labels[category] || category;
}

function renderAlphabet() {
    const container = document.getElementById('alphabet-grid');
    container.innerHTML = alphabet.map(a => `
        <div class="letter-card" onclick="speakGerman('${a.name}'); highlightLetter(this)">
            <div class="letter-char">${a.letter}</div>
            <div class="letter-name">${a.name}</div>
            <div class="letter-pron">${a.pron}</div>
        </div>
    `).join('');
}

function highlightLetter(element) {
    document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('playing'));
    element.classList.add('playing');
    setTimeout(() => element.classList.remove('playing'), 1000);
}

function renderCountries() {
    const container = document.getElementById('countries-grid');
    container.innerHTML = countries.map(c => `
        <div class="country-card" onclick="speakGerman('Ich komme ${c.preposition}')">
            <div class="country-card-image">
                <img src="${c.image}" alt="${c.german}" onerror="this.style.display='none'">
                <div class="country-flag-overlay">${c.flag}</div>
            </div>
            <div class="country-card-body">
                <div class="country-name">${c.german}</div>
                <div class="country-pron">🔊 ${c.pron}</div>
                <div class="country-meaning">${c.meaning}</div>
                <div class="country-prep ${c.hasArticle ? 'warning' : ''}">${c.preposition}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// FLASHCARD FUNCTIONS
// ============================================
function initFlashcards() {
    filterFlashcards();
}

function filterFlashcards() {
    if (fcFilter === 'all') {
        fcCards = [...allWords, ...countries.map(c => ({
            german: c.german,
            ipa: c.ipa,
            pron: c.pron,
            meaning: c.meaning,
            emoji: c.flag,
            example: 'Ich komme ' + c.preposition + '.',
            exampleFa: 'من از ' + c.meaning + ' می‌آیم.',
            category: 'country',
            image: c.image
        }))];
    } else if (fcFilter === 'country') {
        fcCards = countries.map(c => ({
            german: c.german,
            ipa: c.ipa,
            pron: c.pron,
            meaning: c.meaning,
            emoji: c.flag,
            example: 'Ich komme ' + c.preposition + '.',
            exampleFa: 'من از ' + c.meaning + ' می‌آیم.',
            category: 'country',
            image: c.image
        }));
    } else {
        fcCards = allWords.filter(w => w.category === fcFilter);
    }

    fcIndex = 0;
    updateFlashcard();
}

function setFcFilter(filter, btn) {
    fcFilter = filter;

    document.querySelectorAll('.fc-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    filterFlashcards();
}

function updateFlashcard() {
    const card = fcCards[fcIndex];
    if (!card) return;

    document.getElementById('fc-emoji').textContent = card.emoji;
    document.getElementById('fc-german').textContent = card.german;
    document.getElementById('fc-ipa').textContent = card.ipa || '';
    document.getElementById('fc-pron').textContent = '🔊 ' + card.pron;
    document.getElementById('fc-meaning').textContent = card.meaning;
    document.getElementById('fc-example').textContent = card.example;
    document.getElementById('fc-example-fa').textContent = card.exampleFa;

    // Update image
    const imgContainer = document.getElementById('fc-front-image');
    if (card.image) {
        imgContainer.innerHTML = `<img src="${card.image}" alt="${card.german}" onerror="this.style.display='none'">`;
    }

    document.getElementById('fc-current').textContent = fcIndex + 1;
    document.getElementById('fc-total').textContent = fcCards.length;

    const progress = ((fcIndex + 1) / fcCards.length) * 100;
    document.getElementById('fc-progress-fill').style.width = progress + '%';

    document.getElementById('fc-card').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('fc-card').classList.toggle('flipped');
}

function nextCard() {
    fcIndex = (fcIndex + 1) % fcCards.length;
    updateFlashcard();
}

function prevCard() {
    fcIndex = (fcIndex - 1 + fcCards.length) % fcCards.length;
    updateFlashcard();
}

function speakCurrentCard() {
    const card = fcCards[fcIndex];
    speakGerman(card.german);
}

function shuffleCards() {
    fcCards = fcCards.sort(() => Math.random() - 0.5);
    fcIndex = 0;
    updateFlashcard();
    showToast('🔀 کارت‌ها تصادفی شدند!', 'success');
}

function resetCards() {
    filterFlashcards();
    showToast('🔄 از اول شروع شد!', 'success');
}

// ============================================
// QUIZ FUNCTIONS
// ============================================
function initQuiz() {
    generateQuizData();
    loadQuestion();
}

function setQuizType(type, btn) {
    quizType = type;

    document.querySelectorAll('.quiz-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    resetQuiz();
}

function generateQuizData() {
    if (quizType === 'verb') {
        quizData = [...verbQuizData].sort(() => Math.random() - 0.5);
    } else if (quizType === 'duSie') {
        quizData = [...duSieQuizData].sort(() => Math.random() - 0.5);
    } else {
        quizData = [...allWords].sort(() => Math.random() - 0.5);
    }
    quizIndex = 0;
}

function loadQuestion() {
    if (quizIndex >= quizData.length) {
        quizIndex = 0;
        generateQuizData();
    }

    answered = false;
    const item = quizData[quizIndex];
    const listenBtn = document.getElementById('quiz-listen-btn');
    const quizImage = document.getElementById('quiz-image');

    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('correct', 'wrong', 'disabled');
    });

    // Update quiz image
    if (item.image) {
        quizImage.src = item.image;
        document.getElementById('quiz-image-container').style.display = 'block';
    } else {
        document.getElementById('quiz-image-container').style.display = 'none';
    }

    if (quizType === 'meaning') {
        document.getElementById('quiz-question').textContent = item.german;
        document.getElementById('quiz-instruction').textContent = 'معنی این کلمه چیست؟';
        listenBtn.style.display = 'none';

        quizCorrectAnswer = item.meaning;
        const opts = getRandomOptions(item.meaning, allWords.map(w => w.meaning));
        renderQuizOptions(opts);

    } else if (quizType === 'listening') {
        document.getElementById('quiz-question').textContent = '🎧';
        document.getElementById('quiz-instruction').textContent = 'به صدا گوش دهید و کلمه را انتخاب کنید';
        listenBtn.style.display = 'inline-flex';

        speakGerman(item.german);

        quizCorrectAnswer = item.german;
        const opts = getRandomOptions(item.german, allWords.map(w => w.german));
        renderQuizOptions(opts);

    } else if (quizType === 'reverse') {
        document.getElementById('quiz-question').textContent = item.meaning;
        document.getElementById('quiz-instruction').textContent = 'این کلمه به آلمانی چیست؟';
        listenBtn.style.display = 'none';

        quizCorrectAnswer = item.german;
        const opts = getRandomOptions(item.german, allWords.map(w => w.german));
        renderQuizOptions(opts);

    } else if (quizType === 'verb') {
        document.getElementById('quiz-question').textContent = item.q;
        document.getElementById('quiz-instruction').textContent = 'جای خالی را پر کنید:';
        listenBtn.style.display = 'none';
        document.getElementById('quiz-image-container').style.display = 'none';

        quizCorrectAnswer = item.a;
        renderQuizOptions(item.opts);

    } else if (quizType === 'duSie') {
        document.getElementById('quiz-question').textContent = item.q;
        document.getElementById('quiz-instruction').textContent = 'کدام جمله صحیح است؟';
        listenBtn.style.display = 'none';
        document.getElementById('quiz-image-container').style.display = 'none';

        quizCorrectAnswer = item.a;
        renderQuizOptions(item.opts);
    }
}

function getRandomOptions(correct, allOptions) {
    const uniqueOptions = [...new Set(allOptions)].filter(o => o !== correct);
    const shuffled = uniqueOptions.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    selected.push(correct);
    return selected.sort(() => Math.random() - 0.5);
}

function renderQuizOptions(options) {
    const container = document.getElementById('quiz-options');
    container.innerHTML = options.map((opt, i) => `
        <div class="quiz-option" onclick="checkAnswer(this, '${opt.replace(/'/g, "\\'")}')">
            ${opt}
        </div>
    `).join('');
}

function checkAnswer(element, selected) {
    if (answered) return;
    answered = true;

    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.add('disabled');
    });

    if (selected === quizCorrectAnswer) {
        element.classList.add('correct');
        scoreCorrect++;
        showToast('✅ آفرین! درست است!', 'success');
        speakGerman(quizCorrectAnswer);
    } else {
        element.classList.add('wrong');
        scoreWrong++;
        showToast('❌ اشتباه! جواب صحیح: ' + quizCorrectAnswer, 'error');

        document.querySelectorAll('.quiz-option').forEach(opt => {
            if (opt.textContent.trim() === quizCorrectAnswer) {
                opt.classList.add('correct');
            }
        });
    }

    updateScore();

    setTimeout(() => {
        if (answered) nextQuestion();
    }, 2500);
}

function nextQuestion() {
    quizIndex++;
    loadQuestion();
}

function speakQuizQuestion() {
    const item = quizData[quizIndex];
    speakGerman(item.german);
}

function updateScore() {
    document.getElementById('score-correct').textContent = scoreCorrect;
    document.getElementById('score-wrong').textContent = scoreWrong;

    const total = scoreCorrect + scoreWrong;
    const percent = total > 0 ? Math.round((scoreCorrect / total) * 100) : 0;
    document.getElementById('score-percent').textContent = percent + '%';
}

function resetQuiz() {
    scoreCorrect = 0;
    scoreWrong = 0;
    quizIndex = 0;
    updateScore();
    generateQuizData();
    loadQuestion();
    showToast('🔄 آزمون از اول شروع شد!', 'success');
}

// ============================================
// DIALOG FUNCTIONS
// ============================================
function playDialog(dialogNum) {
    const dialogLines = {
        1: [
            'Hallo! Ich bin Nicole. Und wer bist du?',
            'Hallo. Ich heiße Paco.',
            'Woher kommst du? Aus Spanien?',
            'Nein, ich komme aus Mexiko.'
        ],
        2: [
            'Das ist Paco.',
            'Guten Tag, Frau Wachter!',
            'Guten Tag, Herr Rodriguez. Woher kommen Sie?',
            'Ich komme aus Mexiko.'
        ],
        3: [
            'Wie geht es dir?',
            'Gut, danke! Und dir?',
            'Auch gut, danke.',
            'Wie geht es Ihnen?',
            'Sehr gut, danke! Und Ihnen?'
        ],
        4: [
            'Auf Wiedersehen, Frau Wachter!',
            'Auf Wiedersehen!',
            'Tschüs, Paco!',
            'Tschüs!'
        ]
    };

    const lines = dialogLines[dialogNum];
    let index = 0;

    function playNext() {
        if (index < lines.length) {
            speakGerman(lines[index], () => {
                index++;
                setTimeout(playNext, 500);
            });
        }
    }

    playNext();
    showToast('▶️ در حال پخش دیالوگ...', 'success');
}

// ============================================
// EXERCISE FUNCTIONS
// ============================================
function playExerciseAudio(dialogName) {
    if (currentAudio) {
        currentAudio.pause();
    }

    currentAudio = new Audio(`audio/lesson1/${dialogName}.mp3`);
    currentAudio.volume = 1;

    currentAudio.onended = () => {
        currentAudio = null;
        showToast('✅ پخش تمام شد', 'success');
    };

    currentAudio.onerror = () => {
        showToast('⚠️ فایل صوتی یافت نشد. از Google TTS استفاده می‌شود.', 'error');
        playDialogWithTTS(dialogName);
    };

    currentAudio.play().catch(() => {
        playDialogWithTTS(dialogName);
    });

    showToast('▶️ در حال پخش...', 'success');
}

function playDialogWithTTS(dialogName) {
    const dialogs = {
        'dialog1': [
            'Woher kommst du? Aus Spanien?',
            'Nein, ich komme aus Mexiko.',
            'Du kommst aus Deutschland, hm?',
            'Nein, aus der Schweiz.',
            'Ich komme aus Österreich.'
        ],
        'dialog2': [
            'Das ist Paco.',
            'Guten Tag, Frau Wachter!',
            'Guten Tag, Herr Rodriguez! Woher kommen Sie?',
            'Ich komme aus Mexiko.',
            'Auf Wiedersehen, Frau Wachter!',
            'Auf Wiedersehen, Herr Rodriguez!'
        ]
    };

    const lines = dialogs[dialogName];
    let index = 0;

    function playNext() {
        if (index < lines.length) {
            speakGerman(lines[index], () => {
                index++;
                setTimeout(playNext, 800);
            });
        }
    }

    playNext();
}

function selectSentence(element) {
    document.querySelectorAll('.sentence-card').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');

    selectedSentence = element.dataset.sentence;

    document.querySelectorAll('.speaker-card').forEach(s => {
        s.style.opacity = '1';
        s.style.pointerEvents = 'all';
    });
}

function selectSpeaker(speaker) {
    if (!selectedSentence) {
        showToast('⚠️ ابتدا یک جمله انتخاب کنید', 'error');
        return;
    }

    const sentenceElement = document.querySelector(`[data-sentence="${selectedSentence}"]`);
    const speakerDisplay = document.getElementById(`speaker-${selectedSentence}`);

    speakerDisplay.textContent = speaker.charAt(0).toUpperCase() + speaker.slice(1);
    speakerDisplay.dataset.selected = speaker;

    sentenceElement.classList.remove('selected');
    selectedSentence = null;
}

function checkMatchingAnswers() {
    let correct = 0;
    let total = Object.keys(matchingAnswers).length;

    Object.keys(matchingAnswers).forEach(sentenceNum => {
        const speakerDisplay = document.getElementById(`speaker-${sentenceNum}`);
        const selected = speakerDisplay.dataset.selected;
        const correctAnswer = matchingAnswers[sentenceNum];
        const sentenceCard = document.querySelector(`[data-sentence="${sentenceNum}"]`);

        if (selected === correctAnswer) {
            sentenceCard.classList.add('correct');
            sentenceCard.classList.remove('wrong');
            correct++;
        } else {
            sentenceCard.classList.add('wrong');
            sentenceCard.classList.remove('correct');
        }
    });

    const percent = Math.round((correct / total) * 100);
    showToast(`📊 نتیجه: ${correct} از ${total} درست (${percent}%)`, correct === total ? 'success' : 'error');
}

function resetMatching() {
    document.querySelectorAll('.sentence-card').forEach(card => {
        card.classList.remove('correct', 'wrong', 'selected');
    });

    document.querySelectorAll('.sentence-speaker').forEach(speaker => {
        speaker.textContent = '❓';
        delete speaker.dataset.selected;
    });

    selectedSentence = null;
    showToast('🔄 تمرین ریست شد', 'success');
}

function handleCheckbox(checkbox) {
    const name = checkbox.name;
    const checkboxes = document.querySelectorAll(`input[name="${name}"]`);

    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}

function checkCheckboxAnswers() {
    let correct = 0;
    let total = Object.keys(checkboxAnswers).length;

    Object.keys(checkboxAnswers).forEach(questionName => {
        const correctAnswers = checkboxAnswers[questionName];
        const checked = Array.from(document.querySelectorAll(`input[name="${questionName}"]:checked`))
            .map(cb => cb.value);

        const item = document.querySelector(`input[name="${questionName}"]`).closest('.checkbox-item');

        if (JSON.stringify(checked.sort()) === JSON.stringify(correctAnswers.sort())) {
            item.classList.add('correct');
            item.classList.remove('wrong');
            correct++;
        } else {
            item.classList.add('wrong');
            item.classList.remove('correct');
        }
    });

    const percent = Math.round((correct / total) * 100);
    showToast(`📊 نتیجه: ${correct} از ${total} درست (${percent}%)`, correct === total ? 'success' : 'error');
}

function resetCheckboxes() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('.checkbox-item').forEach(item => {
        item.classList.remove('correct', 'wrong');
    });
    showToast('🔄 تمرین ریست شد', 'success');
}

function selectConnectCard(element, type) {
    if (type === 'question') {
        document.querySelectorAll('.question-card').forEach(c => c.classList.remove('selected'));
        element.classList.add('selected');
        selectedQuestion = element.dataset.id;

        if (selectedAnswer) {
            makeConnection();
        }
    } else {
        document.querySelectorAll('.answer-card').forEach(c => c.classList.remove('selected'));
        element.classList.add('selected');
        selectedAnswer = element.dataset.id;

        if (selectedQuestion) {
            makeConnection();
        }
    }
}

function makeConnection() {
    connections[selectedQuestion] = selectedAnswer;

    const questionCard = document.querySelector(`[data-id="${selectedQuestion}"]`);
    const answerCard = document.querySelector(`[data-id="${selectedAnswer}"]`);

    questionCard.classList.remove('selected');
    answerCard.classList.remove('selected');
    questionCard.classList.add('connected');
    answerCard.classList.add('connected');

    selectedQuestion = null;
    selectedAnswer = null;

    showToast('✅ اتصال ایجاد شد', 'success');
}

function checkConnections() {
    let correct = 0;
    let total = 0;

    document.querySelectorAll('.answer-card').forEach(card => {
        const answerId = card.dataset.id;
        const correctMatch = card.dataset.match;

        if (correctMatch !== 'none') {
            total++;

            const connectedQuestion = Object.keys(connections).find(q => connections[q] === answerId);

            if (connectedQuestion === correctMatch) {
                card.classList.add('connected');
                card.classList.remove('wrong-connection');
                correct++;
            } else {
                card.classList.add('wrong-connection');
                card.classList.remove('connected');
            }
        }
    });

    const percent = Math.round((correct / total) * 100);
    showToast(`📊 نتیجه: ${correct} از ${total} درست (${percent}%)`, correct === total ? 'success' : 'error');
}

function resetConnections() {
    connections = {};
    selectedQuestion = null;
    selectedAnswer = null;

    document.querySelectorAll('.connect-card').forEach(card => {
        card.classList.remove('selected', 'connected', 'wrong-connection');
    });

    showToast('🔄 تمرین ریست شد', 'success');
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    const activeTab = document.querySelector('.tab-content.active');

    if (activeTab && activeTab.id === 'tab-flashcard') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevCard();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            flipCard();
        } else if (e.key === 's' || e.key === 'S') {
            e.preventDefault();
            speakCurrentCard();
        }
    }

    if (activeTab && activeTab.id === 'tab-quiz') {
        if (e.key >= '1' && e.key <= '4' && !answered) {
            const opts = document.querySelectorAll('.quiz-option');
            const index = parseInt(e.key) - 1;
            if (opts[index]) opts[index].click();
        }
    }
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    if ('speechSynthesis' in window) {
        speechSynthesis.onvoiceschanged = () => {
            speechSynthesis.getVoices();
        };
    }

    // Render all sections
    renderWordCards('grid-greeting', 'greeting');
    renderWordCards('grid-farewell', 'farewell');
    renderWordCards('grid-pronoun', 'pronoun');
    renderWordCards('grid-question', 'question');
    renderWordCards('grid-answer', 'answer');
    renderWordCards('grid-phrase', 'phrase');
    renderAlphabet();
    renderCountries();

    // Welcome message
    setTimeout(() => {
        showToast('🎓 به درس ۱ خوش آمدید! روی کلمات کلیک کنید', 'success');
    }, 1000);
});

// ============================================
// SERVICE WORKER FOR OFFLINE
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✅ SW registered'))
            .catch(err => console.log('❌ SW not registered'));
    });
}
