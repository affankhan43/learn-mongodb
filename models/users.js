var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var userSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		unique:true,
		required:true,
		dropDups: true
	},
	details:{
		type:String
	},
	number:{
		type:Number,
		min:1,
		max:666,
		required:true
	}
});

var Users = mongoose.model('Users',userSchema);

module.exports = Users;