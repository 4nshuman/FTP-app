var express = require('express');
app = express();

//Set template view engine
app.set('view engine','ejs')

//set middleware to access static content
app.use('/imgs', express.static(__dirname+'/assets/imgs'))
app.use('/css', express.static(__dirname+'/assets/css'))

//define routing
app.get('/', function(req,res){
  console.log(req.query)
  res.render('index')
})

//start listening
app.listen('3000')
