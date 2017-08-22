// tslint:disable:indent

import { db } from '../models';
var Manager = db.models.Manager;
var Artist = db.models.Artist;
var Ad = db.models.Ad;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res) {
  Manager.findById(req.params.id, {
    include: Artist
  })
  .then(function(manager){
    if(!manager) res.send(res, "not found");
    else res.json(manager);
  });	
}

function create(req, res) {
	Manager.create(req.body).then(function(manager){
    if(!manager) res.send(res, "not saved");
    else res.json(manager);
  });
}

function update(req, res) {
  Manager.findById(req.params.id)
  .then(function(manager){
    if(!manager) res.send(res, 'not found');
    else return manager.updateAttributes(req.body);
  })
  .then(function(manager){
    res.json(manager);
  });
}

function destroy(req, res) {
  Manager.findById(req.params.id)
  .then(function(manager){
    if(!manager) res.send(res, 'not found');
    else return manager.destroy();
  })
  .then(function(){
    res.redirect(303, '/managers');
  });
}
function showAd(req, res) {
  Manager.findById(req.params.id)
  .then(function(manager) {
    if (!manager) res.send(res, 'manager not found');
    else res.json( manager )
      .then(function(manager) {
        Ad.findOne({where: {managerId : manager.id }})
    .then(function(ad) {
      if (!ad) res.redirect(303, '/managers');
       else {res.send('this is a response'); }

    });
  });
  });
  }
const managersController = <any>{};
managersController.index = index;
managersController.show = show;
managersController.create = create;
managersController.update = update;
managersController.destroy = destroy;
managersController.showAd = showAd;

export {managersController};
