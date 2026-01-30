// ============================================
// LESSON 1 DATA - داده‌های درس ۱
// Menschen A1.1 - Lektion 1: Hallo! Ich bin...
// ============================================

// ============================================
// PART 1: VOCABULARY DATA - داده‌های واژگان
// (کد قدیم + بهبودهای جدید)
// ============================================

const allWords = [
    // Greetings - احوالپرسی‌ها
    { id: 1, german: 'Hallo', ipa: '/haˈloː/', pron: 'هالو', meaning: 'سلام (غیررسمی)', emoji: '👋', example: 'Hallo! Wie geht es dir?', exampleFa: 'سلام! چطوری؟', category: 'greeting', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', audioFile: 'audio/lesson1/vocab/hallo.mp3' },
    { id: 2, german: 'Guten Morgen', ipa: '/ˈɡuːtən ˈmɔʁɡən/', pron: 'گوتِن مورگِن', meaning: 'صبح بخیر', emoji: '🌅', example: 'Guten Morgen, Herr Schmidt!', exampleFa: 'صبح بخیر، آقای اشمیت!', category: 'greeting', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&q=80', audioFile: 'audio/lesson1/vocab/guten-morgen.mp3' },
    { id: 3, german: 'Guten Tag', ipa: '/ˈɡuːtən taːk/', pron: 'گوتِن تاگ', meaning: 'روز بخیر', emoji: '☀️', example: 'Guten Tag, Frau Müller!', exampleFa: 'روز بخیر، خانم مولر!', category: 'greeting', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', audioFile: 'audio/lesson1/vocab/guten-tag.mp3' },
    { id: 4, german: 'Guten Abend', ipa: '/ˈɡuːtən ˈaːbənt/', pron: 'گوتِن آبِنت', meaning: 'عصر بخیر', emoji: '🌆', example: 'Guten Abend! Schön, Sie zu sehen.', exampleFa: 'عصر بخیر! خوشحالم می‌بینمتان.', category: 'greeting', image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&q=80', audioFile: 'audio/lesson1/vocab/guten-abend.mp3' },
    { id: 5, german: 'Gute Nacht', ipa: '/ˈɡuːtə naxt/', pron: 'گوتِ ناخت', meaning: 'شب بخیر', emoji: '🌙', example: 'Gute Nacht! Schlaf gut!', exampleFa: 'شب بخیر! خوب بخواب!', category: 'greeting', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&q=80', audioFile: 'audio/lesson1/vocab/gute-nacht.mp3' },

    // Farewell - خداحافظی‌ها
    { id: 6, german: 'Auf Wiedersehen', ipa: '/aʊf ˈviːdɐˌzeːən/', pron: 'آوف ویدِرزِهِن', meaning: 'خداحافظ (رسمی)', emoji: '👋', example: 'Auf Wiedersehen, bis morgen!', exampleFa: 'خداحافظ، تا فردا!', category: 'farewell', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80', audioFile: 'audio/lesson1/vocab/auf-wiedersehen.mp3' },
    { id: 7, german: 'Tschüs', ipa: '/tʃyːs/', pron: 'چوس', meaning: 'خداحافظ (غیررسمی)', emoji: '✌️', example: 'Tschüs! Bis bald!', exampleFa: 'خداحافظ! به زودی!', category: 'farewell', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80', audioFile: 'audio/lesson1/vocab/tschuess.mp3' },

    // Pronouns - ضمایر شخصی
    { id: 8, german: 'ich', ipa: '/ɪç/', pron: 'ایش', meaning: 'من', emoji: '👤', example: 'Ich bin Ali.', exampleFa: 'من علی هستم.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', audioFile: 'audio/lesson1/vocab/ich.mp3' },
    { id: 9, german: 'du', ipa: '/duː/', pron: 'دو', meaning: 'تو (غیررسمی)', emoji: '👤', example: 'Du bist mein Freund.', exampleFa: 'تو دوست من هستی.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', audioFile: 'audio/lesson1/vocab/du.mp3' },
    { id: 10, german: 'Sie', ipa: '/ziː/', pron: 'زی', meaning: 'شما (رسمی)', emoji: '👔', example: 'Sie sind Herr Schmidt.', exampleFa: 'شما آقای اشمیت هستید.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', audioFile: 'audio/lesson1/vocab/sie-formal.mp3' },
    { id: 11, german: 'er', ipa: '/eːɐ/', pron: 'اِر', meaning: 'او (مذکر)', emoji: '👨', example: 'Er kommt aus Iran.', exampleFa: 'او از ایران می‌آید.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', audioFile: 'audio/lesson1/vocab/er.mp3' },
    { id: 12, german: 'sie', ipa: '/ziː/', pron: 'زی', meaning: 'او (مؤنث)', emoji: '👩', example: 'Sie kommt aus Deutschland.', exampleFa: 'او از آلمان می‌آید.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', audioFile: 'audio/lesson1/vocab/sie-informal.mp3' },
    { id: 13, german: 'es', ipa: '/ɛs/', pron: 'اِس', meaning: 'آن (خنثی)', emoji: '📦', example: 'Es ist schön.', exampleFa: 'آن زیباست.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80', audioFile: 'audio/lesson1/vocab/es.mp3' },
    { id: 14, german: 'wir', ipa: '/viːɐ/', pron: 'ویر', meaning: 'ما', emoji: '👥', example: 'Wir sind Freunde.', exampleFa: 'ما دوست هستیم.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', audioFile: 'audio/lesson1/vocab/wir.mp3' },
    { id: 15, german: 'ihr', ipa: '/iːɐ/', pron: 'ایر', meaning: 'شما (جمع غیررسمی)', emoji: '👥', example: 'Ihr seid toll!', exampleFa: 'شما عالی هستید!', category: 'pronoun', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', audioFile: 'audio/lesson1/vocab/ihr.mp3' },
    { id: 16, german: 'sie', ipa: '/ziː/', pron: 'زی', meaning: 'آنها', emoji: '👥', example: 'Sie kommen aus Spanien.', exampleFa: 'آنها از اسپانیا می‌آیند.', category: 'pronoun', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', audioFile: 'audio/lesson1/vocab/sie-plural.mp3' },

    // Questions - سوالات
    { id: 17, german: 'Wie heißen Sie?', ipa: '/viː ˈhaɪsən ziː/', pron: 'وی هایسِن زی؟', meaning: 'اسم شما چیست؟ (رسمی)', emoji: '❓', example: 'Wie heißen Sie? - Ich heiße Schmidt.', exampleFa: 'اسم شما چیست؟ - اسم من اشمیت است.', category: 'question', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', audioFile: 'audio/lesson1/vocab/wie-heissen-sie.mp3' },
    { id: 18, german: 'Wie heißt du?', ipa: '/viː haɪst duː/', pron: 'وی هایست دو؟', meaning: 'اسمت چیه؟ (غیررسمی)', emoji: '❓', example: 'Wie heißt du? - Ich heiße Maria.', exampleFa: 'اسمت چیه؟ - اسم من ماریا است.', category: 'question', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', audioFile: 'audio/lesson1/vocab/wie-heisst-du.mp3' },
    { id: 19, german: 'Wer sind Sie?', ipa: '/veːɐ zɪnt ziː/', pron: 'وِر زیند زی؟', meaning: 'شما کی هستید؟ (رسمی)', emoji: '❓', example: 'Wer sind Sie? - Ich bin Herr Schmidt.', exampleFa: 'شما کی هستید؟ - من آقای اشمیت هستم.', category: 'question', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', audioFile: 'audio/lesson1/vocab/wer-sind-sie.mp3' },
    { id: 20, german: 'Wer bist du?', ipa: '/veːɐ bɪst duː/', pron: 'وِر بیست دو؟', meaning: 'تو کی هستی؟ (غیررسمی)', emoji: '❓', example: 'Wer bist du? - Ich bin Nicole.', exampleFa: 'تو کی هستی؟ - من نیکول هستم.', category: 'question', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', audioFile: 'audio/lesson1/vocab/wer-bist-du.mp3' },
    { id: 21, german: 'Woher kommen Sie?', ipa: '/voˈheːɐ ˈkɔmən ziː/', pron: 'ووهِر کُمِن زی؟', meaning: 'از کجا می‌آیید؟ (رسمی)', emoji: '🌍', example: 'Woher kommen Sie? - Ich komme aus Iran.', exampleFa: 'از کجا می‌آیید؟ - من از ایران می‌آیم.', category: 'question', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80', audioFile: 'audio/lesson1/vocab/woher-kommen-sie.mp3' },
    { id: 22, german: 'Woher kommst du?', ipa: '/voˈheːɐ kɔmst duː/', pron: 'ووهِر کُمست دو؟', meaning: 'از کجا می‌آیی؟ (غیررسمی)', emoji: '🌍', example: 'Woher kommst du? - Ich komme aus Mexiko.', exampleFa: 'از کجا می‌آیی؟ - من از مکزیک می‌آیم.', category: 'question', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80', audioFile: 'audio/lesson1/vocab/woher-kommst-du.mp3' },
    { id: 23, german: 'Wie geht es Ihnen?', ipa: '/viː ɡeːt ɛs ˈiːnən/', pron: 'وی گِهت اِس اینِن؟', meaning: 'حال شما چطور است؟ (رسمی)', emoji: '😊', example: 'Wie geht es Ihnen? - Gut, danke!', exampleFa: 'حال شما چطور است؟ - خوبم، ممنون!', category: 'question', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80', audioFile: 'audio/lesson1/vocab/wie-geht-es-ihnen.mp3' },
    { id: 24, german: 'Wie geht es dir?', ipa: '/viː ɡeːt ɛs diːɐ/', pron: 'وی گِهت اِس دیر؟', meaning: 'حالت چطوره؟ (غیررسمی)', emoji: '😊', example: 'Wie geht es dir? - Sehr gut!', exampleFa: 'حالت چطوره؟ - خیلی خوبم!', category: 'question', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80', audioFile: 'audio/lesson1/vocab/wie-geht-es-dir.mp3' },
    { id: 25, german: "Wie geht's?", ipa: '/viː ɡeːts/', pron: 'وی گِهتس؟', meaning: 'چطوری؟ (کوتاه)', emoji: '😊', example: "Wie geht's? - Es geht.", exampleFa: 'چطوری؟ - بد نیستم.', category: 'question', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80', audioFile: 'audio/lesson1/vocab/wie-gehts.mp3' },

    // Answers - پاسخ‌ها
    { id: 26, german: 'Sehr gut, danke!', ipa: '/zeːɐ ɡuːt ˈdaŋkə/', pron: 'زِر گوت، دانکِ!', meaning: 'خیلی خوبم، ممنون!', emoji: '😄', example: 'Wie geht es dir? - Sehr gut, danke!', exampleFa: 'چطوری؟ - خیلی خوبم، ممنون!', category: 'answer', image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80', audioFile: 'audio/lesson1/vocab/sehr-gut-danke.mp3' },
    { id: 27, german: 'Gut, danke!', ipa: '/ɡuːt ˈdaŋkə/', pron: 'گوت، دانکِ!', meaning: 'خوبم، ممنون!', emoji: '😊', example: 'Wie geht es Ihnen? - Gut, danke!', exampleFa: 'حالتان چطور است؟ - خوبم، ممنون!', category: 'answer', image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80', audioFile: 'audio/lesson1/vocab/gut-danke.mp3' },
    { id: 28, german: 'Es geht.', ipa: '/ɛs ɡeːt/', pron: 'اِس گِهت.', meaning: 'بد نیستم.', emoji: '😐', example: "Wie geht's? - Es geht.", exampleFa: 'چطوری؟ - بد نیستم.', category: 'answer', image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80', audioFile: 'audio/lesson1/vocab/es-geht.mp3' },
    { id: 29, german: 'Nicht so gut.', ipa: '/nɪçt zoː ɡuːt/', pron: 'نیشت زو گوت.', meaning: 'زیاد خوب نیستم.', emoji: '😕', example: 'Wie geht es dir? - Nicht so gut.', exampleFa: 'چطوری؟ - زیاد خوب نیستم.', category: 'answer', image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80', audioFile: 'audio/lesson1/vocab/nicht-so-gut.mp3' },
    { id: 30, german: 'Auch gut.', ipa: '/aʊx ɡuːt/', pron: 'آوخ گوت.', meaning: 'منم خوبم.', emoji: '😊', example: 'Und dir? - Auch gut.', exampleFa: 'تو چطوری؟ - منم خوبم.', category: 'answer', image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80', audioFile: 'audio/lesson1/vocab/auch-gut.mp3' },
    { id: 31, german: 'Danke!', ipa: '/ˈdaŋkə/', pron: 'دانکِ!', meaning: 'ممنون!', emoji: '🙏', example: 'Gut, danke!', exampleFa: 'خوبم، ممنون!', category: 'answer', image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=400&q=80', audioFile: 'audio/lesson1/vocab/danke.mp3' },

    // Phrases - عبارات پرکاربرد
    { id: 32, german: 'Das ist...', ipa: '/das ɪst/', pron: 'داس ایست...', meaning: 'این است...', emoji: '👉', example: 'Das ist Paco.', exampleFa: 'این پاکو است.', category: 'phrase', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', audioFile: 'audio/lesson1/vocab/das-ist.mp3' },
    { id: 33, german: 'Mein Name ist...', ipa: '/maɪn ˈnaːmə ɪst/', pron: 'ماین نامِ ایست...', meaning: 'اسم من ... است', emoji: '📝', example: 'Mein Name ist Paco Rodriguez.', exampleFa: 'اسم من پاکو رودریگز است.', category: 'phrase', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', audioFile: 'audio/lesson1/vocab/mein-name-ist.mp3' },
    { id: 34, german: 'Ich heiße...', ipa: '/ɪç ˈhaɪsə/', pron: 'ایش هایسِ...', meaning: 'اسم من ... است', emoji: '📝', example: 'Ich heiße Paco.', exampleFa: 'اسم من پاکو است.', category: 'phrase', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', audioFile: 'audio/lesson1/vocab/ich-heisse.mp3' },
    { id: 35, german: 'Ich bin...', ipa: '/ɪç bɪn/', pron: 'ایش بین...', meaning: 'من ... هستم', emoji: '📝', example: 'Ich bin Nicole.', exampleFa: 'من نیکول هستم.', category: 'phrase', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', audioFile: 'audio/lesson1/vocab/ich-bin.mp3' },
    { id: 36, german: 'Ich komme aus...', ipa: '/ɪç ˈkɔmə aʊs/', pron: 'ایش کُمِ آوس...', meaning: 'من از ... می‌آیم', emoji: '🌍', example: 'Ich komme aus Iran.', exampleFa: 'من از ایران می‌آیم.', category: 'phrase', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80', audioFile: 'audio/lesson1/vocab/ich-komme-aus.mp3' },
    { id: 37, german: 'Ich buchstabiere:', ipa: '/ɪç buːxʃtaˈbiːʁə/', pron: 'ایش بوخشتابیرِ:', meaning: 'هجی می‌کنم:', emoji: '🔤', example: 'Ich buchstabiere: A-l-i', exampleFa: 'هجی می‌کنم: A-l-i', category: 'phrase', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', audioFile: 'audio/lesson1/vocab/ich-buchstabiere.mp3' },
    { id: 38, german: 'Wie bitte?', ipa: '/viː ˈbɪtə/', pron: 'وی بیتِ؟', meaning: 'ببخشید؟ (وقتی نفهمیدید)', emoji: '❓', example: 'Wie bitte? Können Sie das wiederholen?', exampleFa: 'ببخشید؟ می‌توانید تکرار کنید؟', category: 'phrase', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', audioFile: 'audio/lesson1/vocab/wie-bitte.mp3' },
    { id: 39, german: 'Herr', ipa: '/hɛʁ/', pron: 'هِر', meaning: 'آقای', emoji: '👔', example: 'Guten Tag, Herr Schmidt!', exampleFa: 'روز بخیر، آقای اشمیت!', category: 'phrase', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', audioFile: 'audio/lesson1/vocab/herr.mp3' },
    { id: 40, german: 'Frau', ipa: '/fʁaʊ/', pron: 'فراو', meaning: 'خانم', emoji: '👩‍💼', example: 'Guten Tag, Frau Wachter!', exampleFa: 'روز بخیر، خانم واختر!', category: 'phrase', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', audioFile: 'audio/lesson1/vocab/frau.mp3' }
];

// ============================================
// PART 2: COUNTRIES DATA - داده‌های کشورها
// (کد قدیم بدون تغییر)
// ============================================

const countries = [
    { id: 1, german: 'Deutschland', ipa: '/ˈdɔʏtʃlant/', pron: 'دویچلَند', meaning: 'آلمان', flag: '🇩🇪', preposition: 'aus Deutschland', hasArticle: false, image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80' },
    { id: 2, german: 'Österreich', ipa: '/ˈøːstəʁaɪç/', pron: 'اُسترایش', meaning: 'اتریش', flag: '🇦🇹', preposition: 'aus Österreich', hasArticle: false, image: 'https://images.unsplash.com/photo-1516550893923-42d2d8e5677af?w=400&q=80' },
    { id: 3, german: 'die Schweiz', ipa: '/diː ʃvaɪts/', pron: 'دی شوایتس', meaning: 'سوئیس', flag: '🇨🇭', preposition: 'aus der Schweiz', hasArticle: true, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80' },
    { id: 4, german: 'Spanien', ipa: '/ˈʃpaːniən/', pron: 'شپانیِن', meaning: 'اسپانیا', flag: '🇪🇸', preposition: 'aus Spanien', hasArticle: false, image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80' },
    { id: 5, german: 'Mexiko', ipa: '/ˈmɛksiko/', pron: 'مِکزیکو', meaning: 'مکزیک', flag: '🇲🇽', preposition: 'aus Mexiko', hasArticle: false, image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&q=80' },
    { id: 6, german: 'Frankreich', ipa: '/ˈfʁaŋkʁaɪç/', pron: 'فرانکرایش', meaning: 'فرانسه', flag: '🇫🇷', preposition: 'aus Frankreich', hasArticle: false, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80' },
    { id: 7, german: 'die Türkei', ipa: '/diː tʏʁˈkaɪ/', pron: 'دی تورکای', meaning: 'ترکیه', flag: '🇹🇷', preposition: 'aus der Türkei', hasArticle: true, image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&q=80' },
    { id: 8, german: 'dem Iran', ipa: '/deːɐ iˈʁaːn/', pron: 'دِر ایران', meaning: 'ایران', flag: '🇮🇷', preposition: 'aus dem Iran', hasArticle: true, image: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=400&q=80' }
];

// ============================================
// PART 3: ALPHABET DATA - داده‌های الفبا
// (کد قدیم بدون تغییر)
// ============================================

const alphabet = [
    { letter: 'A a', name: 'A', pron: 'آ', ipa: '/aː/' },
    { letter: 'B b', name: 'Be', pron: 'بِه', ipa: '/beː/' },
    { letter: 'C c', name: 'Tse', pron: 'تسِه', ipa: '/tseː/' },
    { letter: 'D d', name: 'De', pron: 'دِه', ipa: '/deː/' },
    { letter: 'E e', name: 'E', pron: 'اِه', ipa: '/eː/' },
    { letter: 'F f', name: 'F', pron: 'اِف', ipa: '/ɛf/' },
    { letter: 'G g', name: 'Ge', pron: 'گِه', ipa: '/ɡeː/' },
    { letter: 'H h', name: 'Ha', pron: 'ها', ipa: '/haː/' },
    { letter: 'I i', name: 'I', pron: 'ای', ipa: '/iː/' },
    { letter: 'J j', name: 'Jot', pron: 'یُت', ipa: '/jɔt/' },
    { letter: 'K k', name: 'Ka', pron: 'کا', ipa: '/kaː/' },
    { letter: 'L l', name: 'El', pron: 'اِل', ipa: '/ɛl/' },
    { letter: 'M m', name: 'Em', pron: 'اِم', ipa: '/ɛm/' },
    { letter: 'N n', name: 'En', pron: 'اِن', ipa: '/ɛn/' },
    { letter: 'O o', name: 'O', pron: 'اُو', ipa: '/oː/' },
    { letter: 'P p', name: 'Pe', pron: 'پِه', ipa: '/peː/' },
    { letter: 'Q q', name: 'Qu', pron: 'کو', ipa: '/kuː/' },
    { letter: 'R r', name: 'Er', pron: 'اِر', ipa: '/ɛʁ/' },
    { letter: 'S s', name: 'Es', pron: 'اِس', ipa: '/ɛs/' },
    { letter: 'T t', name: 'Te', pron: 'تِه', ipa: '/teː/' },
    { letter: 'U u', name: 'U', pron: 'او', ipa: '/uː/' },
    { letter: 'V v', name: 'Vau', pron: 'فاو', ipa: '/faʊ/' },
    { letter: 'W w', name: 'We', pron: 'وِه', ipa: '/veː/' },
    { letter: 'X x', name: 'Ix', pron: 'ایکس', ipa: '/ɪks/' },
    { letter: 'Y y', name: 'Ypsilon', pron: 'اوپسیلون', ipa: '/ˈʏpsilɔn/' },
    { letter: 'Z z', name: 'Tset', pron: 'تسِت', ipa: '/tsɛt/' }
];

// ============================================
// PART 4: VERB QUIZ DATA - داده‌های کوییز افعال
// (کد قدیم بدون تغییر)
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
// PART 5: DU/SIE QUIZ DATA - داده‌های کوییز "تو" و "شما"
// (کد قدیم بدون تغییر)
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
// PART 6: DIALOGS - مکالمات درس ۱ (جدید)
// ============================================

const lesson1Dialogs = [
    {
        id: 'dialog-1',
        title: 'Dialog 1: Begrüßung',
        subtitle: 'سلام و احوال‌پرسی',
        speakers: ['Nicole', 'Paco'],
        lines: [
            {
                speaker: 'nicole',
                german: 'Hallo, ich bin Nicole. Wie heißt du?',
                pronunciation: 'هالو، ایش بین نیکول. وی هایست دو؟',
                persian: 'سلام، من نیکول هستم. اسمت چیه؟',
                audioFile: 'audio/lesson1/dialog1/nicole1.mp3'
            },
            {
                speaker: 'paco',
                german: 'Hallo Nicole, ich bin Paco. Woher kommst du?',
                pronunciation: 'هالو نیکول، ایش بین پاکو. ووهر کومست دو؟',
                persian: 'سلام نیکول، من پاکو هستم. از کجا میای؟',
                audioFile: 'audio/lesson1/dialog1/paco1.mp3'
            },
            {
                speaker: 'nicole',
                german: 'Ich komme aus Frankreich. Und du?',
                pronunciation: 'ایش کومه آوس فرانکرایش. اوند دو؟',
                persian: 'من از فرانسه میام. تو چی؟',
                audioFile: 'audio/lesson1/dialog1/nicole2.mp3'
            },
            {
                speaker: 'paco',
                german: 'Ich komme aus Spanien.',
                pronunciation: 'ایش کومه آوس اشپانین.',
                persian: 'من از اسپانیا میام.',
                audioFile: 'audio/lesson1/dialog1/paco2.mp3'
            }
        ]
    },
    {
        id: 'dialog-2',
        title: 'Dialog 2: Wie geht es dir?',
        subtitle: 'احوال‌پرسی تفصیلی',
        speakers: ['Nicole', 'Yaco'],
        lines: [
            {
                speaker: 'nicole',
                german: 'Hallo Yaco! Wie geht es dir?',
                pronunciation: 'هالو یاکو! وی گِت اس دیر؟',
                persian: 'سلام یاکو! حالت چطوره؟',
                audioFile: 'audio/lesson1/dialog2/nicole1.mp3'
            },
            {
                speaker: 'yaco',
                german: 'Mir geht es gut, danke! Und dir?',
                pronunciation: 'میر گِت اس گوت، دانکه! اوند دیر؟',
                persian: 'من خوبم، تشکر! تو چطوری؟',
                audioFile: 'audio/lesson1/dialog2/yaco1.mp3'
            },
            {
                speaker: 'nicole',
                german: 'Mir geht es auch gut!',
                pronunciation: 'میر گِت اس آوخ گوت!',
                persian: 'من هم خوبم!',
                audioFile: 'audio/lesson1/dialog2/nicole2.mp3'
            }
        ]
    },
    {
        id: 'dialog-3',
        title: 'Dialog 3: Höflichkeiten',
        subtitle: 'ادب و احترام',
        speakers: ['Paco', 'Yaco'],
        lines: [
            {
                speaker: 'paco',
                german: 'Guten Tag! Wie heißen Sie?',
                pronunciation: 'گوتن تاگ! وی هایسن زی؟',
                persian: 'سلام! اسم شما چیه؟',
                audioFile: 'audio/lesson1/dialog3/paco1.mp3'
            },
            {
                speaker: 'yaco',
                german: 'Ich heiße Yaco. Und Sie?',
                pronunciation: 'ایش هایسه یاکو. اوند زی؟',
                persian: 'من یاکو هستم. شما چطور؟',
                audioFile: 'audio/lesson1/dialog3/yaco1.mp3'
            },
            {
                speaker: 'paco',
                german: 'Ich bin Paco. Freut mich!',
                pronunciation: 'ایش بین پاکو. فروت میش!',
                persian: 'من پاکو هستم. خوشحالم!',
                audioFile: 'audio/lesson1/dialog3/paco2.mp3'
            }
        ]
    }
];

// ============================================
// PART 7: GRAMMAR - گرامر درس ۱ (جدید)
// ============================================

const lesson1Grammar = [
    {
        id: 'grammar-1',
        title: 'فعل Sein (بودن)',
        description: 'فعل اساسی "بودن" در آلمانی',
        color: 'blue',
        content: `
            <table class="grammar-table">
                <tr>
                    <th>شخص</th>
                    <th>فعل</th>
                    <th>مثال</th>
                </tr>
                <tr>
                    <td>ich (من)</td>
                    <td>bin</td>
                    <td>Ich bin Nicole.</td>
                </tr>
                <tr>
                    <td>du (تو)</td>
                    <td>bist</td>
                    <td>Du bist Paco.</td>
                </tr>
                <tr>
                    <td>er/sie/es (او)</td>
                    <td>ist</td>
                    <td>Er ist Lehrer.</td>
                </tr>
                <tr>
                    <td>wir (ما)</td>
                    <td>sind</td>
                    <td>Wir sind Studenten.</td>
                </tr>
                <tr>
                    <td>ihr (شما)</td>
                    <td>seid</td>
                    <td>Ihr seid jung.</td>
                </tr>
                <tr>
                    <td>sie/Sie (آن‌ها/شما)</td>
                    <td>sind</td>
                    <td>Sie sind Lehrer.</td>
                </tr>
            </table>
        `
    },
    {
        id: 'grammar-2',
        title: 'سوال‌های معرفتی',
        description: 'چگونه سوال بپرسیم',
        color: 'purple',
        content: `
            <div class="grammar-note">
                <strong>الگو:</strong> فعل + فاعل + باقی جمله
            </div>
            <ul>
                <li><strong>Wie heißt du?</strong> - اسمت چیه؟</li>
                <li><strong>Woher kommst du?</strong> - از کجا میای؟</li>
                <li><strong>Wie geht es dir?</strong> - حالت چطوره؟</li>
                <li><strong>Was ist dein Beruf?</strong> - شغلت چیه؟</li>
            </ul>
        `
    }
];

// ============================================
// PART 8: EXERCISES - تمرین‌های درس ۱ (جدید)
// ============================================

const lesson1Exercises = [
    {
        id: 'exercise-1',
        type: 'matching',
        title: 'تطابق دادن - پاسخ‌ها را به سوال‌ها متصل کن',
        description: 'سوال‌های سمت چپ را به پاسخ‌های صحیح سمت راست وصل کن',
        questions: [
            { id: 'q1', text: 'Wie heißt du?' },
            { id: 'q2', text: 'Woher kommst du?' },
            { id: 'q3', text: 'Wie geht es dir?' }
        ],
        answers: [
            { id: 'a1', text: 'Mir geht es gut.' },
            { id: 'a2', text: 'Ich heiße Nicole.' },
            { id: 'a3', text: 'Ich komme aus Deutschland.' }
        ],
        correctPairs: [
            { question: 'q1', answer: 'a2' },
            { question: 'q2', answer: 'a3' },
            { question: 'q3', answer: 'a1' }
        ]
    },
    {
        id: 'exercise-2',
        type: 'fillBlank',
        title: 'جاهای خالی را پر کن',
        description: 'جاهای خالی را با کلمات صحیح پر کن',
        sentences: [
            {
                text: 'Ich _____ Nicole.',
                options: ['bin', 'bist', 'ist'],
                correct: 'bin'
            },
            {
                text: 'Du _____ Paco.',
                options: ['bin', 'bist', 'ist'],
                correct: 'bist'
            },
            {
                text: 'Wie _____ du?',
                options: ['heißt', 'heiße', 'heißen'],
                correct: 'heißt'
            }
        ]
    },
    {
        id: 'exercise-3',
        type: 'multipleChoice',
        title: 'انتخاب گزینه صحیح',
        description: 'گزینه صحیح را انتخاب کن',
        questions: [
            {
                question: 'چه معنی دارد "Wie geht es dir?"',
                options: [
                    'اسمت چیه؟',
                    'حالت چطوره؟',
                    'از کجا میای؟'
                ],
                correct: 1
            },
            {
                question: 'کدام پاسخ صحیح است؟ "Wie heißt du?"',
                options: [
                    'Ich komme aus Deutschland.',
                    'Ich heiße Nicole.',
                    'Mir geht es gut.'
                ],
                correct: 1
            }
        ]
    }
];

// ============================================
// EXPORT & CONSOLE LOGS
// ============================================

console.log('✅ Lesson 1 Data Loaded Successfully!');
console.log('📚 Vocabulary:', allWords.length, 'words');
console.log('🌍 Countries:', countries.length, 'countries');
console.log('🔤 Alphabet:', alphabet.length, 'letters');
console.log('📝 Verb Quiz:', verbQuizData.length, 'questions');
console.log('❓ Du/Sie Quiz:', duSieQuizData.length, 'questions');
console.log('🎭 Dialogs:', lesson1Dialogs.length, 'dialogs');
console.log('📖 Grammar:', lesson1Grammar.length, 'topics');
console.log('✏️ Exercises:', lesson1Exercises.length, 'exercises');
