import React, { useEffect, useState } from 'react';

const TradingChart: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Generate a realistic uptrending trading chart path
  const points = [
    [0, 70], [5, 65], [10, 72], [15, 60], [20, 55], [25, 62],
    [30, 50], [35, 45], [40, 52], [45, 40], [50, 35], [55, 42],
    [60, 30], [65, 25], [70, 32], [75, 20], [80, 15], [85, 22],
    [90, 12], [95, 8], [100, 5]
  ];

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`)
    .join(' ');

  const areaPath = pathData + ' L 100 80 L 0 80 Z';

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E8BFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2E8BFF" stopOpacity="0" />
          </linearGradient>
          <clipPath id="chartClip">
            <rect x="0" y="0" width={progress} height="80" />
          </clipPath>
        </defs>
        
        {/* Grid lines */}
        {[20, 40, 60].map(y => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#1E2330" strokeWidth="0.3" />
        ))}
        {[20, 40, 60, 80].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="80" stroke="#1E2330" strokeWidth="0.3" />
        ))}

        {/* Area fill */}
        <path
          d={areaPath}
          fill="url(#chartGradient)"
          clipPath="url(#chartClip)"
        />

        {/* Main line */}
        <path
          d={pathData}
          fill="none"
          stroke="#2E8BFF"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          clipPath="url(#chartClip)"
        />

        {/* Glow line */}
        <path
          d={pathData}
          fill="none"
          stroke="#5BA4FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
          clipPath="url(#chartClip)"
          filter="url(#glow)"
        />

        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default TradingChart;
