'use client';

import React, { useState } from 'react';

const QuizEmbed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '635px' }}>
      {isLoading && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '635px', // Matches the minimum iframe height
            backgroundColor: '#f8f9fa', // Light gray background
            color: '#0070f3', // Blue text
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Quiz is loading...
        </div>
      )}
      <iframe
        src="https://quizizz.com/embed/quiz/677a3dda4240a91e1b9291f9"
        title="Quizizz Quiz"
        style={{ flex: 1 }}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
        onLoad={() => setIsLoading(false)} // Remove fallback when iframe loads
      ></iframe>
      <a
        href="https://quizizz.com/admin?source=embedFrame"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: '#0070f3' }}
      >
        Quizizz Admin Dashboard
      </a>
    </div>
  );
};

export default QuizEmbed;
