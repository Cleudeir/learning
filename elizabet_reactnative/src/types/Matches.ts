export type MatchType = {
  matchId: number;
  homeTeamScore?: number;
  awayTeamScore?: number;
  homeTeamName: string;
  awayTeamName: string;
  matchDate: string;
  local: string;
  updatedAt?: Date;
  createdAt?: Date;
  error?: string;
  message?: string;
};
