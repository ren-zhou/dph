import React from 'react';
import PageContainer from '../components/page_container';
import '../styles/mixins.css';

export default function Home() {
  return (
    <PageContainer>
      <section>
        <h2 className="margin-small orange">Welcome to DPH!</h2>
      </section>
    </PageContainer>
  );
}
