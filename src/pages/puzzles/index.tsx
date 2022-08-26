import React from 'react';
import PageContainer from '../../components/page_container';
import PuzzleList from '../../components/puzzle_list';
import '../../styles/global.css';
import '../../styles/mixins.css';

export default function Home() {
  return (
    <PageContainer title="Puzzles">
        <PuzzleList />
    </PageContainer>
  );
}
