const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}
const opt = {
    complete: {
        demand: true,
        alias: 'c'
    }
}
const { complete } = opt

const { descripcion, completado } = opts

const argv = require('yargs').command('crear', 'Crear un elemento por hacer', { descripcion }).command('actualizar', 'Actualiza el estado completado de una tarea', opts).command('listarTodo', 'Lista todas las tareas que tenemos', { completado }).command('listar', 'Lista tareas completadas o no completadas', { complete }).command('eliminar', 'Elimina una tarea', { descripcion }).help().argv

module.exports = {
    argv
}