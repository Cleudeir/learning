import { DataTypes, Model } from "sequelize"

export class CATEGORIA extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "CATEGORIA",
      {
        categoriaId: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nomeCategoria: {
          type: DataTypes.STRING(45),
          allowNull: false,
          unique: "nomeCategoria_UNIQUE"
        }
      },
      {
        tableName: "CATEGORIA",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "categoriaId" }]
          },
          {
            name: "nomeCategoria_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "nomeCategoria" }]
          }
        ]
      }
    )
  }
}
