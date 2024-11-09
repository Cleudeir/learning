import * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { Guess, GuessId } from "./Guess";

export interface ClientsAttributes {
  clientId: number;
  email: string;
  password: string;
  pixKey: string;
  permission: string;
  pushToken?: string;
  CPF?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ClientsPk = "clientId";
export type ClientsId = Clients[ClientsPk];

export class Clients
  extends Model<ClientsAttributes>
  implements ClientsAttributes
{
  clientId!: number;
  email!: string;
  password!: string;
  pixKey!: string;
  permission!: string;
  pushToken?: string;
  CPF?: string;

  // Clients hasMany Guesses via clientId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Clients {
    return Clients.init(
      {
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING(150),
          allowNull: false,
          unique: "email_UNIQUE",
        },
        password: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        pixKey: {
          type: DataTypes.STRING(150),
          allowNull: false,
          unique: "pixKey_UNIQUE",
        },
        permission: {
          type: DataTypes.ENUM("admin", "user"),
          allowNull: false,
          defaultValue: "user",
        },
        pushToken: {
          type: DataTypes.STRING(250),
          allowNull: true,
          unique: "pushToken_UNIQUE",
        },
        CPF: {
          type: DataTypes.STRING(14),
          allowNull: true,
          unique: "CPF_UNIQUE",
        },
      },
      {
        sequelize,
        tableName: "Clients",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "clientId" }],
          },
          {
            name: "clientId_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "clientId" }],
          },
          {
            name: "email_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "email" }],
          },
          {
            name: "pixKey_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "pixKey" }],
          },
          {
            name: "pushToken_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "pushToken" }],
          },
          {
            name: "CPF_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "CPF" }],
          },
        ],
      }
    );
  }
}
