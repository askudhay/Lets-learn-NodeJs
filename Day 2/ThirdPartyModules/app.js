const _ = require('lodash');
console.log('Result:',_.isString('Udhay'));
console.log('Result:',_.isString(100));

console.log('Unique Array:',_.uniq([2, 1, 2, 'Udhay', 'Kumar', 'Udhay']));