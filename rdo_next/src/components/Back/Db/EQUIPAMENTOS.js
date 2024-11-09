import { DataTypes, Model } from "sequelize"

export class EQUIPAMENTOS extends Model {
  static initModel(sequelize) {
    return sequelize.define(
      "EQUIPAMENTOS",
      {
        equipamentoId: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        nomeEquipamento: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
        situacao: {
          type: DataTypes.STRING(7),
          allowNull: false
        },
        numeracao: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          unique: "cpf_UNIQUE"
        },
        anoFabricacao: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true
        },
        apelido: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        empresaId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: "EMPRESAS",
            key: "empresaId"
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
        },
        categoriaId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "CATEGORIA",
            key: "categoriaId"
          }
        }
      },
      {
        tableName: "EQUIPAMENTOS",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "equipamentoId" }, { name: "obraId" }]
          },
          {
            name: "cpf_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "numeracao" }]
          },
          {
            name: "matricula_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "equipamentoId" }]
          },
          {
            name: "fk_EQUIPAMENTOS_EMPRESAS1_idx",
            using: "BTREE",
            fields: [{ name: "empresaId" }]
          },
          {
            name: "fk_EQUIPAMENTOS_OBRAS1_idx",
            using: "BTREE",
            fields: [{ name: "obraId" }]
          },
          {
            name: "fk_EQUIPAMENTOS_categoria1_idx",
            using: "BTREE",
            fields: [{ name: "categoriaId" }]
          }
        ]
      }
    )
  }
}
