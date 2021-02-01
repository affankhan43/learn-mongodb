var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
	author:{
		type:String,
		required:true
	},
	comment:{
		type:String,
		required:true
	}
})
var postSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	details:{
		type:String,
		unique:true,
		required:true
	},
	author:{
		type:String,
		required:true
	},
	comments:{
		type:commentsSchema,
		required:true
	}
});

var Posts = mongoose.model('Post',postSchema);

module.exports = Posts;