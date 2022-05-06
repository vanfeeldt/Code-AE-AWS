const { response } = require('express');

const Horario = require('../models/horario');

const Tramo = require('../models/tramo');

const PrecioAterrizajeMex = require('../models/precioAterrizajeMex');

const PrecioPlataforma = require('../models/precioPlataforma');

const PrecioCombustible = require('../models/preciosCombustible');

const XLSX = require('xlsx');


const getHorarios = async (req, res = response) => {

    const hoario = await Horario.find({});

    try {
        res.status(200).json({
            ok: true,
            msg: 'horarios disponibles',
            hoario

        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al consultar, horarios'
        });
    }

}

const getTramos = async (req, res = response) => {

    try {
        const tramo = await Tramo.find({});

        res.status(200).json({
            ok: true,
            msg: 'rutas disponibles',
            tramo

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al consultar, tramo'
        });
    }
}


const crearHorario = async (req, res = response) => {

    try {

        const horario = new Horario(req.body);

        await horario.save();

        res.status(200).json({
            ok: true,
            msg: 'post, horario',
            horario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear, horario'
        });
    }
}


const crearTramo = async (req, res = response) => {

    try {

        const tramo = new Tramo(req.body);

        await tramo.save();

        res.status(200).json({
            ok: true,
            msg: 'post, tramo',
            tramo
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear, horario'
        });
    }
}


const actualizarHorario = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const horarioDB = await Horario.findById(uid);

        if (!horarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un horario con ese id'
            });
        }

        const horarioActualizado = await Horario.findByIdAndUpdate(uid, req.dody, { new: true });

        res.status(200).json({
            ok: true,
            msg: 'horaio actualizado operador vuelo',
            horario: horarioActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar, horario'
        });
    }
}

const actualizarTramo = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const tramoDB = await Tramo.findById(uid);

        if (!tramoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un tramo con ese id'
            });
        }

        const tramoActualizado = await Tramo.findByIdAndUpdate(uid, req.dody, { new: true });

        res.status(200).json({
            ok: true,
            msg: 'horaio actualizado operador vuelo',
            horario: tramoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar, tramo'
        });
    }
}

const eliminarHoario = async (req, res = response) => {


    try {
        const horarioDB = await Horario.findById(uid);

        if (!horarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un horario con ese id'
            });
        }

        await Hoario.findByIdAndDelete(uid);

        res.status(200).json({
            ok: true,
            msg: 'horario eliminado ',

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar, horario'
        });
    }
}

const eliminarTramo = async (req, res = response) => {


    try {
        const tramoDB = await Tramo.findById(uid);

        if (!tramoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una ruta con ese id'
            });
        }

        await DetOperadores.findByIdAndDelete(uid);

        res.status(200).json({
            ok: true,
            msg: 'tramo eliminado',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar, tramo'
        });
    }
}

const leerExcel = async (req, res = response) => {
    try {

        await readExcel("F:\\vago\\back\\docs\\Precios.xlsx");

        res.status(200).json({
            ok: true

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al cargar informacion  del archivo Precios'
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
                case 'Horarios':

                    const sheet = sheetnames[i];
                    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

                    for (const item of data) {
                        const horario = await new Horario(item);



                        await horario.save();
                    }

                    break;

                case 'Tramos':

                    const sheetTramo = sheetnames[i];
                    const dataTramo = XLSX.utils.sheet_to_json(workbook.Sheets[sheetTramo]);

                    for (const item of dataTramo) {
                        const tramo = await new Tramo(item);
                        await tramo.save();
                    }

                    break;


                case 'PreciosAterrizajeMex':

                    const sheetPrecioMex = sheetnames[i];
                    const dataPrecioMex = XLSX.utils.sheet_to_json(workbook.Sheets[sheetPrecioMex]);

                    for (const item of dataPrecioMex) {
                        const precioMex = await new PrecioAterrizajeMex(item);
                        await precioMex.save();
                    }

                    break;

                case 'PreciosPlataforma':

                    const sheetPrecioPlataforma = sheetnames[i];
                    const dataPrecioPlataforma = XLSX.utils.sheet_to_json(workbook.Sheets[sheetPrecioPlataforma]);

                    for (const item of dataPrecioPlataforma) {
                        const precioPlataforma = await new PrecioPlataforma(item);
                        await precioPlataforma.save();
                    }

                    break;

                case 'PreciosCombustibles':

                    const sheetCombustible = sheetnames[i];
                    const dataPrecioCombustible = XLSX.utils.sheet_to_json(workbook.Sheets[sheetCombustible]);

                    for (const item of dataPrecioCombustible) {


                        const fec = new Date((item.vigenciaInicio - (25567 + 2)) * 86400 * 1000);
                        item.vigenciaInicio = fec;

                        const fec2 = new Date((item.vigenciaFin - (25567 + 2)) * 86400 * 1000);
                        item.vigenciaFin = fec2;


                        const precioCom = await new PrecioCombustible(item);
                        await precioCom.save();
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
            msg: 'Error inesperado al guardar la informacion del archivo Precios'
        });

    }
}


module.exports = {
    getHorarios,
    getTramos,
    crearHorario,
    crearTramo,
    actualizarHorario,
    actualizarTramo,
    eliminarHoario,
    eliminarTramo,
    leerExcel,
}