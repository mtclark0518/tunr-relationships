import * as express from 'express';
var router = express.Router();
import { artistsController } from '../controllers/artists';
import { managersController } from '../controllers/managers';
import { songsController } from '../controllers/songs';

//Artist Routes

// index
router.get('/api/artists', artistsController.index);

// create
router.post('/api/artists', artistsController.create);

// show
router.get('/api/artists/:id', artistsController.show);

// update
router.put('/api/artists/:id', artistsController.update);

// destroy
router.delete('/api/artists/:id', artistsController.destroy);

//Manager Routes

// index
router.get('/api/managers', managersController.index);

// create
router.post('/api/managers', managersController.create);

// show
router.get('/api/managers/:id', managersController.show);
router.get('/api/managers/:id', managersController.showAd);

// update
router.put('/api/managers/:id', managersController.update);

// destroy
router.delete('/api/managers/:id', managersController.destroy);

//Song Routes

// index
router.get('/api/songs', songsController.index);

// create
router.post('/api/songs', songsController.create);

// show
router.get('/api/songs/:id', songsController.show);

// update
router.put('/api/songs/:id', songsController.update);

// destroy
router.delete('/api/songs/:id', songsController.destroy);

export {router};