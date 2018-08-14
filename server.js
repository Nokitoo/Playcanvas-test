const path = require('path');

const express = require('express');
const app = express();

const indexPath = path.join(__dirname, 'index.html');

app.get('/', (req, res) => res.sendFile(indexPath))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
