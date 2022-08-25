interface Puzzle {
    name: string;
    key: string;
    answer: string;
    index: number;
    solved: boolean;
    enc_answer: string;
    obfuscated_answer: string;
    unlock_req: number;
  }

export type { Puzzle };
