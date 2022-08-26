interface Puzzle {
    name: string;
    key: string;
    answer: string;
    index: number;
    solved: boolean;
    enc_answer: string;
    obfuscated_answer: string;
    unlock_req: number;
    partials: Array<string>;
  }

export type { Puzzle };
