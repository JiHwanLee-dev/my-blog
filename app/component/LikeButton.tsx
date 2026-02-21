'use client';  // ← 이 한 줄이 핵심!

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#ff4757',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      ❤️ 좋아요 {likes}
    </button>
  );
}