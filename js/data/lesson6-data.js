// ============================================
// LESSON 6 DATA - داده‌های درس ۶
// Menschen A1.1 - Lektion 6: Ich brauche kein Büro
// ============================================

// ============================================
// PART 1: VOCABULARY DATA - داده‌های واژگان
// ============================================

const allWordsLesson6 = [
    // ============================================
    // CATEGORY: OFFICE EQUIPMENT - تجهیزات اداری
    // ============================================
    {
        id: 1,
        german: 'der Computer',
        ipa: '/kɔmˈpjuːtɐ/',
        pron: 'کامپیوتر',
        meaning: 'کامپیوتر',
        emoji: '💻',
        example: 'Ich habe einen Computer.',
        exampleFa: 'من یک کامپیوتر دارم.',
        category: 'office',
        gender: 'der',
        plural: 'die Computer',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-1.mp3',
        audioExample: 'audio/lesson6/vocab/id-1-E.mp3'
    },
    {
        id: 2,
        german: 'der Laptop',
        ipa: '/ˈlɛptɔp/',
        pron: 'لَپتاپ',
        meaning: 'لپ‌تاپ',
        emoji: '💻',
        example: 'Ich brauche einen Laptop.',
        exampleFa: 'من یک لپ‌تاپ نیاز دارم.',
        category: 'office',
        gender: 'der',
        plural: 'die Laptops',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-2.mp3',
        audioExample: 'audio/lesson6/vocab/id-2-E.mp3'
    },
    {
        id: 3,
        german: 'das Handy',
        ipa: '/ˈhɛndi/',
        pron: 'هَندی',
        meaning: 'موبایل',
        emoji: '📱',
        example: 'Das Handy ist neu.',
        exampleFa: 'موبایل نو است.',
        category: 'office',
        gender: 'das',
        plural: 'die Handys',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-3.mp3',
        audioExample: 'audio/lesson6/vocab/id-3-E.mp3'
    },
    {
        id: 4,
        german: 'der Drucker',
        ipa: '/ˈdʁʊkɐ/',
        pron: 'دروکِر',
        meaning: 'پرینتر',
        emoji: '🖨️',
        example: 'Der Drucker funktioniert nicht.',
        exampleFa: 'پرینتر کار نمی‌کند.',
        category: 'office',
        gender: 'der',
        plural: 'die Drucker',
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-4.mp3',
        audioExample: 'audio/lesson6/vocab/id-4-E.mp3'
    },
    {
        id: 5,
        german: 'der Bildschirm',
        ipa: '/ˈbɪltʃɪʁm/',
        pron: 'بیلدشیرم',
        meaning: 'مانیتور / صفحه نمایش',
        emoji: '🖥️',
        example: 'Der Bildschirm ist groß.',
        exampleFa: 'مانیتور بزرگ است.',
        category: 'office',
        gender: 'der',
        plural: 'die Bildschirme',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-5.mp3',
        audioExample: 'audio/lesson6/vocab/id-5-E.mp3'
    },
    {
        id: 6,
        german: 'die Maus',
        ipa: '/maʊs/',
        pron: 'ماوس',
        meaning: 'ماوس',
        emoji: '🖱️',
        example: 'Die Maus ist kaputt.',
        exampleFa: 'ماوس خراب است.',
        category: 'office',
        gender: 'die',
        plural: 'die Mäuse',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-6.mp3',
        audioExample: 'audio/lesson6/vocab/id-6-E.mp3'
    },
    {
        id: 7,
        german: 'die Tastatur',
        ipa: '/tasˈtaːtuːɐ/',
        pron: 'تَستاتور',
        meaning: 'کیبورد',
        emoji: '⌨️',
        example: 'Die Tastatur ist neu.',
        exampleFa: 'کیبورد نو است.',
        category: 'office',
        gender: 'die',
        plural: 'die Tastaturen',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-7.mp3',
        audioExample: 'audio/lesson6/vocab/id-7-E.mp3'
    },

    // ============================================
    // CATEGORY: OFFICE SUPPLIES - لوازم اداری
    // ============================================
    {
        id: 8,
        german: 'der Kugelschreiber',
        ipa: '/ˈkuːɡl̩ˌʃʁaɪbɐ/',
        pron: 'کوگِل‌شرایبِر',
        meaning: 'خودکار',
        emoji: '🖊️',
        example: 'Ich brauche einen Kugelschreiber.',
        exampleFa: 'من یک خودکار نیاز دارم.',
        category: 'supply',
        gender: 'der',
        plural: 'die Kugelschreiber',
        image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-8.mp3',
        audioExample: 'audio/lesson6/vocab/id-8-E.mp3'
    },
    {
        id: 9,
        german: 'der Bleistift',
        ipa: '/ˈblaɪʃtɪft/',
        pron: 'بلای‌شتیفت',
        meaning: 'مداد',
        emoji: '✏️',
        example: 'Hast du einen Bleistift?',
        exampleFa: 'مداد داری؟',
        category: 'supply',
        gender: 'der',
        plural: 'die Bleistifte',
        image: 'https://images.unsplash.com/photo-1522111608460-19a7b61e49f9?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-9.mp3',
        audioExample: 'audio/lesson6/vocab/id-9-E.mp3'
    },
    {
        id: 10,
        german: 'der Stift',
        ipa: '/ʃtɪft/',
        pron: 'شتیفت',
        meaning: 'قلم',
        emoji: '🖊️',
        example: 'Wo ist mein Stift?',
        exampleFa: 'قلم من کجاست؟',
        category: 'supply',
        gender: 'der',
        plural: 'die Stifte',
        image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-10.mp3',
        audioExample: 'audio/lesson6/vocab/id-10-E.mp3'
    },
    {
        id: 11,
        german: 'das Notizbuch',
        ipa: '/noˈtiːtsbʊx/',
        pron: 'نوتیتس‌بوخ',
        meaning: 'دفترچه یادداشت',
        emoji: '📓',
        example: 'Ich schreibe in mein Notizbuch.',
        exampleFa: 'در دفترچه یادداشتم می‌نویسم.',
        category: 'supply',
        gender: 'das',
        plural: 'die Notizbücher',
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-11.mp3',
        audioExample: 'audio/lesson6/vocab/id-11-E.mp3'
    },
    {
        id: 12,
        german: 'der Kalender',
        ipa: '/kaˈlɛndɐ/',
        pron: 'کالِندِر',
        meaning: 'تقویم',
        emoji: '📅',
        example: 'Der Kalender hängt an der Wand.',
        exampleFa: 'تقویم روی دیوار آویزان است.',
        category: 'supply',
        gender: 'der',
        plural: 'die Kalender',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-12.mp3',
        audioExample: 'audio/lesson6/vocab/id-12-E.mp3'
    },
    {
        id: 13,
        german: 'die Briefmarke',
        ipa: '/ˈbʁiːfˌmaʁkə/',
        pron: 'بریف‌مارکه',
        meaning: 'تمبر',
        emoji: '📮',
        example: 'Ich brauche eine Briefmarke.',
        exampleFa: 'من یک تمبر نیاز دارم.',
        category: 'supply',
        gender: 'die',
        plural: 'die Briefmarken',
        image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-13.mp3',
        audioExample: 'audio/lesson6/vocab/id-13-E.mp3'
    },
    {
        id: 14,
        german: 'die Visitenkarte',
        ipa: '/viˈziːtn̩ˌkaʁtə/',
        pron: 'ویزیتِن‌کارته',
        meaning: 'کارت ویزیت',
        emoji: '💳',
        example: 'Hier ist meine Visitenkarte.',
        exampleFa: 'این کارت ویزیت من است.',
        category: 'supply',
        gender: 'die',
        plural: 'die Visitenkarten',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-14.mp3',
        audioExample: 'audio/lesson6/vocab/id-14-E.mp3'
    },
    {
        id: 15,
        german: 'der Ordner',
        ipa: '/ˈɔʁdnɐ/',
        pron: 'اُردنِر',
        meaning: 'زونکن / پوشه',
        emoji: '📁',
        example: 'Der Ordner ist im Schrank.',
        exampleFa: 'زونکن در کمد است.',
        category: 'supply',
        gender: 'der',
        plural: 'die Ordner',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-15.mp3',
        audioExample: 'audio/lesson6/vocab/id-15-E.mp3'
    },

    // ============================================
    // CATEGORY: DOCUMENTS - اسناد
    // ============================================
    {
        id: 16,
        german: 'das Formular',
        ipa: '/fɔʁmuˈlaːɐ/',
        pron: 'فُرمولار',
        meaning: 'فرم',
        emoji: '📋',
        example: 'Bitte füllen Sie das Formular aus.',
        exampleFa: 'لطفاً فرم را پر کنید.',
        category: 'document',
        gender: 'das',
        plural: 'die Formulare',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-16.mp3',
        audioExample: 'audio/lesson6/vocab/id-16-E.mp3'
    },
    {
        id: 17,
        german: 'die Rechnung',
        ipa: '/ˈʁɛçnʊŋ/',
        pron: 'رِشنونگ',
        meaning: 'فاکتور / صورتحساب',
        emoji: '🧾',
        example: 'Wo ist die Rechnung?',
        exampleFa: 'فاکتور کجاست؟',
        category: 'document',
        gender: 'die',
        plural: 'die Rechnungen',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-17.mp3',
        audioExample: 'audio/lesson6/vocab/id-17-E.mp3'
    },
    {
        id: 18,
        german: 'der Schlüssel',
        ipa: '/ˈʃlʏsl̩/',
        pron: 'شلوسِل',
        meaning: 'کلید',
        emoji: '🔑',
        example: 'Wo ist der Schlüssel?',
        exampleFa: 'کلید کجاست؟',
        category: 'document',
        gender: 'der',
        plural: 'die Schlüssel',
        image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-18.mp3',
        audioExample: 'audio/lesson6/vocab/id-18-E.mp3'
    },
    {
        id: 19,
        german: 'der Termin',
        ipa: '/tɛʁˈmiːn/',
        pron: 'تِرمین',
        meaning: 'قرار ملاقات',
        emoji: '📆',
        example: 'Ich habe einen Termin.',
        exampleFa: 'من یک قرار ملاقات دارم.',
        category: 'document',
        gender: 'der',
        plural: 'die Termine',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-19.mp3',
        audioExample: 'audio/lesson6/vocab/id-19-E.mp3'
    },

    // ============================================
    // CATEGORY: WORKPLACE - محل کار
    // ============================================
    {
        id: 20,
        german: 'das Büro',
        ipa: '/byˈʁoː/',
        pron: 'بورو',
        meaning: 'دفتر کار',
        emoji: '🏢',
        example: 'Ich brauche kein Büro.',
        exampleFa: 'من دفتر نیاز ندارم.',
        category: 'workplace',
        gender: 'das',
        plural: 'die Büros',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-20.mp3',
        audioExample: 'audio/lesson6/vocab/id-20-E.mp3'
    },
    {
        id: 21,
        german: 'die Firma',
        ipa: '/ˈfɪʁma/',
        pron: 'فیرما',
        meaning: 'شرکت',
        emoji: '🏬',
        example: 'Die Firma ist groß.',
        exampleFa: 'شرکت بزرگ است.',
        category: 'workplace',
        gender: 'die',
        plural: 'die Firmen',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-21.mp3',
        audioExample: 'audio/lesson6/vocab/id-21-E.mp3'
    },
    {
        id: 22,
        german: 'der Schreibtisch',
        ipa: '/ˈʃʁaɪpˌtɪʃ/',
        pron: 'شرایب‌تیش',
        meaning: 'میز تحریر',
        emoji: '🪑',
        example: 'Der Schreibtisch ist voll.',
        exampleFa: 'میز تحریر پر است.',
        category: 'workplace',
        gender: 'der',
        plural: 'die Schreibtische',
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-22.mp3',
        audioExample: 'audio/lesson6/vocab/id-22-E.mp3'
    },
    {
        id: 23,
        german: 'der Schrank',
        ipa: '/ʃʁaŋk/',
        pron: 'شرانک',
        meaning: 'کمد',
        emoji: '🗄️',
        example: 'Der Ordner ist im Schrank.',
        exampleFa: 'زونکن در کمد است.',
        category: 'workplace',
        gender: 'der',
        plural: 'die Schränke',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-23.mp3',
        audioExample: 'audio/lesson6/vocab/id-23-E.mp3'
    },
    {
        id: 24,
        german: 'der See',
        ipa: '/zeː/',
        pron: 'زِه',
        meaning: 'دریاچه',
        emoji: '🏞️',
        example: 'Er arbeitet am See.',
        exampleFa: 'او کنار دریاچه کار می‌کند.',
        category: 'workplace',
        gender: 'der',
        plural: 'die Seen',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-24.mp3',
        audioExample: 'audio/lesson6/vocab/id-24-E.mp3'
    },

    // ============================================
    // CATEGORY: VERBS - افعال
    // ============================================
    {
        id: 25,
        german: 'haben',
        ipa: '/ˈhaːbən/',
        pron: 'هابِن',
        meaning: 'داشتن',
        emoji: '✋',
        example: 'Ich habe einen Computer.',
        exampleFa: 'من یک کامپیوتر دارم.',
        category: 'verb',
        conjugation: {
            ich: 'habe',
            du: 'hast',
            er: 'hat',
            wir: 'haben',
            ihr: 'habt',
            sie: 'haben'
        },
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-25.mp3',
        audioExample: 'audio/lesson6/vocab/id-25-E.mp3'
    },
    {
        id: 26,
        german: 'brauchen',
        ipa: '/ˈbʁaʊxən/',
        pron: 'بْراوخِن',
        meaning: 'نیاز داشتن',
        emoji: '🙏',
        example: 'Ich brauche einen Stift.',
        exampleFa: 'من یک قلم نیاز دارم.',
        category: 'verb',
        conjugation: {
            ich: 'brauche',
            du: 'brauchst',
            er: 'braucht',
            wir: 'brauchen',
            ihr: 'braucht',
            sie: 'brauchen'
        },
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-26.mp3',
        audioExample: 'audio/lesson6/vocab/id-26-E.mp3'
    },
    {
        id: 27,
        german: 'suchen',
        ipa: '/ˈzuːxən/',
        pron: 'زوخِن',
        meaning: 'جستجو کردن / دنبال گشتن',
        emoji: '🔍',
        example: 'Ich suche den Schlüssel.',
        exampleFa: 'من دنبال کلید می‌گردم.',
        category: 'verb',
        conjugation: {
            ich: 'suche',
            du: 'suchst',
            er: 'sucht',
            wir: 'suchen',
            ihr: 'sucht',
            sie: 'suchen'
        },
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-27.mp3',
        audioExample: 'audio/lesson6/vocab/id-27-E.mp3'
    },
    {
        id: 28,
        german: 'arbeiten',
        ipa: '/ˈaʁbaɪtn̩/',
        pron: 'آربایتِن',
        meaning: 'کار کردن',
        emoji: '💼',
        example: 'Er arbeitet am See.',
        exampleFa: 'او کنار دریاچه کار می‌کند.',
        category: 'verb',
        conjugation: {
            ich: 'arbeite',
            du: 'arbeitest',
            er: 'arbeitet',
            wir: 'arbeiten',
            ihr: 'arbeitet',
            sie: 'arbeiten'
        },
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-28.mp3',
        audioExample: 'audio/lesson6/vocab/id-28-E.mp3'
    },
    {
        id: 29,
        german: 'funktionieren',
        ipa: '/fʊŋkt͡si̯oˈniːʁən/',
        pron: 'فونکتسیونیرِن',
        meaning: 'کار کردن (دستگاه)',
        emoji: '⚙️',
        example: 'Der Drucker funktioniert nicht.',
        exampleFa: 'پرینتر کار نمی‌کند.',
        category: 'verb',
        conjugation: {
            ich: 'funktioniere',
            du: 'funktionierst',
            er: 'funktioniert',
            wir: 'funktionieren',
            ihr: 'funktioniert',
            sie: 'funktionieren'
        },
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-29.mp3',
        audioExample: 'audio/lesson6/vocab/id-29-E.mp3'
    },

    // ============================================
    // CATEGORY: ADJECTIVES - صفات
    // ============================================
    {
        id: 30,
        german: 'neu',
        ipa: '/nɔʏ/',
        pron: 'نُوی',
        meaning: 'نو / جدید',
        emoji: '✨',
        example: 'Das Handy ist neu.',
        exampleFa: 'موبایل نو است.',
        category: 'adjective',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-30.mp3',
        audioExample: 'audio/lesson6/vocab/id-30-E.mp3'
    },
    {
        id: 31,
        german: 'alt',
        ipa: '/alt/',
        pron: 'آلت',
        meaning: 'قدیمی / کهنه',
        emoji: '📦',
        example: 'Der Computer ist alt.',
        exampleFa: 'کامپیوتر قدیمی است.',
        category: 'adjective',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-31.mp3',
        audioExample: 'audio/lesson6/vocab/id-31-E.mp3'
    },
    {
        id: 32,
        german: 'kaputt',
        ipa: '/kaˈpʊt/',
        pron: 'کاپوت',
        meaning: 'خراب',
        emoji: '💔',
        example: 'Die Maus ist kaputt.',
        exampleFa: 'ماوس خراب است.',
        category: 'adjective',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-32.mp3',
        audioExample: 'audio/lesson6/vocab/id-32-E.mp3'
    },
    {
        id: 33,
        german: 'groß',
        ipa: '/ɡʁoːs/',
        pron: 'گْروس',
        meaning: 'بزرگ',
        emoji: '📐',
        example: 'Der Bildschirm ist groß.',
        exampleFa: 'مانیتور بزرگ است.',
        category: 'adjective',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-33.mp3',
        audioExample: 'audio/lesson6/vocab/id-33-E.mp3'
    },
    {
        id: 34,
        german: 'klein',
        ipa: '/klaɪn/',
        pron: 'کلاین',
        meaning: 'کوچک',
        emoji: '🔹',
        example: 'Das Büro ist klein.',
        exampleFa: 'دفتر کوچک است.',
        category: 'adjective',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-34.mp3',
        audioExample: 'audio/lesson6/vocab/id-34-E.mp3'
    },

    // ============================================
    // CATEGORY: PHONE - عبارات تلفنی
    // ============================================
    {
        id: 35,
        german: 'Hier ist...',
        ipa: '/hiːɐ ɪst/',
        pron: 'هیر ایست...',
        meaning: 'اینجا ... است (معرفی تلفنی)',
        emoji: '📞',
        example: 'Hier ist Schmidt.',
        exampleFa: 'اینجا اشمیت است.',
        category: 'phone',
        image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-35.mp3',
        audioExample: 'audio/lesson6/vocab/id-35-E.mp3'
    },
    {
        id: 36,
        german: 'Ist ... da?',
        ipa: '/ɪst ... daː/',
        pron: 'ایست ... دا؟',
        meaning: '... هست؟ (پرسیدن درباره کسی)',
        emoji: '❓',
        example: 'Ist Herr Schmidt da?',
        exampleFa: 'آقای اشمیت هست؟',
        category: 'phone',
        image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-36.mp3',
        audioExample: 'audio/lesson6/vocab/id-36-E.mp3'
    },
    {
        id: 37,
        german: 'Moment bitte',
        ipa: '/moˈmɛnt ˈbɪtə/',
        pron: 'مومِنت بیتِه',
        meaning: 'یک لحظه لطفاً',
        emoji: '⏳',
        example: 'Moment bitte, ich verbinde.',
        exampleFa: 'یک لحظه لطفاً، وصل می‌کنم.',
        category: 'phone',
        image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-37.mp3',
        audioExample: 'audio/lesson6/vocab/id-37-E.mp3'
    },
    {
        id: 38,
        german: 'Auf Wiederhören',
        ipa: '/aʊf ˈviːdɐˌhøːʁən/',
        pron: 'آوف ویدِرهورِن',
        meaning: 'خداحافظ (تلفنی)',
        emoji: '👋',
        example: 'Auf Wiederhören, Herr Müller!',
        exampleFa: 'خداحافظ، آقای مولر!',
        category: 'phone',
        image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-38.mp3',
        audioExample: 'audio/lesson6/vocab/id-38-E.mp3'
    },
    {
        id: 39,
        german: 'Wie bitte?',
        ipa: '/viː ˈbɪtə/',
        pron: 'وی بیتِه؟',
        meaning: 'ببخشید؟ (وقتی نفهمیدید)',
        emoji: '❓',
        example: 'Wie bitte? Können Sie das wiederholen?',
        exampleFa: 'ببخشید؟ می‌توانید تکرار کنید؟',
        category: 'phone',
        image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-39.mp3',
        audioExample: 'audio/lesson6/vocab/id-39-E.mp3'
    },
    {
        id: 40,
        german: 'Guten Tag',
        ipa: '/ˈɡuːtən taːk/',
        pron: 'گوتِن تاگ',
        meaning: 'روز بخیر',
        emoji: '☀️',
        example: 'Guten Tag, hier ist Brenner.',
        exampleFa: 'روز بخیر، اینجا برنر است.',
        category: 'phone',
        image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&q=80',
        audio: 'audio/lesson6/vocab/id-40.mp3',
        audioExample: 'audio/lesson6/vocab/id-40-E.mp3'
    }
];

// ============================================
// PART 2: AKKUSATIV QUIZ DATA - داده‌های آزمون آکوزاتیو
// ============================================

const akkusativQuizData = [
    { q: 'Ich habe ___ Computer. (der)', a: 'einen', opts: ['ein', 'eine', 'einen'] },
    { q: 'Ich brauche ___ Handy. (das)', a: 'ein', opts: ['ein', 'eine', 'einen'] },
    { q: 'Ich suche ___ Maus. (die)', a: 'eine', opts: ['ein', 'eine', 'einen'] },
    { q: 'Hast du ___ Kugelschreiber? (der)', a: 'einen', opts: ['ein', 'eine', 'einen'] },
    { q: 'Er hat ___ Büro. (das)', a: 'ein', opts: ['ein', 'eine', 'einen'] },
    { q: 'Sie braucht ___ Rechnung. (die)', a: 'eine', opts: ['ein', 'eine', 'einen'] },
    { q: 'Ich brauche ___ Drucker. (der) - negativ', a: 'keinen', opts: ['kein', 'keine', 'keinen'] },
    { q: 'Wir haben ___ Büro. (das) - negativ', a: 'kein', opts: ['kein', 'keine', 'keinen'] },
    { q: 'Sie hat ___ Visitenkarte. (die) - negativ', a: 'keine', opts: ['kein', 'keine', 'keinen'] },
    { q: 'Ich suche ___ Schlüssel. (der)', a: 'den', opts: ['der', 'die', 'den', 'das'] },
    { q: 'Wo ist ___ Rechnung? (die)', a: 'die', opts: ['der', 'die', 'den', 'das'] },
    { q: 'Ich brauche ___ Formular. (das)', a: 'das', opts: ['der', 'die', 'den', 'das'] }
];

// ============================================
// PART 3: PLURAL QUIZ DATA - داده‌های آزمون جمع
// ============================================

const pluralQuizData = [
    { singular: 'der Computer', plural: 'die Computer', rule: '5' },
    { singular: 'der Laptop', plural: 'die Laptops', rule: '2' },
    { singular: 'das Handy', plural: 'die Handys', rule: '2' },
    { singular: 'der Drucker', plural: 'die Drucker', rule: '5' },
    { singular: 'die Maus', plural: 'die Mäuse', rule: '3' },
    { singular: 'der Stift', plural: 'die Stifte', rule: '3' },
    { singular: 'das Notizbuch', plural: 'die Notizbücher', rule: '4' },
    { singular: 'der Kalender', plural: 'die Kalender', rule: '5' },
    { singular: 'die Briefmarke', plural: 'die Briefmarken', rule: '1' },
    { singular: 'die Rechnung', plural: 'die Rechnungen', rule: '1' },
    { singular: 'der Schlüssel', plural: 'die Schlüssel', rule: '5' },
    { singular: 'der Termin', plural: 'die Termine', rule: '3' },
    { singular: 'das Büro', plural: 'die Büros', rule: '2' },
    { singular: 'die Firma', plural: 'die Firmen', rule: '1' },
    { singular: 'der Schrank', plural: 'die Schränke', rule: '3' }
];

// ============================================
// PART 4: VERB CONJUGATION DATA - داده‌های صرف فعل
// ============================================

const verbConjugationLesson6 = {
    haben: {
        meaning: 'داشتن',
        conjugation: {
            ich: 'habe',
            du: 'hast',
            'er/sie/es': 'hat',
            wir: 'haben',
            ihr: 'habt',
            'sie/Sie': 'haben'
        }
    },
    brauchen: {
        meaning: 'نیاز داشتن',
        conjugation: {
            ich: 'brauche',
            du: 'brauchst',
            'er/sie/es': 'braucht',
            wir: 'brauchen',
            ihr: 'braucht',
            'sie/Sie': 'brauchen'
        }
    },
    suchen: {
        meaning: 'جستجو کردن',
        conjugation: {
            ich: 'suche',
            du: 'suchst',
            'er/sie/es': 'sucht',
            wir: 'suchen',
            ihr: 'sucht',
            'sie/Sie': 'suchen'
        }
    },
    arbeiten: {
        meaning: 'کار کردن',
        conjugation: {
            ich: 'arbeite',
            du: 'arbeitest',
            'er/sie/es': 'arbeitet',
            wir: 'arbeiten',
            ihr: 'arbeitet',
            'sie/Sie': 'arbeiten'
        }
    }
};

// ============================================
// PART 5: VERB QUIZ DATA - داده‌های کوییز افعال
// ============================================

const verbQuizDataLesson6 = [
    { q: 'Ich ___ einen Laptop. (haben)', a: 'habe', opts: ['habe', 'hast', 'hat', 'haben'] },
    { q: 'Du ___ kein Büro. (brauchen)', a: 'brauchst', opts: ['brauche', 'brauchst', 'braucht', 'brauchen'] },
    { q: 'Er ___ den Schlüssel. (suchen)', a: 'sucht', opts: ['suche', 'suchst', 'sucht', 'suchen'] },
    { q: 'Wir ___ zwei Computer. (haben)', a: 'haben', opts: ['habe', 'hast', 'hat', 'haben'] },
    { q: 'Ihr ___ keine Zeit. (haben)', a: 'habt', opts: ['habe', 'hast', 'hat', 'habt'] },
    { q: 'Sie (آنها) ___ die Formulare. (brauchen)', a: 'brauchen', opts: ['brauche', 'brauchst', 'braucht', 'brauchen'] },
    { q: 'Ich ___ am See. (arbeiten)', a: 'arbeite', opts: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten'] },
    { q: 'Du ___ in einer Firma. (arbeiten)', a: 'arbeitest', opts: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten'] },
    { q: 'Sie (او) ___ zu Hause. (arbeiten)', a: 'arbeitet', opts: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten'] },
    { q: '___ du einen Stift? (haben)', a: 'Hast', opts: ['Habe', 'Hast', 'Hat', 'Haben'] },
    { q: '___ Sie einen Termin? (haben)', a: 'Haben', opts: ['Habe', 'Hast', 'Hat', 'Haben'] },
    { q: 'Der Drucker ___ nicht. (funktionieren)', a: 'funktioniert', opts: ['funktioniere', 'funktionierst', 'funktioniert', 'funktionieren'] }
];

// ============================================
// PART 6: PHONE QUIZ DATA - داده‌های کوییز تلفنی
// ============================================

const phoneQuizDataLesson6 = [
    { q: 'خداحافظی تلفنی:', a: 'Auf Wiederhören!', opts: ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Tschüs!'] },
    { q: 'معرفی خود پشت تلفن:', a: 'Hier ist Schmidt.', opts: ['Hier ist Schmidt.', 'Das ist Schmidt.', 'Ich bin Schmidt.'] },
    { q: 'جواب دادن تلفن در شرکت:', a: 'Brenner IT, Feser. Guten Tag.', opts: ['Hallo, ich bin Feser.', 'Brenner IT, Feser. Guten Tag.', 'Feser hier.'] },
    { q: 'پرسیدن درباره حضور کسی:', a: 'Ist Herr Schmidt da?', opts: ['Wo ist Herr Schmidt?', 'Ist Herr Schmidt da?', 'Kommt Herr Schmidt?'] },
    { q: 'درخواست صبر کردن:', a: 'Moment bitte.', opts: ['Warte mal!', 'Moment bitte.', 'Bleib hier!'] },
    { q: 'وقتی چیزی را نفهمیدید:', a: 'Wie bitte?', opts: ['Was?', 'Wie bitte?', 'Nochmal!'] }
];

// ============================================
// PART 7: DIALOGS - مکالمات درس ۶
// ============================================

const lesson6Dialogs = [
    {
        id: 'dialog-1',
        title: 'Dialog 1: Telefongespräch',
        subtitle: 'مکالمه تلفنی',
        audioFile: 'audio/lesson6/Lektion 6, 36.mp3',
        speakers: ['Frau Feser', 'Herr Brenner'],
        lines: [
            {
                speaker: 'feser',
                speakerName: 'Frau Feser',
                german: 'Brenner IT-Consulting, Feser. Guten Tag.',
                pronunciation: 'برنر آی‌تی کانسالتینگ، فِزِر. گوتِن تاگ.',
                persian: 'برنر آی‌تی کانسالتینگ، فزر. روز بخیر.',
                startTime: 0,
                endTime: 4
            },
            {
                speaker: 'brenner',
                speakerName: 'Herr Brenner',
                german: 'Guten Tag, hier ist Brenner. Ist Herr Schmidt da?',
                pronunciation: 'گوتِن تاگ، هیر ایست برنر. ایست هِر اشمیت دا؟',
                persian: 'روز بخیر، اینجا برنر است. آقای اشمیت هست؟',
                startTime: 4,
                endTime: 8
            },
            {
                speaker: 'feser',
                speakerName: 'Frau Feser',
                german: 'Nein, Herr Schmidt arbeitet heute am See.',
                pronunciation: 'ناین، هِر اشمیت آربایتِت هویته آم زِه.',
                persian: 'نه، آقای اشمیت امروز کنار دریاچه کار می‌کند.',
                startTime: 8,
                endTime: 12
            },
            {
                speaker: 'brenner',
                speakerName: 'Herr Brenner',
                german: 'Am See? Wie bitte?',
                pronunciation: 'آم زِه؟ وی بیتِه؟',
                persian: 'کنار دریاچه؟ ببخشید؟',
                startTime: 12,
                endTime: 15
            },
            {
                speaker: 'feser',
                speakerName: 'Frau Feser',
                german: 'Ja, Herr Schmidt braucht kein Büro. Er arbeitet am See.',
                pronunciation: 'یا، هِر اشمیت بْراوخت کاین بورو. اِر آربایتِت آم زِه.',
                persian: 'بله، آقای اشمیت دفتر نیاز ندارد. او کنار دریاچه کار می‌کند.',
                startTime: 15,
                endTime: 21
            },
            {
                speaker: 'brenner',
                speakerName: 'Herr Brenner',
                german: 'Ach so! Interessant!',
                pronunciation: 'آخ زو! اینترِسانت!',
                persian: 'آها! جالبه!',
                startTime: 21,
                endTime: 24
            }
        ]
    },
    {
        id: 'dialog-2',
        title: 'Dialog 2: Im Büro',
        subtitle: 'در دفتر کار',
        audioFile: 'audio/lesson6/Lektion 6, 38.mp3',
        speakers: ['Herr Brenner', 'Frau Feser'],
        lines: [
            {
                speaker: 'brenner',
                speakerName: 'Herr Brenner',
                german: 'Wo ist denn der Schlüssel?',
                pronunciation: 'وو ایست دِن دِر شلوسِل؟',
                persian: 'کلید کجاست؟',
                startTime: 0,
                endTime: 3
            },
            {
                speaker: 'feser',
                speakerName: 'Frau Feser',
                german: 'Sie haben den Schlüssel doch auch.',
                pronunciation: 'زی هابِن دِن شلوسِل دُخ آوخ.',
                persian: 'شما هم کلید دارید که.',
                startTime: 3,
                endTime: 6
            },
            {
                speaker: 'brenner',
                speakerName: 'Herr Brenner',
                german: 'Und wo sind die Rechnungen?',
                pronunciation: 'اوند وو زیند دی رِشنونگِن؟',
                persian: 'و فاکتورها کجا هستند؟',
                startTime: 6,
                endTime: 9
            },
            {
                speaker: 'feser',
                speakerName: 'Frau Feser',
                german: 'Die Rechnungen? Moment... Hier sind sie.',
                pronunciation: 'دی رِشنونگِن؟ مومِنت... هیر زیند زی.',
                persian: 'فاکتورها؟ یک لحظه... اینجا هستند.',
                startTime: 9,
                endTime: 13
            },
            {
                speaker: 'brenner',
                speakerName: 'Herr Brenner',
                german: 'Ich brauche auch das Formular.',
                pronunciation: 'ایش بْراوخِ آوخ داس فُرمولار.',
                persian: 'من فرم هم نیاز دارم.',
                startTime: 13,
                endTime: 16
            },
            {
                speaker: 'feser',
                speakerName: 'Frau Feser',
                german: 'Welches Formular? Ich habe viele Formulare.',
                pronunciation: 'وِلشِس فُرمولار؟ ایش هابِ فیلِه فُرمولارِه.',
                persian: 'کدام فرم؟ من فرم‌های زیادی دارم.',
                startTime: 16,
                endTime: 20
            }
        ]
    }
];

// ============================================
// PART 8: GRAMMAR - گرامر درس ۶
// ============================================

const lesson6Grammar = [
    {
        id: 'grammar-1',
        title: 'حالت آکوزاتیو (Akkusativ)',
        description: 'مفعول مستقیم در زبان آلمانی',
        color: 'blue',
        content: `
            <div class="grammar-note">
                <strong>📌 قانون:</strong> وقتی اسمی مفعول مستقیم باشد (بعد از haben, brauchen, suchen...)، حرف تعریف تغییر می‌کند.
            </div>
            <table class="grammar-table">
                <tr>
                    <th>جنسیت</th>
                    <th>Nominativ (فاعلی)</th>
                    <th>Akkusativ (مفعولی)</th>
                    <th>مثال</th>
                </tr>
                <tr>
                    <td>مذکر (der)</td>
                    <td>der / ein</td>
                    <td class="highlight">den / einen</td>
                    <td>Ich habe <strong>einen</strong> Computer.</td>
                </tr>
                <tr>
                    <td>مؤنث (die)</td>
                    <td>die / eine</td>
                    <td>die / eine</td>
                    <td>Ich brauche <strong>eine</strong> Maus.</td>
                </tr>
                <tr>
                    <td>خنثی (das)</td>
                    <td>das / ein</td>
                    <td>das / ein</td>
                    <td>Ich suche <strong>ein</strong> Büro.</td>
                </tr>
                <tr>
                    <td>جمع (die)</td>
                    <td>die / -</td>
                    <td>die / -</td>
                    <td>Ich habe <strong>die</strong> Schlüssel.</td>
                </tr>
            </table>
            <div class="grammar-note" style="margin-top: 16px;">
                <strong>⚠️ نکته مهم:</strong> فقط <strong>مذکر</strong> تغییر می‌کند! (der → den, ein → einen)
            </div>
        `
    },
    {
        id: 'grammar-2',
        title: 'منفی کردن با kein',
        description: 'نفی اسامی نکره',
        color: 'purple',
        content: `
            <div class="grammar-note">
                <strong>📌 قانون:</strong> برای منفی کردن اسامی نکره (با ein/eine) از kein استفاده می‌کنیم.
            </div>
            <table class="grammar-table">
                <tr>
                    <th>جنسیت</th>
                    <th>مثبت</th>
                    <th>منفی (Akkusativ)</th>
                </tr>
                <tr>
                    <td>مذکر</td>
                    <td>einen Computer</td>
                    <td class="highlight">keinen Computer</td>
                </tr>
                <tr>
                    <td>مؤنث</td>
                    <td>eine Maus</td>
                    <td class="highlight">keine Maus</td>
                </tr>
                <tr>
                    <td>خنثی</td>
                    <td>ein Büro</td>
                    <td class="highlight">kein Büro</td>
                </tr>
                <tr>
                    <td>جمع</td>
                    <td>- Stifte</td>
                    <td class="highlight">keine Stifte</td>
                </tr>
            </table>
            <div class="grammar-note" style="margin-top: 16px;">
                <strong>مثال:</strong> Ich brauche <strong>kein</strong> Büro. (من دفتر نیاز ندارم.)
            </div>
        `
    },
    {
        id: 'grammar-3',
        title: 'فعل haben (داشتن)',
        description: 'صرف فعل بی‌قاعده haben',
        color: 'green',
        content: `
            <table class="grammar-table">
                <tr>
                    <th>شخص</th>
                    <th>فعل</th>
                    <th>مثال</th>
                </tr>
                <tr>
                    <td>ich</td>
                    <td class="highlight">habe</td>
                    <td>Ich habe einen Laptop.</td>
                </tr>
                <tr>
                    <td>du</td>
                    <td class="highlight">hast</td>
                    <td>Du hast ein Handy.</td>
                </tr>
                <tr>
                    <td>er/sie/es</td>
                    <td class="highlight">hat</td>
                    <td>Er hat einen Computer.</td>
                </tr>
                <tr>
                    <td>wir</td>
                    <td class="highlight">haben</td>
                    <td>Wir haben ein Büro.</td>
                </tr>
                <tr>
                    <td>ihr</td>
                    <td class="highlight">habt</td>
                    <td>Ihr habt keine Zeit.</td>
                </tr>
                <tr>
                    <td>sie/Sie</td>
                    <td class="highlight">haben</td>
                    <td>Sie haben den Schlüssel.</td>
                </tr>
            </table>
        `
    },
    {
        id: 'grammar-4',
        title: 'جمع بستن اسامی',
        description: '5 قاعده اصلی جمع',
        color: 'gold',
        content: `
            <table class="grammar-table">
                <tr>
                    <th>قاعده</th>
                    <th>پسوند</th>
                    <th>مثال</th>
                </tr>
                <tr>
                    <td>۱</td>
                    <td class="highlight">-(e)n</td>
                    <td>die Rechnung → die Rechnungen</td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td class="highlight">-s</td>
                    <td>das Handy → die Handys</td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td class="highlight">-e (± Umlaut)</td>
                    <td>der Stift → die Stifte</td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td class="highlight">-er (± Umlaut)</td>
                    <td>das Buch → die Bücher</td>
                </tr>
                <tr>
                    <td>۵</td>
                    <td class="highlight">- (بدون تغییر)</td>
                    <td>der Computer → die Computer</td>
                </tr>
            </table>
            <div class="grammar-note" style="margin-top: 16px;">
                <strong>🔑 قانون طلایی:</strong> حرف تعریف جمع <strong>همیشه die</strong> است!
            </div>
        `
    }
];

// ============================================
// PART 9: EXERCISES - تمرین‌های درس ۶
// ============================================

const lesson6Exercises = [
    {
        id: 'exercise-1',
        type: 'akkusativ',
        title: 'تمرین آکوزاتیو',
        description: 'حرف تعریف صحیح را انتخاب کنید',
        questions: [
            { sentence: 'Ich habe ___ Computer.', gender: 'der', correct: 'einen', options: ['ein', 'eine', 'einen'] },
            { sentence: 'Ich brauche ___ Handy.', gender: 'das', correct: 'ein', options: ['ein', 'eine', 'einen'] },
            { sentence: 'Ich suche ___ Maus.', gender: 'die', correct: 'eine', options: ['ein', 'eine', 'einen'] },
            { sentence: 'Er hat ___ Drucker.', gender: 'der', correct: 'einen', options: ['ein', 'eine', 'einen'] },
            { sentence: 'Sie braucht ___ Rechnung.', gender: 'die', correct: 'eine', options: ['ein', 'eine', 'einen'] }
        ]
    },
    {
        id: 'exercise-2',
        type: 'plural',
        title: 'تمرین جمع بستن',
        description: 'شکل جمع صحیح را انتخاب کنید',
        questions: [
            { singular: 'der Stift', correctPlural: 'die Stifte', options: ['die Stiften', 'die Stifte', 'die Stifts'] },
            { singular: 'das Handy', correctPlural: 'die Handys', options: ['die Handyen', 'die Handys', 'die Handy'] },
{ singular: 'die Briefmarke', correctPlural: 'die Briefmarken', options: ['die Briefmarkes', 'die Briefmarken', 'die Briefmarkern'] },
            { singular: 'der Schlüssel', correctPlural: 'die Schlüssel', options: ['die Schlüsseln', 'die Schlüssel', 'die Schlüsseler'] },
            { singular: 'das Notizbuch', correctPlural: 'die Notizbücher', options: ['die Notizbuchs', 'die Notizbücher', 'die Notizbuchen'] },
            { singular: 'der Computer', correctPlural: 'die Computer', options: ['die Computern', 'die Computers', 'die Computer'] },
            { singular: 'die Rechnung', correctPlural: 'die Rechnungen', options: ['die Rechnungs', 'die Rechnungen', 'die Rechnunge'] },
            { singular: 'das Büro', correctPlural: 'die Büros', options: ['die Büron', 'die Büros', 'die Büroe'] },
            { singular: 'der Drucker', correctPlural: 'die Drucker', options: ['die Druckern', 'die Drucker', 'die Druckers'] },
            { singular: 'der Termin', correctPlural: 'die Termine', options: ['die Terminen', 'die Termine', 'die Termins'] }
        ]
    },
    {
        id: 'exercise-3',
        type: 'phone',
        title: 'تمرین عبارات تلفنی',
        description: 'عبارت مناسب را انتخاب کنید',
        questions: [
            { 
                situation: 'خداحافظی تلفنی', 
                correct: 'Auf Wiederhören!', 
                wrong: 'Auf Wiedersehen!',
                explanation: 'Wiederhören برای تلفن (شنیدن) و Wiedersehen برای حضوری (دیدن)'
            },
            { 
                situation: 'معرفی خود پشت تلفن', 
                correct: 'Hier ist Schmidt.', 
                wrong: 'Das ist Schmidt.',
                explanation: 'در تلفن از "Hier ist" استفاده می‌کنیم'
            },
            { 
                situation: 'جواب دادن تلفن در شرکت', 
                correct: 'Brenner IT-Consulting, Feser. Guten Tag.', 
                wrong: 'Hallo, ich bin Feser.',
                explanation: 'در شرکت ابتدا نام شرکت و سپس نام خود را می‌گوییم'
            },
            { 
                situation: 'پرسیدن درباره حضور کسی', 
                correct: 'Ist Herr Schmidt da?', 
                wrong: 'Wo ist Herr Schmidt?',
                explanation: '"Ist ... da?" یعنی آیا ... هست/حضور دارد؟'
            },
            { 
                situation: 'درخواست صبر کردن', 
                correct: 'Moment bitte.', 
                wrong: 'Warte mal!',
                explanation: '"Moment bitte" رسمی و مودبانه است'
            }
        ]
    },
    {
        id: 'exercise-4',
        type: 'verbConjugation',
        title: 'تمرین صرف فعل',
        description: 'فعل صحیح را انتخاب کنید',
        questions: [
            { sentence: 'Ich ___ einen Laptop.', verb: 'haben', correct: 'habe', options: ['habe', 'hast', 'hat', 'haben'] },
            { sentence: 'Du ___ kein Büro.', verb: 'brauchen', correct: 'brauchst', options: ['brauche', 'brauchst', 'braucht', 'brauchen'] },
            { sentence: 'Er ___ den Schlüssel.', verb: 'suchen', correct: 'sucht', options: ['suche', 'suchst', 'sucht', 'suchen'] },
            { sentence: 'Wir ___ zwei Computer.', verb: 'haben', correct: 'haben', options: ['habe', 'hast', 'hat', 'haben'] },
            { sentence: 'Sie (آنها) ___ die Formulare.', verb: 'brauchen', correct: 'brauchen', options: ['brauche', 'brauchst', 'braucht', 'brauchen'] },
            { sentence: 'Ihr ___ keine Zeit.', verb: 'haben', correct: 'habt', options: ['habe', 'hast', 'hat', 'habt'] }
        ]
    }
];

// ============================================
// PART 10: CHARACTERS - شخصیت‌های درس ۶
// ============================================

const lesson6Characters = [
    {
        id: 'christian-schmidt',
        name: 'Christian Schmidt',
        age: 43,
        job: 'IT-Berater (مشاور IT)',
        description: 'او دفتر ندارد و کنار دریاچه کار می‌کند.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        quote: 'Ich brauche kein Büro.'
    },
    {
        id: 'sylvia-di-leonardo',
        name: 'Sylvia di Leonardo',
        age: 39,
        job: 'Journalistin (روزنامه‌نگار)',
        description: 'او در خانه کار می‌کند.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        quote: 'Ich arbeite zu Hause.'
    },
    {
        id: 'claudio-danzer',
        name: 'Claudio Danzer',
        age: 38,
        job: 'Fotograf (عکاس)',
        description: 'او در استودیو کار می‌کند.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        quote: 'Ich habe ein Studio.'
    }
];

// ============================================
// PART 11: AUDIO FILES - فایل‌های صوتی
// ============================================

const lesson6AudioFiles = {
    overview: 'audio/lesson6/audio-overview-lesson6.mp3',
    dialog1: 'audio/lesson6/Lektion 6, 36.mp3',
    dialog2: 'audio/lesson6/Lektion 6, 38.mp3'
};

// ============================================
// PART 12: QUIZ DATA FOR MAIN QUIZ COMPONENT
// ============================================

// داده‌های آزمون معنی (آلمانی به فارسی)
const meaningQuizLesson6 = allWordsLesson6.map(word => ({
    question: word.german,
    correct: word.meaning,
    options: generateOptions(word.meaning, allWordsLesson6.map(w => w.meaning))
}));

// داده‌های آزمون معکوس (فارسی به آلمانی)
const reverseQuizLesson6 = allWordsLesson6.map(word => ({
    question: word.meaning,
    correct: word.german,
    options: generateOptions(word.german, allWordsLesson6.map(w => w.german))
}));

// تابع کمکی برای ساخت گزینه‌های تصادفی
function generateOptions(correct, allOptions) {
    const filtered = allOptions.filter(opt => opt !== correct);
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const wrongOptions = shuffled.slice(0, 3);
    const options = [...wrongOptions, correct].sort(() => Math.random() - 0.5);
    return options;
}

// ============================================
// PART 13: FLASHCARD CATEGORIES
// ============================================

const flashcardCategories = [
    { id: 'all', name: 'همه', icon: '📚' },
    { id: 'office', name: 'تجهیزات', icon: '💻' },
    { id: 'supply', name: 'لوازم', icon: '✏️' },
    { id: 'document', name: 'اسناد', icon: '📋' },
    { id: 'workplace', name: 'محل کار', icon: '🏢' },
    { id: 'verb', name: 'افعال', icon: '⚡' },
    { id: 'adjective', name: 'صفات', icon: '🎨' },
    { id: 'phone', name: 'تلفنی', icon: '📞' }
];

// ============================================
// PART 14: LESSON INFO
// ============================================

const lesson6Info = {
    id: 6,
    title: 'Ich brauche kein Büro',
    titleFa: 'من دفتر نیاز ندارم',
    book: 'Menschen A1.1',
    pages: '33-40',
    topics: [
        'تجهیزات و لوازم اداری',
        'حالت آکوزاتیو (Akkusativ)',
        'منفی کردن با kein',
        'جمع بستن اسامی',
        'مکالمه تلفنی',
        'فعل haben, brauchen, suchen'
    ],
    objectives: [
        'بتوانید درباره وسایل اداری صحبت کنید',
        'بتوانید بگویید چه چیزی دارید یا ندارید',
        'بتوانید بگویید چه چیزی نیاز دارید',
        'بتوانید تلفنی صحبت کنید',
        'بتوانید اسامی را جمع ببندید'
    ]
};

// ============================================
// EXPORT & CONSOLE LOGS
// ============================================

// برای استفاده در main.js
const allWords = allWordsLesson6; // Alias برای سازگاری با کد قدیمی

console.log('✅ Lesson 6 Data Loaded Successfully!');
console.log('📚 Vocabulary:', allWordsLesson6.length, 'words');
console.log('📝 Akkusativ Quiz:', akkusativQuizData.length, 'questions');
console.log('🔢 Plural Quiz:', pluralQuizData.length, 'questions');
console.log('⚡ Verb Quiz:', verbQuizDataLesson6.length, 'questions');
console.log('📞 Phone Quiz:', phoneQuizDataLesson6.length, 'questions');
console.log('🎭 Dialogs:', lesson6Dialogs.length, 'dialogs');
console.log('📖 Grammar:', lesson6Grammar.length, 'topics');
console.log('✏️ Exercises:', lesson6Exercises.length, 'exercises');
console.log('👥 Characters:', lesson6Characters.length, 'characters');
