const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
====================================================
PASHTO TYPING LEARNING API
====================================================

Levels:

1  - Keyboard Introduction
2  - Basic Letters
3  - Keyboard Rows
4  - Letter Combinations
5  - Simple Words
6  - Special Pashto Letters
7  - Numbers & Symbols
8  - Common Phrases
9  - Sentences
10 - Paragraphs
11 - Speed Practice
12 - Random Practice
====================================================
*/


// ==================================================
// 1. PASHTO KEYBOARD
// ==================================================

const pashtoKeyboard = {

  // Number row
  numbers: [
    { key: "1", letter: "۱" },
    { key: "2", letter: "۲" },
    { key: "3", letter: "۳" },
    { key: "4", letter: "۴" },
    { key: "5", letter: "۵" },
    { key: "6", letter: "۶" },
    { key: "7", letter: "۷" },
    { key: "8", letter: "۸" },
    { key: "9", letter: "۹" },
    { key: "0", letter: "۰" }
  ],

  // Top row
  topRow: [
    { key: "Q", letter: "ض" },
    { key: "W", letter: "ص" },
    { key: "E", letter: "ث" },
    { key: "R", letter: "ق" },
    { key: "T", letter: "ف" },
    { key: "Y", letter: "غ" },
    { key: "U", letter: "ع" },
    { key: "I", letter: "ه" },
    { key: "O", letter: "خ" },
    { key: "P", letter: "ح" },
    { key: "[", letter: "ج" },
    { key: "]", letter: "چ" }
  ],

  // Home row
  homeRow: [
    { key: "A", letter: "ش" },
    { key: "S", letter: "س" },
    { key: "D", letter: "ی" },
    { key: "F", letter: "ب" },
    { key: "G", letter: "ل" },
    { key: "H", letter: "ا" },
    { key: "J", letter: "ت" },
    { key: "K", letter: "ن" },
    { key: "L", letter: "م" },
    { key: ";", letter: "ک" },
    { key: "'", letter: "ګ" }
  ],

  // Bottom row
  bottomRow: [
    { key: "Z", letter: "ظ" },
    { key: "X", letter: "ط" },
    { key: "C", letter: "ز" },
    { key: "V", letter: "ر" },
    { key: "B", letter: "ذ" },
    { key: "N", letter: "د" },
    { key: "M", letter: "پ" },
    { key: ",", letter: "و" },
    { key: ".", letter: "ړ" },
    { key: "/", letter: "ې" }
  ],

  specialLetters: [
    "ټ",
    "ډ",
    "ړ",
    "ڼ",
    "ږ",
    "ښ",
    "ګ",
    "ځ",
    "څ",
    "ې",
    "ۍ",
    "ئ"
  ]
};


// ==================================================
// 2. ALL PASHTO LETTERS
// ==================================================

const pashtoLetters = [
  "ا",
  "ب",
  "پ",
  "ت",
  "ټ",
  "ث",
  "ج",
  "ځ",
  "چ",
  "څ",
  "ح",
  "خ",
  "د",
  "ډ",
  "ذ",
  "ر",
  "ړ",
  "ز",
  "ژ",
  "ږ",
  "س",
  "ش",
  "ښ",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "ګ",
  "ل",
  "م",
  "ن",
  "ڼ",
  "و",
  "ه",
  "ی",
  "ې",
  "ۍ",
  "ئ"
];


// ==================================================
// 3. LESSONS
// ==================================================

const lessons = [

  // ==================================================
  // LEVEL 1 - KEYBOARD INTRODUCTION
  // ==================================================

  {
    id: 1,
    level: 1,
    levelName: "پېژندنه",
    type: "keyboard",
    title: "د پښتو کیبورډ پېژندنه",
    text: "پښتو کیبورډ",
    description: "د پښتو کیبورډ تڼۍ وپېژنئ.",
    difficulty: "easy"
  },

  {
    id: 2,
    level: 1,
    levelName: "پېژندنه",
    type: "keyboard",
    title: "الف او د هغه تڼۍ",
    text: "ا ا ا ا ا ا ا ا",
    key: "H",
    letter: "ا",
    description: "د الف توري تمرین.",
    difficulty: "easy"
  },

  {
    id: 3,
    level: 1,
    levelName: "پېژندنه",
    type: "keyboard",
    title: "ت او د هغه تڼۍ",
    text: "ت ت ت ت ت ت ت ت",
    key: "J",
    letter: "ت",
    description: "د ت توري تمرین.",
    difficulty: "easy"
  },

  {
    id: 4,
    level: 1,
    levelName: "پېژندنه",
    type: "keyboard",
    title: "ن او د هغه تڼۍ",
    text: "ن ن ن ن ن ن ن ن",
    key: "K",
    letter: "ن",
    description: "د ن توري تمرین.",
    difficulty: "easy"
  },


  // ==================================================
  // LEVEL 2 - BASIC LETTERS
  // ==================================================

  {
    id: 5,
    level: 2,
    levelName: "اساسي توري",
    type: "letters",
    title: "ا او ت",
    text: "ا ت ا ت ا ت ا ت ا ت",
    letters: ["ا", "ت"],
    description: "د ا او ت تورو تمرین.",
    difficulty: "easy"
  },

  {
    id: 6,
    level: 2,
    levelName: "اساسي توري",
    type: "letters",
    title: "ا او ن",
    text: "ا ن ا ن ا ن ا ن ا ن",
    letters: ["ا", "ن"],
    description: "د ا او ن تورو تمرین.",
    difficulty: "easy"
  },

  {
    id: 7,
    level: 2,
    levelName: "اساسي توري",
    type: "letters",
    title: "م او ک",
    text: "م ک م ک م ک م ک م ک",
    letters: ["م", "ک"],
    description: "د م او ک تورو تمرین.",
    difficulty: "easy"
  },

  {
    id: 8,
    level: 2,
    levelName: "اساسي توري",
    type: "letters",
    title: "ی او ه",
    text: "ی ه ی ه ی ه ی ه ی ه",
    letters: ["ی", "ه"],
    description: "د ی او ه تورو تمرین.",
    difficulty: "easy"
  },

  {
    id: 9,
    level: 2,
    levelName: "اساسي توري",
    type: "letters",
    title: "و او ر",
    text: "و ر و ر و ر و ر و ر",
    letters: ["و", "ر"],
    description: "د و او ر تورو تمرین.",
    difficulty: "easy"
  },

  {
    id: 10,
    level: 2,
    levelName: "اساسي توري",
    type: "letters",
    title: "د او ل",
    text: "د ل د ل د ل د ل د ل",
    letters: ["د", "ل"],
    description: "د د او ل تورو تمرین.",
    difficulty: "easy"
  },


  // ==================================================
  // LEVEL 3 - KEYBOARD ROWS
  // ==================================================

  {
    id: 11,
    level: 3,
    levelName: "کیبورډ قطارونه",
    type: "row",
    title: "Home Row",
    text: "ا ت ن م ک ی ه و ر د ل",
    row: "home",
    description: "د Home Row تمرین.",
    difficulty: "easy"
  },

  {
    id: 12,
    level: 3,
    levelName: "کیبورډ قطارونه",
    type: "row",
    title: "Top Row",
    text: "ب س ش پ ج چ ح خ ع غ ف ق",
    row: "top",
    description: "د Top Row تمرین.",
    difficulty: "medium"
  },

  {
    id: 13,
    level: 3,
    levelName: "کیبورډ قطارونه",
    type: "row",
    title: "Bottom Row",
    text: "ز ژ ځ څ ډ ړ ټ ڼ ږ ښ ګ ې ۍ ئ",
    row: "bottom",
    description: "د ځانګړو تورو تمرین.",
    difficulty: "medium"
  },

  {
    id: 14,
    level: 3,
    levelName: "کیبورډ قطارونه",
    type: "row",
    title: "ټول توري",
    text: pashtoLetters.join(" "),
    row: "all",
    description: "د پښتو ټول توري تمرین.",
    difficulty: "medium"
  },


  // ==================================================
  // LEVEL 4 - LETTER COMBINATIONS
  // ==================================================

  {
    id: 15,
    level: 4,
    levelName: "د تورو ترکیب",
    type: "combination",
    title: "دوه توري",
    text: "اب اب با با ات ات تا تا",
    description: "د دوو تورو ترکیبونه تمرین کړئ.",
    difficulty: "easy"
  },

  {
    id: 16,
    level: 4,
    levelName: "د تورو ترکیب",
    type: "combination",
    title: "درې توري",
    text: "انا باب تاب نان مات",
    description: "د درې تورو ترکیبونه تمرین کړئ.",
    difficulty: "easy"
  },

  {
    id: 17,
    level: 4,
    levelName: "د تورو ترکیب",
    type: "combination",
    title: "څلور توري",
    text: "کتاب کورم مورم پلار",
    description: "د څلورو تورو ترکیبونه تمرین کړئ.",
    difficulty: "medium"
  },


  // ==================================================
  // LEVEL 5 - SIMPLE WORDS
  // ==================================================

  {
    id: 18,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "اوبه",
    text: "اوبه اوبه اوبه اوبه",
    word: "اوبه",
    translation: "Water",
    description: "د اوبه کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 19,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "کور",
    text: "کور کور کور کور",
    word: "کور",
    translation: "House",
    description: "د کور کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 20,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "مور",
    text: "مور مور مور مور",
    word: "مور",
    translation: "Mother",
    description: "د مور کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 21,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "پلار",
    text: "پلار پلار پلار پلار",
    word: "پلار",
    translation: "Father",
    description: "د پلار کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 22,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "کتاب",
    text: "کتاب کتاب کتاب کتاب",
    word: "کتاب",
    translation: "Book",
    description: "د کتاب کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 23,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "قلم",
    text: "قلم قلم قلم قلم",
    word: "قلم",
    translation: "Pen",
    description: "د قلم کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 24,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "ملګری",
    text: "ملګری ملګری ملګری",
    word: "ملګری",
    translation: "Friend",
    description: "د ملګري کلمې تمرین.",
    difficulty: "medium"
  },

  {
    id: 25,
    level: 5,
    levelName: "ساده کلمې",
    type: "word",
    title: "ښوونځی",
    text: "ښوونځی ښوونځی ښوونځی",
    word: "ښوونځی",
    translation: "School",
    description: "د ښوونځي کلمې تمرین.",
    difficulty: "medium"
  },


  // ==================================================
  // LEVEL 6 - SPECIAL PASHTO LETTERS
  // ==================================================

  {
    id: 26,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ټ",
    text: "ټ ټ ټ ټ ټ ټ ټ ټ",
    letter: "ټ",
    description: "د ټ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 27,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ډ",
    text: "ډ ډ ډ ډ ډ ډ ډ ډ",
    letter: "ډ",
    description: "د ډ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 28,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ړ",
    text: "ړ ړ ړ ړ ړ ړ ړ ړ",
    letter: "ړ",
    description: "د ړ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 29,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ڼ",
    text: "ڼ ڼ ڼ ڼ ڼ ڼ ڼ ڼ",
    letter: "ڼ",
    description: "د ڼ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 30,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ږ",
    text: "ږ ږ ږ ږ ږ ږ ږ ږ",
    letter: "ږ",
    description: "د ږ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 31,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ښ",
    text: "ښ ښ ښ ښ ښ ښ ښ ښ",
    letter: "ښ",
    description: "د ښ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 32,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ګ",
    text: "ګ ګ ګ ګ ګ ګ ګ ګ",
    letter: "ګ",
    description: "د ګ توري تمرین.",
    difficulty: "medium"
  },

  {
    id: 33,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ځ او څ",
    text: "ځ څ ځ څ ځ څ ځ څ",
    letter: "ځ څ",
    description: "د ځ او څ تورو تمرین.",
    difficulty: "medium"
  },

  {
    id: 34,
    level: 6,
    levelName: "ځانګړي پښتو توري",
    type: "special-letter",
    title: "ې، ۍ او ئ",
    text: "ې ۍ ئ ې ۍ ئ ې ۍ ئ",
    letter: "ې ۍ ئ",
    description: "د پای ځانګړو تورو تمرین.",
    difficulty: "hard"
  },


  // ==================================================
  // LEVEL 7 - NUMBERS AND SYMBOLS
  // ==================================================

  {
    id: 35,
    level: 7,
    levelName: "شمېرې",
    type: "numbers",
    title: "پښتو شمېرې",
    text: "۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰",
    description: "د پښتو شمیرو تمرین.",
    difficulty: "easy"
  },

  {
    id: 36,
    level: 7,
    levelName: "نښې",
    type: "symbols",
    title: "د لیک نښې",
    text: "، . ؟ ! : ؛",
    description: "د لیک نښو تمرین.",
    difficulty: "medium"
  },


  // ==================================================
  // LEVEL 8 - COMMON PHRASES
  // ==================================================

  {
    id: 37,
    level: 8,
    levelName: "عام عبارتونه",
    type: "phrase",
    title: "سلام",
    text: "سلام سلام سلام سلام",
    description: "د سلام کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 38,
    level: 8,
    levelName: "عام عبارتونه",
    type: "phrase",
    title: "مننه",
    text: "مننه مننه مننه مننه",
    description: "د مننې کلمې تمرین.",
    difficulty: "easy"
  },

  {
    id: 39,
    level: 8,
    levelName: "عام عبارتونه",
    type: "phrase",
    title: "ښه راغلاست",
    text: "ښه راغلاست ښه راغلاست",
    description: "د ښه راغلاست عبارت تمرین.",
    difficulty: "medium"
  },

  {
    id: 40,
    level: 8,
    levelName: "عام عبارتونه",
    type: "phrase",
    title: "زه ښه یم",
    text: "زه ښه یم زه ښه یم",
    description: "د عبارت تمرین.",
    difficulty: "medium"
  },

  {
    id: 41,
    level: 8,
    levelName: "عام عبارتونه",
    type: "phrase",
    title: "ته څنګه یې؟",
    text: "ته څنګه یې؟ ته څنګه یې؟",
    description: "د پوښتنې عبارت تمرین.",
    difficulty: "medium"
  },

  {
    id: 42,
    level: 8,
    levelName: "عام عبارتونه",
    type: "phrase",
    title: "زه پښتو زده کوم",
    text: "زه پښتو زده کوم زه پښتو زده کوم",
    description: "د پښتو زده کړې عبارت تمرین.",
    difficulty: "medium"
  },


  // ==================================================
  // LEVEL 9 - SENTENCES
  // ==================================================

  {
    id: 43,
    level: 9,
    levelName: "جملې",
    type: "sentence",
    title: "لومړۍ جمله",
    text: "زه کتاب لولم.",
    description: "د ساده جملې ټایپ تمرین.",
    difficulty: "medium"
  },

  {
    id: 44,
    level: 9,
    levelName: "جملې",
    type: "sentence",
    title: "دوهمه جمله",
    text: "هغه ښوونځي ته ځي.",
    description: "د جملې ټایپ تمرین.",
    difficulty: "medium"
  },

  {
    id: 45,
    level: 9,
    levelName: "جملې",
    type: "sentence",
    title: "درېیمه جمله",
    text: "موږ کور ته ځو.",
    description: "د جملې ټایپ تمرین.",
    difficulty: "medium"
  },

  {
    id: 46,
    level: 9,
    levelName: "جملې",
    type: "sentence",
    title: "څلورمه جمله",
    text: "زه غواړم پښتو زده کړم.",
    description: "د جملې ټایپ تمرین.",
    difficulty: "hard"
  },

  {
    id: 47,
    level: 9,
    levelName: "جملې",
    type: "sentence",
    title: "پنځمه جمله",
    text: "ته باید ډیر تمرین وکړې.",
    description: "د ټایپ تمرین اهمیت.",
    difficulty: "hard"
  },

  {
    id: 48,
    level: 9,
    levelName: "جملې",
    type: "sentence",
    title: "شپږمه جمله",
    text: "پښتو زموږ ملي ژبه ده.",
    description: "د پښتو په اړه جمله.",
    difficulty: "hard"
  },


  // ==================================================
  // LEVEL 10 - PARAGRAPHS
  // ==================================================

  {
    id: 49,
    level: 10,
    levelName: "Paragraph",
    type: "paragraph",
    title: "زده کړه",
    text:
      "تعلیم د انسان لپاره ډیر مهم دی. یو تعلیم یافته انسان کولای شي چې خپل هیواد ته خدمت وکړي.",
    description: "د تعلیم په اړه اوږد متن.",
    difficulty: "hard"
  },

  {
    id: 50,
    level: 10,
    levelName: "Paragraph",
    type: "paragraph",
    title: "پښتو ژبه",
    text:
      "پښتو ژبه د نړۍ یوه له لرغونو ژبو څخه ده. میلیونونه خلک په دې ژبه خبرې کوي.",
    description: "د پښتو ژبې په اړه متن.",
    difficulty: "hard"
  },

  {
    id: 51,
    level: 10,
    levelName: "Paragraph",
    type: "paragraph",
    title: "افغانستان",
    text:
      "افغانستان یو ښکلی هیواد دی. په افغانستان کې ډېر تاریخي او طبیعي ځایونه شته.",
    description: "د افغانستان په اړه متن.",
    difficulty: "hard"
  },

  {
    id: 52,
    level: 10,
    levelName: "Paragraph",
    type: "paragraph",
    title: "کار او زیار",
    text:
      "کار او زیار د بریالیتوب کیلي ده. هر څوک چې زیار وکړي، بریالی به شي.",
    description: "د هڅې او بریالیتوب په اړه متن.",
    difficulty: "hard"
  }
];


// ==================================================
// HOME
// ==================================================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "د پښتو ټایپنګ زده کړې API فعاله ده.",
    totalLessons: lessons.length,

    endpoints: {
      keyboard: "/api/keyboard",
      letters: "/api/letters",
      lessons: "/api/lessons",
      lesson: "/api/lessons/:id",
      level: "/api/lessons/level/:level",
      type: "/api/lessons/type/:type",
      random: "/api/lessons/random",
      stats: "/api/stats"
    }
  });

});


// ==================================================
// GET KEYBOARD
// ==================================================

app.get("/api/keyboard", (req, res) => {

  res.json({
    success: true,
    keyboard: pashtoKeyboard
  });

});


// ==================================================
// GET ALL LETTERS
// ==================================================

app.get("/api/letters", (req, res) => {

  const letters = pashtoLetters.map((letter, index) => {

    let key = null;

    Object.values(pashtoKeyboard).forEach(row => {

      if (!Array.isArray(row)) return;

      const found = row.find(item => item.letter === letter);

      if (found) {
        key = found.key;
      }

    });

    return {
      id: index + 1,
      letter,
      key
    };

  });

  res.json({
    success: true,
    total: letters.length,
    letters
  });

});


// ==================================================
// GET ALL LESSONS
// ==================================================

app.get("/api/lessons", (req, res) => {

  res.json({
    success: true,
    total: lessons.length,
    lessons
  });

});


// ==================================================
// GET SINGLE LESSON
// ==================================================

app.get("/api/lessons/:id", (req, res) => {

  const id = Number(req.params.id);

  const lesson = lessons.find(item => item.id === id);

  if (!lesson) {

    return res.status(404).json({
      success: false,
      message: "درس پیدا نه شو."
    });

  }

  res.json({
    success: true,
    lesson
  });

});


// ==================================================
// GET LESSONS BY LEVEL
// ==================================================

app.get("/api/lessons/level/:level", (req, res) => {

  const level = Number(req.params.level);

  const result = lessons.filter(
    lesson => lesson.level === level
  );

  if (result.length === 0) {

    return res.status(404).json({
      success: false,
      message: "په دې Level کې درسونه پیدا نه شول."
    });

  }

  res.json({
    success: true,
    level,
    total: result.length,
    lessons: result
  });

});


// ==================================================
// GET LESSONS BY TYPE
// ==================================================

app.get("/api/lessons/type/:type", (req, res) => {

  const type = req.params.type.toLowerCase();

  const result = lessons.filter(
    lesson => lesson.type.toLowerCase() === type
  );

  if (result.length === 0) {

    return res.status(404).json({
      success: false,
      message: "د دې ډول درسونه پیدا نه شول."
    });

  }

  res.json({
    success: true,
    type,
    total: result.length,
    lessons: result
  });

});


// ==================================================
// RANDOM LESSON
// ==================================================

app.get("/api/lessons/random", (req, res) => {

  const randomIndex =
    Math.floor(Math.random() * lessons.length);

  const lesson = lessons[randomIndex];

  res.json({
    success: true,
    lesson
  });

});


// ==================================================
// RANDOM LETTER
// ==================================================

app.get("/api/letters/random", (req, res) => {

  const randomIndex =
    Math.floor(Math.random() * pashtoLetters.length);

  const letter = pashtoLetters[randomIndex];

  res.json({
    success: true,
    letter
  });

});


// ==================================================
// STATISTICS
// ==================================================

app.get("/api/stats", (req, res) => {

  const stats = {};

  lessons.forEach(lesson => {

    const level = lesson.level;

    if (!stats[level]) {
      stats[level] = 0;
    }

    stats[level]++;

  });

  res.json({
    success: true,
    totalLessons: lessons.length,
    levels: stats
  });

});


// ==================================================
// SEARCH LESSONS
// ==================================================

app.get("/api/search", (req, res) => {

  const query = req.query.q;

  if (!query) {

    return res.status(400).json({
      success: false,
      message: "q parameter ضروري دی."
    });

  }

  const result = lessons.filter(lesson => {

    const text =
      `${lesson.title} ${lesson.text} ${lesson.description}`
        .toLowerCase();

    return text.includes(query.toLowerCase());

  });

  res.json({
    success: true,
    query,
    total: result.length,
    lessons: result
  });

});


// ==================================================
// START SERVER
// ==================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log("");
  console.log("======================================");
  console.log("Pashto Typing API");
  console.log("======================================");
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Lessons: ${lessons.length}`);
  console.log("");
  console.log("Endpoints:");
  console.log(`/api/keyboard`);
  console.log(`/api/letters`);
  console.log(`/api/letters/random`);
  console.log(`/api/lessons`);
  console.log(`/api/lessons/:id`);
  console.log(`/api/lessons/level/:level`);
  console.log(`/api/lessons/type/:type`);
  console.log(`/api/lessons/random`);
  console.log(`/api/search?q=کتاب`);
  console.log(`/api/stats`);
  console.log("======================================");
  console.log("");

});