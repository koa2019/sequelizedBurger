// import orm.js from config folder
// orm interacts with database  
var orm = require('../config/orm');

// creating a burger model that will call orm functions 
// function uses burger specific input for the orm
var burger = {
    // define function allows us to pass the callback value to another file
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            // if (err) {
            //     console.log(err);
            // }
            cb(res);
        });
    },
    // cols & vals are arrays
    insertOne: function(cols, vals, cb) {
        console.log('burger.js')
        orm.insertOne('burgers', cols, vals, function(res) {
            // if (err) {
            //     console.log(err);
            // }
            // console.log(res)
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// export burger model so other files can access it
module.exports = burger;