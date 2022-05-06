const jwk = require('jsonwebtoken');


const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {


        const payload = {
            uid
        };

        jwk.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar JWT');
                } else {
                    resolve(token)
                }

            });

    });



}

module.exports = {
    generarJWT
}