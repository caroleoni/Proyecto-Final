const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('company_account', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        country: {
            type: DataTypes.STRING,
        },

        city: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validator:{
                isEmail: true,
            },
            unique:true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        logo: {
            type: DataTypes.TEXT
        },

        description: {
            type: DataTypes.TEXT
        },

        speciality: {
            type: DataTypes.STRING
        },

        size: {
            type: DataTypes.RANGE
        },

        foundation: {
            type: DataTypes.DATEONLY
        },

        web_site: {
            type: DataTypes.TEXT,
            validator:{
                isUrl: true
            }
        },

        banner: {
            type: DataTypes.TEXT
        },

        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    },{timestamps:false})
}