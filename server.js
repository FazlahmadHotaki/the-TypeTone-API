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
    "\\": "ش",
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
    C: "ژ",
    V: "ز",
    B: "ر",
    N: "ډ",
    M: "د",
    ",": "و",
    ".": "ږ",
    "/": "ړ",
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
// PASHTO LETTERS
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
// EASY WORDS
// ======================================================

const easyWords = [
  "زه",
  "ته",
  "هغه",
  "موږ",
  "تاسو",
  "دوی",
  "کور",
  "کتاب",
  "قلم",
  "ښوونځی",
  "زده",
  "کار",
  "ورځ",
  "شپه",
  "لمر",
  "اوبه",
  "ډوډۍ",
  "مور",
  "پلار",
  "ورور",
  "خور",
  "ملګری",
  "ماشوم",
  "هلک",
  "نجلۍ",
  "سړی",
  "ښځه",
  "ښکلی",
  "ښه",
  "لوی",
  "کوچنی",
  "سپین",
  "تور",
  "شنه",
  "سور",
  "ژوند",
  "مینه",
  "خوشحالي",
  "علم",
  "پوهه",
  "بریا",
  "هېله",
  "راتلونکی",
  "نن",
  "سبا",
  "پرون",
];

// ======================================================
// PASHTO PHRASES
// ======================================================

const phrases = [
  "سلام",
  "سلامونه",
  "ښه راغلاست",
  "سهار مو پخیر",
  "ماښام مو پخیر",
  "ښه ورځ",
  "ښه کار",
  "ډېر ښه",
  "مننه",
  "ډېره مننه",
  "په خیر",
  "خدای پامان",
  "ښه زده کړه",
  "ښه تمرین",
  "ښه ټایپ",
];

// ======================================================
// PASHTO SENTENCES
// ======================================================

const sentences = [
  "زه پښتو زده کوم.",
  "زه هره ورځ تمرین کوم.",
  "زه کتاب لولم.",
  "زه په پښتو لیکل کوم.",
  "زه ټایپ زده کوم.",
  "زما کور ښکلی دی.",
  "زما ملګری ښه دی.",
  "علم ډېر مهم دی.",
  "زده کړه د ژوند لپاره مهمه ده.",
  "هره ورځ تمرین کول ښه دي.",
  "زه غواړم ښه ټایپ وکړم.",
  "پښتو زما ژبه ده.",
  "زه خپل کار په مینه کوم.",
  "زده کوونکی باید تمرین وکړي.",
  "بریا د هڅې پایله ده.",
];

// ======================================================
// LONG SENTENCES
// ======================================================

const longSentences = [
  "زه هره ورځ د پښتو ټایپ کولو تمرین کوم ترڅو خپل سرعت او دقت زیات کړم.",
  "که موږ هره ورځ لږ وخت تمرین وکړو، نو کولی شو په ډېرې اسانۍ ښه ټایپ زده کړو.",
  "زده کوونکی باید لومړی د کیبورډ توري ښه زده کړي او وروسته د کلمو او جملو تمرین وکړي.",
  "د چټک ټایپ لپاره یوازې سرعت مهم نه دی، بلکې د ټایپ دقت هم ډېر مهم دی.",
  "زه هڅه کوم چې د کیبورډ ټول توري په سمه توګه وکاروم او خپلې تېروتنې کمې کړم.",
  "پښتو ټایپ زده کول د کمپیوټر کارولو لپاره یوه مهمه او ګټوره وړتیا ده.",
  "هره ورځ دوامداره تمرین د دې سبب کېږي چې د لاسونو حرکتونه طبیعي او چټک شي.",
  "کله چې یو زده کوونکی ډېر تمرین وکړي، نو ورو ورو د کیبورډ توري له کتلو پرته هم ټایپ کولی شي.",
];

// ======================================================
// PARAGRAPHS
// ======================================================

const paragraphs = [
  `پښتو ټایپ زده کول د هر هغه چا لپاره مهم دي چې غواړي په کمپیوټر کې په پښتو ژبه لیکل وکړي.
لومړی باید د کیبورډ توري زده کړو، بیا باید د کلمو او جملو تمرین وکړو.
هره ورځ لږ تمرین کول د ښه سرعت او دقت سبب کېږي.`,

  `د ټایپ کولو پر مهال باید لاسونه په سمه توګه د کیبورډ پر تڼیو کېښودل شي.
منځنی قطار د ټایپ کولو په زده کړه کې ډېر مهم دی.
که زده کوونکی د منځني قطار توري ښه زده کړي، نو د نورو تورو زده کول هم ورته اسانه کېږي.`,

  `ښه ټایپ کوونکی باید د سرعت تر څنګ دقت ته هم پام وکړي.
که یو څوک ډېر چټک ټایپ وکړي خو ډېرې تېروتنې ولري، نو د هغه ټایپ ډېر ګټور نه وي.
له همدې امله باید لومړی دقت او وروسته سرعت زیات شي.`,
];

// ======================================================
// LONG TEXTS - LEVEL 16
// ======================================================

const longTexts = [
  `زه غواړم پښتو ټایپ په ښه ډول زده کړم.
هره ورځ باید د کیبورډ توري تمرین کړم او هڅه وکړم چې د هر توري ځای په یاد وساتم.
کله چې د تورو ځایونه راته معلوم شي، نو د کلمو لیکل به ډېر اسانه شي.
د ټایپ کولو په وخت کې باید د کیبورډ پر ځای خپل متن ته پام وکړم.
دا تمرین به زما سرعت او دقت دواړه زیات کړي.`,

  `د پښتو کیبورډ درې مهم قطارونه لري.
پورته قطار، منځنی قطار او لاندې قطار.
منځنی قطار د لاسونو د آرام ځای په توګه کار کوي.
زده کوونکی باید لومړی د منځني قطار توري ښه زده کړي.
وروسته کولی شي نور قطارونه هم تمرین کړي.`,

  `هره ورځ منظم تمرین د ټایپ کولو وړتیا ډېروي.
که یو زده کوونکی هره ورځ شل یا دېرش دقیقې تمرین وکړي،
نو وروسته کولی شي په لږ وخت کې ډېر متن ولیکي.
مهمه خبره دا ده چې تمرین باید دوامداره وي.`,
];

// ======================================================
// STORIES - LEVEL 17
// ======================================================

const stories = [
  `یو زده کوونکی هره ورځ خپل کمپیوټر چالان کړ او د پښتو ټایپ تمرین یې پیل کړ.
په لومړیو ورځو کې یې ډېرې تېروتنې کولې، خو هغه تمرین ته دوام ورکړ.
ورو ورو یې د کیبورډ توري زده کړل او د ټایپ سرعت یې زیات شو.
څو اوونۍ وروسته هغه کولی شو اوږدې پښتو جملې په اسانه ولیکي.`,

  `یو ماشوم غوښتل چې د کمپیوټر کارول زده کړي.
هغه لومړی د کیبورډ توري زده کړل.
وروسته یې ساده کلمې ولیکلې او بیا یې جملې تمرین کړې.
د ډېر تمرین وروسته یې د پښتو ټایپ کولو مهارت ډېر ښه شو.`,
];

// ======================================================
// EDUCATIONAL TEXTS - LEVEL 18
// ======================================================

const educationalTexts = [
  `ټایپ کول یوه مهمه کمپیوټري وړتیا ده.
په نننۍ نړۍ کې خلک د معلوماتو د لیکلو، شریکولو او ساتلو لپاره کمپیوټر کاروي.
که یو څوک ښه ټایپ وکړي، نو کولی شي خپل کارونه په لږ وخت کې ترسره کړي.`,

  `د ټایپ زده کړې لپاره باید له ساده تمرینونو څخه پیل وشي.
لومړی باید یو یو توری تمرین شي.
وروسته دوه او درې توري یو ځای ولیکل شي.
بیا باید ساده کلمې، عبارتونه او جملې تمرین شي.`,

  `د کیبورډ د منځني قطار زده کړه ډېره مهمه ده.
د لاسونو ګوتې باید د منځني قطار پر تڼیو کېښودل شي.
له دې ځای څخه ګوتې نورو تورو ته حرکت کوي.
له همدې امله د منځني قطار ښه زده کړه د چټک ټایپ بنسټ جوړوي.`,
];

// ======================================================
// PASHTO NUMBERS
// ======================================================

const pashtoNumbers = {
  "0": "۰",
  "1": "۱",
  "2": "۲",
  "3": "۳",
  "4": "۴",
  "5": "۵",
  "6": "۶",
  "7": "۷",
  "8": "۸",
  "9": "۹",
};

// ======================================================
// SYMBOLS
// ======================================================

const symbols = [
  ".",
  ",",
  "،",
  "؛",
  ":",
  "!",
  "؟",
  "?",
  "-",
  "_",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
];

// ======================================================
// KEYBOARD ROWS
// ======================================================

const keyboardRows = {
  top: [
    "ض",
    "ص",
    "ث",
    "ق",
    "ف",
    "غ",
    "ع",
    "ه",
    "خ",
    "ح",
    "ج",
    "چ",
  ],

  home: [
    "ش",
    "س",
    "ی",
    "ب",
    "ل",
    "ا",
    "ت",
    "ن",
    "م",
    "ک",
    "ګ",
  ],

  bottom: [
    "ظ",
    "ط",
    "ژ",
    "ز",
    "ر",
    "ډ",
    "د",
    "و",
    "ږ",
    "ړ",
  ],
};

// ======================================================
// FIRST STEP - F + J
// ======================================================

// F = ب
// J = ت
// The first step trains both hands.

const firstStepKeys = ["ب", "ت"];

// ======================================================
// HOME ROW
// ======================================================

const homeRowLetters = [
  "ش",
  "س",
  "ی",
  "ب",
  "ل",
  "ا",
  "ت",
  "ن",
  "م",
  "ک",
  "ګ",
];

const homeRowLeft = [
  "ش",
  "س",
  "ی",
  "ب",
  "ل",
];

const homeRowRight = [
  "ا",
  "ت",
  "ن",
  "م",
  "ک",
  "ګ",
];

// ======================================================
// HOME ROW COMBINATIONS
// ======================================================

const homeRowCombinations = [
  "شس",
  "سی",
  "یب",
  "بل",
  "لا",
  "ات",
  "تن",
  "نم",
  "مک",
  "کګ",
  "ګک",
  "شن",
  "سم",
  "یل",
  "با",
  "لت",
  "ان",
  "تم",
  "نک",
  "مګ",
  "شګ",
  "سل",
  "یټ",
  "بن",
  "لام",
  "اتن",
  "تنم",
  "نمت",
  "مکا",
  "کګا",
];

// ======================================================
// HOME ROW WORDS
// ======================================================

const homeRowWords = [
  "سلام",
  "سلمان",
  "ملګی",
  "ملګري",
  "لس",
  "لسګونه",
  "کتاب",
  "کلی",
  "کمال",
  "ګل",
  "ګلان",
  "ګام",
  "بلا",
  "بل",
  "بال",
  "مال",
  "مالګه",
  "مات",
  "متل",
  "نجلۍ",
  "انسان",
  "اټکل",
  "تل",
  "لږ",
  "لږه",
  "یوازې",
  "یاد",
  "یادونه",
  "بیل",
  "بیلګه",
];

// ======================================================
// HOME ROW PHRASES
// ======================================================

const homeRowPhrases = [
  "سلام ملګري",
  "سلامونه",
  "ملګری ښه دی",
  "ګل ښکلی دی",
  "کلی ښکلی دی",
  "زه کتاب لولم",
  "زه ټایپ کوم",
  "زه تمرین کوم",
  "هره ورځ تمرین",
  "ډېر ښه",
  "ښه کار",
  "ښه ټایپ",
  "زده کړه",
  "علم مهم دی",
  "ملګری مې ښه دی",
];

// ======================================================
// HOME ROW SENTENCES
// ======================================================

const homeRowSentences = [
  "زه هره ورځ ټایپ تمرین کوم.",
  "سلام ملګري، څنګه یې؟",
  "زما ملګری ډېر ښه دی.",
  "زه په پښتو ټایپ کوم.",
  "زه غواړم ښه ټایپ زده کړم.",
  "هره ورځ تمرین کول مهم دي.",
  "د ټایپ لپاره دقت ډېر مهم دی.",
  "زه خپل کیبورډ په سمه توګه کاروم.",
  "زده کوونکی باید ډېر تمرین وکړي.",
  "زه کولی شم په چټکۍ ټایپ وکړم.",
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
  difficulty = "easy"
) {
  return {
    id,
    level,
    type,
    title,
    text,
    difficulty,
    language: "ps",
    characterCount: text.length,
    wordCount: text.trim()
      ? text.trim().split(/\s+/).length
      : 0,
  };
}

// ======================================================
// LESSONS ARRAY
// ======================================================

const lessons = [];
let id = 1;

// ======================================================
// LEVEL 1
// FIRST STEP - F + J
// BOTH HANDS
// ======================================================

// F = ب
// J = ت
//
// Lesson 1: ب ت ب ت ب ت...
// Lesson 2: ت ب ت ب ت ب...
// Lesson 3: ب ت ب ت ب ت...
// Lesson 4: ت ب ت ب ت ب...

for (let i = 0; i < 20; i++) {
  const firstKey =
    firstStepKeys[i % firstStepKeys.length];

  const secondKey =
    firstStepKeys[
      (i + 1) % firstStepKeys.length
    ];

  const text = repeatText(
    firstKey + " " + secondKey,
    25
  );

  lessons.push(
    createLesson(
      id++,
      1,
      "first-step",
      `د F او J تڼیو تمرین ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 2
// TWO LETTER COMBINATIONS
// 50 LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const a =
    pashtoLetters[
      i % pashtoLetters.length
    ];

  const b =
    pashtoLetters[
      (i + 1) % pashtoLetters.length
    ];

  const text = repeatText(
    a + b,
    30
  );

  lessons.push(
    createLesson(
      id++,
      2,
      "combination",
      `د دوو تورو تمرین ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ======================================================
// LEVEL 3
// WORDS
// 50 LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const selected = [];

  for (let j = 0; j < 8; j++) {
    selected.push(
      easyWords[
        (i + j) % easyWords.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      3,
      "words",
      `د کلمو تمرین ${i + 1}`,
      repeatText(
        selected.join(" "),
        3
      ),
      "easy"
    )
  );
}

// ======================================================
// LEVEL 4
// PHRASES
// 50 LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const selected = [];

  for (let j = 0; j < 6; j++) {
    selected.push(
      phrases[
        (i + j) % phrases.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      4,
      "phrases",
      `د عبارتونو تمرین ${i + 1}`,
      repeatText(
        selected.join(" "),
        3
      ),
      "easy"
    )
  );
}

// ======================================================
// LEVEL 5
// KEYBOARD ROW PRACTICE
// ORIGINAL 50 LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  let rowName;
  let row;

  if (i < 17) {
    rowName = "پورته";
    row = keyboardRows.top;
  } else if (i < 34) {
    rowName = "منځنی";
    row = keyboardRows.home;
  } else {
    rowName = "لاندې";
    row = keyboardRows.bottom;
  }

  const selected = [];

  for (let j = 0; j < 15; j++) {
    selected.push(
      row[
        (i + j) % row.length
      ]
    );
  }

  const text = repeatText(
    selected.join(""),
    5
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "keyboard-row",
      `د ${rowName} قطار تمرین ${i + 1}`,
      text,
      "medium"
    )
  );
}

// ======================================================
// HOME ROW SPECIAL TRAINING
// 100 LESSONS
// ======================================================

// ------------------------------------------------------
// HOME ROW LESSON 1-20
// SINGLE LETTER FOCUS
// ------------------------------------------------------

for (let i = 0; i < 20; i++) {
  const letter =
    homeRowLetters[
      i % homeRowLetters.length
    ];

  const text = repeatText(
    letter,
    40 + (i % 15)
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-letter",
      `د منځني قطار د ${letter} توري تمرین ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 21-40
// TWO LETTER COMBINATIONS
// ------------------------------------------------------

for (let i = 0; i < 20; i++) {
  const combination =
    homeRowCombinations[
      i % homeRowCombinations.length
    ];

  const text = repeatText(
    combination,
    30 + (i % 10)
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-pair",
      `د منځني قطار دوه توري ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 41-55
// THREE LETTER COMBINATIONS
// ------------------------------------------------------

for (let i = 0; i < 15; i++) {
  const a =
    homeRowLetters[
      i % homeRowLetters.length
    ];

  const b =
    homeRowLetters[
      (i + 3) %
        homeRowLetters.length
    ];

  const c =
    homeRowLetters[
      (i + 6) %
        homeRowLetters.length
    ];

  const combination =
    a + b + c;

  const text = repeatText(
    combination,
    25 + (i % 10)
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-triplet",
      `د منځني قطار درې توري ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 56-65
// LEFT HAND
// ------------------------------------------------------

for (let i = 0; i < 10; i++) {
  const selected = [];

  for (let j = 0; j < 12; j++) {
    selected.push(
      homeRowLeft[
        (i + j) %
          homeRowLeft.length
      ]
    );
  }

  const text = repeatText(
    selected.join(" "),
    5
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-left",
      `د منځني قطار د چپ لاس تمرین ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 66-75
// RIGHT HAND
// ------------------------------------------------------

for (let i = 0; i < 10; i++) {
  const selected = [];

  for (let j = 0; j < 12; j++) {
    selected.push(
      homeRowRight[
        (i + j) %
          homeRowRight.length
      ]
    );
  }

  const text = repeatText(
    selected.join(" "),
    5
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-right",
      `د منځني قطار د ښي لاس تمرین ${i + 1}`,
      text,
      "easy"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 76-85
// LEFT + RIGHT HAND
// ------------------------------------------------------

for (let i = 0; i < 10; i++) {
  const selected = [];

  for (let j = 0; j < 20; j++) {
    const left =
      homeRowLeft[
        (i + j) %
          homeRowLeft.length
      ];

    const right =
      homeRowRight[
        (i + j) %
          homeRowRight.length
      ];

    selected.push(
      left + right
    );
  }

  const text = repeatText(
    selected.join(" "),
    4
  );

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-both-hands",
      `د دواړو لاسونو منځني قطار تمرین ${i + 1}`,
      text,
      "medium"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 86-95
// WORD PRACTICE
// ------------------------------------------------------

for (let i = 0; i < 10; i++) {
  const selected = [];

  for (let j = 0; j < 10; j++) {
    selected.push(
      homeRowWords[
        (i + j) %
          homeRowWords.length
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
      5,
      "home-row-words",
      `د منځني قطار کلمو تمرین ${i + 1}`,
      text,
      "medium"
    )
  );
}

// ------------------------------------------------------
// HOME ROW LESSON 96-100
// PHRASES + SENTENCES
// ------------------------------------------------------

for (let i = 0; i < 5; i++) {
  const phrase =
    homeRowPhrases[
      i % homeRowPhrases.length
    ];

  const sentence =
    homeRowSentences[
      i % homeRowSentences.length
    ];

  const text =
    repeatText(phrase, 5) +
    "\n\n" +
    repeatText(sentence, 3);

  lessons.push(
    createLesson(
      id++,
      5,
      "home-row-final",
      `د منځني قطار وروستی تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 6
// SENTENCES
// 50 LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const selected = [];

  for (let j = 0; j < 5; j++) {
    selected.push(
      sentences[
        (i + j) % sentences.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      6,
      "sentences",
      `د جملو تمرین ${i + 1}`,
      repeatText(
        selected.join(" "),
        2
      ),
      "medium"
    )
  );
}

// ======================================================
// LEVEL 7
// LONG SENTENCES
// 60 LESSONS
// ======================================================

for (let i = 0; i < 60; i++) {
  const selected = [];

  for (let j = 0; j < 4; j++) {
    selected.push(
      longSentences[
        (i + j) %
          longSentences.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      7,
      "long-sentences",
      `د اوږدو جملو تمرین ${i + 1}`,
      selected.join(" "),
      "medium"
    )
  );
}

// ======================================================
// LEVEL 8
// MIXED WORDS
// 40 LESSONS
// ======================================================

for (let i = 0; i < 40; i++) {
  const selected = [];

  for (let j = 0; j < 15; j++) {
    selected.push(
      easyWords[
        (i + j) % easyWords.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      8,
      "mixed-words",
      `د ګډو کلمو تمرین ${i + 1}`,
      selected.join(" "),
      "medium"
    )
  );
}

// ======================================================
// LEVEL 9
// MIXED PHRASES
// 40 LESSONS
// ======================================================

for (let i = 0; i < 40; i++) {
  const selected = [];

  for (let j = 0; j < 8; j++) {
    selected.push(
      phrases[
        (i + j) % phrases.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      9,
      "mixed-phrases",
      `د ګډو عبارتونو تمرین ${i + 1}`,
      selected.join(" "),
      "medium"
    )
  );
}

// ======================================================
// LEVEL 10
// MIXED SENTENCES
// 40 LESSONS
// ======================================================

for (let i = 0; i < 40; i++) {
  const selected = [];

  for (let j = 0; j < 6; j++) {
    selected.push(
      sentences[
        (i + j) % sentences.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      10,
      "mixed-sentences",
      `د ګډو جملو تمرین ${i + 1}`,
      selected.join(" "),
      "medium"
    )
  );
}

// ======================================================
// LEVEL 11
// LONG TEXT
// 40 LESSONS
// ======================================================

for (let i = 0; i < 40; i++) {
  const text =
    longSentences[
      i % longSentences.length
    ] +
    " " +
    paragraphs[
      i % paragraphs.length
    ];

  lessons.push(
    createLesson(
      id++,
      11,
      "long-text",
      `د اوږده متن تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 12
// PARAGRAPHS
// 30 LESSONS
// ======================================================

for (let i = 0; i < 30; i++) {
  const text =
    paragraphs[
      i % paragraphs.length
    ];

  lessons.push(
    createLesson(
      id++,
      12,
      "paragraph",
      `د پراګراف تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 13
// MIXED PARAGRAPHS
// 30 LESSONS
// ======================================================

for (let i = 0; i < 30; i++) {
  const text =
    paragraphs[
      i % paragraphs.length
    ] +
    "\n\n" +
    longSentences[
      i % longSentences.length
    ];

  lessons.push(
    createLesson(
      id++,
      13,
      "mixed-paragraph",
      `د ګډ پراګراف تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 14
// ADVANCED TYPING
// 30 LESSONS
// ======================================================

for (let i = 0; i < 30; i++) {
  const selected = [];

  for (let j = 0; j < 5; j++) {
    selected.push(
      longSentences[
        (i + j) %
          longSentences.length
      ]
    );
  }

  lessons.push(
    createLesson(
      id++,
      14,
      "advanced",
      `د پرمختللي ټایپ تمرین ${i + 1}`,
      selected.join(" "),
      "hard"
    )
  );
}

// ======================================================
// LEVEL 15
// FINAL TEST
// 30 LESSONS
// ======================================================

for (let i = 0; i < 30; i++) {
  const text =
    paragraphs[
      i % paragraphs.length
    ] +
    "\n\n" +
    longSentences[
      i % longSentences.length
    ] +
    "\n\n" +
    sentences[
      i % sentences.length
    ];

  lessons.push(
    createLesson(
      id++,
      15,
      "final-test",
      `وروستی ټایپ ازموینه ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 16
// 50 LONG TEXT LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const text =
    longTexts[
      i % longTexts.length
    ];

  lessons.push(
    createLesson(
      id++,
      16,
      "long-text",
      `د اوږده متن پرمختللی تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 17
// 50 STORY LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const text =
    stories[
      i % stories.length
    ];

  lessons.push(
    createLesson(
      id++,
      17,
      "story",
      `د کیسې ټایپ تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 18
// 50 EDUCATIONAL LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const text =
    educationalTexts[
      i % educationalTexts.length
    ];

  lessons.push(
    createLesson(
      id++,
      18,
      "educational",
      `د زده کړې متن تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 19
// 50 MIXED-LONG LESSONS
// ======================================================

for (let i = 0; i < 50; i++) {
  const selected = [];

  selected.push(
    easyWords[
      i % easyWords.length
    ]
  );

  selected.push(
    phrases[
      i % phrases.length
    ]
  );

  selected.push(
    sentences[
      i % sentences.length
    ]
  );

  selected.push(
    longSentences[
      i % longSentences.length
    ]
  );

  lessons.push(
    createLesson(
      id++,
      19,
      "mixed-long",
      `د ګډ اوږده تمرین ${i + 1}`,
      selected.join(" "),
      "hard"
    )
  );
}

// ======================================================
// LEVEL 20
// 50 FINAL LONG TESTS
// ======================================================

for (let i = 0; i < 50; i++) {
  const text =
    easyWords[
      i % easyWords.length
    ] +
    " " +
    phrases[
      i % phrases.length
    ] +
    "\n\n" +
    sentences[
      i % sentences.length
    ] +
    "\n\n" +
    longSentences[
      i % longSentences.length
    ] +
    "\n\n" +
    paragraphs[
      i % paragraphs.length
    ];

  lessons.push(
    createLesson(
      id++,
      20,
      "final-long-test",
      `وروستۍ اوږده ازموینه ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// LEVEL 21
// 20 VERY LONG TEXT LESSONS
// ======================================================

for (let i = 0; i < 20; i++) {
  const text =
    paragraphs[
      i % paragraphs.length
    ] +
    "\n\n" +
    longSentences[
      i % longSentences.length
    ] +
    "\n\n" +
    educationalTexts[
      i % educationalTexts.length
    ];

  lessons.push(
    createLesson(
      id++,
      21,
      "very-long-text",
      `د ډېر اوږده متن وروستی تمرین ${i + 1}`,
      text,
      "hard"
    )
  );
}

// ======================================================
// TOTAL LESSON INFORMATION
// ======================================================

const totalLessons = lessons.length;
const totalLevels = 21;

// ======================================================
// HOME
// ======================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pashto Typing Learning API",
    language: "Pashto",
    totalLessons,
    totalLevels,
    homeRowLessons: 100,

    levels: {
      1: "F + J First Step",
      2: "Two Letter Combinations",
      3: "Words",
      4: "Phrases",
      5: "Keyboard Rows + 100 Home Row Lessons",
      6: "Sentences",
      7: "Long Sentences",
      8: "Mixed Words",
      9: "Mixed Phrases",
      10: "Mixed Sentences",
      11: "Long Text",
      12: "Paragraphs",
      13: "Mixed Paragraphs",
      14: "Advanced Typing",
      15: "Final Test",
      16: "Long Text",
      17: "Stories",
      18: "Educational Text",
      19: "Mixed Long",
      20: "Final Long Test",
      21: "Very Long Text",
    },

    endpoints: {
      keyboard: "/api/keyboard",
      letters: "/api/letters",
      lessons: "/api/lessons",
      randomLesson: "/api/lessons/random",
      levels: "/api/levels",
      stats: "/api/stats",
      coverage: "/api/coverage",
      homeRow: "/api/lessons/home-row",
    },
  });
});

// ======================================================
// KEYBOARD API
// ======================================================

app.get("/api/keyboard", (req, res) => {
  res.json({
    success: true,
    keyboard: pashtoKeyboard,
    rows: keyboardRows,

    firstStep: {
      leftKey: {
        key: "F",
        letter: "ب",
      },

      rightKey: {
        key: "J",
        letter: "ت",
      },

      description:
        "لومړی تمرین د F او J دواړو تڼیو څخه پیل کېږي.",
    },

    homeRow: {
      totalLetters:
        homeRowLetters.length,

      letters:
        homeRowLetters,

      leftHand:
        homeRowLeft,

      rightHand:
        homeRowRight,

      lessons: 100,
    },

    numbers: pashtoNumbers,
    symbols,
  });
});

// ======================================================
// LETTERS API
// ======================================================

app.get("/api/letters", (req, res) => {
  res.json({
    success: true,
    total: pashtoLetters.length,
    letters: pashtoLetters,
  });
});

// ======================================================
// RANDOM LETTER
// ======================================================

app.get(
  "/api/letters/random",
  (req, res) => {
    const letter =
      randomItem(pashtoLetters);

    res.json({
      success: true,
      letter,
    });
  }
);

// ======================================================
// SPECIFIC LETTER
// ======================================================

app.get(
  "/api/letters/:letter",
  (req, res) => {
    const letter =
      req.params.letter;

    const index =
      pashtoLetters.indexOf(letter);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        message:
          "توری ونه موندل شو",
      });
    }

    res.json({
      success: true,
      letter,
      index,

      lesson:
        lessons.find(
          (lesson) =>
            lesson.type === "letter" &&
            lesson.text.includes(letter)
        ),
    });
  }
);

// ======================================================
// ALL LESSONS
// ======================================================

app.get(
  "/api/lessons",
  (req, res) => {
    res.json({
      success: true,
      total: lessons.length,
      lessons,
    });
  }
);

// ======================================================
// RANDOM LESSON
// ======================================================

app.get(
  "/api/lessons/random",
  (req, res) => {
    const lesson =
      randomItem(lessons);

    res.json({
      success: true,
      lesson,
    });
  }
);

// ======================================================
// RANDOM LESSON BY LEVEL
// ======================================================

app.get(
  "/api/lessons/random/:level",
  (req, res) => {
    const level =
      Number(req.params.level);

    const levelLessons =
      lessons.filter(
        (lesson) =>
          lesson.level === level
      );

    if (
      levelLessons.length === 0
    ) {
      return res.status(404).json({
        success: false,
        message:
          "دا level ونه موندل شو",
      });
    }

    res.json({
      success: true,
      level,
      lesson:
        randomItem(levelLessons),
    });
  }
);

// ======================================================
// LEVEL LESSONS
// ======================================================

app.get(
  "/api/lessons/level/:level",
  (req, res) => {
    const level =
      Number(req.params.level);

    const levelLessons =
      lessons.filter(
        (lesson) =>
          lesson.level === level
      );

    if (
      levelLessons.length === 0
    ) {
      return res.status(404).json({
        success: false,
        message:
          "دا level ونه موندل شو",
      });
    }

    res.json({
      success: true,
      level,
      total:
        levelLessons.length,
      lessons:
        levelLessons,
    });
  }
);

// ======================================================
// HOME ROW LESSONS
// ======================================================

app.get(
  "/api/lessons/home-row",
  (req, res) => {
    const homeLessons =
      lessons.filter(
        (lesson) =>
          lesson.type.startsWith(
            "home-row-"
          )
      );

    res.json({
      success: true,
      level: 5,
      total:
        homeLessons.length,

      description:
        "د پښتو کیبورډ د منځني قطار ۱۰۰ ځانګړي تمرینونه",

      letters:
        homeRowLetters,

      leftHand:
        homeRowLeft,

      rightHand:
        homeRowRight,

      lessons:
        homeLessons,
    });
  }
);

// ======================================================
// LESSONS BY TYPE
// ======================================================

app.get(
  "/api/lessons/type/:type",
  (req, res) => {
    const type =
      req.params.type;

    const typeLessons =
      lessons.filter(
        (lesson) =>
          lesson.type === type
      );

    if (
      typeLessons.length === 0
    ) {
      return res.status(404).json({
        success: false,
        message:
          "د دې type لپاره lesson ونه موندل شو",
      });
    }

    res.json({
      success: true,
      type,
      total:
        typeLessons.length,
      lessons:
        typeLessons,
    });
  }
);

// ======================================================
// LESSON BY ID
// ======================================================

app.get(
  "/api/lessons/:id",
  (req, res) => {
    const lessonId =
      Number(req.params.id);

    const lesson =
      lessons.find(
        (item) =>
          item.id === lessonId
      );

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message:
          "Lesson ونه موندل شو",
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

app.get(
  "/api/levels",
  (req, res) => {
    const levels = [];

    for (
      let level = 1;
      level <= totalLevels;
      level++
    ) {
      const levelLessons =
        lessons.filter(
          (lesson) =>
            lesson.level === level
        );

      levels.push({
        level,

        totalLessons:
          levelLessons.length,

        types: [
          ...new Set(
            levelLessons.map(
              (lesson) =>
                lesson.type
            )
          ),
        ],
      });
    }

    res.json({
      success: true,
      totalLevels,
      levels,
    });
  }
);

// ======================================================
// STATISTICS
// ======================================================

app.get(
  "/api/stats",
  (req, res) => {
    const statistics = [];

    for (
      let level = 1;
      level <= totalLevels;
      level++
    ) {
      const levelLessons =
        lessons.filter(
          (lesson) =>
            lesson.level === level
        );

      statistics.push({
        level,

        lessons:
          levelLessons.length,

        characters:
          levelLessons.reduce(
            (total, lesson) =>
              total +
              lesson.characterCount,
            0
          ),

        words:
          levelLessons.reduce(
            (total, lesson) =>
              total +
              lesson.wordCount,
            0
          ),
      });
    }

    res.json({
      success: true,
      totalLessons,
      totalLevels,
      statistics,
    });
  }
);

// ======================================================
// COVERAGE
// ======================================================

app.get(
  "/api/coverage",
  (req, res) => {
    const letterCoverage =
      pashtoLetters.map(
        (letter) => {
          const count =
            lessons.filter(
              (lesson) =>
                lesson.text.includes(
                  letter
                )
            ).length;

          return {
            letter,
            lessons: count,
          };
        }
      );

    res.json({
      success: true,

      totalLetters:
        pashtoLetters.length,

      coverage:
        letterCoverage,
    });
  }
);

// ======================================================
// DIFFICULTY
// ======================================================

app.get(
  "/api/lessons/difficulty/:difficulty",
  (req, res) => {
    const difficulty =
      req.params.difficulty;

    const result =
      lessons.filter(
        (lesson) =>
          lesson.difficulty ===
          difficulty
      );

    if (
      result.length === 0
    ) {
      return res.status(404).json({
        success: false,
        message:
          "د دې difficulty لپاره lesson ونه موندل شو",
      });
    }

    res.json({
      success: true,
      difficulty,
      total:
        result.length,
      lessons:
        result,
    });
  }
);

// ======================================================
// SEARCH
// ======================================================

app.get(
  "/api/search",
  (req, res) => {
    const query =
      String(
        req.query.q || ""
      )
        .trim()
        .toLowerCase();

    if (!query) {
      return res.status(400).json({
        success: false,
        message:
          "مهرباني وکړئ q ورکړئ",
      });
    }

    const result =
      lessons.filter(
        (lesson) =>
          lesson.text
            .toLowerCase()
            .includes(query) ||
          lesson.title
            .toLowerCase()
            .includes(query)
      );

    res.json({
      success: true,
      query,
      total:
        result.length,
      lessons:
        result,
    });
  }
);

// ======================================================
// 404
// ======================================================

app.use(
  (req, res) => {
    res.status(404).json({
      success: false,
      message:
        "API endpoint ونه موندل شو",
      path:
        req.originalUrl,
    });
  }
);

// ======================================================
// ERROR HANDLER
// ======================================================

app.use(
  (
    err,
    req,
    res,
    next
  ) => {
    console.error(err);

    res.status(500).json({
      success: false,
      message:
        "Server error",
      error:
        err.message,
    });
  }
);

// ======================================================
// SERVER
// ======================================================

const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  () => {
    console.log(
      "=========================================="
    );

    console.log(
      "Pashto Typing API is running"
    );

    console.log(
      `http://localhost:${PORT}`
    );

    console.log(
      `Total Lessons: ${lessons.length}`
    );

    console.log(
      `Total Levels: ${totalLevels}`
    );

    console.log(
      "First Step: F = ب | J = ت"
    );

    console.log(
      "Home Row Lessons: 100"
    );

    console.log(
      "=========================================="
    );
  }
);