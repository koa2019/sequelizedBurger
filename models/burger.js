module.exports = function(sequelize, Datatypes) {

    var Burger = sequelize.define("Burger", {

        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: true,
    });
    return Burger;
};