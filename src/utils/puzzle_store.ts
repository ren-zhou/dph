import puzzles from '../data/puzzles/puzzles.yaml';
import type { Puzzle } from '../components/types/puzzle';

const bcrypt = require('bcryptjs');

export function puzzle_num_solved(): number {
  // console.log(puzzles.forEach((puzzle) => {puzzle_get_answeer_puzzle.key}))
  return puzzles.filter((puzzle) => puzzle_get_answer(puzzle.key) != '').length;
}

export function puzzle_get(puzzle_key: string): Puzzle | null {
  const matches = puzzles.filter((puzzle) => puzzle.key == puzzle_key);
  if (matches.length != 1) {
    return null;
  }
  return matches[0];
}

export function puzzle_get_answer(puzzle_key: string): string {
  const puzzle = puzzle_get(puzzle_key);
  if (puzzle == null) return '';
  const answer = localStorage.getItem(`puzzle_ans_${puzzle_key}`) || '';
  return bcrypt.compareSync(answer, puzzle.enc_answer) ? answer : '';
}

// 0: incorrect answer
// 1: correct answer
// -1: correct answer already set
// -2: puzzle not found
export function puzzle_submit_answer(puzzle_key: string, answer: string): number {
  const puzzle = puzzle_get(puzzle_key);
  if (puzzle == null) return -2;

  if (puzzle_get_answer(puzzle_key) != '') {
    return -1;
  }
  if (bcrypt.compareSync(answer, puzzle.enc_answer)) {
    localStorage.setItem(`puzzle_ans_${puzzle_key}`, answer);
    return 1;
  }
  return 0;
}
