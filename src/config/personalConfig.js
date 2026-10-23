// ═══════════════════════════════════════════════════════════════════════════════
// 💝 PERSONALIZATION CONFIG — Edit this file to customize your entire website
// ═══════════════════════════════════════════════════════════════════════════════
// 
// This is the ONLY file you need to edit to personalize the website.
// Replace all placeholder values below with your own details.
// Lines marked with "✏️ EDIT" are the ones you should change.
//
// ═══════════════════════════════════════════════════════════════════════════════

const config = {

  // ─── Names ─────────────────────────────────────────────────────────────────
  herName: "Sneha",                    // ✏️ EDIT: Her name or nickname
  yourName: "Chandan",                 // ✏️ EDIT: Your name
  petName: "Madam",         // ✏️ EDIT: A pet name you use for her

  // ─── Apology ───────────────────────────────────────────────────────────────
  specificApology: "I know I hurt you, and I take full responsibility for my actions. I should have been more thoughtful and considerate of your feelings.", // ✏️ EDIT: Your specific apology
  whatIWillDoDifferently: "I will be more mindful of how my words and actions affect you. I will listen more carefully and communicate with more patience and empathy.", // ✏️ EDIT: What you'll change

  // ─── Apology Letter ───────────────────────────────────────────────────────
  apologyMessage: `I know that I may have hurt you, and I'm genuinely sorry for the pain I caused. You mean so much to me, and the last thing I ever want is to make you feel unimportant or unheard. I know that saying sorry cannot magically fix everything, and I don't expect you to forget your feelings just because I apologized.

I want to understand your perspective, take responsibility for my mistakes, and become better through my actions, not just my words. Your feelings matter to me. You deserve patience, honesty, respect, and care.

I'm sorry for the moments when I fell short. I love you, and I'm willing to listen, learn, and give you the time and space you need.`,

  // ─── Pictures (Our Favorite Photos) ─────────────────────────────────────────
  pictures: [
    {
      id: 1,
      src: "/pictures/photo1.jpg",
      alt: "Sunset walks together",
    },
    {
      id: 2,
      src: "/pictures/photo2.jpg",
      alt: "Cozy cafe moments",
    },
    {
      id: 3,
      src: "/pictures/photo3.jpg",
      alt: "Delicate pink roses",
    },
    {
      id: 4,
      src: "/pictures/photo4.jpg",
      alt: "Stargazing under the night sky",
    },
    {
      id: 5,
      src: "/pictures/photo5.jpg",
      alt: "Walking under blooming cherry blossoms",
    },
    {
      id: 6,
      src: "/pictures/photo6.jpg",
      alt: "Fairy lights and warm cozy memories",
    },
  ],

  // ─── 10 Reasons I Love You ─────────────────────────────────────────────────
  reasons: [
    { id: 1, emoji: "😊", reason: "Your smile makes my day better." },
    { id: 2, emoji: "✨", reason: "You make ordinary moments feel special." },
    { id: 3, emoji: "💬", reason: "I love the way you express yourself." },
    { id: 4, emoji: "🌟", reason: "Your happiness matters to me." },
    { id: 5, emoji: "💪", reason: "I admire your strength." },
    { id: 6, emoji: "🦋", reason: "I love the little things that make you uniquely you." },
    { id: 7, emoji: "🌱", reason: "You inspire me to grow." },
    { id: 8, emoji: "💭", reason: "I love sharing my thoughts with you." },
    { id: 9, emoji: "📸", reason: "You make beautiful memories with me." },
    { id: 10, emoji: "💗", reason: "Because you're you, and that's special enough." },
  ],
  // ✏️ EDIT: Replace each reason with your own genuine personal reasons

  // ─── Care Reminders ────────────────────────────────────────────────────────
  careMessages: [
    "Please take care of yourself, even on the days when life feels difficult.",
    "You deserve rest without feeling guilty.",
    "Your feelings are important, even when you don't know how to explain them.",
    "Please remember to eat, drink water, and give yourself time to breathe.",
    "You don't have to be strong every single moment.",
    "I want to support you, listen to you, and understand you better.",
    "You deserve love that makes you feel safe, respected, and appreciated.",
  ],

  // ─── Sweet Smile Messages (random reveals) ────────────────────────────────
  smileMessages: [
    "You're the reason I believe in beautiful things. 🌸",
    "If I could, I'd give you all the stars. ⭐",
    "You make the world softer just by being in it. 🌷",
    "I hope you smiled just now. That's all I wanted. 😊",
    "You're doing amazing, even when you don't realize it. 💗",
    "The world is better because you're in it. 🌙",
    "You deserve every bit of happiness coming your way. ✨",
    "I'm grateful for you, today and always. 💕",
  ],

  // ─── Open When Letters ─────────────────────────────────────────────────────
  letters: [
    {
      id: 1,
      title: "Open When You're Sad",
      emoji: "😢",
      color: "#E8D5E0",
      message: "I know that some days feel heavier than others. I just want you to know that it's okay to feel what you're feeling. You don't have to hide it or rush through it. I'm here, even when I can't fix everything. Your sadness matters, and so do you. Take your time, breathe, and know that brighter moments are waiting for you. 💕",
    },
    {
      id: 2,
      title: "Open When You've Had a Difficult Day",
      emoji: "😔",
      color: "#D5E0E8",
      message: "Today might have been exhausting, frustrating, or just too much. I want you to know that it's okay to not be okay. Tomorrow is a fresh start, and you're strong enough to face it. But tonight, just rest. You've already done enough. I'm proud of you. 🌙",
    },
    {
      id: 3,
      title: "Open When You Need a Smile",
      emoji: "😊",
      color: "#E8E5D5",
      message: "Hey you! Yes, you. The beautiful human reading this. I just wanted to remind you that you have the most wonderful smile, and the world lights up a little every time you use it. So here's a virtual hug and a reminder: you're amazing, you're loved, and you're enough. Now smile for me? 😊✨",
    },
    {
      id: 4,
      title: "Open When You Miss Me",
      emoji: "💭",
      color: "#E0D5E8",
      message: "If you're reading this, it means you miss me, and honestly, that makes my heart so full. I want you to know that no matter the distance or the silence, you're always on my mind. Close your eyes and imagine us together — laughing, talking, being us. I'm always just a message away. 💗",
    },
    {
      id: 5,
      title: "Open When You Feel Unappreciated",
      emoji: "🥺",
      color: "#D5E8D8",
      message: "I'm sorry if anyone ever made you feel like you weren't enough. You are. You are thoughtful, kind, strong, and incredibly valuable. Your efforts matter, your presence matters, and you deserve to be seen, heard, and appreciated every single day. Don't let anyone dim your light. 🌟",
    },
    {
      id: 6,
      title: "Open When You Need Encouragement",
      emoji: "💪",
      color: "#E8D8D5",
      message: "Whatever you're going through right now, I believe in you. You've faced hard things before and you've come through every single time. This is no different. Take it one step at a time, be patient with yourself, and remember — you are far more capable than you give yourself credit for. I'm cheering for you, always. 🌈",
    },
    {
      id: 7,
      title: "Open When You Want to Remember How Special You Are",
      emoji: "👑",
      color: "#F0E6D5",
      message: "In case no one has told you lately: you are special. Not in a generic, greeting-card way, but in a real, genuine, you-are-one-of-a-kind way. The way you think, the way you care, the way you love — it's all uniquely, beautifully you. Never forget how rare and precious that is. 💎",
    },
  ],
  // ✏️ EDIT: Replace each letter message with your own heartfelt words

  // ─── Love Story Timeline ──────────────────────────────────────────────────
  storyMilestones: [
    {
      id: 1,
      date: "Placeholder Date",         // ✏️ EDIT
      title: "When We First Met",       // ✏️ EDIT
      description: "Add your own story of how you two first met. This is a placeholder.", // ✏️ EDIT
      icon: "heart",
      placeholder: true,
    },
    {
      id: 2,
      date: "Placeholder Date",
      title: "Our First Conversation",
      description: "Add your own story of your first real conversation. This is a placeholder.",
      icon: "messageCircle",
      placeholder: true,
    },
    {
      id: 3,
      date: "Placeholder Date",
      title: "A Moment That Made Us Laugh",
      description: "Add a funny or joyful memory you both share. This is a placeholder.",
      icon: "smile",
      placeholder: true,
    },
    {
      id: 4,
      date: "Placeholder Date",
      title: "A Memory I'll Always Cherish",
      description: "Add a memory that you hold close to your heart. This is a placeholder.",
      icon: "star",
      placeholder: true,
    },
    {
      id: 5,
      date: "Placeholder Date",
      title: "What I Appreciate About You Today",
      description: "Write about what you appreciate about her right now. This is a placeholder.",
      icon: "sparkles",
      placeholder: true,
    },
    {
      id: 6,
      date: "Looking Forward",
      title: "The Partner I Want to Become",
      description: "Write about the kind of partner you aspire to be. This is a placeholder.",
      icon: "sunrise",
      placeholder: true,
    },
  ],

  // ─── Promises ──────────────────────────────────────────────────────────────
  promises: [
    "I will listen instead of immediately defending myself.",
    "I will try to understand your feelings instead of dismissing them.",
    "I will communicate honestly and respectfully.",
    "I will take responsibility when I make mistakes.",
    "I will respect your boundaries and your need for space.",
    "I will work on the behavior that hurt you.",
    "I will show care consistently through my actions.",
  ],
  // ✏️ EDIT: Add or replace promises with your own

  // ─── Small Steps (editable commitments with checkboxes) ────────────────────
  smallSteps: [
    { id: 1, text: "Check in with her feelings before reacting.", done: false },
    { id: 2, text: "Practice active listening during conversations.", done: false },
    { id: 3, text: "Write her a thoughtful message at least once a week.", done: false },
    { id: 4, text: "Be more patient when disagreements arise.", done: false },
    { id: 5, text: "Show appreciation for the little things she does.", done: false },
  ],
  // ✏️ EDIT: Replace with your own specific steps

  // ─── Final Message ─────────────────────────────────────────────────────────
  finalMessage: `I'm sorry for the moments when I hurt you. I'm grateful for the happiness we've shared, and I care about you far more than I sometimes know how to express.

I don't expect one website or one apology to make everything right. I just wanted to remind you that your feelings matter, your happiness matters, and you matter to me.

I want to keep learning how to love you better—with patience, honesty, respect, and genuine care.

Take all the time you need. Whenever you're ready, I'd love to listen to you.`,

  // ─── Music ─────────────────────────────────────────────────────────────────
  backgroundMusic: null,                 // ✏️ EDIT: Path to music file e.g. "/music/song.mp3"
  // Place your music file in the public/music/ folder

  // ─── Theme Colors (optional overrides) ─────────────────────────────────────
  theme: {
    primary: "#e8567f",       // Rose pink
    secondary: "#c084a0",     // Muted mauve
    accent: "#f4a0b8",        // Soft blush
    lavender: "#c4b5d4",      // Lavender
    cream: "#fdf6f0",         // Warm cream
    dark: "#2d1f2f",          // Deep plum (text)
    cardBg: "rgba(255, 255, 255, 0.65)",
    gradientStart: "#fdf2f8",
    gradientEnd: "#ede9fe",
  },
};

export default config;
