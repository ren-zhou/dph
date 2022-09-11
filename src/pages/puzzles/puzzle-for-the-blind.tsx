import React from 'react';
import PuzzleContainer from '../../components/puzzle_container';
import Button from '@mui/material/Button';

export default function PuzzleForTheBlindPage() {
  return (
    <PuzzleContainer puzzle_key="puzzle-for-the-blind" title="Puzzle for the Blind">
      <Button>
        <a href="/puzzle-for-the-blind/puzzle.zip" target="_blank" download>Download</a>
      </Button>
    </PuzzleContainer>
  );
}
