import { DataTypes, Model } from "sequelize"

export class FRENTES extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "FRENTES",
      {
        frenteId: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        localizacao: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        obraId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: "OBRAS",
            key: "obraId"
          }
        },
        observacao: {
          type: DataTypes.STRING(45),
          allowNull: true
        },
        situacao: {
          type: DataTypes.STRING(7),
          allowNull: false
        }
      },
      {
        tableName: "FRENTES",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "frenteId" }]
          },
          {
            name: "fk_frente_OBRAS1_idx",
            using: "BTREE",
            fields: [{ name: "obraId" }]
          }
        ]
      }
    )
  }
}
