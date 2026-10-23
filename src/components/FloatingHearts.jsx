import { useEffect, useMemo } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 12 + Math.random() * 16,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 6,
      opacity: 0.08 + Math.random() * 0.12,
    }));
  }, []);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            top: h.top,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          <Heart size={h.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
