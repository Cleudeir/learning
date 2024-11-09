import { DataTypes, Model } from "sequelize"

export class USUARIOS extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "USUARIOS",
      {
        uid: {
          type: DataTypes.STRING(30),
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: DataTypes.STRING(45),
          allowNull: true
        },
        foto: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        email: {
          type: DataTypes.STRING(45),
          allowNull: true
        },
        permissao: {
          type: DataTypes.STRING(12),
          allowNull: true,
          defaultValue: "[3]"
        },
        situacao: {
          type: DataTypes.STRING(7),
          allowNull: false
        }
      },
      {
        tableName: "USUARIOS",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "uid" }]
          },
          {
            name: "id_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "uid" }]
          }
        ]
      }
    )
  }
}
