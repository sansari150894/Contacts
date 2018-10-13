const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_2ef596f020dbc21', 'b37ba561ee218c', '1f543e6c', {
  //host: 'localhost',//us-cdbr-iron-east-01.cleardb.net
  host: 'us-cdbr-iron-east-01.cleardb.net',
  dialect: 'mysql',
  operatorsAliases: false,
});

//dbName -heroku_2ef596f020dbc21
//username -b37ba561ee218c
//password -1f543e6c

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const contacts = sequelize.define('contacts',{
    firstName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type :Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    city:{
        type :Sequelize.STRING,
        allowNull: false
    },
    state:{
        type :Sequelize.STRING,
        allowNull: false
    },
    address:{
        type :Sequelize.STRING,
        allowNull: false
    },
});


export default sequelize;