import React from 'react';

export default function SolvedBox({ answer }) {
  return (
    <div className="solved-box">
      <span className="solved-text">Solved: </span>
      <span className="solution">{ answer }</span>
    </div>
  );
}
