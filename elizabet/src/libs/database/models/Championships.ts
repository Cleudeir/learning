import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChampionshipsAttributes {
  championshipId: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ChampionshipsPk = "championshipId";
export type ChampionshipsId = Championships[ChampionshipsPk];
export type ChampionshipsOptionalAttributes = "name";
export type ChampionshipsCreationAttributes = Optional<ChampionshipsAttributes, ChampionshipsOptionalAttributes>;

export class Championships extends Model<ChampionshipsAttributes, ChampionshipsCreationAttributes> implements ChampionshipsAttributes {
  championshipId!: number;
  name?: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof Championships {
    return Championships.init({
    championshipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Championships',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "championshipId" },
        ]
      },
    ]
  });
  }
}
