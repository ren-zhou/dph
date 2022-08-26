import React from 'react';
import Navbar from './navbar';
import '../styles/global.css';

export default function PageContainer({ title, children }) {
  return (
    <div className="page-container">
      <title>{title}</title>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>
          Made by
          {' '}
          <a target="https://github.com/ren-zhou/">ren-zhou</a>
        </p>
      </footer>
    </div>
  );
}
