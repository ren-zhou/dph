import React from 'react';
import PageContainer from '../components/page_container';
import '../styles/mixins.css';
import { dsuffix } from '../utils/dhrub_gen';

export default function Home() {
  return (
    <PageContainer title={`Dhrub${dsuffix()} Puzzle Hunt`}>
      <section>
        <h2 className="margin-small orange">Welcome to DPH!</h2>
      </section>
    </PageContainer>
  );
}
