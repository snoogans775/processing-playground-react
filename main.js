const express = require('express');
const Datastore = require('nedb');
const helmet = require('helmet');

const app = express();
app.listen(3000, () => console.log("listening @ 3000"));
app.use(express.static('public'));
app.use( helmet() );

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/database', (request, response) => {
	const data = request.body;
	database.insert(data);
	response.json(data);
	
});

app.get('/database', (request, response) => {
	database.find({}, (err, data) => {
		if (err) {
			response.end();
			return;
		}
		response.json(data);
	})
})