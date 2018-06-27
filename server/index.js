const express = require('express'),
   bodyParser = require('body-parser'),
   bookController = require('./controllers/books_controllers');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', bookController.read)

app.post('/api/books', bookController.create)

app.put('/api/books/:id', bookController.update)

app.delete('/api/books/:id', bookController.delete)











app.listen(3000, () => console.log("Server Node 1 Mini Running"))