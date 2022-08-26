import React from 'react';
import { Link } from 'gatsby';
import PuzzleCard from './puzzle_card';

export default function PuzzleItem({ puzzle, num_solved }) {
  const {
    obfuscation, unlock_req, key, index,
  } = puzzle;

  return (
    (num_solved >= unlock_req)
      ? (
        <Link to={`${key}`} className="puzzle-item unlocked">
          <div className="index">{index}</div>
          <PuzzleCard name={puzzle.name} puzzle_key={puzzle.key} />
        </Link>
      )
      : (
        <div className="puzzle-item locked">
          <div className="index">{index}</div>
          <div className="puzzle-card">{obfuscation}</div>
        </div>
      )
  );
}
