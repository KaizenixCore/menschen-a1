// ============================================
// MAIN.JS - فایل اصلی برنامه
// Menschen A1.1 - German Learning App
// ============================================

// ============================================
// AUDIO PLAYER FUNCTIONS
// ============================================

/**
 * Toggle Play/Pause
 */
function togglePlayPause(audioId) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    
    const dialogNum = audioId.split('-').pop();
    const playPauseBtn = document.getElementById('play-pause-' + dialogNum);
    if (!playPauseBtn) return;
    
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');

    if (audio.paused) {
        audio.play();
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'inline';
    } else {
        audio.pause();
        if (playIcon) playIcon.style.display = 'inline';
        if (pauseIcon) pauseIcon.style.display = 'none';
    }
}

/**
 * Change Playback Speed
 */
function changePlaybackSpeed(audioId, speed) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    
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
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - seconds);
    showToast(`⏪ ${seconds} ثانیه به عقب`, 'success');
}

/**
 * Skip Forward
 */
function skipForward(audioId, seconds) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    audio.currentTime = Math.min(audio.duration, audio.currentTime + seconds);
    showToast(`⏩ ${seconds} ثانیه به جلو`, 'success');
}

/**
 * Toggle Loop
 */
function toggleLoop(audioId) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    
    const dialogNum = audioId.split('-').pop();
    const loopBtn = document.getElementById('loop-btn-' + dialogNum);

    audio.loop = !audio.loop;

    if (loopBtn) {
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
}

/**
 * Seek Audio
 */
function seekAudio(event, audioId) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    
    const progressBar = event.currentTarget.querySelector('.audio-progress-bar');
    if (!progressBar) return;
    
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
    if (!audio) return;
    
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
 * Sync Lyrics with Audio
 */
function syncLyrics(audioId) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    
    const dialogNum = audioId.split('-').pop();
    const lyricsContainer = document.getElementById('lyrics-' + dialogNum);

    if (!lyricsContainer) return;

    const currentTime = audio.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');

    lyricLines.forEach(line => {
        const startTime = parseFloat(line.dataset.time);
        const endTime = parseFloat(line.dataset.end);

        if (currentTime >= startTime && currentTime < endTime) {
            if (!line.classList.contains('active')) {
                line.classList.add('active');
                line.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                });
            }
        } else {
            line.classList.remove('active');
        }
    });
}

/**
 * تکرار یک جمله خاص
 */
function repeatLine(button) {
    const lyricLine = button.closest('.lyric-line');
    if (!lyricLine) return;
    
    const germanText = lyricLine.querySelector('.lyric-german');
    if (!germanText) return;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    speakGerman(germanText.textContent);

    button.style.transform = 'translateY(-50%) rotate(360deg)';
    setTimeout(() => {
        button.style.transform = 'translateY(-50%) rotate(0deg)';
    }, 500);

    showToast('🔁 در حال تکرار جمله...', 'success');
}

// ============================================
// INITIALIZE AUDIO PLAYERS
// ============================================
function initAudioPlayers() {
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
            if (playPauseBtn) {
                const playIcon = playPauseBtn.querySelector('.play-icon');
                const pauseIcon = playPauseBtn.querySelector('.pause-icon');
                if (playIcon) playIcon.style.display = 'inline';
                if (pauseIcon) pauseIcon.style.display = 'none';
            }
            showToast('✅ پخش تمام شد', 'success');
        });

        // Error handling
        audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            showToast('⚠️ خطا در بارگذاری فایل صوتی', 'error');
        });
    });
}

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
let germanVoice = null;
let voicesLoaded = false;

// Exercise variables
let selectedSpeaker = null;
let selectedSentence = null;
let selectedQuestion = null;
let selectedAnswer = null;
let connections = {};

// ============================================
// SIDEBAR MENU
// ============================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
}

// ============================================
// TEXT-TO-SPEECH - پخش صدا (اصلاح شده)
// ============================================

/**
 * لود کردن صداهای مرورگر
 */
function loadVoices() {
    return new Promise((resolve) => {
        let voices = speechSynthesis.getVoices();
        
        if (voices.length > 0) {
            voicesLoaded = true;
            findGermanVoice(voices);
            resolve(voices);
            return;
        }
        
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            voicesLoaded = true;
            findGermanVoice(voices);
            resolve(voices);
        };
        
        setTimeout(() => {
            voices = speechSynthesis.getVoices();
            if (voices.length > 0) {
                voicesLoaded = true;
                findGermanVoice(voices);
            }
            resolve(voices);
        }, 1000);
    });
}

/**
 * پیدا کردن صدای آلمانی
 */
function findGermanVoice(voices) {
    germanVoice = voices.find(v => v.lang === 'de-DE') ||
                  voices.find(v => v.lang.startsWith('de')) ||
                  voices.find(v => v.name.toLowerCase().includes('german')) ||
                  voices.find(v => v.name.toLowerCase().includes('deutsch')) ||
                  null;
    
    if (germanVoice) {
        console.log('✅ صدای آلمانی پیدا شد:', germanVoice.name);
    } else {
        console.log('⚠️ صدای آلمانی پیدا نشد');
    }
}

// شروع لود صداها
if ('speechSynthesis' in window) {
    loadVoices();
}

/**
 * تابع اصلی پخش صدا
 */
function speakGerman(text, callback = null) {
    if (!text || text.trim() === '') {
        if (callback) callback();
        return;
    }
    
    // متوقف کردن صدای قبلی
    speechSynthesis.cancel();
    
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // اول سعی کن فایل صوتی پیدا کنی
    const audioFile = findAudioFile(text);
    
    if (audioFile) {
        playAudioFile(audioFile, callback);
    } else {
        // استفاده از Web Speech API
        playWithSpeechSynthesis(text, callback);
    }
}

/**
 * پیدا کردن فایل صوتی
 */
function findAudioFile(text) {
    if (typeof allWords === 'undefined' || typeof countries === 'undefined') {
        return null;
    }
    
    const cleanText = text.trim().toLowerCase();
    
    // جستجو در کلمات
    const word = allWords.find(w => 
        w.german.toLowerCase() === cleanText
    );
    if (word && word.audio) {
        return getAudioPath(word.audio);
    }
    
    // جستجو در کشورها
    const country = countries.find(c => 
        c.german.toLowerCase() === cleanText
    );
    if (country && country.audio) {
        return getAudioPath(country.audio);
    }
    
    // جستجو در الفبا
    if (typeof alphabet !== 'undefined') {
        const letter = alphabet.find(a => 
            a.name.toLowerCase() === cleanText
        );
        if (letter && letter.audio) {
            return 'audio/lesson1/alphabet/' + letter.audio;
        }
    }
    
    return null;
}

/**
 * پخش فایل صوتی
 */
function playAudioFile(audioPath, callback) {
    currentAudio = new Audio(audioPath);
    currentAudio.volume = 1;
    
    currentAudio.onended = () => {
        currentAudio = null;
        if (callback) callback();
    };
    
    currentAudio.onerror = () => {
        console.log('⚠️ فایل صوتی یافت نشد:', audioPath);
        // Fallback به Web Speech
        playWithSpeechSynthesis(audioPath.split('/').pop().replace('.mp3', '').replace(/-/g, ' '), callback);
    };
    
    currentAudio.play().catch(() => {
        playWithSpeechSynthesis(audioPath.split('/').pop().replace('.mp3', '').replace(/-/g, ' '), callback);
    });
}

/**
 * پخش با Web Speech API
 */
function playWithSpeechSynthesis(text, callback) {
    if (!voicesLoaded) {
        loadVoices().then(() => {
            doSpeak(text, callback);
        });
    } else {
        doSpeak(text, callback);
    }
}

/**
 * اجرای پخش صدا
 */
function doSpeak(text, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.75;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    if (germanVoice) {
        utterance.voice = germanVoice;
    }
    
    utterance.onend = () => {
        if (callback) callback();
    };
    
    utterance.onerror = (e) => {
        console.log('خطا در پخش صدا:', e);
        if (callback) callback();
    };
    
    // برای iOS/Safari
    setTimeout(() => {
        speechSynthesis.speak(utterance);
    }, 10);
}

/**
 * تابع کمکی برای پخش با تأخیر
 */
function speakGermanWithDelay(text, delay = 500) {
    return new Promise((resolve) => {
        setTimeout(() => {
            speakGerman(text, resolve);
        }, delay);
    });
}

// ============================================
// TAB NAVIGATION
// ============================================
function showTab(tabName, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const tabElement = document.getElementById('tab-' + tabName);
    if (tabElement) tabElement.classList.add('active');
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
    document.querySelectorAll('.studio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.studio-content').forEach(content => {
        content.classList.remove('active');
    });

    const contentId = contentType + '-content';
    const element = document.getElementById(contentId);
    if (element) {
        element.classList.add('active');
    }

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
    const container = document.getElementById('audio-overview-text');
    if (!container) return;
    
    container.innerHTML = `
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
}

/**
 * بارگذاری Mind Map
 */
function loadMindMap() {
    const container = document.getElementById('mind-map-svg');
    if (!container) return;
    
    container.innerHTML = `
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="300" r="40" fill="#667eea" opacity="0.9"/>
            <text x="400" y="310" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Lektion 1</text>

            <line x1="400" y1="300" x2="150" y2="150" stroke="#64d2ff" stroke-width="2"/>
            <circle cx="150" cy="150" r="30" fill="#64d2ff" opacity="0.8"/>
            <text x="150" y="155" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Grüße</text>
            <text x="150" y="200" text-anchor="middle" fill="#888" font-size="10">Hallo, Guten Tag</text>

            <line x1="400" y1="300" x2="400" y2="480" stroke="#bf5af2" stroke-width="2"/>
            <circle cx="400" cy="480" r="30" fill="#bf5af2" opacity="0.8"/>
            <text x="400" y="485" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Vorstellung</text>
            <text x="400" y="525" text-anchor="middle" fill="#888" font-size="10">Ich heiße...</text>

            <line x1="400" y1="300" x2="650" y2="150" stroke="#30d158" stroke-width="2"/>
            <circle cx="650" cy="150" r="30" fill="#30d158" opacity="0.8"/>
            <text x="650" y="155" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Herkunft</text>
            <text x="650" y="200" text-anchor="middle" fill="#888" font-size="10">Woher kommst du?</text>

            <line x1="400" y1="300" x2="200" y2="450" stroke="#ff9500" stroke-width="2"/>
            <circle cx="200" cy="480" r="30" fill="#ff9500" opacity="0.8"/>
            <text x="200" y="485" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Grammatik</text>
            <text x="200" y="525" text-anchor="middle" fill="#888" font-size="10">sein, heißen, kommen</text>

            <line x1="400" y1="300" x2="600" y2="450" stroke="#00c7be" stroke-width="2"/>
            <circle cx="600" cy="480" r="30" fill="#00c7be" opacity="0.8"/>
            <text x="600" y="485" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Pronomen</text>
            <text x="600" y="525" text-anchor="middle" fill="#888" font-size="10">ich, du, er, sie, Sie</text>
        </svg>
    `;
}

/**
 * بارگذاری Flashcards از Studio
 */
function loadStudioFlashcards() {
    const container = document.getElementById('studio-flashcards-container');
    if (!container) return;
    
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

    container.innerHTML = studioFlashcards.map((card, i) => `
        <div class="studio-flashcard" onclick="speakGerman('${card.word.replace(/'/g, "\\'")}')">
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
    const container = document.getElementById('studio-quiz-container');
    if (!container) return;
    
    const studioQuestions = [
        { q: 'سلام رسمی به چه صورت است؟', opts: ['Hallo', 'Guten Tag', 'Tschüs', 'Auf Wiedersehen'], correct: 'Guten Tag' },
        { q: 'برای پرسیدن از منشأ از کدام جمله استفاده می‌کنیم؟', opts: ['Wie heißt du?', 'Woher kommst du?', 'Wie geht es dir?', 'Wer bist du?'], correct: 'Woher kommst du?' },
        { q: 'معادل "تو" در آلمانی چیست؟', opts: ['er', 'du', 'Sie', 'wir'], correct: 'du' },
        { q: 'فعل "بودن" در آلمانی چیست؟', opts: ['heißen', 'kommen', 'sein', 'sprechen'], correct: 'sein' },
        { q: 'برای معرفی خود از کدام جمله استفاده می‌کنیم؟', opts: ['Du bist...', 'Ich bin...', 'Er ist...', 'Sie sind...'], correct: 'Ich bin...' }
    ];

    container.innerHTML = studioQuestions.map((q, i) => `
        <div class="studio-quiz-question">
            <h4>سؤال ${i + 1}: ${q.q}</h4>
            <div class="studio-quiz-options">
                ${q.opts.map(opt => `
                    <div class="studio-quiz-option" onclick="checkStudioAnswer(this, '${opt.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">
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
    if (infographicImage) {
        infographicImage.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
        infographicImage.alt = 'German Lesson 1 Infographic';
    }
}

/**
 * بارگذاری Slide Deck
 */
function loadSlideDeck() {
    const container = document.getElementById('slide-viewer');
    if (!container) return;
    
    const slides = [
        { title: 'درس ۱: سلام! من ... هستم', subtitle: 'Hallo! Ich bin...', content: 'آموزش مقدماتی معرفی خود و احوالپرسی' },
        { title: 'سلام و احوالپرسی', subtitle: 'Begrüßung', content: 'Hallo • Guten Tag • Guten Morgen • Wie geht es dir?' },
        { title: 'معرفی خود', subtitle: 'Vorstellung', content: 'Ich heiße... • Ich bin... • Mein Name ist...' },
        { title: 'پرسیدن از منشأ', subtitle: 'Herkunft', content: 'Woher kommst du? • Ich komme aus... • Aus welchem Land?' },
        { title: 'ضمایر شخصی', subtitle: 'Personalpronomen', content: 'ich • du • er • sie • es • wir • ihr • Sie' },
        { title: 'سه فعل مهم', subtitle: 'Wichtige Verben', content: 'sein (بودن) • heißen (نام داشتن) • kommen (آمدن)' }
    ];

    let currentSlide = 0;

    function renderSlide(index) {
        const slide = slides[index];
        container.innerHTML = `
            <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;text-align:center;">
                <h2 style="font-size:2rem;color:var(--accent-cyan);margin-bottom:16px;">${slide.title}</h2>
                <h3 style="font-size:1.5rem;color:var(--accent-purple);margin-bottom:32px;">${slide.subtitle}</h3>
                <p style="font-size:1.1rem;color:var(--text-secondary);max-width:600px;">${slide.content}</p>
                <div style="position:absolute;bottom:20px;color:var(--text-muted);">اسلاید ${index + 1} از ${slides.length}</div>
            </div>
        `;
    }

    renderSlide(currentSlide);

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
    const table = document.getElementById('studio-data-table');
    if (!table) return;
    
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

    table.innerHTML = `
        <thead><tr><th>دسته</th><th>آلمانی</th><th>فارسی</th><th>رسمی؟</th></tr></thead>
        <tbody>
            ${tableData.map(row => `
                <tr>
                    <td>${row.category}</td>
                    <td style="font-weight:600;color:var(--accent-cyan);">${row.german}</td>
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
    if (!container || typeof allWords === 'undefined') return;
    
    const words = allWords.filter(w => w.category === category);

    container.innerHTML = words.map(w => `
        <div class="word-card" onclick="speakGerman('${w.german.replace(/'/g, "\\'")}')">
            <span class="word-category-badge">${getCategoryLabel(w.category)}</span>
            <div class="word-card-image">
                <img src="${w.image}" alt="${w.german}" onerror="this.style.display='none'">
                <div class="word-card-emoji">${w.emoji}</div>
            </div>
            <div class="word-card-body">
                <div class="word-card-header">
                    <div class="word-german">${w.german}</div>
                    <button class="word-sound-btn" onclick="event.stopPropagation(); speakGerman('${w.example.replace(/'/g, "\\'")}')">💬</button>
                </div>
                <div class="word-ipa">${w.ipa}</div>
                <div class="word-pron">🔊 ${w.pron}</div>
                <div class="word-meaning">${w.meaning}</div>
                <div class="word-example">
                    <div class="word-example-de"><span>🗣️</span> ${w.example}</div>
                    <div class="word-example-fa">${w.exampleFa}</div>
                </div>
            </div>
        </div>
    `).join('');
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
    if (!container || typeof alphabet === 'undefined') return;
    
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
    if (!container || typeof countries === 'undefined') return;
    
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
    if (typeof allWords === 'undefined' || typeof countries === 'undefined') return;
    
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

    const fcEmoji = document.getElementById('fc-emoji');
    const fcGerman = document.getElementById('fc-german');
    const fcIpa = document.getElementById('fc-ipa');
    const fcPron = document.getElementById('fc-pron');
    const fcMeaning = document.getElementById('fc-meaning');
    const fcExample = document.getElementById('fc-example');
    const fcExampleFa = document.getElementById('fc-example-fa');
    const fcCurrent = document.getElementById('fc-current');
    const fcTotal = document.getElementById('fc-total');
    const fcProgressFill = document.getElementById('fc-progress-fill');
    const fcCard = document.getElementById('fc-card');
    const imgContainer = document.getElementById('fc-front-image');

    if (fcEmoji) fcEmoji.textContent = card.emoji;
    if (fcGerman) fcGerman.textContent = card.german;
    if (fcIpa) fcIpa.textContent = card.ipa || '';
    if (fcPron) fcPron.textContent = '🔊 ' + card.pron;
    if (fcMeaning) fcMeaning.textContent = card.meaning;
    if (fcExample) fcExample.textContent = card.example;
    if (fcExampleFa) fcExampleFa.textContent = card.exampleFa;

    if (imgContainer && card.image) {
        imgContainer.innerHTML = `<img src="${card.image}" alt="${card.german}" onerror="this.style.display='none'">`;
    }

    if (fcCurrent) fcCurrent.textContent = fcIndex + 1;
    if (fcTotal) fcTotal.textContent = fcCards.length;

    const progress = ((fcIndex + 1) / fcCards.length) * 100;
    if (fcProgressFill) fcProgressFill.style.width = progress + '%';

    if (fcCard) fcCard.classList.remove('flipped');
}

function flipCard() {
    const fcCard = document.getElementById('fc-card');
    if (fcCard) fcCard.classList.toggle('flipped');
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
    if (card) speakGerman(card.german);
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
    if (quizType === 'verb' && typeof verbQuizData !== 'undefined') {
        quizData = [...verbQuizData].sort(() => Math.random() - 0.5);
    } else if (quizType === 'duSie' && typeof duSieQuizData !== 'undefined') {
        quizData = [...duSieQuizData].sort(() => Math.random() - 0.5);
    } else if (typeof allWords !== 'undefined') {
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
    if (!item) return;
    
    const listenBtn = document.getElementById('quiz-listen-btn');
    const quizImage = document.getElementById('quiz-image');
    const quizImageContainer = document.getElementById('quiz-image-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizInstruction = document.getElementById('quiz-instruction');

    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('correct', 'wrong', 'disabled');
    });

    if (quizImageContainer) {
        if (item.image) {
            if (quizImage) quizImage.src = item.image;
            quizImageContainer.style.display = 'block';
        } else {
            quizImageContainer.style.display = 'none';
        }
    }

    if (quizType === 'meaning') {
        if (quizQuestion) quizQuestion.textContent = item.german;
        if (quizInstruction) quizInstruction.textContent = 'معنی این کلمه چیست؟';
        if (listenBtn) listenBtn.style.display = 'none';

        quizCorrectAnswer = item.meaning;
        const opts = getRandomOptions(item.meaning, allWords.map(w => w.meaning));
        renderQuizOptions(opts);

    } else if (quizType === 'listening') {
        if (quizQuestion) quizQuestion.textContent = '🎧';
        if (quizInstruction) quizInstruction.textContent = 'به صدا گوش دهید و کلمه را انتخاب کنید';
        if (listenBtn) listenBtn.style.display = 'inline-flex';

        speakGerman(item.german);

        quizCorrectAnswer = item.german;
        const opts = getRandomOptions(item.german, allWords.map(w => w.german));
        renderQuizOptions(opts);

    } else if (quizType === 'reverse') {
        if (quizQuestion) quizQuestion.textContent = item.meaning;
        if (quizInstruction) quizInstruction.textContent = 'این کلمه به آلمانی چیست؟';
        if (listenBtn) listenBtn.style.display = 'none';

        quizCorrectAnswer = item.german;
        const opts = getRandomOptions(item.german, allWords.map(w => w.german));
        renderQuizOptions(opts);

    } else if (quizType === 'verb') {
        if (quizQuestion) quizQuestion.textContent = item.q;
        if (quizInstruction) quizInstruction.textContent = 'جای خالی را پر کنید:';
        if (listenBtn) listenBtn.style.display = 'none';
        if (quizImageContainer) quizImageContainer.style.display = 'none';

        quizCorrectAnswer = item.a;
        renderQuizOptions(item.opts);

    } else if (quizType === 'duSie') {
        if (quizQuestion) quizQuestion.textContent = item.q;
        if (quizInstruction) quizInstruction.textContent = 'کدام جمله صحیح است؟';
        if (listenBtn) listenBtn.style.display = 'none';
        if (quizImageContainer) quizImageContainer.style.display = 'none';

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
    if (!container) return;
    
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
    if (item) speakGerman(item.german);
}

function updateScore() {
    const scoreCorrectEl = document.getElementById('score-correct');
    const scoreWrongEl = document.getElementById('score-wrong');
    const scorePercentEl = document.getElementById('score-percent');
    
    if (scoreCorrectEl) scoreCorrectEl.textContent = scoreCorrect;
    if (scoreWrongEl) scoreWrongEl.textContent = scoreWrong;

    const total = scoreCorrect + scoreWrong;
    const percent = total > 0 ? Math.round((scoreCorrect / total) * 100) : 0;
    if (scorePercentEl) scorePercentEl.textContent = percent + '%';
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
        1: ['Hallo! Ich bin Nicole. Und wer bist du?', 'Hallo. Ich heiße Paco.', 'Woher kommst du? Aus Spanien?', 'Nein, ich komme aus Mexiko.'],
        2: ['Das ist Paco.', 'Guten Tag, Frau Wachter!', 'Guten Tag, Herr Rodriguez. Woher kommen Sie?', 'Ich komme aus Mexiko.'],
        3: ['Wie geht es dir?', 'Gut, danke! Und dir?', 'Auch gut, danke.', 'Wie geht es Ihnen?', 'Sehr gut, danke! Und Ihnen?'],
        4: ['Auf Wiedersehen, Frau Wachter!', 'Auf Wiedersehen!', 'Tschüs, Paco!', 'Tschüs!']
    };

    const lines = dialogLines[dialogNum];
    if (!lines) return;
    
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
        showToast('⚠️ فایل صوتی یافت نشد', 'error');
        playDialogWithTTS(dialogName);
    };

    currentAudio.play().catch(() => {
        playDialogWithTTS(dialogName);
    });

    showToast('▶️ در حال پخش...', 'success');
}

function playDialogWithTTS(dialogName) {
    const dialogs = {
        'dialog1': ['Woher kommst du? Aus Spanien?', 'Nein, ich komme aus Mexiko.', 'Du kommst aus Deutschland, hm?', 'Nein, aus der Schweiz.', 'Ich komme aus Österreich.'],
        'dialog2': ['Das ist Paco.', 'Guten Tag, Frau Wachter!', 'Guten Tag, Herr Rodriguez! Woher kommen Sie?', 'Ich komme aus Mexiko.', 'Auf Wiedersehen, Frau Wachter!', 'Auf Wiedersehen, Herr Rodriguez!']
    };

    const lines = dialogs[dialogName];
    if (!lines) return;
    
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

    if (speakerDisplay) {
        speakerDisplay.textContent = speaker.charAt(0).toUpperCase() + speaker.slice(1);
        speakerDisplay.dataset.selected = speaker;
    }

    if (sentenceElement) sentenceElement.classList.remove('selected');
    selectedSentence = null;
}

function checkMatchingAnswers() {
    if (typeof matchingAnswers === 'undefined') return;
    
    let correct = 0;
    let total = Object.keys(matchingAnswers).length;

    Object.keys(matchingAnswers).forEach(sentenceNum => {
        const speakerDisplay = document.getElementById(`speaker-${sentenceNum}`);
        const selected = speakerDisplay ? speakerDisplay.dataset.selected : null;
        const correctAnswer = matchingAnswers[sentenceNum];
        const sentenceCard = document.querySelector(`[data-sentence="${sentenceNum}"]`);

        if (sentenceCard) {
            if (selected === correctAnswer) {
                sentenceCard.classList.add('correct');
                sentenceCard.classList.remove('wrong');
                correct++;
            } else {
                sentenceCard.classList.add('wrong');
                sentenceCard.classList.remove('correct');
            }
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
    if (typeof checkboxAnswers === 'undefined') return;
    
    let correct = 0;
    let total = Object.keys(checkboxAnswers).length;

    Object.keys(checkboxAnswers).forEach(questionName => {
        const correctAnswers = checkboxAnswers[questionName];
        const checked = Array.from(document.querySelectorAll(`input[name="${questionName}"]:checked`))
            .map(cb => cb.value);

        const firstCheckbox = document.querySelector(`input[name="${questionName}"]`);
        const item = firstCheckbox ? firstCheckbox.closest('.checkbox-item') : null;

        if (item) {
            if (JSON.stringify(checked.sort()) === JSON.stringify(correctAnswers.sort())) {
                item.classList.add('correct');
                item.classList.remove('wrong');
                correct++;
            } else {
                item.classList.add('wrong');
                item.classList.remove('correct');
            }
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

    if (questionCard) {
        questionCard.classList.remove('selected');
        questionCard.classList.add('connected');
    }
    if (answerCard) {
        answerCard.classList.remove('selected');
        answerCard.classList.add('connected');
    }

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

        if (correctMatch && correctMatch !== 'none') {
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

    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
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
// LESSON 1 DATA - داده‌های درس ۱
// Menschen A1.1 - Lektion 1: Hallo! Ich bin...
// ============================================

console.log('📖 Loading Lesson 1 Data...');

// مسیر پایه فایل‌های صوتی
const AUDIO_BASE_PATH = 'audio/lesson1/words/';

// ============================================
// ALL WORDS - همه کلمات درس ۱
// ============================================
const allWords = [
    // === GREETINGS - سلام ===
    { 
        id: 1, 
        german: 'Hallo', 
        ipa: '/haˈloː/', 
        pron: 'هالو', 
        meaning: 'سلام (غیررسمی)', 
        emoji: '👋', 
        example: 'Hallo! Wie geht es dir?', 
        exampleFa: 'سلام! چطوری؟', 
        category: 'greeting', 
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
        audio: 'hallo.mp3'
    },
    { 
        id: 2, 
        german: 'Guten Morgen', 
        ipa: '/ˈɡuːtən ˈmɔʁɡən/', 
        pron: 'گوتِن مورگِن', 
        meaning: 'صبح بخیر', 
        emoji: '🌅', 
        example: 'Guten Morgen, Herr Schmidt!', 
        exampleFa: 'صبح بخیر، آقای اشمیت!', 
        category: 'greeting', 
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&q=80',
        audio: 'guten-morgen.mp3'
    },
    { 
        id: 3, 
        german: 'Guten Tag', 
        ipa: '/ˈɡuːtən taːk/', 
        pron: 'گوتِن تاگ', 
        meaning: 'روز بخیر', 
        emoji: '☀️', 
        example: 'Guten Tag, Frau Müller!', 
        exampleFa: 'روز بخیر، خانم مولر!', 
        category: 'greeting', 
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        audio: 'guten-tag.mp3'
    },
    { 
        id: 4, 
        german: 'Guten Abend', 
        ipa: '/ˈɡuːtən ˈaːbənt/', 
        pron: 'گوتِن آبِنت', 
        meaning: 'عصر بخیر', 
        emoji: '🌆', 
        example: 'Guten Abend! Schön, Sie zu sehen.', 
        exampleFa: 'عصر بخیر! خوشحالم می‌بینمتان.', 
        category: 'greeting', 
        image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&q=80',
        audio: 'guten-abend.mp3'
    },
    { 
        id: 5, 
        german: 'Gute Nacht', 
        ipa: '/ˈɡuːtə naxt/', 
        pron: 'گوتِ ناخت', 
        meaning: 'شب بخیر', 
        emoji: '🌙', 
        example: 'Gute Nacht! Schlaf gut!', 
        exampleFa: 'شب بخیر! خوب بخواب!', 
        category: 'greeting', 
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&q=80',
        audio: 'gute-nacht.mp3'
    },

    // === FAREWELL - خداحافظی ===
    { 
        id: 6, 
        german: 'Auf Wiedersehen', 
        ipa: '/aʊf ˈviːdɐˌzeːən/', 
        pron: 'آوف ویدِرزِهِن', 
        meaning: 'خداحافظ (رسمی)', 
        emoji: '👋', 
        example: 'Auf Wiedersehen, bis morgen!', 
        exampleFa: 'خداحافظ، تا فردا!', 
        category: 'farewell', 
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80',
        audio: 'auf-wiedersehen.mp3'
    },
    { 
        id: 7, 
        german: 'Tschüs', 
        ipa: '/tʃyːs/', 
        pron: 'چوس', 
        meaning: 'خداحافظ (غیررسمی)', 
        emoji: '✌️', 
        example: 'Tschüs! Bis bald!', 
        exampleFa: 'خداحافظ! به زودی!', 
        category: 'farewell', 
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80',
        audio: 'tschuess.mp3'
    },

    // === PRONOUNS - ضمایر ===
    { 
        id: 8, 
        german: 'ich', 
        ipa: '/ɪç/', 
        pron: 'ایش', 
        meaning: 'من', 
        emoji: '👤', 
        example: 'Ich bin Ali.', 
        exampleFa: 'من علی هستم.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        audio: 'ich.mp3'
    },
    { 
        id: 9, 
        german: 'du', 
        ipa: '/duː/', 
        pron: 'دو', 
        meaning: 'تو (غیررسمی)', 
        emoji: '👤', 
        example: 'Du bist mein Freund.', 
        exampleFa: 'تو دوست من هستی.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
        audio: 'du.mp3'
    },
    { 
        id: 10, 
        german: 'Sie', 
        ipa: '/ziː/', 
        pron: 'زی', 
        meaning: 'شما (رسمی)', 
        emoji: '👔', 
        example: 'Sie sind Herr Schmidt.', 
        exampleFa: 'شما آقای اشمیت هستید.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        audio: 'sie-formal.mp3'
    },
    { 
        id: 11, 
        german: 'er', 
        ipa: '/eːɐ/', 
        pron: 'اِر', 
        meaning: 'او (مذکر)', 
        emoji: '👨', 
        example: 'Er kommt aus Iran.', 
        exampleFa: 'او از ایران می‌آید.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        audio: 'er.mp3'
    },
    { 
        id: 12, 
        german: 'sie', 
        ipa: '/ziː/', 
        pron: 'زی', 
        meaning: 'او (مؤنث)', 
        emoji: '👩', 
        example: 'Sie kommt aus Deutschland.', 
        exampleFa: 'او از آلمان می‌آید.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        audio: 'sie.mp3'
    },
    { 
        id: 13, 
        german: 'es', 
        ipa: '/ɛs/', 
        pron: 'اِس', 
        meaning: 'آن (خنثی)', 
        emoji: '📦', 
        example: 'Es ist schön.', 
        exampleFa: 'آن زیباست.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
        audio: 'es.mp3'
    },
    { 
        id: 14, 
        german: 'wir', 
        ipa: '/viːɐ/', 
        pron: 'ویر', 
        meaning: 'ما', 
        emoji: '👥', 
        example: 'Wir sind Freunde.', 
        exampleFa: 'ما دوست هستیم.', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
        audio: 'wir.mp3'
    },
    { 
        id: 15, 
        german: 'ihr', 
        ipa: '/iːɐ/', 
        pron: 'ایر', 
        meaning: 'شما (جمع غیررسمی)', 
        emoji: '👥', 
        example: 'Ihr seid toll!', 
        exampleFa: 'شما عالی هستید!', 
        category: 'pronoun', 
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
        audio: 'ihr.mp3'
    },

    // === QUESTIONS - سؤالات ===
    { 
        id: 16, 
        german: 'Wie heißen Sie?', 
        ipa: '/viː ˈhaɪsən ziː/', 
        pron: 'وی هایسِن زی؟', 
        meaning: 'اسم شما چیست؟ (رسمی)', 
        emoji: '❓', 
        example: 'Wie heißen Sie? - Ich heiße Schmidt.', 
        exampleFa: 'اسم شما چیست؟ - اسم من اشمیت است.', 
        category: 'question', 
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'wie-heissen-sie.mp3'
    },
    { 
        id: 17, 
        german: 'Wie heißt du?', 
        ipa: '/viː haɪst duː/', 
        pron: 'وی هایست دو؟', 
        meaning: 'اسمت چیه؟ (غیررسمی)', 
        emoji: '❓', 
        example: 'Wie heißt du? - Ich heiße Maria.', 
        exampleFa: 'اسمت چیه؟ - اسم من ماریا است.', 
        category: 'question', 
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'wie-heisst-du.mp3'
    },
    { 
        id: 18, 
        german: 'Woher kommen Sie?', 
        ipa: '/voˈheːɐ ˈkɔmən ziː/', 
        pron: 'ووهِر کُمِن زی؟', 
        meaning: 'از کجا می‌آیید؟ (رسمی)', 
        emoji: '🌍', 
        example: 'Woher kommen Sie? - Ich komme aus Iran.', 
        exampleFa: 'از کجا می‌آیید؟ - من از ایران می‌آیم.', 
        category: 'question', 
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80',
        audio: 'woher-kommen-sie.mp3'
    },
    { 
        id: 19, 
        german: 'Woher kommst du?', 
        ipa: '/voˈheːɐ kɔmst duː/', 
        pron: 'ووهِر کُمست دو؟', 
        meaning: 'از کجا می‌آیی؟ (غیررسمی)', 
        emoji: '🌍', 
        example: 'Woher kommst du? - Ich komme aus Mexiko.', 
        exampleFa: 'از کجا می‌آیی؟ - من از مکزیک می‌آیم.', 
        category: 'question', 
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80',
        audio: 'woher-kommst-du.mp3'
    },
    { 
        id: 20, 
        german: 'Wie geht es Ihnen?', 
        ipa: '/viː ɡeːt ɛs ˈiːnən/', 
        pron: 'وی گِهت اِس اینِن؟', 
        meaning: 'حال شما چطور است؟ (رسمی)', 
        emoji: '😊', 
        example: 'Wie geht es Ihnen? - Gut, danke!', 
        exampleFa: 'حال شما چطور است؟ - خوبم، ممنون!', 
        category: 'question', 
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
        audio: 'wie-geht-es-ihnen.mp3'
    },
    { 
        id: 21, 
        german: 'Wie geht es dir?', 
        ipa: '/viː ɡeːt ɛs diːɐ/', 
        pron: 'وی گِهت اِس دیر؟', 
        meaning: 'حالت چطوره؟ (غیررسمی)', 
        emoji: '😊', 
        example: 'Wie geht es dir? - Sehr gut!', 
        exampleFa: 'حالت چطوره؟ - خیلی خوبم!', 
        category: 'question', 
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
        audio: 'wie-geht-es-dir.mp3'
    },

    // === ANSWERS - جواب‌ها ===
    { 
        id: 22, 
        german: 'Sehr gut, danke!', 
        ipa: '/zeːɐ ɡuːt ˈdaŋkə/', 
        pron: 'زِر گوت، دانکِ!', 
        meaning: 'خیلی خوبم، ممنون!', 
        emoji: '😄', 
        example: 'Wie geht es dir? - Sehr gut, danke!', 
        exampleFa: 'چطوری؟ - خیلی خوبم، ممنون!', 
        category: 'answer', 
        image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80',
        audio: 'sehr-gut-danke.mp3'
    },
    { 
        id: 23, 
        german: 'Gut, danke!', 
        ipa: '/ɡuːt ˈdaŋkə/', 
        pron: 'گوت، دانکِ!', 
        meaning: 'خوبم، ممنون!', 
        emoji: '😊', 
        example: 'Wie geht es Ihnen? - Gut, danke!', 
        exampleFa: 'حالتان چطور است؟ - خوبم، ممنون!', 
        category: 'answer', 
        image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80',
        audio: 'gut-danke.mp3'
    },
    { 
        id: 24, 
        german: 'Es geht.', 
        ipa: '/ɛs ɡeːt/', 
        pron: 'اِس گِهت.', 
        meaning: 'بد نیستم.', 
        emoji: '😐', 
        example: "Wie geht's? - Es geht.", 
        exampleFa: 'چطوری؟ - بد نیستم.', 
        category: 'answer', 
        image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80',
        audio: 'es-geht.mp3'
    },
    { 
        id: 25, 
        german: 'Danke!', 
        ipa: '/ˈdaŋkə/', 
        pron: 'دانکِ!', 
        meaning: 'ممنون!', 
        emoji: '🙏', 
        example: 'Danke schön!', 
        exampleFa: 'خیلی ممنون!', 
        category: 'answer', 
        image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80',
        audio: 'danke.mp3'
    },

    // === PHRASES - عبارات ===
    { 
        id: 26, 
        german: 'Ich heiße...', 
        ipa: '/ɪç ˈhaɪsə/', 
        pron: 'ایش هایسِ...', 
        meaning: 'اسم من ... است', 
        emoji: '📝', 
        example: 'Ich heiße Paco.', 
        exampleFa: 'اسم من پاکو است.', 
        category: 'phrase', 
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
        audio: 'ich-heisse.mp3'
    },
    { 
        id: 27, 
        german: 'Ich bin...', 
        ipa: '/ɪç bɪn/', 
        pron: 'ایش بین...', 
        meaning: 'من ... هستم', 
        emoji: '📝', 
        example: 'Ich bin Nicole.', 
        exampleFa: 'من نیکول هستم.', 
        category: 'phrase', 
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
        audio: 'ich-bin.mp3'
    },
    { 
        id: 28, 
        german: 'Ich komme aus...', 
        ipa: '/ɪç ˈkɔmə aʊs/', 
        pron: 'ایش کُمِ آوس...', 
        meaning: 'من از ... می‌آیم', 
        emoji: '🌍', 
        example: 'Ich komme aus Iran.', 
        exampleFa: 'من از ایران می‌آیم.', 
        category: 'phrase', 
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80',
        audio: 'ich-komme-aus.mp3'
    },
    { 
        id: 29, 
        german: 'Herr', 
        ipa: '/hɛʁ/', 
        pron: 'هِر', 
        meaning: 'آقای', 
        emoji: '👔', 
        example: 'Guten Tag, Herr Schmidt!', 
        exampleFa: 'روز بخیر، آقای اشمیت!', 
        category: 'phrase', 
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        audio: 'herr.mp3'
    },
    { 
        id: 30, 
        german: 'Frau', 
        ipa: '/fʁaʊ/', 
        pron: 'فراو', 
        meaning: 'خانم', 
        emoji: '👩‍💼', 
        example: 'Guten Tag, Frau Wachter!', 
        exampleFa: 'روز بخیر، خانم واختر!', 
        category: 'phrase', 
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        audio: 'frau.mp3'
    }
];

// ============================================
// COUNTRIES - کشورها
// ============================================
const countries = [
    { 
        id: 1, 
        german: 'Deutschland', 
        ipa: '/ˈdɔʏtʃlant/', 
        pron: 'دویچلَند', 
        meaning: 'آلمان', 
        flag: '🇩🇪', 
        preposition: 'aus Deutschland', 
        hasArticle: false, 
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80',
        audio: 'deutschland.mp3'
    },
    { 
        id: 2, 
        german: 'Österreich', 
        ipa: '/ˈøːstəʁaɪç/', 
        pron: 'اُسترایش', 
        meaning: 'اتریش', 
        flag: '🇦🇹', 
        preposition: 'aus Österreich', 
        hasArticle: false, 
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80',
        audio: 'oesterreich.mp3'
    },
    { 
        id: 3, 
        german: 'die Schweiz', 
        ipa: '/diː ʃvaɪts/', 
        pron: 'دی شوایتس', 
        meaning: 'سوئیس', 
        flag: '🇨🇭', 
        preposition: 'aus der Schweiz', 
        hasArticle: true, 
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80',
        audio: 'die-schweiz.mp3'
    },
    { 
        id: 4, 
        german: 'Spanien', 
        ipa: '/ˈʃpaːniən/', 
        pron: 'شپانیِن', 
        meaning: 'اسپانیا', 
        flag: '🇪🇸', 
        preposition: 'aus Spanien', 
        hasArticle: false, 
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80',
        audio: 'spanien.mp3'
    },
    { 
        id: 5, 
        german: 'Mexiko', 
        ipa: '/ˈmɛksiko/', 
        pron: 'مِکزیکو', 
        meaning: 'مکزیک', 
        flag: '🇲🇽', 
        preposition: 'aus Mexiko', 
        hasArticle: false, 
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&q=80',
        audio: 'mexiko.mp3'
    },
    { 
        id: 6, 
        german: 'Frankreich', 
        ipa: '/ˈfʁaŋkʁaɪç/', 
        pron: 'فرانکرایش', 
        meaning: 'فرانسه', 
        flag: '🇫🇷', 
        preposition: 'aus Frankreich', 
        hasArticle: false, 
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
        audio: 'frankreich.mp3'
    },
    { 
        id: 7, 
        german: 'die Türkei', 
        ipa: '/diː tʏʁˈkaɪ/', 
        pron: 'دی تورکای', 
        meaning: 'ترکیه', 
        flag: '🇹🇷', 
        preposition: 'aus der Türkei', 
        hasArticle: true, 
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&q=80',
        audio: 'die-tuerkei.mp3'
    },
    { 
        id: 8, 
        german: 'der Iran', 
        ipa: '/deːɐ iˈʁaːn/', 
        pron: 'دِر ایران', 
        meaning: 'ایران', 
        flag: '🇮🇷', 
        preposition: 'aus dem Iran', 
        hasArticle: true, 
        image: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=400&q=80',
        audio: 'der-iran.mp3'
    }
];

// ============================================
// ALPHABET - الفبا
// ============================================
const alphabet = [
    { letter: 'A a', name: 'A', pron: 'آ', ipa: '/aː/', audio: 'a.mp3' },
    { letter: 'B b', name: 'Be', pron: 'بِه', ipa: '/beː/', audio: 'b.mp3' },
    { letter: 'C c', name: 'Tse', pron: 'تسِه', ipa: '/tseː/', audio: 'c.mp3' },
    { letter: 'D d', name: 'De', pron: 'دِه', ipa: '/deː/', audio: 'd.mp3' },
    { letter: 'E e', name: 'E', pron: 'اِه', ipa: '/eː/', audio: 'e.mp3' },
    { letter: 'F f', name: 'Ef', pron: 'اِف', ipa: '/ɛf/', audio: 'f.mp3' },
    { letter: 'G g', name: 'Ge', pron: 'گِه', ipa: '/ɡeː/', audio: 'g.mp3' },
    { letter: 'H h', name: 'Ha', pron: 'ها', ipa: '/haː/', audio: 'h.mp3' },
    { letter: 'I i', name: 'I', pron: 'ای', ipa: '/iː/', audio: 'i.mp3' },
    { letter: 'J j', name: 'Jot', pron: 'یُت', ipa: '/jɔt/', audio: 'j.mp3' },
    { letter: 'K k', name: 'Ka', pron: 'کا', ipa: '/kaː/', audio: 'k.mp3' },
    { letter: 'L l', name: 'El', pron: 'اِل', ipa: '/ɛl/', audio: 'l.mp3' },
    { letter: 'M m', name: 'Em', pron: 'اِم', ipa: '/ɛm/', audio: 'm.mp3' },
    { letter: 'N n', name: 'En', pron: 'اِن', ipa: '/ɛn/', audio: 'n.mp3' },
    { letter: 'O o', name: 'O', pron: 'اُو', ipa: '/oː/', audio: 'o.mp3' },
    { letter: 'P p', name: 'Pe', pron: 'پِه', ipa: '/peː/', audio: 'p.mp3' },
    { letter: 'Q q', name: 'Qu', pron: 'کو', ipa: '/kuː/', audio: 'q.mp3' },
    { letter: 'R r', name: 'Er', pron: 'اِر', ipa: '/ɛʁ/', audio: 'r.mp3' },
    { letter: 'S s', name: 'Es', pron: 'اِس', ipa: '/ɛs/', audio: 's.mp3' },
    { letter: 'T t', name: 'Te', pron: 'تِه', ipa: '/teː/', audio: 't.mp3' },
    { letter: 'U u', name: 'U', pron: 'او', ipa: '/uː/', audio: 'u.mp3' },
    { letter: 'V v', name: 'Vau', pron: 'فاو', ipa: '/faʊ/', audio: 'v.mp3' },
    { letter: 'W w', name: 'We', pron: 'وِه', ipa: '/veː/', audio: 'w.mp3' },
    { letter: 'X x', name: 'Ix', pron: 'ایکس', ipa: '/ɪks/', audio: 'x.mp3' },
    { letter: 'Y y', name: 'Ypsilon', pron: 'اوپسیلون', ipa: '/ˈʏpsilɔn/', audio: 'y.mp3' },
    { letter: 'Z z', name: 'Tset', pron: 'تسِت', ipa: '/tsɛt/', audio: 'z.mp3' }
];

// ============================================
// VERB QUIZ DATA - کوئیز فعل‌ها
// ============================================
const verbQuizData = [
    { q: 'Ich ___ Ali. (sein)', a: 'bin', opts: ['bin', 'bist', 'ist', 'sind'] },
    { q: 'Du ___ Maria. (sein)', a: 'bist', opts: ['bin', 'bist', 'ist', 'sind'] },
    { q: 'Er ___ Lehrer. (sein)', a: 'ist', opts: ['bin', 'bist', 'ist', 'sind'] },
    { q: 'Wir ___ Freunde. (sein)', a: 'sind', opts: ['bin', 'bist', 'seid', 'sind'] },
    { q: 'Ihr ___ toll! (sein)', a: 'seid', opts: ['bin', 'sind', 'seid', 'ist'] },
    { q: 'Sie ___ aus Iran. (sein)', a: 'sind', opts: ['bin', 'bist', 'ist', 'sind'] },
    { q: 'Ich ___ aus Iran. (kommen)', a: 'komme', opts: ['komme', 'kommst', 'kommt', 'kommen'] },
    { q: 'Woher ___ du? (kommen)', a: 'kommst', opts: ['komme', 'kommst', 'kommt', 'kommen'] },
    { q: 'Er ___ aus Mexiko. (kommen)', a: 'kommt', opts: ['komme', 'kommst', 'kommt', 'kommen'] },
    { q: 'Wir ___ aus Deutschland. (kommen)', a: 'kommen', opts: ['komme', 'kommst', 'kommt', 'kommen'] },
    { q: 'Ich ___ Ali. (heißen)', a: 'heiße', opts: ['heiße', 'heißt', 'heißen', 'heißst'] },
    { q: 'Wie ___ du? (heißen)', a: 'heißt', opts: ['heiße', 'heißt', 'heißen', 'heißst'] },
    { q: 'Sie ___ Maria. (heißen)', a: 'heißt', opts: ['heiße', 'heißt', 'heißen', 'heißst'] },
    { q: 'Wie ___ Sie? (heißen)', a: 'heißen', opts: ['heiße', 'heißt', 'heißen', 'heißst'] }
];

// ============================================
// DU/SIE QUIZ DATA - کوئیز رسمی/غیررسمی
// ============================================
const duSieQuizData = [
    { q: 'به دوستت می‌گویی:', a: 'Wie heißt du?', opts: ['Wie heißt du?', 'Wie heißen Sie?'] },
    { q: 'به استادت می‌گویی:', a: 'Wie heißen Sie?', opts: ['Wie heißt du?', 'Wie heißen Sie?'] },
    { q: 'به یک غریبه بزرگسال می‌گویی:', a: 'Woher kommen Sie?', opts: ['Woher kommst du?', 'Woher kommen Sie?'] },
    { q: 'به همکلاسی‌ات می‌گویی:', a: 'Wie geht es dir?', opts: ['Wie geht es dir?', 'Wie geht es Ihnen?'] },
    { q: 'به رئیست در محل کار می‌گویی:', a: 'Wie geht es Ihnen?', opts: ['Wie geht es dir?', 'Wie geht es Ihnen?'] },
    { q: 'خداحافظی با دوست صمیمی:', a: 'Tschüs!', opts: ['Tschüs!', 'Auf Wiedersehen!'] },
    { q: 'خداحافظی با استاد دانشگاه:', a: 'Auf Wiedersehen!', opts: ['Tschüs!', 'Auf Wiedersehen!'] },
    { q: 'به بچه ۵ ساله می‌گویی:', a: 'Wie heißt du?', opts: ['Wie heißt du?', 'Wie heißen Sie?'] },
    { q: 'به خانم مسن در خیابان می‌گویی:', a: 'Wie geht es Ihnen?', opts: ['Wie geht es dir?', 'Wie geht es Ihnen?'] }
];

// ============================================
// EXERCISE ANSWERS - جواب تمرین‌ها
// ============================================
const matchingAnswers = {
    '1': 'nicole',
    '2': 'paco',
    '3': 'nicole',
    '4': 'paco',
    '5': 'paco'
};

const checkboxAnswers = {
    'q1': ['nicole'],
    'q2': ['paco'],
    'q3': ['wachter'],
    'q4': ['paco'],
    'q5': ['wachter']
};

console.log('✅ Lesson 1 Data loaded successfully!');
console.log('📊 Total words:', allWords.length);
console.log('🌍 Total countries:', countries.length);
console.log('🔤 Alphabet letters:', alphabet.length);
