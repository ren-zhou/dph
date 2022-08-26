import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Link, navigate } from 'gatsby';

type GuessModalVariant = "partial" | "correct" | "incorrect";

interface GuessModalProps {
    open: boolean;
    handleClose;
    guess: string;
    variant: GuessModalVariant;
}

function PartialContent({ guess, handleClose }) {
  return (
    <div>
      <DialogTitle>
        You're getting there!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You guessed <span className="guess">{guess}</span>. That's isn't the
          answer, but it's relevant to the puzzle solution.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{'color': 'black'}}>Close</Button>
      </DialogActions>
    </div>
  )
}

function CorrectContent({ guess, handleClose }) {
  return (
    <div>
      <DialogTitle>
        That's correct! You're wonderful  c:
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Congrats, you solved the puzzle! The answer was <span className="solution">{guess}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link to={'/puzzles/'}>← Go back to puzzles page</Link>
      </DialogActions>
    </div>
  )
}

function IncorrectContent({ guess, handleClose }) {
  return (
    <div>
      <DialogTitle>
        {"Incorrect"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You guessed <span className="incorrect">{guess}</span>. That's not right, but keep at it! I believe in you.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{'color': 'black'}}>Close</Button>
      </DialogActions>
    </div>
  )
}

export default function GuessModal({ open, handleClose, guess, variant}: GuessModalProps) {
  function renderContent() {
    switch(variant) {
      case "correct":
        return <CorrectContent guess={guess} handleClose={handleClose} />;
      case "partial":
        return <PartialContent guess={guess} handleClose={handleClose} />;
      case "incorrect":
        return <IncorrectContent guess={guess} handleClose={()=> {
          handleClose();
        }} />;
    }
  }

  return (
    <div>
      <Dialog
        PaperProps={{style: {'border': 'black solid 3px', 'borderRadius': 0}}}
        open={open}
        onClose={handleClose}
      >
        {renderContent()}
      </Dialog>
    </div>
  );
}
