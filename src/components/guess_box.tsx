import { navigate } from 'gatsby';
import React, { useState } from 'react';
import { puzzle_submit_answer } from '../utils/puzzle_store';
import GuessModal from './guess_modal';

export default function GuessBox({ puzzle_key }) {
  const [open, setOpen] = React.useState(false);
  const [guess, setGuess] = React.useState('');
  const [variant, setVariant] = React.useState('incorrect');
  
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function submit_guess(e) {
    e.preventDefault();
    handleClickOpen();
    const guess = e.nativeEvent.srcElement[0].value;
    setGuess(guess);
    const result = puzzle_submit_answer(puzzle_key, guess);
    setVariant(['incorrect', 'correct', 'partial'][result]);
    document.querySelectorAll('form')[0].reset();
    if (result == 1) {
      navigate('/puzzles/')
    } else if (result == 2) {
      alert('That answer is relevant to the puzzle, but not the final solution');
    }
  }

  return (
    <div>
      <GuessModal open={open} handleClose={handleClose} guess={guess} variant={variant} />
      <form className='guess-box' onSubmit={submit_guess}>
        <input />
        <input type="submit" />
      </form>
    </div>
  );
}
