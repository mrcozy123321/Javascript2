const path = require('path')

// console.log(path);

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));  // ger oss bara filnamnet
// console.log(path.dirname(__filename));   // ger oss samma som __dirname
// console.log(path.extname(__filename));      // ger oss filtypen

console.log(path.join(__dirname, 'mapp', 'index.html'));