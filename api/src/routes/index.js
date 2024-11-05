const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// const boilerplateRoutes = require ("./boilerplate.js");
// const user = require ("./user.js");
// const products = require ("./product.js");
// const sizes = require ("./size.js");
const { action } = require('../controllers/method.js');
// const universal = require("./universal.js");
let models = require('../db.js').conn.models; console.log({models})
let actions = {
    get: 'findAll', 
    post: 'create', 
    put: 'update', 
    delete: 'destroy'
};

let params = {
    get: [], 
    post: ['body'], 
    put: ['body', 'where'], 
    delete: ['where']
};

/*  verb    method      params  
    get     findAll     ()
    post    create      (body)
    put     update      (body, where)
    delete  destroy     (where)
*/

router.get("/", (req, res)=> {
    res.status(200).json({
        message: 'Welcome to the API',
        routes: {
            size: "/size",
            // user: "/user",
        }
    })
})

const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('./Lista.csv')
  .pipe(csv({
    headers: ['Nombre', 'Marca', 'Tipo', 'Categoría', 'Imagen', 'Descripción', 'Tamaño', 'Peso', 'Costo', 'Venta', 'Cantidad', 'Fecha', 'Vence', 'Lote', 'Estado', 'Valores'],
    separator: ';'  // Si el separador es tabulación, si es otro ajusta esto.
  }))
  .on('data', (row) => {
    results.push(row);
  })
//   .on('end', () => {
//     console.log(results);  // Aquí tienes todos los registros del archivo CSV como objetos JavaScript
//   });

router.get('/list', (req, res) => {
    res.status(200).json(results)
})

Object.keys(models).map((m,i)=> Object.keys(actions).map((a) => router[a](
    `/${m}`, action(models[m], a, actions[a], m),
)))

// router.use('/user', user)

// for (let eachModel in models){
//     // console.log({eachModel, t: typeof eachModel})
//     for (let eachAction in actions){
//         // console.log({eachAction, t: typeof eachAction, prop:actions[eachAction], tProp: typeof actions[eachAction]})
//         router[eachAction](`/${eachModel}`, 
//             action(models[eachModel], eachAction, actions[eachAction], eachModel), 
        
//         );
//     }
// }

module.exports = router;
// Configurar los routers