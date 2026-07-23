import React, { forwardRef } from 'react';

// Custom utility to split text for GSAP without requiring the premium SplitText plugin.
// Type can be 'words' or 'chars'
export const SplitText = forwardRef(({ text, type = 'words', className = '' }, ref) => {
  if (type === 'chars') {
    return (
      <span ref={ref} className={className} style={{ display: 'inline-block' }}>
        {text.split('').map((char, index) => (
          <span key={index} className="split-char" style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
            {char}
          </span>
        ))}
      </span>
    );
  }

  // Default to words
  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {text.split(' ').map((word, index) => (
        <span key={index} className="split-word" style={{ display: 'inline-block', overflow: 'hidden' }}>
          <span style={{ display: 'inline-block' }}>{word}&nbsp;</span>
        </span>
      ))}
    </span>
  );
});

SplitText.displayName = 'SplitText';
