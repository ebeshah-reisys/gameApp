/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
	name:{
	type:"string",
	required:true,
	minLength:2
	},
	email:{
	type:"email",
	required:true,
	unique: true
	},
	username:{
	type:"string",
	required:true,
	minLength:6,
	unique: true
	},
	phone:{
	type:"string",
	minLength:10
	}
}
};

