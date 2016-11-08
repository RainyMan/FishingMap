var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		storename: String,
		storeclass: String,
		county: String,
		district: String,	
		address: String,
		lat: String,
		lng: String,
		telephone: String,
		updated: { type: Date, default: Date.now },
	}
});

module.exports = mongoose.model('store', userSchema);