const { response } = require('express');

const OperadorVuelo = require('../models/operadorVuelo');

const XLSX = require('xlsx');



/*const getOperVuelo = async (req, res = response) => {

    const operVuelos = await OperadorVuelo.find({});

    res.status(200).json({
        ok: true,
        msg: 'get operador vuelo',
        operVuelos
    });

}*/

const getOperVuelo = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [operVuelos, total] = await Promise.all([
        OperadorVuelo
            .find({}, 'vuelo origen destino cliente clave clase')
            .skip(desde)
            .limit(10),

        OperadorVuelo.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        operVuelos,
        total
    });

}

const crearOperVuelo = async (req, res = response) => {

    try {

        const opVuelo = new OperadorVuelo(req.body);

        await opVuelo.save();

        res.status(200).json({
            ok: true,
            opVuelo

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear operador vuelo'
        });

    }

}


const actualizarOperVuelo = async (req, res = response) => {

    const uid = req.params.id;

    try {

        const opVueloDB = await OperadorVuelo.findById(uid);

        if (!opVueloDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una operacion de vuelo con ese id'
            });
        }

        //Actualizacion

        const opVueloActualizado = await OperadorVuelo.findByIdAndUpdate(uid, req.body, { new: true });


        res.status(200).json({
            ok: true,
            opVuelo: opVueloActualizado

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar operador vuelo'
        });
    }

}

const eliminarOperVuelo = async (req, res = response) => {

    const uid = req.params.id;

    try {

        const opVueloDB = await OperadorVuelo.findById(uid);


        if (!opVueloDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una operacion de vuelo con ese id'
            });
        }

        await OperadorVuelo.findByIdAndDelete(uid);

        res.status(200).json({
            ok: true,
            msg: 'Operador Vuelo eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar  operador vuelo'
        });
    }

}

const leerExcel = async (req, res = response) => {

    const { ruta } = req.body;

    try {
        await readExcel("F:\\vago\\back\\docs\\ClienteVlos.xlsx");

        res.status(200).json({
            ok: true,
            msg: 'Leer Excel Operador Vuelo'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al leer archivo operador vuelo'
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

            const opVuelo = await new OperadorVuelo(item);

            await opVuelo.save();

            //console.log(item);
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
    getOperVuelo,
    crearOperVuelo,
    actualizarOperVuelo,
    eliminarOperVuelo,
    leerExcel

}