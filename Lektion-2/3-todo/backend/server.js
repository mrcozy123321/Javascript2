const app = require('./app');
require('dotenv').config()


const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT

app.listen(PORT, () => console.log('Server: ' + serverURI))