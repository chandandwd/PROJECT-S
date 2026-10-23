import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Heart } from 'lucide-react';
import config from '../config/personalConfig';
import PageTransition from '../components/PageTransition';
import PageNavigation from '../components/PageNavigation';

const STORAGE_KEY = 'love-website-steps';

const PromisesPage = () => {
  const [steps, setSteps] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return config.smallSteps;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(steps));
    } catch {}
  }, [steps]);

  const toggleStep = (id) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === id ? { ...step, done: !step.done } : step
      )
    );
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
          <h1 className="page-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            I Don't Just Want to Say Sorry.{' '}
            <span style={{ display: 'block', color: 'var(--color-primary)' }}>
              I Want to Do Better.
            </span>
          </h1>
          <p className="page-subtitle" style={{ marginTop: '0.75rem' }}>
            These are my sincere promises to you. Not just words, but commitments I hold myself to.
          </p>
        </motion.div>

        {/* Promises */}
        <div className="promises-list">
          {config.promises.map((promise, index) => (
            <motion.div
              key={index}
              className="promise-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="promise-icon" aria-hidden="true">
                <Heart size={16} fill="white" />
              </div>
              <p className="promise-text">{promise}</p>
            </motion.div>
          ))}
        </div>

        {/* Small Steps */}
        <motion.div
          className="small-steps"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="glass-card">
            <h3 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: 'var(--color-dark)',
            }}>
              Small Steps I Want to Take 🌱
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--color-secondary)',
              marginBottom: '1rem',
            }}>
              These checkboxes save locally in your browser. Check them off as I follow through.
            </p>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="step-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.08 }}
              >
                <div
                  className={`step-checkbox ${step.done ? 'checked' : ''}`}
                  onClick={() => toggleStep(step.id)}
                  role="checkbox"
                  aria-checked={step.done}
                  aria-label={step.text}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleStep(step.id)}
                >
                  {step.done && <Check size={14} />}
                </div>
                <span className={`step-text ${step.done ? 'completed' : ''}`}>
                  {step.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <PageNavigation />
      </div>
    </PageTransition>
  );
};

export default PromisesPage;
