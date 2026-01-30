// ============================================
// MP3 SYNC PLAYER - پخش فایل صوتی با هماهنگی متن
// بدون نیاز به API آنلاین - کاملاً رایگان و طبیعی
// ============================================

class Mp3SyncPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentLineIndex = -1;
        this.wordTimers = []; // نگهدارنده تایمرهای کلمات
        this.dialogData = []; // داده‌های مکالمه
    }

    // تنظیم داده‌های مکالمه
    setDialogData(data) {
        this.dialogData = data;
    }

    // پخش یک خط خاص
    playLine(index) {
        // توقف قبلی‌ها
        this.stop();

        const lineData = this.dialogData[index];
        if (!lineData) return;

        this.currentLineIndex = index;
        this.isPlaying = true;

        // تنظیم آدرس فایل صوتی
        this.audio.src = lineData.audioFile;
        this.audio.playbackRate = document.getElementById('speedSelect')?.value || 1;
        
        // هایلایت کردن خط
        this.highlightLine(index);

        // شروع پخش
        this.audio.play().catch(e => console.error("Error playing audio:", e));

        // شروع انیمیشن کلمات
        this.audio.onloadedmetadata = () => {
            const duration = this.audio.duration; // مدت زمان کل فایل
            const text = lineData.german;
            this.syncWords(text, index, duration);
        };

        // وقتی پخش تموم شد
        this.audio.onended = () => {
            this.stop();
        };
    }

    // الگوریتم هوشمند هماهنگ‌سازی کلمات با صدا
    syncWords(text, lineIndex, totalDuration) {
        const lineEl = document.querySelector(`[data-line-index="${lineIndex}"]`);
        if (!lineEl) return;

        const words = lineEl.querySelectorAll('.word');
        const wordCount = words.length;
        
        // محاسبه زمان‌بندی هوشمند
        // کلمات طولانی‌تر و کلمات قبل از ویرگول زمان بیشتری می‌گیرند
        let totalWeight = 0;
        const weights = [];

        text.split(/\s+/).forEach(word => {
            let weight = word.length; 
            if (word.includes(',') || word.includes('.')) weight += 3; // مکث برای علائم نگارشی
            weights.push(weight);
            totalWeight += weight;
        });

        let currentTime = 0;
        
        // تنظیم تایمر برای هر کلمه
        words.forEach((wordEl, i) => {
            // محاسبه زمان شروع این کلمه بر اساس وزن آن
            const wordDuration = (weights[i] / totalWeight) * totalDuration;
            
            const timer = setTimeout(() => {
                if (!this.isPlaying) return;
                
                // پاک کردن هایلایت قبلی
                lineEl.querySelectorAll('.word').forEach(w => w.classList.remove('highlight'));
                
                // هایلایت جدید
                wordEl.classList.add('highlight');
                
            }, currentTime * 1000); // تبدیل به میلی‌ثانیه

            this.wordTimers.push(timer);
            currentTime += wordDuration;
        });
    }

    // پخش کل مکالمه پشت سر هم
    async playAll() {
        this.stop();
        const btn = document.getElementById('playAllBtn');
        btn.innerHTML = '⏹️ توقف پخش';
        btn.classList.add('playing');

        for (let i = 0; i < this.dialogData.length; i++) {
            if (btn.innerHTML.includes('پخش همه')) break; // اگر کاربر متوقف کرد

            await this.playLinePromise(i);
            await new Promise(r => setTimeout(r, 500)); // مکث کوتاه بین جملات
        }

        this.stop();
    }

    // پرامیس برای پخش خط (برای استفاده در playAll)
    playLinePromise(index) {
        return new Promise(resolve => {
            this.playLine(index);
            this.audio.onended = resolve;
        });
    }

    // توقف کامل
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        
        // پاک کردن تمام تایمرها
        this.wordTimers.forEach(timer => clearTimeout(timer));
        this.wordTimers = [];

        // پاک کردن استایل‌ها
        document.querySelectorAll('.lyric-line').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.word').forEach(w => w.classList.remove('highlight'));

        const btn = document.getElementById('playAllBtn');
        if (btn) {
            btn.innerHTML = '▶️ پخش همه';
            btn.classList.remove('playing');
        }
    }

    // هایلایت کردن کل خط
    highlightLine(index) {
        document.querySelectorAll('.lyric-line').forEach(l => l.classList.remove('active'));
        const el = document.querySelector(`[data-line-index="${index}"]`);
        if (el) {
            el.classList.add('active');
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    setSpeed(speed) {
        this.audio.playbackRate = speed;
    }
}

// ساخت نمونه گلوبال
const mp3Player = new Mp3SyncPlayer();
