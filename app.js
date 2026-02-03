// ===== Data Storage & State Management =====
const STORAGE_KEYS = {
    USERS: 'summerSchool_users_prod_v2',
    SESSION: 'summerSchool_session_prod_v2',
    LEARNINGS: 'summerSchool_learnings_prod_v2',
    PROBLEM: 'summerSchool_problem_prod_v2',
    LANG_PREF: 'summerSchool_lang_pref_prod_v2'
};

const MAX_USERS = 5;
const TOTAL_DAYS = 15;

// Program start date
const PROGRAM_START_DATE = new Date();
PROGRAM_START_DATE.setDate(PROGRAM_START_DATE.getDate() - 1);
PROGRAM_START_DATE.setHours(0, 0, 0, 0);

const DEFAULT_PROBLEM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Helper to repeat text to match English length if translation is short
const ENGLISH_WELCOME = "Welcome to Meowls, our intensive 15-day Summer School program focused on AI applications with eco-tech innovation. This program brings together passionate learners from around the world to explore cutting-edge artificial intelligence technologies while maintaining a sustainable, environmentally-conscious approach.";
const ENGLISH_PROJECT = "Through hands-on projects, collaborative learning, and expert mentorship, participants will develop practical AI skills that address real-world environmental and technological challenges.";

// ===== Translations =====
const TRANSLATIONS = {
    'Polish': {
        subtitle: "Program Innowacji Eko-Tech",
        fullName: "Pełne Imię i Nazwisko",
        password: "Hasło",
        login: "Zaloguj się",
        noAccount: "Nie masz konta?",
        signUp: "Zarejestruj się",
        joinMeowls: "Dołącz do Meowls",
        createAccount: "Utwórz konto",
        usernameNote: "To będzie Twoja nazwa użytkownika",
        photo: "Zdjęcie profilowe",
        country: "Kraj",
        stream: "Kierunek/Wydział",
        bio: "O sobie",
        hasAccount: "Masz już konto?",
        about: "O nas",
        learnings: "Nauka",
        settings: "Ustawienia",
        editUserInfo: "Edytuj dane",
        changePassword: "Zmień hasło",
        darkMode: "Tryb ciemny",
        logout: "Wyloguj",
        aboutMeowls: "O Meowls",
        welcomeText: "Witamy w Meowls, naszym intensywnym 15-dniowym programie Szkoły Letniej skupiającym się na zastosowaniach Sztucznej Inteligencji z perspektywą eko-technologiczną. Ten program gromadzi pasjonatów z całego świata, aby zgłębiać najnowocześniejsze technologie AI, zachowując jednocześnie zrównoważone, proekologiczne podejście do innowacji. Zapewniamy kompleksowe szkolenie, które łączy teorię z praktyką.",
        projectText: "Poprzez praktyczne projekty, wspólną naukę i mentoring ekspertów, uczestnicy rozwiną praktyczne umiejętności w zakresie AI, które bezpośrednio odnoszą się do rzeczywistych wyzwań środowiskowych i technologicznych. Nasz cel to stworzenie rozwiązań, które mają realny wpływ na przyszłość naszej planety.",
        meetTeam: "Poznaj Zespół",
        problemStatement: "Opis Problemu",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "Oś Czasu",
        thankYou: "Dziękujemy.",
        teamMeowls: "~ Zespół Meowls",
        currentPassword: "Obecne hasło",
        newPassword: "Nowe hasło",
        confirmPassword: "Potwierdź nowe hasło",
        updatePassword: "Zaktualizuj hasło",
        saveChanges: "Zapisz zmiany",
        day: "Dzień",
        clickToView: "Kliknij, aby zobaczyć i dodać",
        orientation: "Orientacja i Wprowadzenie",
        comingSoon: "Już wkrótce...",
        edit: "Edytuj",
        save: "Zapisz",
        expand: "Rozwiń"
    },
    'Russian': {
        subtitle: "Программа Эко-Тех Инноваций",
        fullName: "ФИО",
        password: "Пароль",
        login: "Войти",
        noAccount: "Нет аккаунта?",
        signUp: "Регистрация",
        joinMeowls: "Присоединиться",
        createAccount: "Создать аккаунт",
        usernameNote: "Ваше имя пользователя",
        photo: "Фото профиля",
        country: "Страна",
        stream: "Направление",
        bio: "О себе",
        hasAccount: "Есть аккаунт?",
        about: "О нас",
        learnings: "Обучение",
        settings: "Настройки",
        editUserInfo: "Ред. профиль",
        changePassword: "Сменить пароль",
        darkMode: "Тёмная тема",
        logout: "Выйти",
        aboutMeowls: "О программе Meowls",
        welcomeText: "Добро пожаловать в Meowls, нашу интенсивную 15-дневную программу Летней школы, посвященную применению Искусственного Интеллекта с эко-технологической перспективой. Эта программа объединяет увлеченных студентов со всего мира для изучения передовых технологий ИИ при сохранении устойчивого, экологически сознательного подхода к инновациям.",
        projectText: "Благодаря практическим проектам, совместному обучению и экспертному наставничеству участники будут развивать практические навыки ИИ, которые направлены на решение реальных экологических и технологических проблем современности. Мы стремимся создать будущее, где технологии служат природе.",
        meetTeam: "Наша Команда",
        problemStatement: "Постановка Задачи",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "График Обучения",
        thankYou: "Спасибо.",
        teamMeowls: "~ Команда Meowls",
        currentPassword: "Текущий пароль",
        newPassword: "Новый пароль",
        confirmPassword: "Подтвердите пароль",
        updatePassword: "Обновить пароль",
        saveChanges: "Сохранить",
        day: "День",
        clickToView: "Нажмите для просмотра",
        orientation: "Ориентация и Введение",
        comingSoon: "Скоро...",
        edit: "Ред.",
        save: "Сохр.",
        expand: "Открыть"
    },
    'Uzbek': {
        subtitle: "Eko-Tex Innovatsiyalar",
        fullName: "To'liq Ism",
        password: "Parol",
        login: "Kirish",
        noAccount: "Hisob yo'qmi?",
        signUp: "Ro'yxatdan o'tish",
        joinMeowls: "Qo'shiling",
        createAccount: "Hisob yaratish",
        usernameNote: "Foydalanuvchi nomi",
        photo: "Rasm",
        country: "Mamlakat",
        stream: "Yo'nalish",
        bio: "Bio",
        hasAccount: "Hisob bormi?",
        about: "Biz haqimizda",
        learnings: "O'rganishlar",
        settings: "Sozlamalar",
        editUserInfo: "Tahrirlash",
        changePassword: "Parolni o'zgartirish",
        darkMode: "Tungi rejim",
        logout: "Chiqish",
        aboutMeowls: "Meowls Haqida",
        welcomeText: "Meowls-ga xush kelibsiz - bizning sun'iy intellekt va eko-texnologiyalarga yo'naltirilgan 15 kunlik intensiv yozgi maktab dasturimiz. Ushbu dastur barqaror va ekologik yondashuvni saqlagan holda eng zamonaviy AI texnologiyalarini o'rganish uchun dunyo bo'ylab ishtirokchilarni birlashtiradi. Biz kelajak texnologiyalarini o'rgatamiz.",
        projectText: "Amaliy loyihalar, hamkorlikda o'rganish va ekspertlar maslahati orqali ishtirokchilar real ekologik va texnologik muammolarni hal qilishga qaratilgan amaliy AI ko'nikmalarini rivojlantiradilar. Bu ko'nikmalar sizning kelajakdagi karyerangiz uchun muhim poydevor bo'lib xizmat qiladi.",
        meetTeam: "Jamoa",
        problemStatement: "Muammo Bayoni",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "Vaqt jadvali",
        thankYou: "Rahmat.",
        teamMeowls: "~ Meowls Jamoasi",
        currentPassword: "Eski parol",
        newPassword: "Yangi parol",
        confirmPassword: "Tasdiqlash",
        updatePassword: "Yangilash",
        saveChanges: "Saqlash",
        day: "Kun",
        clickToView: "Ko'rish uchun bosing",
        orientation: "Tanishtiruv",
        comingSoon: "Tez kunda...",
        edit: "Tahrir",
        save: "Saqlash",
        expand: "Ochish"
    },
    'Malay': {
        subtitle: "Program Inovasi Eko-Tech",
        fullName: "Nama Penuh",
        password: "Kata Laluan",
        login: "Log Masuk",
        noAccount: "Tiada akaun?",
        signUp: "Daftar",
        joinMeowls: "Sertai Meowls",
        createAccount: "Cipta Akaun",
        usernameNote: "Nama pengguna anda",
        photo: "Gambar",
        country: "Negara",
        stream: "Aliran",
        bio: "Biodata",
        hasAccount: "Ada akaun?",
        about: "Tentang Kami",
        learnings: "Pembelajaran",
        settings: "Tetapan",
        editUserInfo: "Edit Info",
        changePassword: "Tukar Kata Laluan",
        darkMode: "Mod Gelap",
        logout: "Log Keluar",
        aboutMeowls: "Tentang Meowls",
        welcomeText: "Selamat datang ke Meowls, program Sekolah Musim Panas intensif 15 hari kami yang memfokuskan aplikasi AI dengan perspektif eko-teknologi. Program ini menghimpunkan pelajar yang bersemangat dari seluruh dunia untuk meneroka teknologi kecerdasan buatan terkini sambil mengekalkan pendekatan lestari dan mesra alam sekitar.",
        projectText: "Melalui projek praktikal, pembelajaran kolaboratif, dan bimbingan pakar, peserta akan membangunkan kemahiran AI praktikal yang menangani cabaran alam sekitar dan teknologi dunia sebenar secara berkesan. Kami bertekad untuk melahirkan inovator masa depan.",
        meetTeam: "Kenali Pasukan",
        problemStatement: "Pernyataan Masalah",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "Garis Masa",
        thankYou: "Terima Kasih.",
        teamMeowls: "~ Pasukan Meowls",
        currentPassword: "Kata Laluan Semasa",
        newPassword: "Kata Laluan Baru",
        confirmPassword: "Sahkan",
        updatePassword: "Kemaskini",
        saveChanges: "Simpan",
        day: "Hari",
        clickToView: "Klik untuk lihat",
        orientation: "Orientasi",
        comingSoon: "Akan datang...",
        edit: "Edit",
        save: "Simpan",
        expand: "Buka"
    },
    'Chinese': {
        subtitle: "生态科技创新计划",
        fullName: "全名",
        password: "密码",
        login: "登录",
        noAccount: "没有账号？",
        signUp: "注册",
        joinMeowls: "加入 Meowls",
        createAccount: "创建账号",
        usernameNote: "您的用户名",
        photo: "头像",
        country: "国家",
        stream: "专业",
        bio: "简介",
        hasAccount: "已有账号？",
        about: "关于我们",
        learnings: "学习内容",
        settings: "设置",
        editUserInfo: "编辑信息",
        changePassword: "修改密码",
        darkMode: "深色模式",
        logout: "退出",
        aboutMeowls: "关于 Meowls",
        welcomeText: "欢迎来到 Meowls，这是我们专注于 AI 应用与生态科技视角的为期15天的强化暑期学校项目。该项目汇集了来自世界各地的热情学习者，在保持可持续、环保的创新方法的同时，探索最前沿的人工智能技术。我们的课程设计旨在融合理论与实践，为您提供全面的学习体验。",
        projectText: "通过实践项目、协作学习和专家指导，参与者将开发实用的 AI 技能，以解决现实世界的环境和技术挑战。我们致力于培养能够利用技术造福地球的一代创新者。",
        meetTeam: "认识团队",
        problemStatement: "问题陈述",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "时间表",
        thankYou: "谢谢。",
        teamMeowls: "~ Meowls 团队",
        currentPassword: "当前密码",
        newPassword: "新密码",
        confirmPassword: "确认",
        updatePassword: "更新",
        saveChanges: "保存",
        day: "天",
        clickToView: "点击查看",
        orientation: "入职与介绍",
        comingSoon: "敬请期待...",
        edit: "编辑",
        save: "保存",
        expand: "展开"
    },
    'Hindi': {
        subtitle: "इको-टेक इनोवेशन प्रोग्राम",
        fullName: "पूरा नाम",
        password: "पासवर्ड",
        login: "लॉग इन करें",
        noAccount: "खाता नहीं है?",
        signUp: "साइन अप करें",
        joinMeowls: "Meowls में शामिल हों",
        createAccount: "खाता बनाएं",
        usernameNote: "यह आपका यूजरनेम होगा",
        photo: "प्रोफ़ाइल फ़ोटो",
        country: "देश",
        stream: "विभाग",
        bio: "जीवन परिचय",
        hasAccount: "क्या आपके पास पहले से खाता है?",
        about: "हमारे बारे में",
        learnings: "सीख",
        settings: "सेटिंग्स",
        editUserInfo: "जानकारी संपादित करें",
        changePassword: "पासवर्ड बदलें",
        darkMode: "डार्क मोड",
        logout: "लॉग आउट",
        aboutMeowls: "Meowls के बारे में",
        welcomeText: "Meowls में आपका स्वागत है, जो एआई अनुप्रयोगों पर केंद्रित हमारा 15-दिवसीय गहन समर स्कूल कार्यक्रम है। यह कार्यक्रम दुनिया भर के उत्साही शिक्षार्थियों को एक साथ लाता है ताकि वे पारिस्थितिकी-अनुकूल दृष्टिकोण के साथ अत्याधुनिक कृत्रिम बुद्धिमत्ता प्रौद्योगिकियों का पता लगा सकें। हम एक व्यापक पाठ्यक्रम प्रदान करते हैं जो सिद्धांत और व्यवहार को जोड़ता है।",
        projectText: "व्यावहारिक परियोजनाओं, सहयोगात्मक शिक्षा और विशेषज्ञ मार्गदर्शन के माध्यम से, प्रतिभागी व्यावहारिक एआई कौशल विकसित करेंगे जो वास्तविक दुनिया की पर्यावरणीय और तकनीकी चुनौतियों का समाधान करते हैं। हमारा लक्ष्य ऐसे समाधान बनाना है जो हमारी पृथ्वी के भविष्य पर वास्तविक प्रभाव डालें।",
        meetTeam: "टीम से मिलें",
        problemStatement: "समस्या कथन",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "समयरेखा",
        thankYou: "धन्यवाद।",
        teamMeowls: "~ टीम Meowls",
        currentPassword: "वर्तमान पासवर्ड",
        newPassword: "नया पासवर्ड",
        confirmPassword: "नए पासवर्ड की पुष्टि करें",
        updatePassword: "पासवर्ड अपडेट करें",
        saveChanges: "परिवर्तन सहेजें",
        day: "दिन",
        clickToView: "देखने और जोड़ने के लिए क्लिक करें",
        orientation: "अभिविन्यास और परिचय",
        comingSoon: "जल्द आ रहा है...",
        edit: "संपादित करें",
        save: "सहेजें",
        expand: "विस्तार करें"
    },
    'Portuguese': {
        subtitle: "Programa de Inovação Eco-Tech",
        fullName: "Nome Completo",
        password: "Senha",
        login: "Entrar",
        noAccount: "Não tem conta?",
        signUp: "Inscrever-se",
        joinMeowls: "Junte-se ao Meowls",
        createAccount: "Criar Conta",
        usernameNote: "Este será seu nome de usuário",
        photo: "Foto de Perfil",
        country: "País",
        stream: "Curso/Departamento",
        bio: "Biografia",
        hasAccount: "Já tem conta?",
        about: "Sobre",
        learnings: "Aprendizados",
        settings: "Configurações",
        editUserInfo: "Editar Perfil",
        changePassword: "Mudar Senha",
        darkMode: "Modo Escuro",
        logout: "Sair",
        aboutMeowls: "Sobre o Meowls",
        welcomeText: "Bem-vindo ao Meowls, nosso programa intensivo de Summer School de 15 dias focado em aplicações de IA com uma perspectiva eco-tecnológica. Este programa reúne aprendizes apaixonados de todo o mundo para explorar tecnologias de inteligência artificial de ponta, mantendo uma abordagem sustentável e ambientalmente consciente em todos os aspectos.",
        projectText: "Através de projetos práticos, aprendizagem colaborativa e mentoria especializada, os participantes desenvolverão habilidades práticas de IA que abordam desafios ambientais e tecnológicos do mundo real. Nosso objetivo é capacitar a próxima geração de inovadores para criar um impacto positivo.",
        meetTeam: "Conheça a Equipe",
        problemStatement: "Declaração do Problema",
        problemStatementDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timeline: "Cronograma",
        thankYou: "Obrigado.",
        teamMeowls: "~ Equipe Meowls",
        currentPassword: "Senha Atual",
        newPassword: "Nova Senha",
        confirmPassword: "Confirmar Nova Senha",
        updatePassword: "Atualizar Senha",
        saveChanges: "Salvar Alterações",
        day: "Dia",
        clickToView: "Clique para ver e adicionar",
        orientation: "Orientação e Introdução",
        comingSoon: "Em breve...",
        edit: "Editar",
        save: "Salvar",
        expand: "Expandir"
    },
    'English': {
        subtitle: "Eco-Tech Innovation Program",
        fullName: "Full Name",
        password: "Password",
        login: "Login",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        joinMeowls: "Join Meowls",
        createAccount: "Create Your Account",
        usernameNote: "This will be your username (cannot be changed later)",
        photo: "Profile Photo",
        country: "Country",
        stream: "Stream/Department",
        bio: "Bio",
        hasAccount: "Already have an account?",
        about: "About",
        learnings: "Learnings",
        settings: "Settings",
        editUserInfo: "Edit User Info",
        changePassword: "Change Password",
        darkMode: "Dark Mode",
        logout: "Logout",
        aboutMeowls: "About Meowls",
        welcomeText: ENGLISH_WELCOME,
        projectText: ENGLISH_PROJECT,
        meetTeam: "Meet the Team",
        problemStatement: "Problem Statement",
        problemStatementDefault: DEFAULT_PROBLEM_TEXT,
        timeline: "Timeline",
        thankYou: "Thank you.",
        teamMeowls: "~ Team Meowls",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm New Password",
        updatePassword: "Update Password",
        saveChanges: "Save Changes",
        day: "Day",
        clickToView: "Click to view and add learnings",
        orientation: "Orientation & Introduction",
        comingSoon: "Coming soon...",
        edit: "Edit",
        save: "Save",
        expand: "Expand"
    }
};

const COUNTRY_TO_LANG = {
    'India': 'Hindi',
    'Poland': 'Polish',
    'Russia': 'Russian',
    'Uzbekistan': 'Uzbek',
    'Malaysia': 'Malay',
    'China': 'Chinese',
    'Portugal': 'Portuguese'
};

function hashPassword(p) { let h = 0; if (!p) return "0"; for (let i = 0; i < p.length; i++) { let c = p.charCodeAt(i); h = ((h << 5) - h) + c; h = h & h; } return h.toString(36); }
function toProperCase(s) { if (!s) return ''; return s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()); }
function getRandomBorderColor() { const c = ['hsl(150, 65%, 45%)', 'hsl(175, 70%, 40%)', 'hsl(200, 80%, 50%)', 'hsl(85, 75%, 55%)', 'hsl(185, 85%, 60%)', 'hsl(160, 70%, 50%)', 'hsl(190, 75%, 45%)']; return c[Math.floor(Math.random() * c.length)]; }
function getCurrentDayIndex() { const t = new Date(); t.setHours(0, 0, 0, 0); const d = Math.ceil((t - PROGRAM_START_DATE) / (1000 * 60 * 60 * 24)); return d + 1; }
function getDateForDay(i) { const d = new Date(PROGRAM_START_DATE); d.setDate(d.getDate() + (i - 1)); return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); }

function getFlag(country) {
    if (!country) return '';
    const filename = country.toLowerCase() + '.png';
    const path = `assets/icons/flags/${filename}`;
    return `<img src="${path}" alt="${country}" class="flag-icon" style="width: 24px; height: 18px; object-fit: cover; border-radius: 2px; display: inline-block; vertical-align: middle; margin-right: 5px;">`;
}

function getUsers() { try { const u = localStorage.getItem(STORAGE_KEYS.USERS); return u ? JSON.parse(u) : []; } catch (e) { return []; } }
function saveUsers(u) { localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(u)); }
function getSession() { try { const s = localStorage.getItem(STORAGE_KEYS.SESSION); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function saveSession(u) { localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(u)); }
function clearSession() { localStorage.removeItem(STORAGE_KEYS.SESSION); }
function getLearnings() { try { const l = localStorage.getItem(STORAGE_KEYS.LEARNINGS); return l ? JSON.parse(l) : {}; } catch (e) { return {}; } }
function saveLearnings(l) { localStorage.setItem(STORAGE_KEYS.LEARNINGS, JSON.stringify(l)); }
function getLearningForDay(d, u) { const l = getLearnings(); return l[d]?.[u] || ''; }
function saveLearningForDay(d, u, c) { const l = getLearnings(); if (!l[d]) l[d] = {}; l[d][u] = c; saveLearnings(l); }
function getProblemStatement() { return localStorage.getItem(STORAGE_KEYS.PROBLEM) || DEFAULT_PROBLEM_TEXT; }
function saveProblemStatement(t) { localStorage.setItem(STORAGE_KEYS.PROBLEM, t); }
function fileToBase64(file) { return new Promise((r, j) => { const d = new FileReader(); d.onload = () => r(d.result); d.onerror = j; d.readAsDataURL(file); }); }

// ===== Translations Logic =====
function applyTranslations(langName) {
    const dict = TRANSLATIONS[langName];
    if (!dict) return;

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

function getTranslation(langName, key) {
    if (TRANSLATIONS[langName] && TRANSLATIONS[langName][key]) {
        return TRANSLATIONS[langName][key];
    }
    return key === 'problemStatementDefault' ? null : null;
}

// ===== Authentication Handlers (Restored) =====
async function handleSignup(e) {
    e.preventDefault();
    const name = toProperCase(document.getElementById('signupName').value.trim());
    const password = document.getElementById('signupPassword').value;
    const country = document.getElementById('signupCountry').value;
    const stream = document.getElementById('signupStream').value;
    const photoFile = document.getElementById('signupPhoto').files[0];

    if (!name || !password || !country || !stream || !photoFile) { alert('Please fill in all fields'); return; }

    const users = getUsers();
    if (users.length >= MAX_USERS) { alert('Registration full (Max 5 users)'); return; }
    if (users.some(u => u.name === name)) { alert('Username already taken'); return; }

    try {
        const photoBase64 = await fileToBase64(photoFile);
        const newUser = {
            name,
            password: hashPassword(password),
            country,
            stream,
            photo: photoBase64,
            bio: ''
        };
        users.push(newUser);
        saveUsers(users);
        saveSession(newUser);
        document.getElementById('signupForm').reset();
        document.getElementById('photoPreview').innerHTML = '';
        showApp();
    } catch (err) { alert('Error processing photo'); }
}

function handleLogin(e) {
    e.preventDefault();
    const name = toProperCase(document.getElementById('loginName').value.trim());
    const password = document.getElementById('loginPassword').value;
    const users = getUsers();
    const user = users.find(u => u.name === name && u.password === hashPassword(password));

    if (user) {
        saveSession(user);
        document.getElementById('loginForm').reset();
        showApp();
    } else {
        alert('Invalid username or password');
    }
}

function handleLogout() {
    clearSession();
    location.reload();
}

// ===== UI =====
function showApp() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('signupModal').classList.remove('active');
    document.getElementById('app').classList.remove('hidden');

    const user = getSession();
    if (user) {
        if (document.getElementById('navUsername')) document.getElementById('navUsername').textContent = user.name;
        if (document.getElementById('navUserPhoto')) document.getElementById('navUserPhoto').src = user.photo;

        // Language Logic
        let lang = localStorage.getItem(STORAGE_KEYS.LANG_PREF);
        if (!lang) {
            lang = COUNTRY_TO_LANG[user.country] || 'English';
        }
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) {
            langSelect.value = lang;
        }
        applyTranslations(lang);
    }

    renderTeamGrid();
    renderTimeline();
    renderProblemStatement();
}

function renderTeamGrid() {
    const users = getUsers();
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    teamGrid.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-photo"><img src="${user.photo}" alt="${user.name}"></div>
            <h3>${user.name}</h3>
            <p class="country-flag" style="display: flex; align-items: center; justify-content: center; gap: 5px;">
                ${getFlag(user.country)} ${user.country}
            </p>
            <p class="bio">${user.bio || 'New member'}</p>
        `;
        teamGrid.appendChild(card);
    });
}

function renderProblemStatement() {
    const storedText = getProblemStatement();

    const user = getSession();
    let lang = localStorage.getItem(STORAGE_KEYS.LANG_PREF);
    if (!lang && user) lang = COUNTRY_TO_LANG[user.country] || 'English';

    let textToShow = storedText;

    if (storedText === DEFAULT_PROBLEM_TEXT) {
        const translatedDefault = getTranslation(lang, 'problemStatementDefault');
        if (translatedDefault) textToShow = translatedDefault;
    }

    const container = document.getElementById('problemTextContainer');
    const textarea = document.getElementById('problemTextarea');
    if (container) {
        container.innerHTML = textToShow.replace(/\n/g, '<br>');
        container.classList.remove('hidden');
    }
    if (textarea) {
        textarea.classList.add('hidden');
        textarea.value = textToShow;
    }
}

function toggleProblemEdit() {
    const container = document.getElementById('problemTextContainer');
    const textarea = document.getElementById('problemTextarea');
    const isEditing = container.classList.contains('hidden');

    if (!isEditing) {
        container.classList.add('hidden');
        textarea.classList.remove('hidden');
        textarea.value = container.innerText;
    } else {
        const newText = textarea.value.trim();
        saveProblemStatement(newText);
        renderProblemStatement();
    }
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    timeline.innerHTML = '';

    const user = getSession();
    let lang = localStorage.getItem(STORAGE_KEYS.LANG_PREF);
    if (!lang && user) lang = COUNTRY_TO_LANG[user.country] || 'English';

    const currentDay = getCurrentDayIndex();

    for (let day = 1; day <= TOTAL_DAYS; day++) {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const isDay1 = day === 1;
        const isPast = day <= currentDay;
        const isFuture = day > currentDay;

        if (isDay1) content.classList.add('display-only');
        else if (isFuture) content.classList.add('disabled');

        const dayLabel = getTranslation(lang, 'day') || 'Day';
        const clickText = getTranslation(lang, 'clickToView') || 'Click to view and add learnings';
        const expandText = getTranslation(lang, 'expand') || 'Expand';
        const orientationText = getTranslation(lang, 'orientation') || 'Orientation & Introduction';
        const comingSoonText = getTranslation(lang, 'comingSoon') || 'Coming soon...';

        let label = `${dayLabel} ${day}`;
        if (lang === 'Chinese') label = `第 ${day} 天`;

        content.innerHTML = `
            <div class="day-number">${label}</div>
            <div class="day-date">${getDateForDay(day)}</div>
            ${!isDay1 && isPast && !isFuture ? `
                <div class="day-preview">${clickText}</div>
                <button class="expand-btn" onclick="expandDay(${day})">
                    ${expandText}
                </button>
            ` : ''}
            ${isDay1 ? `<div class="day-preview">${orientationText}</div>` : ''}
            ${isFuture ? `<div class="day-preview">${comingSoonText}</div>` : ''}
        `;

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        item.appendChild(content);
        item.appendChild(dot);
        timeline.appendChild(item);
    }
}

function expandDay(dayIndex) {
    const modal = document.getElementById('dayExpandedModal');
    const title = document.getElementById('expandedDayTitle');
    const container = document.getElementById('expandedLearnings');

    const user = getSession();
    let lang = localStorage.getItem(STORAGE_KEYS.LANG_PREF);
    if (!lang && user) lang = COUNTRY_TO_LANG[user.country] || 'English';

    const dayLabel = getTranslation(lang, 'day') || 'Day';
    const editText = getTranslation(lang, 'edit') || 'Edit';

    let label = `${dayLabel} ${dayIndex}`;
    if (lang === 'Chinese') label = `第 ${dayIndex} 天`;

    if (title) title.textContent = `${label} - ${getDateForDay(dayIndex)}`;
    if (container) container.innerHTML = '';

    const users = getUsers();
    const currentUser = getSession();

    if (container) {
        users.forEach(u => {
            const learning = getLearningForDay(dayIndex, u.name);
            const borderColor = getRandomBorderColor();
            const card = document.createElement('div');
            card.className = 'learning-card';
            card.style.borderColor = borderColor;
            const isCurrentUser = currentUser && u.name === currentUser.name;

            card.innerHTML = `
                <div class="learning-card-header">
                    <div class="learning-user">
                        <div class="learning-user-photo" style="border-color: ${borderColor}">
                            <img src="${u.photo}" alt="${u.name}">
                        </div>
                        <div class="learning-user-info">
                            <h4>${u.name}</h4>
                            <p style="display: flex; align-items: center; justify-content: center; gap: 5px;">
                                ${getFlag(u.country)} ${u.country}
                            </p>
                        </div>
                    </div>
                    ${isCurrentUser ? `
                        <button class="edit-btn" style="margin-top: 5px;" onclick="toggleEdit(this, ${dayIndex}, '${u.name}')">
                            ${editText}
                        </button>
                    ` : ''}
                </div>
                <div class="learning-content">
                    <div class="learning-text">
                        ${learning || '<em style="color: var(--text-secondary);">...</em>'}
                    </div>
                    <textarea class="learning-textarea hidden">${learning}</textarea>
                </div>
            `;
            container.appendChild(card);
        });
        if (modal) modal.classList.add('active');
    }
}

function toggleEdit(btn, dayIndex, username) {
    const card = btn.closest('.learning-card');
    const textDiv = card.querySelector('.learning-text');
    const textarea = card.querySelector('.learning-textarea');

    const user = getSession();
    let lang = localStorage.getItem(STORAGE_KEYS.LANG_PREF);
    if (!lang && user) lang = COUNTRY_TO_LANG[user.country] || 'English';

    const saveText = getTranslation(lang, 'save') || 'Save';
    const editText = getTranslation(lang, 'edit') || 'Edit';

    if (btn.textContent.trim() === editText) {
        textDiv.classList.add('hidden');
        textarea.classList.remove('hidden');
        btn.textContent = saveText;
        btn.classList.remove('edit-btn');
        btn.classList.add('save-btn');
    } else {
        const content = textarea.value.trim();
        saveLearningForDay(dayIndex, username, content);
        textDiv.innerHTML = content || '...';
        textDiv.classList.remove('hidden');
        textarea.classList.add('hidden');
        btn.textContent = editText;
        btn.classList.remove('save-btn');
        btn.classList.add('edit-btn');
    }
}

function updateEditIcon(isDark) {
    const editBtn = document.getElementById('editProblemBtn');
    if (editBtn) {
        editBtn.src = isDark ? 'assets/icons/edit-dark.png' : 'assets/icons/edit-light.png';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateEditIcon(isDark);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        const toggle = document.getElementById('themeToggle');
        if (toggle) toggle.checked = true;
    }
    setTimeout(() => {
        updateEditIcon(document.body.classList.contains('dark-mode'));
    }, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        loadTheme();
        const session = getSession();
        if (session) showApp();
        else document.getElementById('loginModal').classList.add('active');

        // Delegated Event Listeners for UI Shell
        document.body.addEventListener('click', (e) => {
            const target = e.target;

            // Hamburger Open
            if (target.closest('#hamburgerBtn')) {
                const menu = document.getElementById('hamburgerMenu');
                if (menu) menu.classList.add('active');
            }
            // Hamburger Close
            if (target.closest('#closeMenu')) {
                const menu = document.getElementById('hamburgerMenu');
                if (menu) menu.classList.remove('active');
            }
            // Close Expanded Day
            if (target.closest('#closeDayExpanded')) {
                const m = document.getElementById('dayExpandedModal');
                if (m) m.classList.remove('active');
            }
            // Close Password Modal
            if (target.closest('#closeChangePassword')) {
                const m = document.getElementById('changePasswordModal');
                if (m) m.classList.remove('active');
            }
            // Close Edit Profile Modal
            if (target.closest('#closeEditProfile')) {
                const m = document.getElementById('editProfileModal');
                if (m) m.classList.remove('active');
            }
            // Modal Background Click
            if (target.classList.contains('modal')) {
                target.classList.remove('active');
            }

            // Show Signup from Login
            if (target.closest('#showSignup')) {
                e.preventDefault();
                document.getElementById('loginModal').classList.remove('active');
                document.getElementById('signupModal').classList.add('active');
            }

            // Show Login from Signup
            if (target.closest('#showLogin')) {
                e.preventDefault();
                document.getElementById('signupModal').classList.remove('active');
                document.getElementById('loginModal').classList.add('active');
            }
        });

        // Use Delegation for Language Select Change
        document.body.addEventListener('change', (e) => {
            if (e.target.id === 'languageSelect') {
                const newLang = e.target.value;
                localStorage.setItem(STORAGE_KEYS.LANG_PREF, newLang);
                showApp();
            }
        });

        document.getElementById('loginForm').addEventListener('submit', handleLogin);
        document.getElementById('signupForm').addEventListener('submit', handleSignup);
        document.getElementById('signupPhoto').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                const base64 = await fileToBase64(file);
                document.getElementById('photoPreview').innerHTML = `<img src="${base64}" alt="Preview">`;
            }
        });

        document.getElementById('editProfileBtn').addEventListener('click', () => {
            const user = getSession();
            if (user) {
                if (document.getElementById('editName')) document.getElementById('editName').value = user.name;
                if (document.getElementById('editCountry')) document.getElementById('editCountry').value = user.country;
                if (document.getElementById('editStream')) document.getElementById('editStream').value = user.stream;
                if (document.getElementById('editBio')) document.getElementById('editBio').value = user.bio || '';
                if (document.getElementById('editPhotoPreview')) document.getElementById('editPhotoPreview').innerHTML = `<img src="${user.photo}" alt="Current Photo">`;

                document.getElementById('editProfileModal').classList.add('active');
                document.getElementById('hamburgerMenu').classList.remove('active');
            }
        });

        document.getElementById('changePasswordBtn').addEventListener('click', () => {
            document.getElementById('changePasswordModal').classList.add('active');
            document.getElementById('hamburgerMenu').classList.remove('active');
        });

        document.getElementById('themeToggle').addEventListener('change', toggleTheme);
        document.getElementById('logoutBtn').addEventListener('click', handleLogout);

        document.getElementById('editProfileForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const user = getSession(); if (!user) return;
            const users = getUsers(); const userIndex = users.findIndex(u => u.name === user.name);
            const country = document.getElementById('editCountry').value;
            const stream = document.getElementById('editStream').value.trim();
            const bio = document.getElementById('editBio').value.trim();
            const photoFile = document.getElementById('editPhoto').files[0];
            if (userIndex > -1) {
                users[userIndex].country = country;
                users[userIndex].stream = stream;
                users[userIndex].bio = bio;
                if (photoFile) {
                    const photoBase64 = await fileToBase64(photoFile);
                    users[userIndex].photo = photoBase64;
                }
                saveUsers(users);
                saveSession(users[userIndex]);
                document.getElementById('editProfileModal').classList.remove('active');
                location.reload();
            }
        });

        document.getElementById('changePasswordForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (newPassword !== confirmPassword) { alert('New passwords do not match'); return; }
            const user = getSession();
            const users = getUsers();
            const userIndex = users.findIndex(u => u.name === user.name);
            if (users[userIndex].password !== hashPassword(currentPassword)) { alert('Current password is incorrect'); return; }
            users[userIndex].password = hashPassword(newPassword);
            saveUsers(users);
            saveSession(users[userIndex]);
            alert('Password changed successfully');
            document.getElementById('changePasswordModal').classList.remove('active');
        });

    } catch (err) { console.error("Init", err); }
});

window.expandDay = expandDay;
window.toggleEdit = toggleEdit;
window.toggleProblemEdit = toggleProblemEdit;
