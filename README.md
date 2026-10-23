# 💕 A Little World Made Just for Her

A beautiful, romantic, multi-page website — a personal love letter transformed into an interactive digital experience.

## ✨ Features

- **9 unique pages** — Welcome, Apology, Memories, Reasons I Love You, Care Reminders, Open When Letters, Love Story Timeline, Promises, and a Final Message
- **Beautiful animations** — Smooth page transitions, floating hearts, typewriter text, interactive cards
- **Fully responsive** — Looks beautiful on phones, tablets, and desktops
- **Personalization** — Edit a single config file to customize everything
- **No backend needed** — Runs entirely in the browser
- **Accessibility** — Keyboard navigation, reduced-motion support, ARIA labels

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will open at **http://localhost:3000**

## 🎨 How to Personalize

**Edit just ONE file:** `src/config/personalConfig.js`

This file contains everything you can customize:

| Setting | What to Edit |
|---------|-------------|
| `herName` | Her name or nickname |
| `yourName` | Your name |
| `petName` | A pet name you use for her |
| `anniversary` | Your anniversary date |
| `apologyMessage` | Your personal apology letter |
| `specificApology` | The specific thing you're apologizing for |
| `whatIWillDoDifferently` | What you'll change |
| `memories` | Your shared memories (add photos too!) |
| `reasons` | 10 reasons you love her |
| `letters` | "Open When" letter messages |
| `storyMilestones` | Your relationship timeline |
| `promises` | Your promises to her |
| `smallSteps` | Actionable commitments with checkboxes |
| `careMessages` | Care reminder messages |
| `smileMessages` | Random sweet messages |
| `finalMessage` | Your closing message |
| `backgroundMusic` | Path to a music file (optional) |

### Adding Photos

1. Place your photos in the `public/photos/` folder
2. Update the `image` field in the memories array:
   ```js
   image: "/photos/our-first-date.jpg"
   ```

### Adding Background Music

1. Place your music file in the `public/music/` folder
2. Update the config:
   ```js
   backgroundMusic: "/music/our-song.mp3"
   ```

## 📁 Project Structure

```
src/
├── config/
│   └── personalConfig.js    ← Edit this to personalize
├── components/
│   ├── FloatingHearts.jsx    — Background heart decorations
│   ├── FloatingPetals.jsx    — Animated falling petals
│   ├── MusicPlayer.jsx       — Floating music controls
│   ├── Navbar.jsx             — Navigation with progress bar
│   ├── PageNavigation.jsx     — Previous/Next buttons
│   ├── PageTransition.jsx     — Smooth page transitions
│   └── TypewriterText.jsx     — Typewriter text animation
├── pages/
│   ├── WelcomePage.jsx        — Landing page with envelope
│   ├── SorryPage.jsx          — Heartfelt apology
│   ├── MemoriesPage.jsx       — Photo memory gallery
│   ├── ReasonsPage.jsx        — 10 reasons I love you
│   ├── CarePage.jsx           — Care reminders
│   ├── LettersPage.jsx        — Open When letters
│   ├── StoryPage.jsx          — Love story timeline
│   ├── PromisesPage.jsx       — Promises & commitments
│   ├── FinalPage.jsx          — Final heartfelt message
│   └── NotFoundPage.jsx       — Custom 404 page
├── App.jsx
├── main.jsx
└── index.css
```

## 📱 Pages Overview

| # | Route | Page |
|---|-------|------|
| 1 | `/` | Welcome — Cinematic landing with animated envelope |
| 2 | `/sorry` | Apology — Typewriter letter with sincerity |
| 3 | `/memories` | Memories — Photo gallery with lightbox |
| 4 | `/reasons` | Reasons — Interactive reveal cards |
| 5 | `/care` | Care — Supportive reminder cards |
| 6 | `/letters` | Letters — "Open When" collection |
| 7 | `/story` | Story — Relationship timeline |
| 8 | `/promises` | Promises — Commitments with checkboxes |
| 9 | `/final` | Final — Closing message with response options |

## 🛠️ Tech Stack

- **React** + **Vite** — Fast development
- **React Router** — Client-side routing
- **Framer Motion** — Smooth animations
- **Lucide React** — Beautiful icons
- **Custom CSS** — Premium romantic design system

## ✅ Testing Checklist

- [ ] All 9 pages load without errors
- [ ] Navigation bar shows all pages
- [ ] Mobile menu opens/closes correctly
- [ ] Progress bar updates as you navigate
- [ ] Previous/Next buttons work on every page
- [ ] Envelope opens on Welcome page
- [ ] "Open Your Little Surprise" navigates to Sorry page
- [ ] Typewriter animation plays on Sorry page
- [ ] Memory cards open in lightbox
- [ ] All 10 reason cards reveal on click
- [ ] "Send Me a Little Smile" shows random messages
- [ ] All 7 letter envelopes open/close
- [ ] Timeline displays all milestones
- [ ] Promise checkboxes toggle and persist
- [ ] Final page options show responses
- [ ] 404 page works for unknown routes
- [ ] Site is responsive on mobile
- [ ] Reduced motion is respected
- [ ] No console errors

## 💝 Important Notes

- This website does **not** send any data to any server
- Her response on the final page is **not** tracked or stored remotely
- All checkbox progress is saved **only** in her browser's local storage
- No API keys, paid services, or backend required

---

*Made with love. ❤️*
