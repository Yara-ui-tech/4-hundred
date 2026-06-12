import React from 'react';

interface LogoProps {
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ light = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: {
      svg: 'w-12 h-9',
      title: 'text-sm tracking-[0.25em]',
      subtitle: 'text-[6px] tracking-[0.1em]',
    },
    md: {
      svg: 'w-24 h-16',
      title: 'text-base md:text-lg tracking-[0.3em]',
      subtitle: 'text-[8px] md:text-[9px] tracking-[0.18em]',
    },
    lg: {
      svg: 'w-36 h-24',
      title: 'text-2xl md:text-3xl tracking-[0.35em]',
      subtitle: 'text-[10px] md:text-[11px] tracking-[0.22em]',
    }
  };

  const classes = sizeClasses[size];
  const textColor = light ? 'text-white' : 'text-brand-dark';
  const logoGoldHex = '#c5a880'; // brand gold
  const activeColor = light ? logoGoldHex : '#0b0c0d';

  return (
    <div className={`flex flex-col items-center justify-center text-center ${textColor}`}>
      {/* High-Fidelity SVG Emblem matching the uploaded design */}
      <div className={`relative select-none ${classes.svg} mb-2`}>
        <svg 
          viewBox="0 0 100 80" 
          width="100%" 
          height="100%" 
          fill={activeColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main vertical shaft of 4 */}
          <path d="M46 15 C46 18 47 20 48 22 L48 62 C48 65 49 67 52 67 C53 67 54 67 55 67 L55 69 L38 69 L38 67 C41 67 42 65 42 62 L42 22 C42 20 42 18 40 15 Z" />
          
          {/* Left diagonal part of 4 */}
          <path d="M42 24 L16 54 L42 54 Z" />
          
          {/* Horizontal crossbar of 4 */}
          <path d="M10 54 L58 54 L58 52 L10 52 Z" />
          
          {/* Bridge connector between 4 and 1/H */}
          <path d="M52 46 L68 46 L68 49 L52 49 Z" />
          
          {/* Shaft of adjacent 1 / H column */}
          <path d="M66 36 C66 38 67 40 68 42 L68 62 C68 65 69 67 72 67 C73 67 74 67 75 67 L75 69 L58 69 L58 67 C61 67 62 65 62 62 L62 42 C62 40 62 38 60 36 Z" />
        </svg>
      </div>
      
      {/* Main Text */}
      <h1 className={`font-serif font-medium uppercase tracking-widest ${classes.title} mt-1 ${light ? 'text-white' : 'text-brand-dark'}`}>
        FOUR HUNDRED
      </h1>

      {/* Slogan */}
      <div className="flex items-center justify-center w-full mt-1">
        <span className={`h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent ${light ? 'to-brand-gold/60' : 'to-brand-bronze/60'} mr-2`} />
        <span className={`font-sans font-light uppercase tracking-wider ${classes.subtitle} ${light ? 'text-brand-gray-light/80' : 'text-brand-slate/80'}`}>
          SKILLED TRADES. BUILT TO LAST.
        </span>
        <span className={`h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent ${light ? 'to-brand-gold/60' : 'to-brand-bronze/60'} ml-2`} />
      </div>
    </div>
  );
}
