const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloServer} = require('apollo-server-express');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

if (process.env.NODE_ENV === 'production') 
{app.use(express.static(path.join(__dirname, '../client/build')));}

app.get('*', (req, res) => {res.sendFile(path.join(__dirname,'../client/build/index.html'));});

app.use(routes);
db.once('open', () => {
  app.listen(PORT, () => console.log(`You are on localhost:${PORT}`));
});