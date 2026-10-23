import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';
import PageNavigation from '../components/PageNavigation';

const responses = {
  read: {
    emoji: '💌',
    message: "Thank you for reading this. That alone means so much to me. There's no pressure, no expectation — just my love for you, whenever you're ready. 💕",
  },
  time: {
    emoji: '🤍',
    message: "I completely understand. Take all the time you need. I'll be here, patiently and lovingly, whenever you're ready. Your pace is the right pace. 🌙",
  },
  talk: {
    emoji: '💗',
    message: "I would love that. Whenever you're ready to talk, I'll be here to listen with all my heart. No judgment, no pressure — just us. 💗",
  },
};

const FinalPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <PageTransition>
      <div className="page-container final-page">
        {/* Floating petals decoration */}
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            style={{
              position: 'fixed',
              left: `${10 + i * 18}%`,
              top: '-5%',
              fontSize: '1.2rem',
              opacity: 0.2,
              zIndex: 0,
              pointerEvents: 'none',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, 30 * (i % 2 === 0 ? 1 : -1)],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear',
            }}
            aria-hidden="true"
          >
            🌸
          </motion.span>
        ))}

        {/* Glowing heart */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="final-heart" aria-hidden="true">❤️</div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ marginBottom: '1rem' }}
        >
          You Mean More to Me Than These Words Can Explain.
        </motion.h1>

        {/* Message */}
        <motion.div
          className="final-message"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {config.finalMessage.split('\n\n').map((paragraph, i) => (
            <p key={i} style={{ marginBottom: i < config.finalMessage.split('\n\n').length - 1 ? '1.25rem' : 0 }}>
              {paragraph}
            </p>
          ))}
          <div className="final-signature">
            With all my heart, ❤️<br />
            {config.yourName}
          </div>
        </motion.div>

        {/* Options */}
        <AnimatePresence mode="wait">
          {!selectedOption ? (
            <motion.div
              className="final-options"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <motion.button
                className="final-option-btn"
                style={{
                  background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)',
                  color: 'var(--color-dark)',
                  border: '1.5px solid rgba(232, 86, 127, 0.2)',
                }}
                onClick={() => setSelectedOption('read')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                I Read Your Message 💌
              </motion.button>
              <motion.button
                className="final-option-btn"
                style={{
                  background: 'linear-gradient(135deg, #f3f0ff, #ede9fe)',
                  color: 'var(--color-dark)',
                  border: '1.5px solid rgba(196, 181, 212, 0.3)',
                }}
                onClick={() => setSelectedOption('time')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                I Need Some Time 🤍
              </motion.button>
              <motion.button
                className="final-option-btn"
                style={{
                  background: 'linear-gradient(135deg, #fce7f3, #ede9fe)',
                  color: 'var(--color-dark)',
                  border: '1.5px solid rgba(232, 86, 127, 0.15)',
                }}
                onClick={() => setSelectedOption('talk')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                I'd Like to Talk 💗
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              className="final-response"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {responses[selectedOption].emoji}
              </div>
              <p>{responses[selectedOption].message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <PageNavigation />

        {/* Footer */}
        <div className="site-footer" style={{ marginTop: '2rem' }}>
          Made with love, just for you. 💕
        </div>
      </div>
    </PageTransition>
  );
};

export default FinalPage;
