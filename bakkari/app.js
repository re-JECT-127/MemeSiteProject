'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
var session = require('express-session'); 
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser'); 
const pool = require('./database/db'); 


const app = express();
const port = 3000;
const memeRoute = require('./routes/memeRoute');
const userRoute = require('./routes/userRoute');
const tagRoute = require('./routes/tagRoute');


app.use(cors());
app.use('/thumbnails', express.static('thumbnails'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use(session({
	secret: '12345', //VERY SECRET HERE
	resave: false,
	saveUninitialized: false,
}));



app.use('/meme', memeRoute);
app.use('/user', userRoute);
app.use('/tag', tagRoute);


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', checkAuthenticated, function(request, response) {
	response.redirect('/index123.html');
});

app.get('/login', checkNotAuthenticated, (request, response) => {
	response.redirect('http://10.114.34.44/app/login.html');
})

app.post('/auth', function(request, response) {
	var email = request.body.email;
	var password = request.body.password;
	if (email && password) {
		pool.query('SELECT password FROM meme_user WHERE email = ?', [email], async function(err, result, fields) {
			if(err) throw err;
			const hash = result[0].password;
			const isMatch = await bcrypt.compare(password, hash);
			console.log('hash status: ' + isMatch);
	
			if (isMatch) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/app/home');
			} else {
				response.send('Incorrect Email and/or Password!');
			}			
			response.end();
	});
		}else {
		response.send('Please enter Email and Password!');
		response.end();
		}
	
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.redirect('http://10.114.34.44/app/index123.html');
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

	return response.redirect('/app/login');
};

function checkNotAuthenticated(request,response, next) {
	if (request.session.loggedin) {
		return response.redirect('/app/');
	};
	return next();
};

app.listen(port, () => console.log(`Meme app listening on port ${port}!`));
