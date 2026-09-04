const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ==================== PASHTO TYPING LESSONS ====================

const pashtoLessons = [
  // ========== LEVEL 1: HOME ROW KEYS (Lessons 1-10) ==========
  {
    id: 1,
    level: "Beginner",
    title: "Home Row - ا and ت",
    text: "ا ت ا ت ا ت ا ت ا ت",
    description: "Practice home row keys: ا (Alif) and ت (Te)"
  },
  {
    id: 2,
    level: "Beginner",
    title: "Home Row - ا and ن",
    text: "ا ن ا ن ا ن ا ن ا ن",
    description: "Practice home row keys: ا (Alif) and ن (Noon)"
  },
  {
    id: 3,
    level: "Beginner",
    title: "Home Row - ا، ت، ن",
    text: "ا ت ن ا ت ن ا ت ن ا ت ن",
    description: "Practice three home row keys together"
  },
  {
    id: 4,
    level: "Beginner",
    title: "Home Row - م and ک",
    text: "م ک م ک م ک م ک م ک",
    description: "Practice home row keys: م (Meem) and ک (Kaf)"
  },
  {
    id: 5,
    level: "Beginner",
    title: "Home Row - ا، ت، ن، م، ک",
    text: "ا ت ن م ک ا ت ن م ک ا ت ن م ک",
    description: "Practice all home row keys together"
  },
  {
    id: 6,
    level: "Beginner",
    title: "Home Row - ی and ه",
    text: "ی ه ی ه ی ه ی ه ی ه",
    description: "Practice home row keys: ی (Ye) and ه (He)"
  },
  {
    id: 7,
    level: "Beginner",
    title: "Home Row Complete",
    text: "ا ت ن م ک ی ه ا ت ن م ک ی ه",
    description: "Practice complete home row keys"
  },
  {
    id: 8,
    level: "Beginner",
    title: "Home Row - و and ر",
    text: "و ر و ر و ر و ر و ر",
    description: "Practice home row keys: و (Waw) and ر (Re)"
  },
  {
    id: 9,
    level: "Beginner",
    title: "Home Row - د and ل",
    text: "د ل د ل د ل د ل د ل",
    description: "Practice home row keys: د (Dal) and ل (Lam)"
  },
  {
    id: 10,
    level: "Beginner",
    title: "Home Row Mastery",
    text: "ا ت ن م ک ی ه و ر د ل",
    description: "Master all home row keys"
  },

  // ========== LEVEL 2: TOP ROW KEYS (Lessons 11-20) ==========
  {
    id: 11,
    level: "Beginner",
    title: "Top Row - ب and س",
    text: "ب س ب س ب س ب س ب س",
    description: "Practice top row keys: ب (Be) and س (Seen)"
  },
  {
    id: 12,
    level: "Beginner",
    title: "Top Row - ش and پ",
    text: "ش پ ش پ ش پ ش پ ش پ",
    description: "Practice top row keys: ش (Sheen) and پ (Pe)"
  },
  {
    id: 13,
    level: "Beginner",
    title: "Top Row - ب، س، ش، پ",
    text: "ب س ش پ ب س ش پ ب س ش پ",
    description: "Practice four top row keys"
  },
  {
    id: 14,
    level: "Beginner",
    title: "Top Row - ج and چ",
    text: "ج چ ج چ ج چ ج چ ج چ",
    description: "Practice top row keys: ج (Jeem) and چ (Che)"
  },
  {
    id: 15,
    level: "Beginner",
    title: "Top Row - ح and خ",
    text: "ح خ ح خ ح خ ح خ ح خ",
    description: "Practice top row keys: ح (He) and خ (Khe)"
  },
  {
    id: 16,
    level: "Beginner",
    title: "Top Row Complete",
    text: "ب س ش پ ج چ ح خ ع غ",
    description: "Practice complete top row keys"
  },
  {
    id: 17,
    level: "Beginner",
    title: "Top Row - ف and ق",
    text: "ف ق ف ق ف ق ف ق ف ق",
    description: "Practice top row keys: ف (Fe) and ق (Qaf)"
  },
  {
    id: 18,
    level: "Beginner",
    title: "Top Row - ث and ص",
    text: "ث ص ث ص ث ص ث ص ث ص",
    description: "Practice top row keys: ث (Se) and ص (Swad)"
  },
  {
    id: 19,
    level: "Beginner",
    title: "Top Row - ض and ط",
    text: "ض ط ض ط ض ط ض ط ض ط",
    description: "Practice top row keys: ض (Dwad) and ط (Toe)"
  },
  {
    id: 20,
    level: "Beginner",
    title: "Top Row Mastery",
    text: "ب س ش پ ج چ ح خ ع غ ف ق ث ص ض ط",
    description: "Master all top row keys"
  },

  // ========== LEVEL 3: BOTTOM ROW KEYS (Lessons 21-30) ==========
  {
    id: 21,
    level: "Intermediate",
    title: "Bottom Row - ز and ظ",
    text: "ز ظ ز ظ ز ظ ز ظ ز ظ",
    description: "Practice bottom row keys: ز (Ze) and ظ (Zoe)"
  },
  {
    id: 22,
    level: "Intermediate",
    title: "Bottom Row - ژ and ذ",
    text: "ژ ذ ژ ذ ژ ذ ژ ذ ژ ذ",
    description: "Practice bottom row keys: ژ (Zhe) and ذ (Zal)"
  },
  {
    id: 23,
    level: "Intermediate",
    title: "Bottom Row - ځ and څ",
    text: "ځ څ ځ څ ځ څ ځ څ ځ څ",
    description: "Practice bottom row keys: ځ (Dze) and څ (Tse)"
  },
  {
    id: 24,
    level: "Intermediate",
    title: "Bottom Row - ډ and ړ",
    text: "ډ ړ ډ ړ ډ ړ ډ ړ ډ ړ",
    description: "Practice bottom row keys: ډ (Ddal) and ړ (Rre)"
  },
  {
    id: 25,
    level: "Intermediate",
    title: "Bottom Row - ټ and ڼ",
    text: "ټ ڼ ټ ڼ ټ ڼ ټ ڼ ټ ڼ",
    description: "Practice bottom row keys: ټ (Tte) and ڼ (Nnna)"
  },
  {
    id: 26,
    level: "Intermediate",
    title: "Bottom Row - ږ and ښ",
    text: "ږ ښ ږ ښ ږ ښ ږ ښ ږ ښ",
    description: "Practice bottom row keys: ږ (Gee) and ښ (Xeen)"
  },
  {
    id: 27,
    level: "Intermediate",
    title: "Bottom Row - ګ and ې",
    text: "ګ ې ګ ې ګ ې ګ ې ګ ې",
    description: "Practice bottom row keys: ګ (Gaf) and ې (Ye)"
  },
  {
    id: 28,
    level: "Intermediate",
    title: "Bottom Row - ۍ and ئ",
    text: "ۍ ئ ۍ ئ ۍ ئ ۍ ئ ۍ ئ",
    description: "Practice bottom row keys: ۍ and ئ"
  },
  {
    id: 29,
    level: "Intermediate",
    title: "Bottom Row Complete",
    text: "ز ظ ژ ذ ځ څ ډ ړ ټ ڼ ږ ښ ګ ې ۍ ئ",
    description: "Practice complete bottom row keys"
  },
  {
    id: 30,
    level: "Intermediate",
    title: "All Rows Combined",
    text: "ا ب پ ت ټ ث ج ځ چ څ ح خ د ډ ذ ر ړ ز ژ ږ س ش ښ ص ض ط ظ ع غ ف ق ک ګ ل م ن ڼ و ه ی ې ۍ ئ",
    description: "Practice all Pashto letters"
  },

  // ========== LEVEL 4: SIMPLE WORDS (Lessons 31-50) ==========
  {
    id: 31,
    level: "Intermediate",
    title: "Simple Words - 1",
    text: "اوبه اوبه اوبه اوبه",
    description: "Type the word 'اوبه' (water)"
  },
  {
    id: 32,
    level: "Intermediate",
    title: "Simple Words - 2",
    text: "کور کور کور کور",
    description: "Type the word 'کور' (house)"
  },
  {
    id: 33,
    level: "Intermediate",
    title: "Simple Words - 3",
    text: "لمر لمر لمر لمر",
    description: "Type the word 'لمر' (sun)"
  },
  {
    id: 34,
    level: "Intermediate",
    title: "Simple Words - 4",
    text: "مور مور مور مور",
    description: "Type the word 'مور' (mother)"
  },
  {
    id: 35,
    level: "Intermediate",
    title: "Simple Words - 5",
    text: "پلار پلار پلار پلار",
    description: "Type the word 'پلار' (father)"
  },
  {
    id: 36,
    level: "Intermediate",
    title: "Simple Words - 6",
    text: "کتاب کتاب کتاب کتاب",
    description: "Type the word 'کتاب' (book)"
  },
  {
    id: 37,
    level: "Intermediate",
    title: "Simple Words - 7",
    text: "قلم قلم قلم قلم",
    description: "Type the word 'قلم' (pen)"
  },
  {
    id: 38,
    level: "Intermediate",
    title: "Simple Words - 8",
    text: "دستار دستار دستار دستار",
    description: "Type the word 'دستار' (turban)"
  },
  {
    id: 39,
    level: "Intermediate",
    title: "Simple Words - 9",
    text: "ملګری ملګری ملګری ملګری",
    description: "Type the word 'ملګری' (friend)"
  },
  {
    id: 40,
    level: "Intermediate",
    title: "Simple Words - 10",
    text: "ښوونځی ښوونځی ښوونځی ښوونځی",
    description: "Type the word 'ښوونځی' (school)"
  },
  {
    id: 41,
    level: "Intermediate",
    title: "Numbers - 1",
    text: "۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰",
    description: "Practice Pashto numbers"
  },
  {
    id: 42,
    level: "Intermediate",
    title: "Simple Words - 11",
    text: "ډوډۍ ډوډۍ ډوډۍ ډوډۍ",
    description: "Type the word 'ډوډۍ' (bread)"
  },
  {
    id: 43,
    level: "Intermediate",
    title: "Simple Words - 12",
    text: "اوبه څښل اوبه څښل اوبه څښل",
    description: "Type the phrase 'اوبه څښل' (drinking water)"
  },
  {
    id: 44,
    level: "Intermediate",
    title: "Simple Words - 13",
    text: "ښه راغلاست ښه راغلاست ښه راغلاست",
    description: "Type the phrase 'ښه راغلاست' (welcome)"
  },
  {
    id: 45,
    level: "Intermediate",
    title: "Simple Words - 14",
    text: "مننه مننه مننه مننه",
    description: "Type the word 'مننه' (thank you)"
  },
  {
    id: 46,
    level: "Intermediate",
    title: "Simple Words - 15",
    text: "سلام سلام سلام سلام",
    description: "Type the word 'سلام' (hello)"
  },
  {
    id: 47,
    level: "Intermediate",
    title: "Simple Words - 16",
    text: "ورور ورور ورور ورور",
    description: "Type the word 'ورور' (brother)"
  },
  {
    id: 48,
    level: "Intermediate",
    title: "Simple Words - 17",
    text: "خور خور خور خور",
    description: "Type the word 'خور' (sister)"
  },
  {
    id: 49,
    level: "Intermediate",
    title: "Simple Words - 18",
    text: "ګل ګل ګل ګل",
    description: "Type the word 'ګل' (flower)"
  },
  {
    id: 50,
    level: "Intermediate",
    title: "Simple Words - 19",
    text: "باغ باغ باغ باغ",
    description: "Type the word 'باغ' (garden)"
  },

  // ========== LEVEL 5: COMMON PHRASES (Lessons 51-70) ==========
  {
    id: 51,
    level: "Advanced",
    title: "Common Phrases - 1",
    text: "ته څنګه یې؟ ته څنګه یې؟ ته څنګه یې؟",
    description: "Type 'ته څنګه یې؟' (How are you?)"
  },
  {
    id: 52,
    level: "Advanced",
    title: "Common Phrases - 2",
    text: "زه ښه یم زه ښه یم زه ښه یم",
    description: "Type 'زه ښه یم' (I am fine)"
  },
  {
    id: 53,
    level: "Advanced",
    title: "Common Phrases - 3",
    text: "ستا نوم څه دی؟ ستا نوم څه دی؟",
    description: "Type 'ستا نوم څه دی؟' (What is your name?)"
  },
  {
    id: 54,
    level: "Advanced",
    title: "Common Phrases - 4",
    text: "زما نوم دی زما نوم دی زما نوم دی",
    description: "Type 'زما نوم دی' (My name is...)"
  },
  {
    id: 55,
    level: "Advanced",
    title: "Common Phrases - 5",
    text: "ته له کومه یې؟ ته له کومه یې؟",
    description: "Type 'ته له کومه یې؟' (Where are you from?)"
  },
  {
    id: 56,
    level: "Advanced",
    title: "Common Phrases - 6",
    text: "زه له کابله یم زه له کابله یم",
    description: "Type 'زه له کابله یم' (I am from Kabul)"
  },
  {
    id: 57,
    level: "Advanced",
    title: "Common Phrases - 7",
    text: "خدای پامان خدای پامان خدای پامان",
    description: "Type 'خدای پامان' (Goodbye)"
  },
  {
    id: 58,
    level: "Advanced",
    title: "Common Phrases - 8",
    text: "سبا به سره وینو سبا به سره وینو",
    description: "Type 'سبا به سره وینو' (See you tomorrow)"
  },
  {
    id: 59,
    level: "Advanced",
    title: "Common Phrases - 9",
    text: "مېلمستیا ته ښه راغلاست",
    description: "Type 'مېلمستیا ته ښه راغلاست' (Welcome to the party)"
  },
  {
    id: 60,
    level: "Advanced",
    title: "Common Phrases - 10",
    text: "زه تا سره مینه لرم",
    description: "Type 'زه تا سره مینه لرم' (I love you)"
  },
  {
    id: 61,
    level: "Advanced",
    title: "Common Phrases - 11",
    text: "ماته مرسته وکړئ ماته مرسته وکړئ",
    description: "Type 'ماته مرسته وکړئ' (Help me)"
  },
  {
    id: 62,
    level: "Advanced",
    title: "Common Phrases - 12",
    text: "دې څومره قیمت دی؟ دې څومره قیمت دی؟",
    description: "Type 'دې څومره قیمت دی؟' (How much is this?)"
  },
  {
    id: 63,
    level: "Advanced",
    title: "Common Phrases - 13",
    text: "زه نه پوهیږم زه نه پوهیږم",
    description: "Type 'زه نه پوهیږم' (I don't understand)"
  },
  {
    id: 64,
    level: "Advanced",
    title: "Common Phrases - 14",
    text: "په پښتو خبرې وکړئ په پښتو خبرې وکړئ",
    description: "Type 'په پښتو خبرې وکړئ' (Speak in Pashto)"
  },
  {
    id: 65,
    level: "Advanced",
    title: "Common Phrases - 15",
    text: "زه پښتو زده کوم زه پښتو زده کوم",
    description: "Type 'زه پښتو زده کوم' (I am learning Pashto)"
  },
  {
    id: 66,
    level: "Advanced",
    title: "Days of Week",
    text: "شنبه یکشنبه دوشنبه سه شنبه چهارشنبه پنجشنبه جمعه",
    description: "Type the days of the week in Pashto"
  },
  {
    id: 67,
    level: "Advanced",
    title: "Months - 1",
    text: "وری غویی چنګاښ زمری وږی",
    description: "Type first five months of Pashto calendar"
  },
  {
    id: 68,
    level: "Advanced",
    title: "Months - 2",
    text: "تله لړم لیندۍ مرغومی سلواغه کب",
    description: "Type last six months of Pashto calendar"
  },
  {
    id: 69,
    level: "Advanced",
    title: "Colors",
    text: "سور شین تور سپین ژیړ نیلی",
    description: "Type colors in Pashto: red, green, black, white, yellow, blue"
  },
  {
    id: 70,
    level: "Advanced",
    title: "Family Members",
    text: "مور پلار ورور خور نیکه انا",
    description: "Type family members: mother, father, brother, sister, grandfather, grandmother"
  },

  // ========== LEVEL 6: SENTENCES (Lessons 71-100) ==========
  {
    id: 71,
    level: "Advanced",
    title: "Sentences - 1",
    text: "زه کتاب لولم زه کتاب لولم",
    description: "Type 'زه کتاب لولم' (I read a book)"
  },
  {
    id: 72,
    level: "Advanced",
    title: "Sentences - 2",
    text: "هغه ښوونځي ته ځي هغه ښوونځي ته ځي",
    description: "Type 'هغه ښوونځي ته ځي' (He goes to school)"
  },
  {
    id: 73,
    level: "Advanced",
    title: "Sentences - 3",
    text: "موږ کور ته ځو موږ کور ته ځو",
    description: "Type 'موږ کور ته ځو' (We go home)"
  },
  {
    id: 74,
    level: "Advanced",
    title: "Sentences - 4",
    text: "دوی لوبې کوي دوی لوبې کوي",
    description: "Type 'دوی لوبې کوي' (They play)"
  },
  {
    id: 75,
    level: "Advanced",
    title: "Sentences - 5",
    text: "زه چای څښم زه چای څښم",
    description: "Type 'زه چای څښم' (I drink tea)"
  },
  {
    id: 76,
    level: "Advanced",
    title: "Sentences - 6",
    text: "هغه ډوډۍ خوري هغه ډوډۍ خوري",
    description: "Type 'هغه ډوډۍ خوري' (She eats bread)"
  },
  {
    id: 77,
    level: "Advanced",
    title: "Sentences - 7",
    text: "لمر په اسمان کې دی",
    description: "Type 'لمر په اسمان کې دی' (The sun is in the sky)"
  },
  {
    id: 78,
    level: "Advanced",
    title: "Sentences - 8",
    text: "سپوږمۍ په شپه کې ښکاري",
    description: "Type 'سپوږمۍ په شپه کې ښکاري' (The moon appears at night)"
  },
  {
    id: 79,
    level: "Advanced",
    title: "Sentences - 9",
    text: "باران اوري باران اوري",
    description: "Type 'باران اوري' (It is raining)"
  },
  {
    id: 80,
    level: "Advanced",
    title: "Sentences - 10",
    text: "واوره راوریږي واوره راوریږي",
    description: "Type 'واوره راوریږي' (It is snowing)"
  },
  {
    id: 81,
    level: "Expert",
    title: "Sentences - 11",
    text: "زه غواړم پښتو زده کړم",
    description: "Type 'زه غواړم پښتو زده کړم' (I want to learn Pashto)"
  },
  {
    id: 82,
    level: "Expert",
    title: "Sentences - 12",
    text: "ته باید ډیر تمرین وکړې",
    description: "Type 'ته باید ډیر تمرین وکړې' (You should practice more)"
  },
  {
    id: 83,
    level: "Expert",
    title: "Sentences - 13",
    text: "افغانستان یو ښکلی هیواد دی",
    description: "Type 'افغانستان یو ښکلی هیواد دی' (Afghanistan is a beautiful country)"
  },
  {
    id: 84,
    level: "Expert",
    title: "Sentences - 14",
    text: "پښتو زموږ ملي ژبه ده",
    description: "Type 'پښتو زموږ ملي ژبه ده' (Pashto is our national language)"
  },
  {
    id: 85,
    level: "Expert",
    title: "Sentences - 15",
    text: "زه په کابل کې اوسیږم",
    description: "Type 'زه په کابل کې اوسیږم' (I live in Kabul)"
  },
  {
    id: 86,
    level: "Expert",
    title: "Sentences - 16",
    text: "هغه په کندهار کې کار کوي",
    description: "Type 'هغه په کندهار کې کار کوي' (He works in Kandahar)"
  },
  {
    id: 87,
    level: "Expert",
    title: "Sentences - 17",
    text: "موږ سبا بازار ته ځو",
    description: "Type 'موږ سبا بازار ته ځو' (We go to the market tomorrow)"
  },
  {
    id: 88,
    level: "Expert",
    title: "Sentences - 18",
    text: "تاسو څه کوئ؟ تاسو څه کوئ؟",
    description: "Type 'تاسو څه کوئ؟' (What are you doing?)"
  },
  {
    id: 89,
    level: "Expert",
    title: "Sentences - 19",
    text: "زه لیک لیکم زه لیک لیکم",
    description: "Type 'زه لیک لیکم' (I am writing a letter)"
  },
  {
    id: 90,
    level: "Expert",
    title: "Sentences - 20",
    text: "هغه سندره وايي هغه سندره وايي",
    description: "Type 'هغه سندره وايي' (She sings a song)"
  },
  {
    id: 91,
    level: "Expert",
    title: "Paragraph - 1",
    text: "زه هر سهار ژر پاڅیږم او خپل مخ وینځم. بیا زه ناشته کوم او ښوونځي ته ځم.",
    description: "Type about morning routine"
  },
  {
    id: 92,
    level: "Expert",
    title: "Paragraph - 2",
    text: "زما کورنۍ لویه ده. زما مور، پلار، دوه وروڼه او یوه خور لرم.",
    description: "Type about family"
  },
  {
    id: 93,
    level: "Expert",
    title: "Paragraph - 3",
    text: "پسرلی د کال تر ټولو ښکلی موسم دی. په دې موسم کې ګلان غوړیږي.",
    description: "Type about spring season"
  },
  {
    id: 94,
    level: "Expert",
    title: "Paragraph - 4",
    text: "افغانستان ډیر تاریخي ځایونه لري. د بامیان بودا مجسمې ډیرې مشهورې وې.",
    description: "Type about Afghanistan's history"
  },
  {
    id: 95,
    level: "Expert",
    title: "Paragraph - 5",
    text: "پښتو ژبه د نړۍ یوه له لرغونو ژبو څخه ده. میلیونونه خلک په دې ژبه خبرې کوي.",
    description: "Type about Pashto language"
  },
  {
    id: 96,
    level: "Expert",
    title: "Long Text - 1",
    text: "تعلیم د انسان لپاره ډیر مهم دی. یو تعلیم یافته انسان کولای شي چې خپل هیواد ته خدمت وکړي.",
    description: "Type about importance of education"
  },
  {
    id: 97,
    level: "Expert",
    title: "Long Text - 2",
    text: "صحت د انسان تر ټولو لویه شتمني ده. موږ باید خپل روغتیا ته پام وکړو او پاکه ژوند وکړو.",
    description: "Type about health"
  },
  {
    id: 98,
    level: "Expert",
    title: "Long Text - 3",
    text: "کار او زیار د بریالیتوب کیلي ده. هر څوک چې زیار وکړي، بریالی به شي.",
    description: "Type about hard work"
  },
  {
    id: 99,
    level: "Expert",
    title: "Long Text - 4",
    text: "مور او پلار زموږ تر ټولو ګران خلک دي. موږ باید د دوی خدمت وکړو او درناوی یې وکړو.",
    description: "Type about respect for parents"
  },
  {
    id: 100,
    level: "Expert",
    title: "Long Text - 5",
    text: "سوله او امنیت د هر هیواد د پرمختګ لپاره اړین دي. موږ باید د سولې لپاره کار وکړو.",
    description: "Type about peace and security"
  },
  {
    id: 101,
    level: "Expert",
    title: "Long Text - 6",
    text: "پښتني کلتور ډیر بډای دی. پښتانه د خپل میلمه پالنې له امله په ټوله نړۍ کې مشهور دي.",
    description: "Type about Pashtun culture"
  },
  {
    id: 102,
    level: "Expert",
    title: "Long Text - 7",
    text: "اوبه د ژوند لپاره اړینې دي. موږ باید اوبه ضایع نه کړو او په سمه توګه ترې استفاده وکړو.",
    description: "Type about water conservation"
  },
  {
    id: 103,
    level: "Expert",
    title: "Long Text - 8",
    text: "کرنه د افغانستان د اقتصاد مهمه برخه ده. ډیری خلک په کلیو کې په کرنه بوخت دي.",
    description: "Type about agriculture"
  },
  {
    id: 104,
    level: "Expert",
    title: "Long Text - 9",
    text: "ښځې او نارینه دواړه د ټولنې مهم غړي دي. دواړه باید د زده کړې او کار مساوي حقونه ولري.",
    description: "Type about equality"
  },
  {
    id: 105,
    level: "Expert",
    title: "Long Text - 10",
    text: "د راتلونکي لپاره موږ باید نن کار وکړو. هر څه چې نن وکرو، سبا به یې نتیجه ووینو.",
    description: "Type about future planning"
  }
];

// ==================== API ENDPOINTS ====================

app.get("/", (req, res) => {
  res.json({
    message: "Pashto Typing Learning API is working!",
    totalLessons: pashtoLessons.length,
    endpoints: {
      allLessons: "/api/lessons",
      lessonById: "/api/lessons/:id",
      lessonsByLevel: "/api/lessons/level/:level"
    }
  });
});

// Get all lessons
app.get("/api/lessons", (req, res) => {
  res.json({
    total: pashtoLessons.length,
    lessons: pashtoLessons
  });
});

// Get a single lesson by ID
app.get("/api/lessons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lesson = pashtoLessons.find(l => l.id === id);
  
  if (!lesson) {
    return res.status(404).json({
      error: "Lesson not found",
      message: `No lesson found with ID ${id}`
    });
  }
  
  res.json(lesson);
});

// Get lessons by level
app.get("/api/lessons/level/:level", (req, res) => {
  const level = req.params.level.toLowerCase();
  const lessons = pashtoLessons.filter(l => l.level.toLowerCase() === level);
  
  if (lessons.length === 0) {
    return res.status(404).json({
      error: "No lessons found",
      message: `No lessons found for level: ${level}`
    });
  }
  
  res.json({
    level: level,
    total: lessons.length,
    lessons: lessons
  });
});

// Get lesson count by level
app.get("/api/stats", (req, res) => {
  const stats = {
    totalLessons: pashtoLessons.length,
    byLevel: {}
  };
  
  pashtoLessons.forEach(lesson => {
    if (!stats.byLevel[lesson.level]) {
      stats.byLevel[lesson.level] = 0;
    }
    stats.byLevel[lesson.level]++;
  });
  
  res.json(stats);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Total Pashto typing lessons: ${pashtoLessons.length}`);
  console.log(`Available endpoints:`);
  console.log(`  - GET /api/lessons (all lessons)`);
  console.log(`  - GET /api/lessons/:id (single lesson)`);
  console.log(`  - GET /api/lessons/level/:level (lessons by level)`);
  console.log(`  - GET /api/stats (lesson statistics)`);
});