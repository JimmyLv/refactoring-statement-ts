interface Performance {
  playID: string;
  audience: number;
}

export interface Invoice {
  customer: string;
  performances: Performance[];
}

interface PlayPerformance {
  name: string;
  type: string;
}

export type Plays = Record<string, PlayPerformance>;
