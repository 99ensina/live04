// Basic server

/*var express = require('express'),
 app = express();
 port = process.env.PORT | 3000;

app.listen(port);

console.log('Restful API server started on: ' + port);*/

var express = require('express'),
 app = express();
 port = process.env.PORT || 3000,
 
 mongoose = require('mongoose'),
 Aluno = require('./api/models/alunoModel'),
 bodyParser = require('body-parser');

// mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Alunosdb');

app.use(bodyParser.urlencoded( { extended : true} ));
app.use(bodyParser.json());

// registrar as routes
var routes = require('./api/routes/alunoRoutes');
routes(app);

app.listen(port);

console.log('Restful API server started on: ' + port);