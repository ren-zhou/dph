import React from 'react';

export default function PuzzleCard({ name, enc_answer, puzzle_key }) {
  const bcrypt = require('bcryptjs');
  const answer = localStorage.getItem(`puzzle_ans_${name}`) || '';
  const solved = bcrypt.compareSync(answer, enc_answer);

  return (
    <div className="puzzle-card">
      <div id={puzzle_key}>{name}</div>
      {solved ? (
        <div className="solution">
          Solution:
          {' '}
          {answer}
        </div>
      ) : ''}
    </div>
  );
}
