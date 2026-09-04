// server.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ======================================================
// PASHTO KEYBOARD
// ======================================================

const pashtoKeyboard = {
  numbers: {
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
    "0": "۰",
  },

  topRow: {
    Q: "ض",
    W: "ص",
    E: "ث",
    R: "ق",
    T: "ف",
    Y: "غ",
    U: "ع",
    I: "ه",
    O: "خ",
    P: "ح",
    "[": "ج",
    "]": "چ",
  },

  homeRow: {
    A: "ش",
    S: "س",
    D: "ی",
    F: "ب",
    G: "ل",
    H: "ا",
    J: "ت",
    K: "ن",
    L: "م",
    ";": "ک",
    "'": "ګ",
  },

  bottomRow: {
    Z: "ظ",
    X: "ط",
    C: "ز",
    V: "ر",
    B: "ذ",
    N: "د",
    M: "پ",
    ",": "و",
    ".": "ړ",
    "/": "ې",
  },

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
    "ژ",
    "ې",
    "ۍ",
    "ئ",
  ],
};

// ======================================================
// PASHTO LETTERS - 46
// ======================================================
//
// 43 standard Pashto letters
// + ي
// + آ
// + ء
//
// Total = 46
// ======================================================

const pashtoLetters = [
  "ا",
  "ب",
  "پ",
  "ت",
  "ټ",
  "ث",
  "ج",
  "چ",
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
  "ئ",
  "ځ",
  "څ",
  "ي",
  "آ",
  "ء",
];

// ======================================================
// VERIFY LETTER COUNT
// ======================================================

console.log("Pashto letters:", pashtoLetters.length);

// ======================================================
// EASY PASHTO WORDS
// ======================================================

const easyWords = [
  "مور",
  "پلار",
  "ورور",
  "خور",
  "کور",
  "کتاب",
  "قلم",
  "اوبه",
  "ډوډۍ",
  "هلک",
  "نجلۍ",
  "ماشوم",
  "ښوونځی",
  "ښوونکی",
  "زده",
  "علم",
  "کار",
  "لار",
  "ستر",
  "کوچنی",
  "ښه",
  "بد",
  "ورځ",
  "شپه",
  "لمر",
  "سپوږمۍ",
  "ګل",
  "ونې",
  "ځمکه",
  "اسمان",
  "باران",
  "باد",
  "ملګری",
  "دوست",
  "ښار",
  "کلی",
  "بازار",
  "موټر",
  "ژوند",
  "مینه",
  "خوشحالي",
  "هیله",
  "بریا",
  "افغان",
  "افغانستان",
  "پښتو",
  "ژبه",
  "مورنی",
  "راتلونکی",
  "کمپیوټر",
  "کیبورډ",
  "ټایپ",
  "تمرین",
  "زده کړه",
];

// ======================================================
// COMMON PASHTO PHRASES
// ======================================================

const phrases = [
  "سلام",
  "سلامونه",
  "څنګه یې",
  "زه ښه یم",
  "ته څنګه یې",
  "ډېر ښه",
  "مننه",
  "ډېره مننه",
  "مهرباني وکړه",
  "خدای پامان",
  "سهار مو پخیر",
  "ماښام مو پخیر",
  "ښه ورځ ولرئ",
  "ښه شپه",
  "ستړی مه شې",
  "تاسو څنګه یاست",
  "زه زده کړه کوم",
  "زه پښتو زده کوم",
  "زه ټایپ کوم",
  "زه کتاب لولم",
  "زه ښوونځي ته ځم",
  "زه کار کوم",
  "زه خپل کور ته ځم",
  "نن ښه ورځ ده",
  "نن باران دی",
  "هوا ډېره ښه ده",
  "دا زما کتاب دی",
  "دا زما قلم دی",
  "زه خوشحاله یم",
  "زه بریالی کېږم",
  "زه هره ورځ تمرین کوم",
  "تمرین ډېر مهم دی",
  "ټایپ کول زده کړه ده",
  "پښتو یوه ښکلې ژبه ده",
  "زه په پښتو لیکم",
  "زه په پښتو خبرې کوم",
  "علم ځواک دی",
  "زده کړه مهمه ده",
];

// ======================================================
// PASHTO SENTENCES
// ======================================================

const sentences = [
  "زه هره ورځ پښتو ټایپ کوم.",
  "زه غواړم خپل ټایپ چټک کړم.",
  "تمرین د بریا لپاره ډېر مهم دی.",
  "زه هره ورځ خپل ټایپ تمرین کوم.",
  "پښتو زما خوږه ژبه ده.",
  "زه د پښتو ژبې لیکل زده کوم.",
  "زده کړه انسان بریالی کوي.",
  "هره ورځ لږ تمرین ډېر پرمختګ راولي.",
  "زه په خپل کمپیوټر کې پښتو لیکم.",
  "زه غواړم په چټکۍ سره ټایپ وکړم.",
  "دقیق ټایپ له چټک ټایپ څخه مهم دی.",
  "لومړی باید د کیبورډ توري زده کړو.",
  "وروسته باید د تورو ترکیبونه تمرین کړو.",
  "بیا باید ساده کلمې ولیکو.",
  "له ساده کلمو وروسته جملې تمرین کوو.",
  "هره ورځ تمرین کول زموږ مهارت زیاتوي.",
  "که ډېر تمرین وکړو نو ښه ټایپ کولی شو.",
  "زه به هره ورځ خپل سرعت زیاتوم.",
  "زه به خپلې تېروتنې کموم.",
  "زه به په سمه توګه پښتو ټایپ کوم.",
  "کمپیوټر زموږ د زده کړې لپاره مهمه وسیله ده.",
  "کیبورډ باید په سمه توګه وکارول شي.",
  "د ګوتو مناسب ځای د ټایپ سرعت زیاتوي.",
  "زده کوونکی باید صبر ولري.",
  "بریا د دوامدار تمرین پایله ده.",
  "زه باید هره ورځ خپل هدف ته نږدې شم.",
  "زه د تمرین له لارې خپل مهارت ښه کوم.",
  "زه باید د ټایپ پر مهال دقت ته پام وکړم.",
  "زه کولی شم په پښتو ژبه چټک ټایپ وکړم.",
  "ښه ټایپ کول ډېر تمرین ته اړتیا لري.",
];

// ======================================================
// LONG SENTENCES
// ======================================================

const longSentences = [
  "زه هره ورځ د پښتو ټایپ تمرین کوم، ځکه غواړم خپل سرعت او دقت دواړه زیات کړم.",

  "که یو زده کوونکی هره ورځ منظم تمرین وکړي، نو کولی شي په لنډ وخت کې ښه ټایپ زده کړي.",

  "د پښتو کیبورډ د تورو پېژندل د چټک او دقیق ټایپ کولو لپاره لومړی مهم ګام دی.",

  "کله چې موږ د کیبورډ توري په سمه توګه زده کړو، نو وروسته د کلمو او جملو لیکل ډېر اسانه کېږي.",

  "د ټایپ کولو پر مهال باید لومړی دقت ته پام وکړو او وروسته خپل سرعت ورو ورو زیات کړو.",

  "هره ورځ لس یا شل دقیقې تمرین کول کولی شي زموږ د ټایپ کولو مهارت ډېر ښه کړي.",

  "زه هڅه کوم چې د کیبورډ کلي وګورم نه، بلکې د ګوتو په مرسته په سمه توګه ټایپ وکړم.",

  "د ټایپ په تمرین کې تېروتنې عادي دي، خو موږ باید خپلې تېروتنې وپېژنو او بیا یې تکرار نه کړو.",

  "پښتو ژبه ډېر ځانګړي توري لري، نو د دې تورو تمرین د پښتو ټایپ لپاره ډېر مهم دی.",

  "یو ښه ټایپ کوونکی باید د سرعت ترڅنګ د خپلو لیکلو دقت او سمون ته هم ډېر پام وکړي.",
];

// ======================================================
// PARAGRAPHS
// ======================================================

const paragraphs = [
  `پښتو یوه ښکلې او بډایه ژبه ده. د پښتو ټایپ زده کول د کمپیوټر په کارولو کې یو مهم مهارت دی. هر زده کوونکی کولی شي د منظم تمرین له لارې د پښتو کیبورډ توري زده کړي. لومړی باید د هر توري ځای وپېژنو، وروسته باید د تورو ترکیبونه او ساده کلمې تمرین کړو. کله چې زموږ دقت ښه شو، بیا کولی شو خپل سرعت هم زیات کړو.`,

  `ټایپ کول یوازې د چټک لیکلو نوم نه دی. د ښه ټایپ کولو لپاره باید دقت، سرعت او د ګوتو مناسب حرکت زده کړو. که موږ هره ورځ لږ وخت تمرین وکړو، زموږ لاسونه به د کیبورډ له تورو سره عادت شي. په لومړیو درسونو کې باید آرام تمرین وکړو او هڅه وکړو چې هر توری په سمه توګه ولیکو.`,

  `کمپیوټر د زده کړې، کار او اړیکو لپاره یوه مهمه وسیله ده. د پښتو ژبې کاروونکي کولی شي د پښتو کیبورډ په مرسته خپلې لیکنې، پیغامونه، مقالې او نور معلومات ولیکي. د پښتو ټایپ زده کول د زده کوونکو، ښوونکو او کمپیوټر کاروونکو لپاره ډېر ګټور مهارت دی.`,

  `بریا د دوامدار تمرین پایله ده. که یو څوک غواړي چې ښه ټایپ کوونکی شي، باید هره ورځ تمرین وکړي. په پیل کې ممکن ټایپ کول لږ ستونزمن وي، خو د وخت په تېرېدو سره د ګوتو حرکتونه اسانه کېږي. د منظم تمرین له لارې سرعت، دقت او اعتماد ټول زیاتېږي.`,

  `د پښتو ټایپ په زده کړه کې باید له آسانه تمرینونو څخه پیل وکړو. لومړی د الفبا توري، بیا دوه توري، درې توري، کلمې، عبارتونه او جملې تمرین کړو. وروسته کولی شو اوږده متنونه او پراګرافونه ولیکو. دا مرحله وار سیستم زده کوونکي ته اجازه ورکوي چې په آرامۍ سره خپل مهارت لوړ کړي.`,
];

// ======================================================
// PASHTO NUMBERS
// ======================================================

const pashtoNumbers = [
  "۱",
  "۲",
  "۳",
  "۴",
  "۵",
  "۶",
  "۷",
  "۸",
  "۹",
  "۰",
];

// ======================================================
// SYMBOLS
// ======================================================

const symbols = [
  ".",
  ",",
  "!",
  "?",
  ":",
  ";",
  "-",
  "_",
  "(",
  ")",
];

// ======================================================
// KEYBOARD ROWS
// ======================================================

const keyboardRows = [
  {
    name: "پورته قطار",
    letters: Object.values(pashtoKeyboard.topRow),
  },

  {
    name: "منځنی قطار",
    letters: Object.values(pashtoKeyboard.homeRow),
  },

  {
    name: "لاندې قطار",
    letters: Object.values(pashtoKeyboard.bottomRow),
  },
];

// ======================================================
// HELPER FUNCTIONS
// ======================================================

function repeatText(text, count) {
  return Array(count).fill(text).join(" ");
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createLesson(
  id,
  level,
  type,
  title,
  text,
  difficulty
) {
  return {
    id,
    level,
    type,
    title,
    text,

    characterCount: [...text].length,

    wordCount: text.trim()
      ? text.trim().split(/\s+/).length
      : 0,

    difficulty,

    targetAccuracy:
      difficulty === "easy"
        ? 90
        : difficulty === "medium"
        ? 93
        : 95,

    targetWpm:
      difficulty === "easy"
        ? 10
        : difficulty === "medium"
        ? 20
        : 30,
  };
}

// ======================================================
// LESSONS ARRAY
// ======================================================

const lessons = [];

let id = 1;

// ======================================================
// LEVEL 1
// 46 LESSONS
// SINGLE LETTERS
// ======================================================

for (let i = 0; i < 46; i++) {
  const letter = pashtoLetters[i];

  const text = repeatText(
    letter,
    30 + (i % 10)
  );

  lessons.push(
    createLesson(
      id++,
      1,
      "letter",
      `د ${letter} توري تمرین`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 2
// 50 LESSONS
// LETTER REPETITION
// ======================================================

for (let i = 0; i < 50; i++) {
  const letter =
    pashtoLetters[i % pashtoLetters.length];

  const second =
    pashtoLetters[
      (i + 1) % pashtoLetters.length
    ];

  const text = repeatText(
    `${letter} ${second}`,
    25 + (i % 10)
  );

  lessons.push(
    createLesson(
      id++,
      2,
      "letter-repetition",
      `د ${letter} او ${second} تورو تمرین`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 3
// 50 LESSONS
// TWO LETTER COMBINATIONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const a =
    pashtoLetters[i % pashtoLetters.length];

  const b =
    pashtoLetters[
      (i + 5) % pashtoLetters.length
    ];

  const combination = a + b;

  const text = repeatText(
    combination,
    20 + (i % 10)
  );

  lessons.push(
    createLesson(
      id++,
      3,
      "pair",
      `د ${combination} ترکیب تمرین`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 4
// 50 LESSONS
// THREE LETTER COMBINATIONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const a =
    pashtoLetters[i % pashtoLetters.length];

  const b =
    pashtoLetters[
      (i + 4) % pashtoLetters.length
    ];

  const c =
    pashtoLetters[
      (i + 9) % pashtoLetters.length
    ];

  const combination = a + b + c;

  const text = repeatText(
    combination,
    18 + (i % 8)
  );

  lessons.push(
    createLesson(
      id++,
      4,
      "triplet",
      `د ${combination} درې توري`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 5
// 50 LESSONS
// KEYBOARD ROWS
// ======================================================

for (let i = 0; i < 50; i++) {
  const row =
    keyboardRows[
      i % keyboardRows.length
    ];

  let rowText = "";

  for (let j = 0; j < row.letters.length; j++) {
    rowText +=
      row.letters[
        (i + j) % row.letters.length
      ] + " ";
  }

  const text = repeatText(
    rowText.trim(),
    5 + (i % 4)
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "keyboard-row",
      `${row.name} اوږد تمرین`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 6
// 50 LESSONS
// COMBINATIONS
// ======================================================

const combinations = [
  "با",
  "بو",
  "بي",
  "به",
  "پا",
  "پو",
  "پي",
  "ته",
  "تو",
  "تي",
  "ده",
  "دو",
  "دي",
  "را",
  "رو",
  "ري",
  "سا",
  "سو",
  "سي",
  "شا",
  "شو",
  "شي",
  "کا",
  "کو",
  "کي",
  "ما",
  "مو",
  "مي",
  "نا",
  "نو",
  "ني",
  "لا",
  "لو",
  "لي",
  "غا",
  "غو",
  "غي",
  "جا",
  "جو",
  "جي",
  "چا",
  "چو",
  "چي",
  "خا",
  "خو",
  "خي",
  "ګا",
  "ګو",
  "ګي",
];

for (let i = 0; i < 50; i++) {
  const combination =
    combinations[
      i % combinations.length
    ];

  const next =
    combinations[
      (i + 3) % combinations.length
    ];

  const text = repeatText(
    `${combination} ${next}`,
    15 + (i % 8)
  );

  lessons.push(
    createLesson(
      id++,
      6,
      "combination",
      "د تورو ترکیبونو تمرین",
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 7
// 60 LESSONS
// EASY WORDS
// ======================================================

for (let i = 0; i < 60; i++) {
  const words = [];

  for (let j = 0; j < 10; j++) {
    words.push(
      easyWords[
        (i + j) % easyWords.length
      ]
    );
  }

  const text = repeatText(
    words.join(" "),
    3 + (i % 3)
  );

  lessons.push(
    createLesson(
      id++,
      7,
      "word",
      `د کلمو اوږد تمرین ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 8
// 40 LESSONS
// SPECIAL PASHTO LETTERS
// ======================================================

for (let i = 0; i < 40; i++) {
  const letter =
    pashtoKeyboard.specialLetters[
      i %
        pashtoKeyboard.specialLetters.length
    ];

  const other =
    pashtoKeyboard.specialLetters[
      (i + 2) %
        pashtoKeyboard.specialLetters.length
    ];

  const words = [
    `${letter}${other}`,
    `${other}${letter}`,
    `${letter}ا`,
    `ا${letter}`,
    `${letter}م`,
    `م${letter}`,
  ];

  const text = repeatText(
    words.join(" "),
    8 + (i % 4)
  );

  lessons.push(
    createLesson(
      id++,
      8,
      "special-letter",
      `د ځانګړو پښتو تورو تمرین ${letter}`,
      text,
      "medium"
    )
  );
}

// ======================================================
// LEVEL 9
// 40 LESSONS
// NUMBERS + SYMBOLS
// ======================================================

for (let i = 0; i < 40; i++) {
  const number =
    pashtoNumbers[
      i % pashtoNumbers.length
    ];

  const nextNumber =
    pashtoNumbers[
      (i + 1) % pashtoNumbers.length
    ];

  const symbol =
    symbols[i % symbols.length];

  const text = repeatText(
    `${number} ${nextNumber} ${symbol}`,
    20 + (i % 10)
  );

  lessons.push(
    createLesson(
      id++,
      9,
      "numbers-symbols",
      "د شمېرو او نښو تمرین",
      text,
      "medium"
    )
  );
}

// ======================================================
// LEVEL 10
// 40 LESSONS
// PHRASES
// ======================================================

for (let i = 0; i < 40; i++) {
  const selected = [];

  for (let j = 0; j < 5; j++) {
    selected.push(
      phrases[
        (i + j) % phrases.length
      ]
    );
  }

  const text = repeatText(
    selected.join(" ، "),
    3 + (i % 3)
  );

  lessons.push(
    createLesson(
      id++,
      10,
      "phrase",
      `د عبارتونو تمرین ${i + 1}`,
      text,
      "medium"
    )
  );
}

// ======================================================
// LEVEL 11
// 40 LESSONS
// SHORT SENTENCES
// ======================================================

for (let i = 0; i < 40; i++) {
  const selected = [];

  for (let j = 0; j < 4; j++) {
    selected.push(
      sentences[
        (i + j) % sentences.length
      ]
    );
  }

  const text = selected.join(" ");

  lessons.push(
    createLesson(
      id++,
      11,
      "sentence",
      `د جملو تمرین ${i + 1}`,
      text,
      "medium"
    )
  );
}

// ======================================================
// LEVEL 12
// 30 LESSONS
// LONG SENTENCES
// ======================================================

for (let i = 0; i < 30; i++) {
  const selected = [];

  for (let j = 0; j < 5; j++) {
    selected.push(
      longSentences[
        (i + j) % longSentences.length
      ]
    );
  }

  const text = selected.join(" ");

  lessons.push(
    createLesson(
      id++,
      12,
      "long-sentence",
      `اوږده جملې ${i + 1}`,
      text,
      "medium"
    )
  );
}

// ======================================================
// LEVEL 13
// 30 LESSONS
// PARAGRAPHS
// ======================================================

for (let i = 0; i < 30; i++) {
  const selected = [];

  for (let j = 0; j < 3; j++) {
    selected.push(
      paragraphs[
        (i + j) % paragraphs.length
      ]
    );
  }

  const text = selected.join("\n\n");

  lessons.push(
    createLesson(
      id++,
      13,
      "paragraph",
      `د پراګراف تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 14
// 30 LESSONS
// SPEED PRACTICE
// ======================================================

for (let i = 0; i < 30; i++) {
  const selected = [];

  for (let j = 0; j < 15; j++) {
    selected.push(
      easyWords[
        (i + j) % easyWords.length
      ]
    );
  }

  const text = repeatText(
    selected.join(" "),
    4
  );

  lessons.push(
    createLesson(
      id++,
      14,
      "speed",
      `د سرعت تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 15
// 30 LESSONS
// FINAL MIXED PRACTICE
// ======================================================

for (let i = 0; i < 30; i++) {
  const wordPart = [];

  for (let j = 0; j < 12; j++) {
    wordPart.push(
      easyWords[
        (i + j) % easyWords.length
      ]
    );
  }

  const sentencePart =
    sentences[
      i % sentences.length
    ];

  const longPart =
    longSentences[
      i % longSentences.length
    ];

  const text =
    wordPart.join(" ") +
    " " +
    sentencePart +
    " " +
    longPart;

  lessons.push(
    createLesson(
      id++,
      15,
      "final-test",
      `وروستی ازموینه ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// VERIFY LESSONS
// ======================================================

console.log("====================================");
console.log(
  `Generated lessons: ${lessons.length}`
);
console.log(
  `Pashto letters: ${pashtoLetters.length}`
);
console.log("Levels: 15");
console.log("====================================");

// ======================================================
// HOME
// ======================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "Pashto Typing Learning API",
    version: "3.0.0",
    language: "Pashto",
    totalLessons: lessons.length,
    totalLetters: pashtoLetters.length,
    totalLevels: 15,
  });
});

// ======================================================
// KEYBOARD
// ======================================================

app.get("/api/keyboard", (req, res) => {
  res.json({
    success: true,
    keyboard: pashtoKeyboard,
  });
});

// ======================================================
// LETTERS
// ======================================================

app.get("/api/letters", (req, res) => {
  res.json({
    success: true,
    count: pashtoLetters.length,
    letters: pashtoLetters,
  });
});

// ======================================================
// RANDOM LETTER
// IMPORTANT: BEFORE /api/letters/:letter
// ======================================================

app.get("/api/letters/random", (req, res) => {
  const letter = randomItem(pashtoLetters);

  res.json({
    success: true,
    letter,
  });
});

// ======================================================
// SINGLE LETTER
// ======================================================

app.get("/api/letters/:letter", (req, res) => {
  const letter = req.params.letter;

  if (!pashtoLetters.includes(letter)) {
    return res.status(404).json({
      success: false,
      message: "توری پیدا نه شو.",
    });
  }

  res.json({
    success: true,
    letter,
  });
});

// ======================================================
// ALL LESSONS
// ======================================================

app.get("/api/lessons", (req, res) => {
  res.json({
    success: true,
    count: lessons.length,
    lessons,
  });
});

// ======================================================
// RANDOM LESSON
// ======================================================

app.get("/api/lessons/random", (req, res) => {
  const lesson = randomItem(lessons);

  res.json({
    success: true,
    lesson,
  });
});

// ======================================================
// RANDOM LESSON FROM LEVEL
// IMPORTANT: BEFORE /api/lessons/:id
// ======================================================

app.get(
  "/api/lessons/random/:level",
  (req, res) => {
    const level = Number(req.params.level);

    const levelLessons = lessons.filter(
      (lesson) =>
        lesson.level === level
    );

    if (levelLessons.length === 0) {
      return res.status(404).json({
        success: false,
        message: "دا Level پیدا نه شو.",
      });
    }

    const lesson = randomItem(levelLessons);

    res.json({
      success: true,
      level,
      lesson,
    });
  }
);

// ======================================================
// LESSONS BY LEVEL
// ======================================================

app.get(
  "/api/lessons/level/:level",
  (req, res) => {
    const level = Number(req.params.level);

    const result = lessons.filter(
      (lesson) =>
        lesson.level === level
    );

    res.json({
      success: true,
      level,
      count: result.length,
      lessons: result,
    });
  }
);

// ======================================================
// LESSONS BY TYPE
// ======================================================

app.get(
  "/api/lessons/type/:type",
  (req, res) => {
    const type = req.params.type;

    const result = lessons.filter(
      (lesson) =>
        lesson.type === type
    );

    res.json({
      success: true,
      type,
      count: result.length,
      lessons: result,
    });
  }
);

// ======================================================
// SINGLE LESSON
// ======================================================

app.get(
  "/api/lessons/:id",
  (req, res) => {
    const lessonId = Number(req.params.id);

    const lesson = lessons.find(
      (item) =>
        item.id === lessonId
    );

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "درس پیدا نه شو.",
      });
    }

    res.json({
      success: true,
      lesson,
    });
  }
);

// ======================================================
// LEVELS
// ======================================================

app.get("/api/levels", (req, res) => {
  const levels = [];

  for (let level = 1; level <= 15; level++) {
    const levelLessons =
      lessons.filter(
        (lesson) =>
          lesson.level === level
      );

    levels.push({
      level,

      count: levelLessons.length,

      totalCharacters:
        levelLessons.reduce(
          (sum, lesson) =>
            sum +
            lesson.characterCount,
          0
        ),

      totalWords:
        levelLessons.reduce(
          (sum, lesson) =>
            sum +
            lesson.wordCount,
          0
        ),
    });
  }

  res.json({
    success: true,
    levels,
  });
});

// ======================================================
// SEARCH
// ======================================================

app.get("/api/search", (req, res) => {
  const query = String(
    req.query.q || ""
  ).trim();

  if (!query) {
    return res.json({
      success: true,
      query: "",
      count: 0,
      lessons: [],
    });
  }

  const result = lessons.filter(
    (lesson) =>
      lesson.text.includes(query) ||
      lesson.title.includes(query)
  );

  res.json({
    success: true,
    query,
    count: result.length,
    lessons: result,
  });
});

// ======================================================
// STATISTICS
// ======================================================

app.get("/api/stats", (req, res) => {
  const levelStats = {};

  for (let level = 1; level <= 15; level++) {
    const levelLessons =
      lessons.filter(
        (lesson) =>
          lesson.level === level
      );

    levelStats[level] = {
      lessons: levelLessons.length,

      characters:
        levelLessons.reduce(
          (sum, lesson) =>
            sum +
            lesson.characterCount,
          0
        ),

      words:
        levelLessons.reduce(
          (sum, lesson) =>
            sum +
            lesson.wordCount,
          0
        ),
    };
  }

  res.json({
    success: true,

    totalLessons:
      lessons.length,

    totalLetters:
      pashtoLetters.length,

    totalLevels: 15,

    totalCharacters:
      lessons.reduce(
        (sum, lesson) =>
          sum +
          lesson.characterCount,
        0
      ),

    totalWords:
      lessons.reduce(
        (sum, lesson) =>
          sum +
          lesson.wordCount,
        0
      ),

    levelStats,
  });
});

// ======================================================
// LETTER COVERAGE
// ======================================================

app.get(
  "/api/coverage",
  (req, res) => {
    const coverage =
      pashtoLetters.map(
        (letter) => {
          const matchingLessons =
            lessons.filter(
              (lesson) =>
                lesson.text.includes(
                  letter
                )
            );

          return {
            letter,

            lessons:
              matchingLessons.length,
          };
        }
      );

    res.json({
      success: true,
      totalLetters:
        pashtoLetters.length,
      coverage,
    });
  }
);

// ======================================================
// EASY LESSONS
// ======================================================

app.get(
  "/api/lessons/difficulty/easy",
  (req, res) => {
    const result =
      lessons.filter(
        (lesson) =>
          lesson.difficulty === "easy"
      );

    res.json({
      success: true,
      count: result.length,
      lessons: result,
    });
  }
);

// ======================================================
// MEDIUM LESSONS
// ======================================================

app.get(
  "/api/lessons/difficulty/medium",
  (req, res) => {
    const result =
      lessons.filter(
        (lesson) =>
          lesson.difficulty === "medium"
      );

    res.json({
      success: true,
      count: result.length,
      lessons: result,
    });
  }
);

// ======================================================
// HARD LESSONS
// ======================================================

app.get(
  "/api/lessons/difficulty/hard",
  (req, res) => {
    const result =
      lessons.filter(
        (lesson) =>
          lesson.difficulty === "hard"
      );

    res.json({
      success: true,
      count: result.length,
      lessons: result,
    });
  }
);

// ======================================================
// 404
// ======================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route پیدا نه شو.",
    path: req.originalUrl,
  });
});

// ======================================================
// ERROR HANDLER
// ======================================================

app.use(
  (
    error,
    req,
    res,
    next
  ) => {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
);

// ======================================================
// START SERVER
// ======================================================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");

  console.log(
    "======================================"
  );

  console.log(
    "     PASHTO TYPING LEARNING API"
  );

  console.log(
    "======================================"
  );

  console.log(
    `Server: http://localhost:${PORT}`
  );

  console.log(
    `Lessons: ${lessons.length}`
  );

  console.log(
    `Letters: ${pashtoLetters.length}`
  );

  console.log(
    "Levels: 15"
  );

  console.log(
    "======================================"
  );

  console.log("");
});