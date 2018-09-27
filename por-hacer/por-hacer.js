const fs = require('fs'),
    colors = require('colors')



//Almacenaremos los datos en un JSON
let listadoDeTareas = []
    //CRUD
    //Create
const crearTarea = descripcion => {
    try {
        cargar()
    } catch (error) {
        listadoDeTareas = []
    }
    let tarea = {
        descripcion,
        completada: false
    }

    listadoDeTareas.push(tarea)
    guardar()
    return console.log(tarea)


}

const guardar = () => {

    let listado = JSON.stringify(listadoDeTareas)
    fs.writeFile('./DB/data.json', listado, (err) => {
        if (err) {
            throw err
        }
        return console.log('se modificó el data.json')
    })
}
const cargar = () => {
        listadoDeTareas = []
        listadoDeTareas = require('../DB/data.json')
    }
    //Read
const getListado = () => {
    cargar()
    for (let tarea of listadoDeTareas) {
        console.log(`========= Por hacer ===========`.rainbow)
        console.log(`${tarea.descripcion}`.rainbow)
        console.log(`Estado: ${tarea.completada}`.rainbow)
    }
    console.log(`===================================`.rainbow)

}

//Listar con parámetros
const listarP = completa => {
        cargar()
        console.log(completa)
        if (completa === 'false') {
            completa = false
        }
        if (completa === 'true') {
            completa = true
        }
        if (completa === true) {
            console.log(`Lista de tareas completas`.green)
            for (let tarea of listadoDeTareas) {
                if (tarea.completada === completa) {

                    console.log(tarea.descripcion)
                }
            }
        }
        if (completa === false) {
            console.log(`Lista de tareas NO completas`.red)
            for (let tarea of listadoDeTareas) {
                if (tarea.completada === completa) {

                    console.log(tarea.descripcion)
                }
            }
        }

    }
    //Update
const actualizar = (descripcion, completada = true) => {
    cargar()
    let index = listadoDeTareas.findIndex(el => el.descripcion === descripcion)
    if (index >= 0) {
        listadoDeTareas[index].completada = completada
        guardar()
        return true
    }
    return false
}

//Delete
const eliminar = descripcion => {
    cargar()

    let index = listadoDeTareas.findIndex(el => el.descripcion === descripcion)
    if (index >= 0) {
        listadoDeTareas.splice(index, 1)
        guardar()
        return console.log(`se ha eliminado la tarea ${descripcion}`.red)
    }
    return console.log(`Tarea ${descripcion} no encontrada`)

}




module.exports = {
    crearTarea,
    getListado,
    actualizar,
    eliminar,
    listarP
}