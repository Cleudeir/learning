import { DataTypes, Model } from "sequelize"

export class OBRAS_EMPRESAS extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "OBRAS_EMPRESAS",
      {
        obraId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "OBRAS",
            key: "obraId"
          }
        },
        empresaId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "EMPRESAS",
            key: "empresaId"
          }
        },
        situacao: {
          type: DataTypes.STRING(7),
          allowNull: false
        }
      },
      {
        tableName: "OBRAS_EMPRESAS",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "obraId" }, { name: "empresaId" }]
          },
          {
            name: "fk_OBRAS_has_EMPRESAS_EMPRESAS1_idx",
            using: "BTREE",
            fields: [{ name: "empresaId" }]
          },
          {
            name: "fk_OBRAS_has_EMPRESAS_OBRAS1_idx",
            using: "BTREE",
            fields: [{ name: "obraId" }]
          }
        ]
      }
    )
  }
}
