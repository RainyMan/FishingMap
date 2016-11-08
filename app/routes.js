var Store = require('./models/store');
module.exports = function(app){
	//app.get('/', function(req, res){
	//	res.render('index.ejs');
	//});

	app.get('/information', function(req, res){
		res.render('information.ejs', { message: 'Information' });
	});
	
	app.get('/', function(req, res){
		Store.find({}, function(err, docs) {
    if (!err){ 
	//console.log(docs.length);
        		res.render('map.ejs', { docs: docs});	
    } else {throw err;}
});
		
	});

	app.post('/information', function(req, res){
		var newStore = new Store();
		newStore.local.storename = req.body.storename;
		newStore.local.storeclass = req.body.storeclass;
		newStore.local.county = req.body.county;
		newStore.local.district = req.body.district;
		newStore.local.address = req.body.address;
		newStore.local.lat = req.body.lat;
		newStore.local.lng = req.body.lng;
		newStore.local.telephone = req.body.telephone;
		newStore.local.updated = new Date;
		newStore.save(function(err){
			if(err)
				throw err;
		});

		res.redirect('/');
	});
}