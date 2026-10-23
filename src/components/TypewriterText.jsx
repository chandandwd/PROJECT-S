import { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 35, delay = 500, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span>
      {displayText}
      {started && displayText.length < text.length && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: 'var(--color-primary)',
            marginLeft: '2px',
            animation: 'twinkle 1s infinite',
            verticalAlign: 'text-bottom',
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default TypewriterText;
