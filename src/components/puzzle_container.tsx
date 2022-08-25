import React from 'react';
import { puzzle_get_answer } from '../utils/puzzle_store';
import GuessBox from './guess_box';
import PageContainer from './page_container';
import SolvedBox from './solved_box';
import '../styles/puzzle_page.css';
import PuzzleTitle from './puzzle_title';

export default function PuzzleContainer({ puzzle_key, title, children }) {
  const answer = puzzle_get_answer(puzzle_key);
  return (
    <PageContainer>
      <div className="puzzle-page">
        <PuzzleTitle title={title} />
        {children}
        <div className="sticky-bottom">
          {answer != ''
            ? <SolvedBox answer={answer} />
            : <GuessBox puzzle_key={puzzle_key} />}
        </div>
      </div>
    </PageContainer>
  );
}
