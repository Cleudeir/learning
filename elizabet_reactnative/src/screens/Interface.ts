import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProps<RouteName extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, RouteName>;
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
};

type RootStackParamList = {
  Guess: {
    homeTeamName: string;
    awayTeamName: string;
    matchId: number;
    local: string;
    matchDate: string;
  };
  Payment: {
    homeTeamGuess: number;
    awayTeamGuess: number;
    matchId: number;
    value: number;
    clientId: number;
  };
  Home: undefined;
  Login: {
    homeTeamGuess?: number;
    awayTeamGuess?: number;
    matchId?: number;
    value?: number;
    email?: string;
    screen: string;
  };
  SignUp: {
    homeTeamGuess?: number;
    awayTeamGuess?: number;
    matchId?: number;
    value?: number;
    email: string;
    screen: string;
  };
  Remember: {
    homeTeamGuess?: number;
    awayTeamGuess?: number;
    matchId?: number;
    value?: number;
    email: string;
    screen: string;
  };
  MyGuesses: undefined;
  Administrator: undefined;
  MyAccount: undefined;
  NewMatch: undefined;
  EditMatch: {
    matchId: number;
    matchDate: string;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName: string;
    awayTeamName: string;
  };
  Matches: undefined;
  SetMatchScore: {
    matchId: number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName: string;
    awayTeamName: string;
  };
  WinnersMatch: {
    matchId: number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName: string;
    awayTeamName: string;
  };
  GuessesMatch: {
    matchId: number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName: string;
    awayTeamName: string;
  };
  Clients: undefined;
  EditAccount: undefined;
};

export type PropsHome = NavigationProps<'Home'>;
export type PropsGuess = NavigationProps<'Guess'>;
export type PropsLogin = NavigationProps<'Login'>;
export type PropsPayment = NavigationProps<'Payment'>;
export type PropsSignUp = NavigationProps<'SignUp'>;
export type PropsRemember = NavigationProps<'Remember'>;
export type PropsMyGuesses = NavigationProps<'MyGuesses'>;
export type PropsSetMatchScore = NavigationProps<'SetMatchScore'>;
export type PropsConfigLogin = NavigationProps<'Administrator'>;
export type PropsWinnersMatch = NavigationProps<'WinnersMatch'>;
export type PropsClients = NavigationProps<'Clients'>;
export type PropsMatches = NavigationProps<'Matches'>;
export type PropsNewMatch = NavigationProps<'NewMatch'>;
export type PropsEditMatch = NavigationProps<'EditMatch'>;
export type PropsGuessesMatch = NavigationProps<'GuessesMatch'>;
