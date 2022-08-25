import React from 'react';
import { puzzle_submit_answer } from '../utils/puzzle_store';

export default function GuessBox({ puzzle_key }) {
  function submit_guess(e) {
    e.preventDefault();
    const guess = e.nativeEvent.srcElement[0].value;
    const result = puzzle_submit_answer(puzzle_key, guess);
    document.querySelectorAll('form')[0].reset();
    if (result == 1) {
      alert('success!');
    }
  }
  return (
    <form onSubmit={submit_guess}>
      <input />
      <input type="submit" />
    </form>
  );
}
