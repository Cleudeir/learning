import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface TeamsAttributes {
  teamId: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TeamsPk = "teamId";
export type TeamsId = Teams[TeamsPk];
export type TeamsOptionalAttributes = "name";
export type TeamsCreationAttributes = Optional<
  TeamsAttributes,
  TeamsOptionalAttributes
>;

export class Teams
  extends Model<TeamsAttributes, TeamsCreationAttributes>
  implements TeamsAttributes
{
  teamId!: number;
  name!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof Teams {
    return Teams.init(
      {
        teamId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: "name_UNIQUE",
        },
      },
      {
        sequelize,
        tableName: "Teams",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "teamId" }],
          },
          {
            name: "teamIds_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "teamId" }],
          },
          {
            name: "name_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "name" }],
          },
        ],
      }
    );
  }
}
