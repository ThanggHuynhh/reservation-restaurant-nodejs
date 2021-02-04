const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      middle_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cell_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      gender: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      private_email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone_extension: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      passport_id: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      passport_expired: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      id_card_number: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      id_card_issue_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      nationality: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      family_address_collection: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      relative_info_collection: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "user",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      modified_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "user",
          key: "id",
        },
      },
      modified_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      social_info_collection: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthplace: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      religion: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      ethnic: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      position: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      id_card_issue_palce: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      password_modified_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      employee_code: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      domicile: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      personal_tax_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      passport_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      passport_place_of_issue: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      avatar_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      background: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      attachment_code: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      company_phone_number: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      personal_email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emergency_contact: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emergency_relate: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emergency_tel: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      emergency_phone: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      emergency_address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      permanent_address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      ward: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      province: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      district: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      current_address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      join_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      resignation_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      signature: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      attendance_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cover_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      full_name_unaccent: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "user_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
