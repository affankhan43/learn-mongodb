var mongoose = require('mongoose');
var Users = require('./models/users')
var Posts = require('./models/posts')


var url = "mongodb://127.0.0.1:27017/shop"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},(err,res)=>{
	console.log('MongoDB Connected Successfully')
})
// Users.create({
// 	"name":666,
// 	"email":"affan@gmail.com",
// 	"details":"adasdasd asds",
// 	"masd":"asd",
// 	"number":55
// }).then(data=>{
// 	console.log(data)
// }).catch(err=>console.log(err))

Posts.create({
	"title":"BTC Hype",
	"details":"LTC is more",
	"author":"Farhan"
}).then(data=>{
	console.log(data)
})
