// tslint:disable:indent

import { db } from '../models';
let DB = db.models;



var lucySongs = [
	{
		title: "O sole mio",
		duration: "3:21",
		date_of_release: "1990",
		album_title: "Three Tenors in Concert",
		artistId: ""
	},
	{
		title: 'Nessun dorma',
		duration: '3:21',
		// tslint:disable-next-line:indent
		date_of_release: '1990',
		album_title: 'Three Tenors in Concert',
		artistId: ''
	}
];
const managerCreate = function() {
	return DB.Manager.create({
    	name: 'Ricky Bobby',
    	email: 'rbobby@gmail.com',
    	office_number: '516-877-0304',
    	cell_phone_number: '718-989-1231'
	})
	.then(function(manager) {
		return DB.Artist.create({
        	name: 'CIID',
        	photoUrl: 'http://w2dp.s3.amazonaws.com/2016/04/29/21/56/23/385d18e7-eec3-4ea1-98e0-96ef03ed37a6/volume-with-dj-cid.jpg',
        	nationality: 'American',
        	instrument: 'CDJ2000',
        	home_address: 'NY, NY',
        	managerId: manager.id
		})
		.then(function(artist) {
      		lucySongs.forEach(function(song) {
        		song.artistId = artist.id;
      		});
    		DB.Song.bulkCreate(lucySongs);
		});
    });
};
const adCreate = function() {
	return DB.Ad.create({
		headline: 'She wants the d',
		url: 'https://soundcloud.com/sizerecords/she-wants-the-d',
		managerId: 1
	});
};
const songCreate = function() {
	return DB.Song.create({
	    title: 'The Best Song Ever',
	    duration: '3:31',
	    date_of_release: '7/13/2015',
	    album_title: 'Best Album Ever'
	});
};


managerCreate()
	.then(adCreate)
    .then(songCreate)
    .then(() => {
        process.exit();
    });
