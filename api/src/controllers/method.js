const { getAll } = require("./getAll");

/*  verb    method      params  
    get     findAll     ()
    put     update      (body, where)
    post    create      (body)
    delete  destroy     (where)
*/

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

const action = (model, verb, method, string) =>  async (req, res) => {
    try {
        let a = []; 
        (verb === 'post' || verb === 'put') && a.push(req.body);
        (verb === 'delete' || verb === 'put') && a.push({where: req.body['where']}); 
        let result = await model[method](...a); 
        let get = await getAll(model);
        return res.status(200).json({get, result, verb, string});
    } catch (error) {
        console.log({error});
    }
};

module.exports = {
    action, 
}