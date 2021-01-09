const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (request, response) {
    response.send('<h2>Привет, Express!</h2>');
});

app.get('/about', function (request, response) {
    response.send('<h2>О сайте<h2>');
});

app.get('/contact', function(request, response) {
    response.send('<h2>Контакты</h2>');
});

app.use(function(request, response) {
    response.send("<h2>Ошибка 404. Нет такой страницы.</h2>");
});

app.listen(PORT, function (error) {
    if (error) {
        console.error('Error in server setup');
    } else {
        console.log('Server listening on Port', PORT);
    }
});


