export type GuessType = {
  guessId: number;
  homeTeamGuess: number;
  awayTeamGuess: number;
  paymentRequest: string;
  paymentResponse: string;
  paymentMethod: string;
  value: number;
  matchId: number;
  clientId: number;
  updatedAt: Date;
  createdAt: Date;
  paid: boolean;
  error?: string;
};

export interface GuessesType {
  guessId: number;
  homeTeamGuess: number;
  awayTeamGuess: number;
  paymentMethod: string;
  value: number;
  winnings: number;
  paid: boolean;
  matchId: number;
  clientId: number;
  createdAt: Date;
  updatedAt: Date;
  match: {
    homeTeamName: string;
    awayTeamName: string;
    homeTeamScore?: number;
    awayTeamScore?: number;
    local: string;
    matchDate: string;
  };
  client: {
    email: string;
    pixKey: string;
    permission: string;
  };
  error?: string;
}

export interface GuessTypeWinners {
  guessId: number;
  paymentMethod: string;
  value: number;
  winnings: number;
  paid: boolean;
  clientId: number;
  createdAt: Date;
  updatedAt: Date;
  client: {
    email: string;
    pixKey: string;
    permission: string;
  };
}
