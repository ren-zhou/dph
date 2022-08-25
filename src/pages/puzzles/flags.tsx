import React from 'react';
import PuzzleContainer from '../../components/puzzle_container';

export default function FlagsPage() {
  return (
    <PuzzleContainer puzzle_key="flags" title="Flags">
      <div className="flags-images">
        <div>
          <img src="/flags/00.JPG" />
          <img src="/flags/01.jpg" />
        </div>
        <div>
          <img src="/flags/02.jfif" />
          <img src="/flags/03.jpg" />
          <img src="/flags/04.png" />
        </div>
        <div>
          <img src="/flags/05.jpg" />
          <img src="/flags/06.png" />
          <img src="/flags/07.png" />
          <img src="/flags/08.jpg" />
        </div>
        <div>
          <img src="/flags/09.png" />
          <img src="/flags/10.jpg" />
          <img src="/flags/11.webp" />
          <img src="/flags/12.ico" />
        </div>
        <hr />
        <div>
          <img src="/flags/13.png" />
        </div>

      </div>
    </PuzzleContainer>
  );
}
