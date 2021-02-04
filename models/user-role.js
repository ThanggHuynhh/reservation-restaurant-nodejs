const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "p_role_user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "p_role",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "p_role_user",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "permission_role_user_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
