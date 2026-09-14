const fs = require("fs");
const path = require("path");

const data = require("./data.json");

const {
  pashtoLetters, keyboardRows, firstStepKeys,
  homeRowLetters, homeRowLeft, homeRowRight, homeRowCombinations,
  homeRowWords, homeRowPhrases, homeRowSentences,
  easyWords, phrases, sentences, longSentences,
  paragraphs, longTexts, stories, educationalTexts,
  steps: stepDefinitions,
} = data;

// ---------- helpers ----------
const repeat = (t, n) => Array(n).fill(t).join(" ");
const pick = (arr, start, count) =>
  Array.from({ length: count }, (_, i) => arr[(start + i) % arr.length]);

function makeLesson(id, step, type, title, text, difficulty) {
  const trimmed = String(text).trim();
  return {
    id,
    step,
    type,
    title,
    text,
    difficulty,
    language: "ps",
    characterCount: text.length,
    wordCount: trimmed ? trimmed.split(/\s+/).length : 0,
  };
}

// ---------- strategies ----------
const strategies = {
  "first-step": (i) => {
    const a = firstStepKeys[i % firstStepKeys.length];
    const b = firstStepKeys[(i + 1) % firstStepKeys.length];
    return { title: `د F او J تڼیو تمرین ${i + 1}`, text: repeat(`${a} ${b}`, 25) };
  },
  "two-letter": (i) => {
    const a = pashtoLetters[i % pashtoLetters.length];
    const b = pashtoLetters[(i + 1) % pashtoLetters.length];
    return { title: `د دوو تورو تمرین ${i + 1}`, text: repeat(a + b, 30) };
  },
  words: (i) => ({ title: `د کلمو تمرین ${i + 1}`, text: repeat(pick(easyWords, i, 8).join(" "), 3) }),
  phrases: (i) => ({ title: `د عبارتونو تمرین ${i + 1}`, text: repeat(pick(phrases, i, 6).join(" "), 3) }),

  "keyboard-rows": (i) => {
    if (i < 50) {
      let rowName, row;
      if (i < 17) { rowName = "پورته"; row = keyboardRows.top; }
      else if (i < 34) { rowName = "منځنی"; row = keyboardRows.home; }
      else { rowName = "لاندې"; row = keyboardRows.bottom; }

      const sel = [];
      for (let j = 0; j < 15; j++) sel.push(row[(i + j) % row.length]);

      return { type: "keyboard-row", difficulty: "medium",
        title: `د ${rowName} قطار تمرین ${i + 1}`,
        text: repeat(sel.join(""), 5) };
    }

    const k = i - 50;

    if (k < 20) {
      const letter = homeRowLetters[k % homeRowLetters.length];
      return { type: "home-row-letter", difficulty: "easy",
        title: `د منځني قطار د ${letter} توري تمرین ${k + 1}`,
        text: repeat(letter, 40 + (k % 15)) };
    }
    if (k < 40) {
      const index = k - 20;
      const c = homeRowCombinations[index % homeRowCombinations.length];
      return { type: "home-row-pair", difficulty: "easy",
        title: `د منځني قطار دوه توري ${index + 1}`,
        text: repeat(c, 30 + (index % 10)) };
    }
    if (k < 55) {
      const index = k - 40;
      const a = homeRowLetters[index % homeRowLetters.length];
      const b = homeRowLetters[(index + 3) % homeRowLetters.length];
      const c = homeRowLetters[(index + 6) % homeRowLetters.length];
      return { type: "home-row-triplet", difficulty: "easy",
        title: `د منځني قطار درې توري ${index + 1}`,
        text: repeat(a + b + c, 25 + (index % 10)) };
    }
    if (k < 65) {
      const index = k - 55;
      return { type: "home-row-left", difficulty: "easy",
        title: `د منځني قطار د چپ لاس تمرین ${index + 1}`,
        text: repeat(pick(homeRowLeft, index, 12).join(" "), 5) };
    }
    if (k < 75) {
      const index = k - 65;
      return { type: "home-row-right", difficulty: "easy",
        title: `د منځني قطار د ښي لاس تمرین ${index + 1}`,
        text: repeat(pick(homeRowRight, index, 12).join(" "), 5) };
    }
    if (k < 85) {
      const index = k - 75;
      const sel = [];
      for (let j = 0; j < 20; j++) {
        sel.push(homeRowLeft[(index + j) % homeRowLeft.length] +
                 homeRowRight[(index + j) % homeRowRight.length]);
      }
      return { type: "home-row-both-hands", difficulty: "medium",
        title: `د دواړو لاسونو منځني قطار تمرین ${index + 1}`,
        text: repeat(sel.join(" "), 4) };
    }
    if (k < 95) {
      const index = k - 85;
      return { type: "home-row-words", difficulty: "medium",
        title: `د منځني قطار کلمو تمرین ${index + 1}`,
        text: repeat(pick(homeRowWords, index, 10).join(" "), 4) };
    }
    {
      const index = k - 95;
      const phrase = homeRowPhrases[index % homeRowPhrases.length];
      const sentence = homeRowSentences[index % homeRowSentences.length];
      return { type: "home-row-final", difficulty: "hard",
        title: `د منځني قطار وروستی تمرین ${index + 1}`,
        text: repeat(phrase, 5) + "\n\n" + repeat(sentence, 3) };
    }
  },

  sentences: (i) => ({ title: `د جملو تمرین ${i + 1}`, text: repeat(pick(sentences, i, 5).join(" "), 2) }),
  "long-sentences": (i) => ({ title: `د اوږدو جملو تمرین ${i + 1}`, text: pick(longSentences, i, 4).join(" ") }),
  "mixed-words": (i) => ({ title: `د ګډو کلمو تمرین ${i + 1}`, text: pick(easyWords, i, 15).join(" ") }),
  "mixed-phrases": (i) => ({ title: `د ګډو عبارتونو تمرین ${i + 1}`, text: pick(phrases, i, 8).join(" ") }),
  "mixed-sentences": (i) => ({ title: `د ګډو جملو تمرین ${i + 1}`, text: pick(sentences, i, 6).join(" ") }),
  "long-text": (i) => ({ title: `د اوږده متن تمرین ${i + 1}`,
    text: longSentences[i % longSentences.length] + " " + paragraphs[i % paragraphs.length] }),
  paragraphs: (i) => ({ title: `د پراګراف تمرین ${i + 1}`, text: paragraphs[i % paragraphs.length] }),
  "mixed-paragraphs": (i) => ({ title: `د ګډ پراګراف تمرین ${i + 1}`,
    text: paragraphs[i % paragraphs.length] + "\n\n" + longSentences[i % longSentences.length] }),
  advanced: (i) => ({ title: `د پرمختللي ټایپ تمرین ${i + 1}`, text: pick(longSentences, i, 5).join(" ") }),
  "final-test": (i) => ({ title: `وروستی ټایپ ازموینه ${i + 1}`,
    text: paragraphs[i % paragraphs.length] + "\n\n" +
          longSentences[i % longSentences.length] + "\n\n" +
          sentences[i % sentences.length] }),
  "long-text-advanced": (i) => ({ title: `د اوږده متن پرمختللی تمرین ${i + 1}`, text: longTexts[i % longTexts.length] }),
  stories: (i) => ({ title: `د کیسې ټایپ تمرین ${i + 1}`, text: stories[i % stories.length] }),
  educational: (i) => ({ title: `د زده کړې متن تمرین ${i + 1}`, text: educationalTexts[i % educationalTexts.length] }),
  "mixed-long": (i) => ({ title: `د ګډ اوږده تمرین ${i + 1}`,
    text: [ easyWords[i % easyWords.length],
            phrases[i % phrases.length],
            sentences[i % sentences.length],
            longSentences[i % longSentences.length] ].join(" ") }),
  "final-long-test": (i) => ({ title: `وروستۍ اوږده ازموینه ${i + 1}`,
    text: easyWords[i % easyWords.length] + " " +
          phrases[i % phrases.length] + "\n\n" +
          sentences[i % sentences.length] + "\n\n" +
          longSentences[i % longSentences.length] + "\n\n" +
          paragraphs[i % paragraphs.length] }),
  "very-long-text": (i) => ({ title: `د ډېر اوږده متن وروستی تمرین ${i + 1}`,
    text: paragraphs[i % paragraphs.length] + "\n\n" +
          longSentences[i % longSentences.length] + "\n\n" +
          educationalTexts[i % educationalTexts.length] }),
};

// ---------- build all lessons into ONE array ----------
const lessons = [];
let id = 1;

for (const step of stepDefinitions) {
  const build = strategies[step.strategy];
  if (!build) throw new Error("Unknown strategy: " + step.strategy);

  for (let i = 0; i < step.count; i++) {
    const built = build(i);
    lessons.push(
      makeLesson(
        id++,
        step.step,
        built.type || step.type,
        built.title,
        built.text,
        built.difficulty || step.difficulty
      )
    );
  }
}

// ---------- write ONE json file ----------
const outputPath = path.join(__dirname, "lessons.json");
fs.writeFileSync(outputPath, JSON.stringify(lessons, null, 2), "utf8");

console.log(`✅ Wrote ${lessons.length} lessons to lessons.json`);