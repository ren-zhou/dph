import { Chip } from '@mui/material';
import React from 'react';
import { puzzle_get_answer } from '../utils/puzzle_store';

export default function PuzzleCard({ name, puzzle_key }) {
  const answer = puzzle_get_answer(puzzle_key);
  return (
    <div className="puzzle-card">
      <div id={puzzle_key}>{name}</div>
      {answer != '' ? (
        <Chip label={answer} className="solution" size="small"/>
      ) : ''}
    </div>
  );
}
