const Sequelize = require('sequelize');
const sequelize = new Sequelize('relay', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

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