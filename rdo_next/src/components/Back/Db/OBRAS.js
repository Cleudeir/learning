import { DataTypes, Model } from "sequelize"

export class OBRAS extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "OBRAS",
      {
        obraId: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: "nome_UNIQUE"
        },
        cep: {
          type: DataTypes.STRING(10),
          allowNull: false
        },
        logradouro: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        numero: {
          type: DataTypes.STRING(6),
          allowNull: true
        },
        bairro: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        cidade: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        estado: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        telefone1: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        telefone2: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        cno: {
          type: DataTypes.STRING(15),
          allowNull: false,
          unique: "cno_UNIQUE"
        },
        situacao: {
          type: DataTypes.ENUM('Ativa', 'Inativa'),
          allowNull: false
        }
      },
      {
        tableName: "OBRAS",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "obraId" }]
          },
          {
            name: "id_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "obraId" }]
          },
          {
            name: "cno_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "cno" }]
          },
          {
            name: "nome_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "nome" }]
          }
        ]
      }
    )
  }
}
