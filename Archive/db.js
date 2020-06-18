const Sequelize = require('sequelize');
module.exports = {
  sequelize:{
  host: 'localhost',
  dialect: 'sqlite',
  
  //Database connection pool settings
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: './summer',
  operatorsAliases: false
},
}

//~~~~~~~~~~~~~~~~DB Connection Test~~~~~~~~~~~~~~~~~~~~~~~

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Success.');
//   })
//   .catch(err => {
//     console.error('Failed', err);
//   });



