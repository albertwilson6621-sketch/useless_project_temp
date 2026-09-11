const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const OPENERS = [
  "I’m sorry I’m late, but",
  "You won’t believe this, but",
  "I know it looks bad, but",
  "Technically it’s not my fault because",
  "I swear this is true:",
];

const SUBJECTS = [
  "my neighbor",
  "a determined pigeon",
  "my left shoe",
  "the Wi-Fi router",
  "a rogue auto-rickshaw",
  "my coffee mug",
  "the college cat",
  "a WhatsApp forward",
];

const ACTIONS = [
  "started a philosophical debate",
  "hid my keys",
  "chased me for three blocks",
  "updated its terms of service",
  "formed an emotional attachment to me",
  "refused to start",
  "demanded a snack break",
  "sent me to the wrong building",
];

const CLOSERS = [
  "and now I need a minute to recover.",
  "so I had to document it for evidence.",
  "and the crowd wouldn’t let me leave.",
  "so I’m basically a hero for making it at all.",
  "and I’m still processing the trauma.",
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {
  return `${pick(OPENERS)} ${pick(SUBJECTS)} ${pick(ACTIONS)}, ${pick(CLOSERS)}`;
}

app.get('/api/excuse', (req, res) => {
  res.json({ excuse: generateExcuse() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Excuse server running at http://localhost:${PORT}`);
});
