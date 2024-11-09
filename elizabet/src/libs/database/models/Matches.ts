import * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { Guess, GuessId } from "./Guess";

export interface MatchesAttributes {
  matchId: number;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
  matchDate: string;
  local: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type MatchesPk = "matchId";
export type MatchesId = Matches[MatchesPk];

export class Matches
  extends Model<MatchesAttributes>
  implements MatchesAttributes
{
  matchId!: number;
  homeTeamName!: string;
  awayTeamName!: string;
  homeTeamScore!: number;
  awayTeamScore!: number;
  matchDate!: string;
  local!: string;

  // Matches hasMany Guesses via matchId
  Guesses!: Guess[];
  getGuesses!: Sequelize.HasManyGetAssociationsMixin<Guess>;
  setGuesses!: Sequelize.HasManySetAssociationsMixin<Guess, GuessId>;
  addGuess!: Sequelize.HasManyAddAssociationMixin<Guess, GuessId>;
  addGuesses!: Sequelize.HasManyAddAssociationsMixin<Guess, GuessId>;
  createGuess!: Sequelize.HasManyCreateAssociationMixin<Guess>;
  removeGuess!: Sequelize.HasManyRemoveAssociationMixin<Guess, GuessId>;
  removeGuesses!: Sequelize.HasManyRemoveAssociationsMixin<Guess, GuessId>;
  hasGuess!: Sequelize.HasManyHasAssociationMixin<Guess, GuessId>;
  hasGuesses!: Sequelize.HasManyHasAssociationsMixin<Guess, GuessId>;
  countGuesses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Matches {
    return Matches.init(
      {
        matchId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        homeTeamName: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        awayTeamName: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        homeTeamScore: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: -1,
        },
        awayTeamScore: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: -1,
        },
        matchDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        local: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "Matches",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "matchId" }],
          },
          {
            name: "matchId_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "matchId" }],
          },
        ],
      }
    );
  }
}
