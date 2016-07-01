var express = require('express');
app = express();
path = require('path');

app.use(express.static(path.join(__dirname, '/client')));


app.listen(5555, function(){
	console.log('Now running on port 5555');
})