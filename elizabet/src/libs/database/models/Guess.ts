import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { Clients, ClientsId } from "./Clients";
import type { Matches, MatchesId } from "./Matches";

export interface GuessAttributes {
  guessId: number;
  homeTeamGuess: number;
  awayTeamGuess: number;
  value: number;
  winnings: number;
  paymentId: string;
  paymentStatus?: string;
  paymentJson?: string;
  paid: boolean;
  matchId: number;
  clientId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type GuessPk = "guessId";
export type GuessId = Guess[GuessPk];
export type GuessOptionalAttributes = "paymentJson";
export type GuessCreationAttributes = Optional<
  GuessAttributes,
  GuessOptionalAttributes
>;

export class Guess
  extends Model<GuessAttributes, GuessCreationAttributes>
  implements GuessAttributes
{
  guessId!: number;
  homeTeamGuess!: number;
  awayTeamGuess!: number;
  value!: number;
  winnings!: number;
  paymentId!: string;
  paymentStatus: string;
  paymentJson: string;
  paid!: boolean;
  matchId!: number;
  clientId!: number;

  // Guess belongsTo Clients via clientId
  clientId_Client!: Clients;
  getClientId_Client!: Sequelize.BelongsToGetAssociationMixin<Clients>;
  setClientId_Client!: Sequelize.BelongsToSetAssociationMixin<
    Clients,
    ClientsId
  >;
  createClientId_Client!: Sequelize.BelongsToCreateAssociationMixin<Clients>;
  // Guess belongsTo Matches via matchId
  matchId_Match!: Matches;
  getMatchId_Match!: Sequelize.BelongsToGetAssociationMixin<Matches>;
  setMatchId_Match!: Sequelize.BelongsToSetAssociationMixin<Matches, MatchesId>;
  createMatchId_Match!: Sequelize.BelongsToCreateAssociationMixin<Matches>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Guess {
    return Guess.init(
      {
        guessId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        homeTeamGuess: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        awayTeamGuess: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        value: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        winnings: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          defaultValue: 0,
        },
        paid: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        paymentId: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        paymentStatus: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        paymentJson: {
          type: DataTypes.TEXT(),
          allowNull: true,
        },
        matchId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Matches",
            key: "matchId",
          },
        },
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Clients",
            key: "clientId",
          },
        },
      },
      {
        sequelize,
        tableName: "Guesses",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "guessId" }],
          },
          {
            name: "guessId_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "guessId" }],
          },
          {
            name: "fk_Guesses_Matches_idx",
            using: "BTREE",
            fields: [{ name: "matchId" }],
          },
          {
            name: "fk_Guesses_Clients1_idx",
            using: "BTREE",
            fields: [{ name: "clientId" }],
          },
        ],
      }
    );
  }
}
