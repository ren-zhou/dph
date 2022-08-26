import puzzles from '../data/puzzles/puzzles.yaml';
import type { Puzzle } from '../components/types/puzzle';

const bcrypt = require('bcryptjs');
const store = require('store');

export function puzzle_num_solved(): number {
  return puzzles.filter((puzzle) => puzzle_get_answer(puzzle.key) != '').length - 1;
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
  const answer = store.get(`puzzle_ans_${puzzle_key}`) || '';
  return bcrypt.compareSync(answer, puzzle.enc_answer) ? answer : '';
}

// 0: incorrect answer
// 1: correct answer
// 2: correct partial
// -1: correct answer already set
// -2: puzzle not found
export function puzzle_submit_answer(puzzle_key: string, answer: string): number {
  answer = answer.toLowerCase().replace(/[^a-z]+/g, '');
  const puzzle = puzzle_get(puzzle_key);
  if (puzzle == null) return -2;

  if (puzzle_get_answer(puzzle_key) != '') {
    return -1;
  }

  if (bcrypt.compareSync(answer, puzzle.enc_answer)) {
    store.set(`puzzle_ans_${puzzle_key}`, answer);
    return 1;
  }

  if (verify_partials(puzzle, answer)) return 2;
  return 0;
}

function verify_partials(puzzle: Puzzle, answer: string): boolean {
  return puzzle.partials.some((partial) => bcrypt.compareSync(answer, partial))
}
