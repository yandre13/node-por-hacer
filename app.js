const { argv } = require('./config/yargs')
c = console.log, { crearTarea, getListado, actualizar, eliminar, listarP } = require('./por-hacer/por-hacer'),
    colors = require('colors')



const comando = argv._[0]

switch (comando) {
    case 'crear':
        crearTarea(argv.d)
        break;
    case 'listarTodo':
        getListado()
        break;
    case 'listar':
        listarP(argv.c)
        break;
    case 'actualizar':
        actualizar(argv.d, argv.c)
        break;
    case 'eliminar':
        eliminar(argv.d)
        break;

    default:
        c('Comando no reconocido')
        break;
}
// c(argv)