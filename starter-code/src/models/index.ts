//Connect
import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://TheTDrive@localhost:5432/tunr_relationships');

const Artist = sequelize.import("./artist");
const Manager = sequelize.import("./manager");
const Song = sequelize.import("./song");
const Ad = sequelize.import('./ad');


Artist.hasMany(Song);
Manager.hasMany(Artist);
Manager.hasOne(Ad);
Song.belongsTo(Artist);
Artist.belongsTo(Manager);
Ad.belongsTo(Manager);



const db = <any>{};
db.models = {
	Artist,
	Manager,
	Song,
	Ad
};

//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};