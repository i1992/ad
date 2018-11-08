const express = require('express');
const app = express();

const query = require('../server/query');


app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: "BCP" }));

app.use('/query', query);
app.listen(8080, () => console.log('Listening on port 8080!'));
