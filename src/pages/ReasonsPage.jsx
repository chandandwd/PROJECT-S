import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';
import PageNavigation from '../components/PageNavigation';

const ReasonsPage = () => {
  const [revealedCards, setRevealedCards] = useState(new Set());

  const toggleCard = (id) => {
    setRevealedCards((prev) => {
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
          <h1 className="page-title">10 Reasons I Love You 💗</h1>
          <p className="page-subtitle" style={{ marginTop: '0.75rem' }}>
            Tap each card to reveal what makes you so special to me.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          {config.reasons.map((item, index) => {
            const isRevealed = revealedCards.has(item.id);
            return (
              <motion.div
                key={item.id}
                className={`reason-card ${isRevealed ? 'revealed' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                onClick={() => toggleCard(item.id)}
                role="button"
                tabIndex={0}
                aria-label={isRevealed ? item.reason : `Reveal reason ${item.id}`}
                onKeyDown={(e) => e.key === 'Enter' && toggleCard(item.id)}
              >
                <AnimatePresence mode="wait">
                  {!isRevealed ? (
                    <motion.div
                      key="hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      transition={{ duration: 0.3 }}
                      style={{ textAlign: 'center' }}
                    >
                      <div className="reason-number">{item.id}</div>
                      <p className="reason-tap">Tap to reveal ✨</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="shown"
                      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      style={{ textAlign: 'center' }}
                    >
                      <div className="reason-emoji">{item.emoji}</div>
                      <p className="reason-text">{item.reason}</p>
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
            fontSize: '1.1rem',
            color: 'var(--color-secondary)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {revealedCards.size === config.reasons.length
            ? 'You found them all! Every reason is true. 💕'
            : `${revealedCards.size} of ${config.reasons.length} reasons revealed`}
        </motion.p>

        <PageNavigation />
      </div>
    </PageTransition>
  );
};

export default ReasonsPage;
