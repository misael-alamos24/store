//Categories
// export const GET_DOGS = 'GET_DOGS';
// export const POST_DOGS = 'POST_DOGS';
// export const PUT_DOGS = 'PUT_DOGS';
// export const DEL_DOGS = 'DEL_DOGS';
//Users
export const GET_USERS = 'GET_USERS';
export const POST_USERS = 'POST_USERS';
export const PUT_USERS = 'PUT_USERS';
export const DEL_USERS = 'DEL_USERS';
export const LOG_USERS = 'LOG_USERS';
//Active edition
// export const EDITION = 'EDITION';
//Roles
// export const GET_ROLES = 'GET_ROLES';
// export const POST_ROLES = 'POST_ROLES';
// export const PUT_ROLES = 'PUT_ROLES';
// export const DEL_ROLES = 'DEL_ROLES';
//Universals
//Methods
export const METHODS = ['GET', 'POST', 'PUT', 'DEL'];
export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DEL = 'DEL';
//Entities
export const ENTITIES = ['USERS', 'PRODUCTS', 'PROFITS', 'IMAGES', 'LIST']
export const USERS = 'USERS';
export const PRODUCTS = 'PRODUCTS';
//Combination try
// export const 
export let uniqueObject = {}; 
METHODS.map(m=>ENTITIES.map(e=>m+'_'+e)).map(t=>t.map(e=> uniqueObject[e] = e)); 
// console.log({uniqueObject});
//Y volvemos a la normalidad
// export const GET_  = 'GET_';
// export const POST_ = 'POST_';
// export const PUT_  = 'PUT_';
// export const DEL_  = 'DEL_';
