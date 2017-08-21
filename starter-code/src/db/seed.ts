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
		title: "Nessun dorma",
		duration: "3:21",
		// tslint:disable-next-line:indent
		date_of_release: "1990",
		album_title: "Three Tenors in Concert",
		artistId: ""
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
        	name: 'Luciano Pavarotti',
        	photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
        	nationality: 'Italiano',
        	instrument: 'Voice',
        	home_address: '1 Strada Roma',
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
const songCreate = function() {
	// tslint:disable-next-line:indent
	return DB.Song.create({
	    // tslint:disable-next-line:indent
	    title: 'The Best Song Ever',
	    // tslint:disable-next-line:indent
	    duration: '3:31',
	    date_of_release: '7/13/2015',
	    // tslint:disable-next-line:indent
	    album_title: 'Best Album Ever'
	});
};

managerCreate()
    .then(songCreate)
    .then(() => {
        process.exit();
    });
