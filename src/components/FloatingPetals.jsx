import { useMemo } from 'react';

const FloatingPetals = ({ count = 8 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 10,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      opacity: 0.12 + Math.random() * 0.15,
      color: ['#f4a0b8', '#e8567f', '#c4b5d4', '#fce7f3'][Math.floor(Math.random() * 4)],
    }));
  }, [count]);

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
