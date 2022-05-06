const mongoose = require('mongoose');

const dbConnection = async () => {


    try {
        await mongoose.connect(process.env.Db_CNN, {
            useUnifiedTopology: true,
            useNewUrlParser: true,

        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion de la base de datos');
    }
}

module.exports = {
    dbConnection
}







