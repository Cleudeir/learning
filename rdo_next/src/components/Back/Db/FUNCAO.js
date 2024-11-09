import { DataTypes, Model } from "sequelize"

export class FUNCAO extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "FUNCAO",
      {
        funcaoId: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        nomeFuncao: {
          type: DataTypes.STRING(45),
          allowNull: false,
          unique: "nomeFuncao_UNIQUE"
        }
      },
      {
        tableName: "FUNCAO",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "funcaoId" }]
          },
          {
            name: "nomeFuncao_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "nomeFuncao" }]
          }
        ]
      }
    )
  }
}
