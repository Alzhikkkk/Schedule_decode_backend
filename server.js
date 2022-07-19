require('dotenv').config();
const express = require('express');
const cors = require('cors')
const {corsOptionsDelegate} = require('./config/cors');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('cookie-parser')())
app.use(cors(corsOptionsDelegate))


app.use(require('./routes'))

app.listen(process.env.PORT , () => console.log(`Server is listening on port ${process.env.PORT}`))