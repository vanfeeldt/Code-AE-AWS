const { response } = require('express');

const DetOperadores = require('../models/detOperadores');

const XLSX = require('xlsx');


/*const getdetOperadores = async (req, res = response) => {


    const detOperadores = await DetOperadores.find({});

    res.status(200).json({
        ok: true,
        msg: 'get determinacion operadores',
        detOperadores

    });
}*/

const getdetOperadores = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [detOperadores, total] = await Promise.all([
        DetOperadores
            .find({}, 'match vuelo origenDestino origen destino clase cliente')
            .skip(desde)
            .limit(10),

        DetOperadores.countDocuments()
    ]);

    res.status(200).json({
        ok: true,
        detOperadores,
        total
    });

}

const creardetOperadores = async (req, res = response) => {

    try {

        const dtOperador = new DetOperadores(req.body);

        await dtOperador.save();

        res.status(200).json({
            ok: true,
            msg: 'post determinacion  operadores',
            dtOperador
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear, determinacion operadores'
        });
    }
}

const actualizardetOperadores = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const detOperadorDB = await DetOperadores.findById(uid);

        if (!detOperadorDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una determinacion operador con ese id'
            });
        }

        const detOperadorActualizado = await DetOperadores.findByIdAndUpdate(uid, req.dody, { new: true });

        res.status(200).json({
            ok: true,
            msg: 'get operador vuelo',
            dtOperador: detOperadorActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar, determinacion operadores'
        });
    }



}

const eliminardetOperadores = async (req, res = response) => {


    try {
        const detOperadorDB = await DetOperadores.findById(uid);

        if (!detOperadorDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una determinacion operador con ese id'
            });
        }

        await DetOperadores.findByIdAndDelete(uid);

        res.status(200).json({
            ok: true,
            msg: 'get operador vuelo',

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar, determinacion operadores'
        });
    }
}

const leerExcel = async (req, res = response) => {

    const { ruta } = req.body;

    try {
        await readExcel("F:\\vago\\back\\docs\\detOperador.xlsx");

        res.status(200).json({
            ok: true,
            msg: 'Leer Excel Determinación Operadores'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al leer archivo Determinación Operadores'
        });
    }
}


const readExcel = async (ruta) => {

    try {
        const workbook = XLSX.readFile(ruta);// leer el archivo

        const workbookSheets = workbook.SheetNames; // hojas del archivo excel

        const sheet = workbookSheets[0];// solo la hoja 1

        const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]); //informacion de la hoja 1

        for (const item of dataExcel) {

            const detOperador = await new DetOperadores(item);

            await detOperador.save();

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al guardar la informacion del archivo operador vuelo'
        });
    }
}


module.exports = {
    getdetOperadores,
    creardetOperadores,
    actualizardetOperadores,
    eliminardetOperadores,
    leerExcel
}