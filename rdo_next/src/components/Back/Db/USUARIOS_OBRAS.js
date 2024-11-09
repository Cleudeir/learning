import { DataTypes, Model } from "sequelize"

export class USUARIOS_OBRAS extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "USUARIOS_OBRAS",
      {
        uid: {
          type: DataTypes.STRING(30),
          allowNull: false,
          primaryKey: true,
          references: {
            model: "USUARIOS",
            key: "uid"
          }
        },
        obraId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "OBRAS",
            key: "obraId"
          }
        }
      },
      {
        tableName: "USUARIOS_OBRAS",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "uid" }, { name: "obraId" }]
          },
          {
            name: "fk_USUARIOS_has_OBRAS_OBRAS1_idx",
            using: "BTREE",
            fields: [{ name: "obraId" }]
          },
          {
            name: "fk_USUARIOS_has_OBRAS_USUARIOS1_idx",
            using: "BTREE",
            fields: [{ name: "uid" }]
          }
        ]
      }
    )
  }
}
