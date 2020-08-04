const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');


const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircncjorge:aircncjorge@aircnc-4stg0.mongodb.net/appaircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(cors());
app.use(express.json());
/* e aqui vou criar o files com o express.static que é a funcionalidade
que lida com arquivos estáticos.Algo com upload.
E dentro do static() passo o caminho para os arquivos, a pasta upload  */
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);