import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';
import TypewriterText from '../components/TypewriterText';
import PageNavigation from '../components/PageNavigation';

const flowers = ['🌸', '🌷', '💐', '🌺', '🌹'];
const flowerPositions = [
  { top: '5%', right: '5%', size: '1.5rem', delay: 0 },
  { top: '15%', left: '3%', size: '1.2rem', delay: 1 },
  { bottom: '25%', right: '8%', size: '1.3rem', delay: 2 },
  { bottom: '10%', left: '5%', size: '1.4rem', delay: 0.5 },
  { top: '40%', right: '2%', size: '1.1rem', delay: 1.5 },
];

const SorryPage = () => {
  const [typewriterDone, setTypewriterDone] = useState(false);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container" style={{ position: 'relative' }}>
        {/* Floating flowers */}
        {flowerPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="sorry-flowers"
            style={{
              ...pos,
              fontSize: pos.size,
              position: 'absolute',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: pos.delay, duration: 0.5 }}
            aria-hidden="true"
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              {flowers[i]}
            </motion.span>
          </motion.div>
        ))}

        {/* Title */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">I'm Sorry, My Love ❤️</h1>
          <p className="page-subtitle" style={{ marginTop: '0.75rem' }}>
            Please read this with an open heart. Every word is genuine.
          </p>
        </motion.div>

        {/* Letter */}
        <motion.div
          className="sorry-letter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Decorative hearts */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            fontSize: '1.2rem',
            opacity: 0.3,
          }} aria-hidden="true">
            💕
          </div>

          <div className="sorry-letter-text">
            <TypewriterText
              text={config.apologyMessage}
              speed={25}
              delay={800}
              onComplete={() => setTypewriterDone(true)}
            />
          </div>

          {/* Specific apology section */}
          {config.specificApology && (
            <motion.div
              className="sorry-specific"
              initial={{ opacity: 0 }}
              animate={{ opacity: typewriterDone ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>What I want you to know specifically:</h3>
              <p>{config.specificApology}</p>
              {config.whatIWillDoDifferently && (
                <>
                  <h3 style={{ marginTop: '1rem' }}>What I will do differently:</h3>
                  <p>{config.whatIWillDoDifferently}</p>
                </>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Continue button */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: typewriterDone ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="btn-primary"
            onClick={() => navigate('/memories')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            There's More I Want to Tell You
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <PageNavigation />
      </div>
    </PageTransition>
  );
};

export default SorryPage;
