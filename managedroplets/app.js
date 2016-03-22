var DigitalOcean = require('do-wrapper'),
	api = new DigitalOcean('70a25d92df19c0d4b599ffe13f199e56b4ad9d7445c95fe51ea80d5320d8ef95');

api.imagesGetAll({'type':'distribution'}, function (err, res, body) {
	console.log(body);
});