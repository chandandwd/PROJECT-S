import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower2, Sun, Droplets, Shield, Ear, Sparkles } from 'lucide-react';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';
import PageNavigation from '../components/PageNavigation';

const careIcons = [
  <Heart size={20} />,
  <Sun size={20} />,
  <Sparkles size={20} />,
  <Droplets size={20} />,
  <Shield size={20} />,
  <Ear size={20} />,
  <Flower2 size={20} />,
];

const careEmojis = ['🌸', '☀️', '🦋', '💧', '🌿', '👂', '🌷'];

const CarePage = () => {
  const [smileMessage, setSmileMessage] = useState(null);
  const [smileIndex, setSmileIndex] = useState(-1);

  const revealSmile = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * config.smileMessages.length);
    } while (newIndex === smileIndex && config.smileMessages.length > 1);
    setSmileIndex(newIndex);
    setSmileMessage(config.smileMessages[newIndex]);
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
          <h1 className="page-title">A Little Reminder of My Care 🌷</h1>
          <p className="page-subtitle" style={{ marginTop: '0.75rem' }}>
            Because you deserve to hear these things as often as possible.
          </p>
        </motion.div>

        {/* Care Cards */}
        <div className="care-cards">
          {config.careMessages.map((msg, index) => (
            <motion.div
              key={index}
              className="care-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.12, duration: 0.5 }}
            >
              <div className="care-card-icon" aria-hidden="true">
                {careEmojis[index % careEmojis.length]}
              </div>
              <p className="care-card-text">{msg}</p>
            </motion.div>
          ))}
        </div>

        {/* Smile Button */}
        <motion.div
          className="smile-reveal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            className="btn-primary"
            onClick={revealSmile}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles size={18} />
            Send Me a Little Smile 😊
          </motion.button>

          <AnimatePresence mode="wait">
            {smileMessage && (
              <motion.div
                key={smileIndex}
                className="smile-message"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {smileMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <PageNavigation />
      </div>
    </PageTransition>
  );
};

export default CarePage;
