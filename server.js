const express = require("express");
const cors = require("cors");

const lessons = require("./lessons.json");       // ← ONE json file, all lessons
const data = require("./data.json");             // ← for step names + keyboard info

const app = express();
app.use(cors());
app.use(express.json());

const totalLessons = lessons.length;
const stepDefinitions = data.steps;
const totalSteps = stepDefinitions.length;
const stepNames = stepDefinitions.reduce((a, s) => (a[s.step] = s.name, a), {});

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --------------------------------------------- HOME
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pashto Typing Learning API",
    totalLessons,
    totalSteps,
    steps: stepNames,
  });
});

// --------------------------------------------- KEYBOARD
app.get("/api/keyboard", (req, res) => {
  res.json({
    success: true,
    keyboard: data.pashtoKeyboard,
    rows: data.keyboardRows,
    homeRow: {
      letters: data.homeRowLetters,
      leftHand: data.homeRowLeft,
      rightHand: data.homeRowRight,
      lessons: 100,
    },
    numbers: data.pashtoNumbers,
    symbols: data.symbols,
  });
});

// --------------------------------------------- LESSONS
app.get("/api/lessons", (req, res) => {
  res.json({ success: true, total: totalLessons, totalSteps, lessons });
});

app.get("/api/lessons/random", (req, res) => {
  res.json({ success: true, lesson: random(lessons) });
});

app.get("/api/lessons/step/:step", (req, res) => {
  const step = Number(req.params.step);
  const list = lessons.filter((l) => l.step === step);
  if (!list.length) return res.status(404).json({ success: false, message: "Step not found" });
  res.json({ success: true, step, stepName: stepNames[step], total: list.length, lessons: list });
});

app.get("/api/lessons/random/step/:step", (req, res) => {
  const step = Number(req.params.step);
  const list = lessons.filter((l) => l.step === step);
  if (!list.length) return res.status(404).json({ success: false, message: "Step not found" });
  res.json({ success: true, step, stepName: stepNames[step], lesson: random(list) });
});

app.get("/api/lessons/home-row", (req, res) => {
  const list = lessons.filter((l) => l.step === 5 && l.type.startsWith("home-row-"));
  res.json({ success: true, total: list.length, lessons: list });
});

app.get("/api/lessons/type/:type", (req, res) => {
  const list = lessons.filter((l) => l.type === req.params.type);
  if (!list.length) return res.status(404).json({ success: false, message: "No lessons" });
  res.json({ success: true, type: req.params.type, total: list.length, lessons: list });
});

app.get("/api/lessons/difficulty/:difficulty", (req, res) => {
  const list = lessons.filter((l) => l.difficulty === req.params.difficulty);
  if (!list.length) return res.status(404).json({ success: false, message: "No lessons" });
  res.json({ success: true, difficulty: req.params.difficulty, total: list.length, lessons: list });
});

app.get("/api/lessons/:id", (req, res) => {
  const lesson = lessons.find((l) => l.id === Number(req.params.id));
  if (!lesson) return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, lesson });
});

// --------------------------------------------- STEPS / STATS
app.get("/api/steps", (req, res) => {
  const steps = [];
  for (let s = 1; s <= totalSteps; s++) {
    const list = lessons.filter((l) => l.step === s);
    steps.push({
      step: s,
      name: stepNames[s],
      totalLessons: list.length,
      types: [...new Set(list.map((l) => l.type))],
    });
  }
  res.json({ success: true, totalSteps, steps });
});

app.get("/api/stats", (req, res) => {
  const statistics = [];
  for (let s = 1; s <= totalSteps; s++) {
    const list = lessons.filter((l) => l.step === s);
    statistics.push({
      step: s,
      name: stepNames[s],
      lessons: list.length,
      characters: list.reduce((t, l) => t + l.characterCount, 0),
      words: list.reduce((t, l) => t + l.wordCount, 0),
    });
  }
  res.json({ success: true, totalLessons, totalSteps, statistics });
});

app.get("/api/search", (req, res) => {
  const q = String(req.query.q || "").trim().toLowerCase();
  if (!q) return res.status(400).json({ success: false, message: "Provide ?q=" });
  const list = lessons.filter((l) => l.text.toLowerCase().includes(q) || l.title.toLowerCase().includes(q));
  res.json({ success: true, query: q, total: list.length, lessons: list });
});

app.use((req, res) => res.status(404).json({ success: false, message: "Not found" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Total lessons loaded from lessons.json: ${lessons.length}`);
  // fjksad
});
// fsda