const { response } = require('express');

const XLSX = require('xlsx');

const XaGgl = require('../models/xaGgl');

const XaUyr = require('../models/xaUyr');

const XaLfr = require('../models/xaLfr');

const XaEfr = require('../models/xaEfr');

const XaLrc = require('../models/xaLrc');

const DestinoXaGgl = require('../models/destinosXaGgl');

const DestinoXaEfr = require('../models/destinosXaEfr');

const DestinoXaLfr = require('../models/destinosXaLfr');

const DestinoXaLrc = require('../models/destinosXaLrc');

const DestinoXaUyr = require('../models/destinosXaUyr');

const Sumary = require('../models/sumary');

const SumaryFinal = require('../models/sumaryFinal');

const DetOperadores = require('../models/detOperadores');


const getXaefr = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [bitVuelos, total] = await Promise.all([
        XaEfr.find({}, 'bitacora operacion leg fecha flt from to')
            .skip(desde)
            .limit(100),
        XaEfr.countDocuments()
    ]);

    res.status(201).json({
        ok: true,
        bitVuelos,
        total
    });
}

const getXaggl = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [bitVuelos, total] = await Promise.all([
        XaGgl.find({}, 'bitacora operacion leg fecha flt from to')
            .skip(desde)
            .limit(100),

        XaGgl.countDocuments()
    ]);

    res.status(201).json({
        ok: true,
        bitVuelos,
        total
    });
}

const getXalfr = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [bitVuelos, total] = await Promise.all([
        XaLfr.find({}, 'bitacora operacion leg fecha flt from to')
            .skip(desde)
            .limit(100),
        XaLfr.countDocuments()
    ]);

    res.status(201).json({
        ok: true,
        bitVuelos,
        total
    });
}

const getXalrc = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [bitVuelos, total] = await Promise.all([
        XaLrc.find({}, 'bitacora operacion leg fecha flt from to')
            .skip(desde)
            .limit(100),
        XaLrc.countDocuments()
    ]);

    res.status(201).json({
        ok: true,
        bitVuelos,
        total
    });
}

const getXauyr = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [bitVuelos, total] = await Promise.all([
        XaUyr.find({}, 'bitacora operacion leg fecha flt from to')
            .skip(desde)
            .limit(100),
        XaUyr.countDocuments()
    ]);

    res.status(201).json({
        ok: true,
        bitVuelos,
        total
    });
}


const leerExcel = async (req, res = response) => {
    try {

        await readExcel("F:\\vago\\back\\docs\\BitacoraVueloMayo.xlsx");

        res.status(200).json({
            ok: true


        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al cargar informacion  de las aeronaves'
        });

    }

}


const readExcel = async (ruta) => {

    try {
        const workbook = XLSX.readFile(ruta);// leer el archivo

        const resData = {};

        const sheetnames = workbook.SheetNames;

        let i = sheetnames.length;

        while (i--) {
            const sheetname = sheetnames[i];


            switch (sheetname) {
                case 'XA-GGL':
                    const sheet = sheetnames[i];
                    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

                    for (const item of data) {

                        const fec = new Date((item.fecha - (25567 + 2)) * 86400 * 1000);
                        item.fecha = fec;

                        const bitacora = new XaGgl(item);
                        const ruta = item.from + '-' + item.to;

                        crearDestino(ruta, 'XA-GGL');


                        const match = item.flt + '-' + item.from + '/' + item.to;
                        const cliente = await buscarCliente('match', match);
                        const clasificacion = await buscarCliente('clasificacion', match);
                        const clave = item.bitacoraVuelo;
                        const fecha = item.fecha;
                        const bitcora = item.bitacora;
                        const tramo = 1;
                        const vuelo = item.flt;
                        const origen = item.from;
                        const destino = item.to;
                        const origDes = item.from + '-' + item.to;
                        const ciclos = 1;
                        let operacion = 0;
                        let internacional;
                        const op = item.operacion;
                        const id = item.identificador;

                        if (origen != 'MEX' && destino === 'MEX') {
                            operacion = 1;
                        }

                        if (origen === 'MEX' || origen === 'GDL') {
                            if (destino === 'MEX' || destino === 'GDL') {
                                internacional = 'Nacional';
                            }
                        } else {
                            internacional = 'Internacional';
                        }



                        const suma = Sumary();
                        suma.matricula = 'XA-UYR'; suma.clave = clave; suma.fecha = fecha;
                        suma.bitacora = bitcora; suma.tramo = tramo; suma.numVuelo = vuelo;
                        suma.origen = origen; suma.destino = destino; suma.origenDestino = origDes;
                        suma.cliente = cliente; suma.ciclos = ciclos; suma.operacion = operacion;
                        suma.identificador = id;

                        const sumary = SumaryFinal();
                        sumary.clave = clave;
                        sumary.bitacora = bitcora;
                        sumary.matricula = 'XA-UYR';
                        sumary.numVuelo = vuelo;
                        sumary.origenDestino = origDes;
                        sumary.origen = origen;
                        sumary.destino = destino;
                        sumary.clasificacion = clasificacion;
                        sumary.operadorVuelo = cliente;
                        sumary.opTramo = op;
                        sumary.nacInt = internacional;


                        await sumary.save();
                        await suma.save();
                        await bitacora.save();
                    }

                    break;

                case 'XA-UYR':
                    const sheetUyr = sheetnames[i];
                    const dataUyr = XLSX.utils.sheet_to_json(workbook.Sheets[sheetUyr]);


                    for (const item of dataUyr) {

                        const fec = new Date((item.fecha - (25567 + 2)) * 86400 * 1000);
                        item.fecha = fec;

                        const bitacora = new XaUyr(item);
                        const ruta = item.from + '-' + item.to;
                        crearDestino(ruta, 'XA-UYR');


                        const match = item.flt + '-' + item.from + '/' + item.to;

                        const cliente = await buscarCliente('match', match);
                        const clave = item.bitacoraVuelo;
                        const fecha = item.fecha;
                        const bitcora = item.bitacora;
                        const tramo = 1;
                        const vuelo = item.flt;
                        const origen = item.from;
                        const destino = item.to;
                        const origDes = item.from + '-' + item.to;
                        const ciclos = 1;
                        let operacion = 0;
                        const id = item.identificador;

                        if (origen != 'MEX' && destino === 'MEX') {
                            operacion = 1;

                        }

                        const suma = Sumary();
                        suma.matricula = 'XA-UYR'; suma.clave = clave; suma.fecha = fecha;
                        suma.bitacora = bitcora; suma.tramo = tramo; suma.numVuelo = vuelo;
                        suma.origen = origen; suma.destino = destino; suma.origenDestino = origDes;
                        suma.cliente = cliente; suma.ciclos = ciclos; suma.operacion = operacion;
                        suma.identificador = id;

                        await suma.save();
                        await bitacora.save();
                    }

                    break;

                case 'XA-LFR':
                    const sheetLrf = sheetnames[i];
                    const dataLrf = XLSX.utils.sheet_to_json(workbook.Sheets[sheetLrf]);


                    for (const item of dataLrf) {

                        const fec = new Date((item.fecha - (25567 + 2)) * 86400 * 1000);
                        item.fecha = fec;

                        const bitacora = new XaLfr(item);
                        const ruta = item.from + '-' + item.to;
                        crearDestino(ruta, 'XA-LFR');

                        const match = item.flt + '-' + item.from + '/' + item.to;
                        const cliente = await buscarCliente('match', match);
                        const clasificacion = await buscarCliente('clasificacion', match);
                        const clave = item.bitacoraVuelo;
                        const fecha = item.fecha;
                        const bitcora = item.bitacora;
                        const tramo = 1;
                        const vuelo = item.flt;
                        const origen = item.from;
                        const destino = item.to;
                        const origDes = item.from + '-' + item.to;
                        const ciclos = 1;
                        let operacion = 0;
                        const id = item.identificador;

                        if (origen != 'MEX' && destino === 'MEX') {
                            operacion = 1;
                        }

                        const suma = Sumary();
                        suma.matricula = 'XA-LFR'; suma.clave = clave; suma.fecha = fecha;
                        suma.bitacora = bitcora; suma.tramo = tramo; suma.numVuelo = vuelo;
                        suma.origen = origen; suma.destino = destino; suma.origenDestino = origDes;
                        suma.cliente = cliente; suma.ciclos = ciclos; suma.operacion = operacion;
                        suma.identificador = id;

                        await suma.save();

                        await bitacora.save();
                    }

                    break;

                case 'XA-EFR':
                    const sheetEfr = sheetnames[i];
                    const dataEfr = XLSX.utils.sheet_to_json(workbook.Sheets[sheetEfr]);



                    for (const item of dataEfr) {

                        const fec = new Date((item.fecha - (25567 + 2)) * 86400 * 1000);
                        item.fecha = fec;

                        const bitacora = new XaEfr(item);
                        const ruta = item.from + '-' + item.to;
                        crearDestino(ruta, 'XA-EFR');


                        const match = item.flt + '-' + item.from + '/' + item.to;
                        const cliente = await buscarCliente('match', match);
                        const clave = item.bitacoraVuelo;
                        const fecha = item.fecha;
                        const bitcora = item.bitacora;
                        const tramo = 1;
                        const vuelo = item.flt;
                        const origen = item.from;
                        const destino = item.to;
                        const origDes = item.from + '-' + item.to;
                        const ciclos = 1;
                        let operacion = 0;
                        const id = item.identificador;

                        if (origen != 'MEX' && destino === 'MEX') {
                            operacion = 1;
                        }

                        const suma = Sumary();
                        suma.matricula = 'XA-EFR'; suma.clave = clave; suma.fecha = fecha;
                        suma.bitacora = bitcora; suma.tramo = tramo; suma.numVuelo = vuelo;
                        suma.origen = origen; suma.destino = destino; suma.origenDestino = origDes;
                        suma.cliente = cliente; suma.ciclos = ciclos; suma.operacion = operacion;
                        suma.identificador = id;

                        await suma.save();
                        await bitacora.save();
                    }

                    break;

                case 'XA-LRC':
                    const sheetLrc = sheetnames[i];
                    const dataLrc = XLSX.utils.sheet_to_json(workbook.Sheets[sheetLrc]);



                    for (const item of dataLrc) {

                        const fec = new Date((item.fecha - (25567 + 2)) * 86400 * 1000);
                        item.fecha = fec;

                        const bitacora = new XaLrc(item);
                        const ruta = item.from + '-' + item.to;
                        crearDestino(ruta, 'XA-LRC');

                        const match = item.flt + '-' + item.from + '/' + item.to;
                        const cliente = await buscarCliente('match', match);
                        const clave = item.bitacoraVuelo;
                        const fecha = item.fecha;
                        const bitcora = item.bitacora;
                        const tramo = 1;
                        const vuelo = item.flt;
                        const origen = item.from;
                        const destino = item.to;
                        const origDes = item.from + '-' + item.to;
                        const ciclos = 1;
                        let operacion = 0;
                        const id = item.identificador;

                        if (origen != 'MEX' && destino === 'MEX') {
                            operacion = 1;
                        }

                        const suma = Sumary();
                        suma.matricula = 'XA-LRC'; suma.clave = clave; suma.fecha = fecha;
                        suma.bitacora = bitcora; suma.tramo = tramo; suma.numVuelo = vuelo;
                        suma.origen = origen; suma.destino = destino; suma.origenDestino = origDes;
                        suma.cliente = cliente; suma.ciclos = ciclos; suma.operacion = operacion;
                        suma.identificador = id;

                        await suma.save();
                        await bitacora.save();
                    }

                    break;

                default:
                    console.log('Objeto invalido');
                    break;
            }


        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al guardar la informacion del archivo bitacora vuelo'
        });

    }

}

const buscarCliente = async (busqueda, argumento) => {

    try {
        switch (busqueda) {
            case 'match':
                const match = await DetOperadores.findOne({ argumento });
                return match.cliente;
                break;
            case 'clasificacion':
                const clasificacion = await DetOperadores.findOne({ argumento });
                return clasificacion.clase;
                break;
            default:
                break;
        }


    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al buscar cliente'
        });
    }
}


const crearDestino = async (ruta, vuelo) => {

    switch (vuelo) {
        case 'XA-GGL':
            const rutaGGl = await DestinoXaGgl.findOne({ ruta });
            if (rutaGGl) {
                rutaGGl.acumulado += 1;
                rutaGGl.vuelo = vuelo;
                await rutaGGl.save();

            } else {
                const destino = new DestinoXaGgl();
                destino.ruta = ruta;
                destino.acumulado = 1;
                destino.vuelo = vuelo;

                await destino.save();
            }

            break;

        case 'XA-UYR':
            const rutaUyr = await DestinoXaUyr.findOne({ ruta });
            if (rutaUyr) {
                rutaUyr.acumulado += 1;
                rutaUyr.vuelo = vuelo;
                await rutaUyr.save();

            } else {
                const destino = new DestinoXaUyr();
                destino.ruta = ruta;
                destino.acumulado = 1;
                destino.vuelo = vuelo;

                await destino.save();
            }
            break;

        case 'XA-LFR':
            const rutaLfr = await DestinoXaLfr.findOne({ ruta });
            if (rutaLfr) {
                rutaLfr.acumulado += 1;
                rutaLfr.vuelo = vuelo;
                await rutaLfr.save();

            } else {
                const destino = new DestinoXaLfr();
                destino.ruta = ruta;
                destino.acumulado = 1;
                destino.vuelo = vuelo;

                await destino.save();
            }
            break;

        case 'XA-EFR':
            const rutaEfr = await DestinoXaEfr.findOne({ ruta });
            if (rutaEfr) {
                rutaEfr.acumulado += 1;
                rutaEfr.vuelo = vuelo;
                await rutaEfr.save();

            } else {
                const destino = new DestinoXaEfr();
                destino.ruta = ruta;
                destino.acumulado = 1;
                destino.vuelo = vuelo;

                await destino.save();
            }
            break;
        case 'XA-LRC':
            const rutaLrc = await DestinoXaLrc.findOne({ ruta });
            if (rutaLrc) {
                rutaLrc.acumulado += 1;
                rutaLrc.vuelo = vuelo;
                await rutaLrc.save();

            } else {
                const destino = new DestinoXaLrc();
                destino.ruta = ruta;
                destino.acumulado = 1;
                destino.vuelo = vuelo;

                await destino.save();
            }
            break;

        default:
            console.log('Objeto invalido');
            break;
    }


}



module.exports = {
    leerExcel,
    getXaefr,
    getXaggl,
    getXalfr,
    getXalrc,
    getXauyr
}