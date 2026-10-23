import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen } from 'lucide-react';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';
import PageNavigation from '../components/PageNavigation';

const LettersPage = () => {
  const [openLetters, setOpenLetters] = useState(new Set());

  const toggleLetter = (id) => {
    setOpenLetters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <PageTransition>
      <div className="page-container">
        {/* Title */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Open When You Need Me 💌</h1>
          <p className="page-subtitle" style={{ marginTop: '0.75rem' }}>
            A little collection of letters, waiting for when you need them most.
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="letters-grid">
          {config.letters.map((letter, index) => {
            const isOpen = openLetters.has(letter.id);
            return (
              <motion.div
                key={letter.id}
                className="letter-envelope"
                style={{ 
                  background: isOpen 
                    ? `linear-gradient(135deg, ${letter.color}cc, ${letter.color}88)` 
                    : letter.color,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
                onClick={() => toggleLetter(letter.id)}
                role="button"
                tabIndex={0}
                aria-label={`${letter.title} - ${isOpen ? 'Close' : 'Open'} letter`}
                onKeyDown={(e) => e.key === 'Enter' && toggleLetter(letter.id)}
              >
                <div className="letter-emoji" aria-hidden="true">
                  {letter.emoji}
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--color-secondary)',
                }}>
                  {isOpen ? <MailOpen size={16} /> : <Mail size={16} />}
                </div>
                <h3 className="letter-title">{letter.title}</h3>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="letter-opened-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="letter-opened-text">{letter.message}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Counter */}
        <motion.p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.05rem',
            color: 'var(--color-secondary)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {openLetters.size === 0
            ? 'Tap any envelope to open it 💌'
            : openLetters.size === config.letters.length
            ? 'You opened them all. I hope they brought you comfort. 💕'
            : `${openLetters.size} of ${config.letters.length} letters opened`}
        </motion.p>

        <PageNavigation />
      </div>
    </PageTransition>
  );
};

export default LettersPage;
