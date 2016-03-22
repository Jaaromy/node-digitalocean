// Load evnironment variables from .env file
require('dotenv').load();

function getTestRequest() {
	return true;
}

exports.getTestRequest = getTestRequest;