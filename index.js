const express = require('express');
const monggose = require('mongoose');

const app = express();
const port = 3000

monggose.connect('mongodb+srv://heruheru:dkspahsp77@heruheru.4yzkrxc.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser : true
}).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));