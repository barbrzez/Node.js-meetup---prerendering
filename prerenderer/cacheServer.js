const cacheGenerator = require('./cacheGenerator');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(cacheGenerator.getCachedValue()))

app.listen(port, () => console.log(`Prerenderer app listening on port ${port}!`))