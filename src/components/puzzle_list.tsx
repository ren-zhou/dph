import React from 'react';
import PuzzleItem from './puzzle_item';
import '../styles/puzzle_list.css';
import puzzles from '../data/puzzles/puzzles.yaml';
import { puzzle_num_solved } from '../utils/puzzle_store';

export default function PuzzleList() {
  const num_solved = puzzle_num_solved();

  return (
    <div>
      <div id="puzzle-list">
        {puzzles.map((puzzle) => <PuzzleItem key={puzzle.key} num_solved={num_solved} puzzle={puzzle} />)}
      </div>
    </div>
  );
}
