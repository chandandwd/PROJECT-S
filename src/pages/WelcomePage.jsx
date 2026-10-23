import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';

const WelcomePage = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(true);
  };

  const handleSurprise = () => {
    navigate('/sorry');
  };

  return (
    <PageTransition>
      <div className="welcome-page">
        {/* Glowing heart */}
        <motion.div
          className="welcome-heart-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="welcome-heart" aria-hidden="true">❤️</div>
          <div className="welcome-pulse-ring" />
          <div className="welcome-pulse-ring" style={{ animationDelay: '0.5s' }} />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="welcome-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {config.herName}
        </motion.h1>

        {/* Heading */}
        <motion.h2
          className="welcome-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Hey, {config.petName} ❤️
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="welcome-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          I made something special for you. Every little part of this place comes from my heart.
        </motion.p>

        {/* Envelope */}
        <motion.div
          className="envelope-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          onClick={handleEnvelopeClick}
          role="button"
          aria-label="Open the envelope"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleEnvelopeClick()}
        >
          <div className={`envelope ${envelopeOpen ? 'open' : ''}`}>
            <div className="envelope-flap" />
            <div className="envelope-body" />
            <div className="envelope-letter">
              {envelopeOpen ? 'For you, with love ❤️' : ''}
            </div>
            <div className="envelope-heart">💌</div>
          </div>
          {!envelopeOpen && (
            <p style={{
              marginTop: '0.75rem',
              fontSize: '0.85rem',
              color: 'var(--color-secondary)',
              fontStyle: 'italic',
            }}>
              Tap to open
            </p>
          )}
        </motion.div>

        {/* Message after opening */}
        {envelopeOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ marginTop: '1.5rem', maxWidth: '450px' }}
          >
            <p style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.1rem',
              color: 'var(--color-dark)',
              lineHeight: '1.8',
              marginBottom: '2rem',
            }}>
              I know that a website can't say everything I feel, but I wanted to create a little space 
              where you can see just how much you mean to me. Take your time exploring it. ❤️
            </p>

            <motion.button
              className="btn-primary"
              onClick={handleSurprise}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={18} />
              Open Your Little Surprise ✨
            </motion.button>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          className="welcome-footer site-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Made with love, just for you. 💕
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default WelcomePage;
