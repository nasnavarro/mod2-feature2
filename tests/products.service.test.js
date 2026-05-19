import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../src/services/products.service.js';

console.log('--- getAllProducts ---');
console.log(getAllProducts().length);             // 15

console.log('--- getProductById ---');
console.log(getProductById(1));                   // producto id 1
console.log(getProductById(999));                 // null

console.log('--- createProduct ---');
const created = createProduct({ name: 'Test', price: 9.99 });
console.log(created);                             // id '16', con createdAt

console.log('--- updateProduct ---');
console.log(updateProduct('1', { price: 99 }));  // producto actualizado
console.log(updateProduct('999', { price: 99 })); // null

console.log('--- deleteProduct ---');
console.log(deleteProduct('1'));                  // producto eliminado
console.log(deleteProduct('999'));                // null
console.log(getAllProducts().length);             // 15 (creado 1, eliminado 1)
