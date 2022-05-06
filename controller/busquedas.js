const { response } = require('express');

const Usuario = require('../models/usuario');
const Operadores = require('../models/operadorVuelo');
const Determinacion = require('../models/detOperadores');

const XaGgl = require('../models/xaGgl');
const XaUyr = require('../models/xaUyr');
const XaLfr = require('../models/xaLfr');
const XaEfr = require('../models/xaEfr');
const XaLrc = require('../models/xaLrc');




const getTodo = async (req, res = response) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');

    const [usuarios, operadores, determinacion] = await Promise.all([
        Usuario.find({ nombre: regex }),
        Operadores.find({ vuelo: regex }),
        Determinacion.find({ match: regex }),
    ]);

    res.json({
        ok: true,
        usuarios,
        operadores,
        determinacion
    });
}

const getVuelo = async (req, res = response) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');

    const [xaEfr, xaGgl, xaLfr, xaLrc, xaUyr] = await Promise.all([
        XaEfr.find({ bitacora: regex }),
        XaGgl.find({ bitacora: regex }),
        XaLfr.find({ bitacora: regex }),
        XaLrc.find({ bitacora: regex }),
        XaUyr.find({ bitacora: regex }),

    ]);
    res.json({
        ok: true,
        xaEfr,
        xaGgl,
        xaLfr,
        xaLrc,
        xaUyr
    });

}


const getDocumentosColeccion = async (req, res = response) => {

    const tabla = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');

    let data = [];

    switch (tabla) {
        case 'operadores':
            data = await Operadores.find({ vuelo: regex });
            break;

        case 'determinacion':
            data = await Determinacion.find({ match: regex });
            break;

        case 'usuarios':
            data = await Usuario.find({ nombre: regex });

            break;

        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser usuarios/determinacion/operadores'
            });
    }

    res.json({
        ok: true,
        resultados: data
    })

}



const getVuelosColeccion = async (req, res = response) => {

    const tabla = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');

    let data = [];

    switch (tabla) {
        case 'xaEfr':
            data = await XaEfr.find({ bitacora: regex });
            break;

        case 'xaGgl':
            data = await XaGgl.find({ bitacora: regex });
            break;

        case 'xaLfr':
            data = await XaLfr.find({ bitacora: regex });

            break;
        case 'xaLrc':
            data = await XaLrc.find({ bitacora: regex });

            break;
        case 'xaUyr':
            data = await XaUyr.find({ bitacora: regex });

            break;

        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser xaEfr, xaGgl, xaLfr, xaLrc, xaUyr'
            });
    }

    res.json({
        ok: true,
        resultados: data
    })

}



module.exports = {
    getTodo,
    getDocumentosColeccion,
    getVuelo,
    getVuelosColeccion

}

