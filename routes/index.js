var express = require('express');
var router = express.Router();
var sql = require('mysql');
var session = require('express-session');
//var sanitizer = require('sanitizer');
const bodyParser = require('body-parser');

//mysql://b3832e8c1192ee:03e8efee@eu-cdbr-west-02.cleardb.net/heroku_4e31ecd5ff8d061?reconnect=true //cleardb mysql
//mysql://lx42l6t8yyogjc6f:dtq3782vbz0ofsc9@jfrpocyduwfg38kq.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/mhdvf9ni1jbyyx0a //jawsdb


/*const conn = sql.createConnection({
	host:'localhost',
	user:'dev',
	password:'password',
	database:'solasta_db'	
});*/

const conn = sql.createConnection({
	host:'jfrpocyduwfg38kq.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
	user:'lx42l6t8yyogjc6f',
	password:'dtq3782vbz0ofsc9',
	database:'mhdvf9ni1jbyyx0a'	
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/event_details/:id/:cat', function(req, res, next) {
	if(req.params.id == 0)
	{
		conn.query(`select * from solasta20main where tech_cult = 'Technical' and category = '${req.params.cat}'`, function(err, result){
			if(err) throw err;
			if(result.length !== 0)
			{
				res.send(result);
			}
			else
			{
				res.send(404);
			}
		});
	}
	else if(req.params.id == 1)
	{
		conn.query(`select * from solasta20main where tech_cult = 'Cultural' and category = '${req.params.cat}'`, function(err, result){
			if(err) throw err;
			if(result.length !== 0)
			{
				res.send(result);
			}
			else
			{
				res.send(404);
			}
		});
	}
	else
	{
		res.send(404);
	}
});


router.get('/event_data/:id2', function(req, res, next){
	if(req.params.id2 == 0)
	{
		conn.query(`select * from solasta20main where tech_cult = 'Technical'`, function(err, result){
			if(err) throw err;
			if(result.length !== 0)
			{
				res.send(result);
			}
			else
			{
				res.send(404);
			}
		});
	}
	else if(req.params.id2 == 1)
	{
		conn.query(`select * from solasta20main where tech_cult = 'Cultural'`, function(err, result){
			if(err) throw err;
			if(result.length !== 0)
			{
				res.send(result);
			}
			else
			{
				res.send(404);
			}
		});
	}
	else
	{
		res.send(404);
	}
});

module.exports = router;
