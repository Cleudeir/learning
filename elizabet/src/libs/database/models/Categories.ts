import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface CategoriesAttributes {
  categoryId: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CategoriesPk = "categoryId";
export type CategoriesId = Categories[CategoriesPk];
export type CategoriesOptionalAttributes = "name";
export type CategoriesCreationAttributes = Optional<
  CategoriesAttributes,
  CategoriesOptionalAttributes
>;

export class Categories
  extends Model<CategoriesAttributes, CategoriesCreationAttributes>
  implements CategoriesAttributes
{
  categoryId!: number;
  name?: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof Categories {
    return Categories.init(
      {
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(45),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "Categories",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "categoryId" }],
          },
          {
            name: "categoryId_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "categoryId" }],
          },
        ],
      }
    );
  }
}
