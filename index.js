var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

var url = "mongodb://127.0.0.1:27017"
var dbname = "shop"

MongoClient.connect(url, (err,client)=>{
	assert.equal(err,null)
	var db = client.db(dbname)
	var coll = db.collection('products')
	// coll.insertMany([{"name":"bookd","title":"yz"},{"name":"book3","title":"xyzdds"}],(err,result)=>{
	// 	console.log(result)

	// 	client.close()
	// })
	// coll.find({"name":{$nin:["bookd","book3"]}}).toArray((err,res)=>{
	// 	console.log(res)
	// })
	// coll.deleteMany({"name":{$in:["bookd","book3"]}},(err,resp)=>{
	// 	console.log(resp.deletedCount)
	// })
	coll.insertOne({"name":"bookOne","title":"XYZ"})
	.then((result)=>{
		console.log(result)
		//console.log(coll.updateOne({"name":"bookOne"},{$set:{"name":"bookfour"}}))
		//return 'asd';
		return coll.find({"name":"bookOne"}).toArray()
	})
	.then((data)=>{
		console.log(data)
		return 'xyyy'
	})
	.then((data)=>{
		console.log(data)
		client.close()
	})
	//client.close()
	//console.log(coll)

})

//Call Back Hell