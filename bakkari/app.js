'use strict';

require('dotenv').config();
const cors = require('cors');
var mysql = require('mysql'); //added
const express = require('express');
var session = require('express-session'); //added
var bodyParser = require('body-parser'); //added
var path = require('path'); //added
const pool = require('./database/db'); // Ok this didn't work before. now it works. brilliant

const app = express();
const port = 3000;
const memeRoute = require('./routes/memeRoute');
const userRoute = require('./routes/userRoute');


//instead of pool have to use this. pool just refuses to work... it worked on mi other test app tho... so who knows... might be a plot of Sauron.
//EDIT: dont need this nightmare no more....
// var connection = mysql.createConnection({ 
// 	host     : 'localhost',
// 	user     : '', //ADD THIS
// 	password : '', //ADD THIS
//     database : '', //ADD THIS
//     port     :  3306
// });

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use('/meme', memeRoute);
app.use('/user', userRoute);


app.use(session({
	secret: '12345', //VERY SECRET HERE
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', checkAuthenticated, function(request, response) {
	//response.sendFile(path.join(__dirname + './index123.html'));
	response.redirect('./index123.html');
});

app.get('/login', checkNotAuthenticated, (request, response) => {
	response.redirect('./login.html');
})

app.post('/auth', function(request, response) {
	var email = request.body.email;
	var password = request.body.password;
	if (email && password) {
		pool.query('SELECT * FROM meme_user WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/home');
			} else {
				response.send('Incorrect Email and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Email and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		//response.send('Welcome back, ' + request.session.email + '!');
		response.redirect('/index123.html');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

function checkAuthenticated(request,response, next) {
	if (request.session.loggedin) {
		console.log('AUTHED');

		return next();
	};
	console.log('NO AUTH');

	return response.redirect('/login');
};

function checkNotAuthenticated(request,response, next) {
	if (request.session.loggedin) {
		return response.redirect('/');
	};
	return next();
};



app.listen(port, () => console.log(`Example app listening on port ${port}!`));