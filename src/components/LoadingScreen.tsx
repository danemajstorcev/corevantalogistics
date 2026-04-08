import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onDone: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onDone }) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 28);

    // Phase timeline
    const holdTimer  = setTimeout(() => setPhase('hold'), 400);
    const exitTimer  = setTimeout(() => setPhase('exit'), 2000);
    const doneTimer  = setTimeout(() => onDone(), 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`loader loader--${phase}`}>
      {/* Background particles */}
      <div className="loader__particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="loader__particle" style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      {/* Glow ring */}
      <div className="loader__ring">
        <div className="loader__ring-inner" />
      </div>

      {/* Logo */}
      <div className="loader__logo-wrap">
        <img
          src="/logo.png"
          alt="Corevanta Logistics"
          className="loader__logo"
          draggable={false}
        />
      </div>

      {/* Tagline */}
      <div className="loader__tagline">
        <span>P</span><span>R</span><span>E</span><span>C</span><span>I</span>
        <span>S</span><span>I</span><span>O</span><span>N</span>
        <span className="loader__dot">.</span>
        &nbsp;
        <span>R</span><span>E</span><span>L</span><span>I</span><span>A</span>
        <span>B</span><span>I</span><span>L</span><span>I</span><span>T</span><span>Y</span>
        <span className="loader__dot">.</span>
        &nbsp;
        <span>F</span><span>O</span><span>R</span><span>W</span><span>A</span><span>R</span><span>D</span>
        <span className="loader__dot">.</span>
      </div>

      {/* Progress bar */}
      <div className="loader__bar-wrap">
        <div className="loader__bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
