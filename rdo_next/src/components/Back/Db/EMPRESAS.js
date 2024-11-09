import { DataTypes, Model } from "sequelize"

export class EMPRESAS extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "EMPRESAS",
      {
        empresaId: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        cnpj: {
          type: DataTypes.STRING(18),
          allowNull: false,
          unique: "cnpj_UNIQUE"
        },
        razaoSocial: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
        nomeFantasia: {
          type: DataTypes.STRING(45),
          allowNull: true
        },
        nomeResponsavel: {
          type: DataTypes.STRING(45),
          allowNull: true
        },
        telefoneFixo: {
          type: DataTypes.STRING(14),
          allowNull: true
        },
        telefoneCelular: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        situacao: {
          type: DataTypes.STRING(7),
          allowNull: false
        }
      },
      {
        tableName: "EMPRESAS",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "empresaId" }]
          },
          {
            name: "cnpj_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "cnpj" }]
          }
        ]
      }
    )
  }
}
