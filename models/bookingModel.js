let { MongoClient, ObjectId } = require("mongodb");
let url = "";

let add =(obj,res)=>
{
    let url = "";
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("Mern");
    let collection = db.collection("events");
    collection.insertOne(obj)
    .then((result)=>{res.send(result)})
    .catch((err)=>{res.send(err)})
    .finally(()=>client.close());
}
let get=(res)=>{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("Mern");
    let collection = db.collection("events");
    collection.find().toArray()
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())
}

let updateBooking = (id,obj,res)=>{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("Mern");
    let collection = db.collection("events");

    collection.updateOne({_id : new ObjectId(id)},{ $set:obj})
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())
}

let deleteBooking = (id,res) =>{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("Mern");
    let collection = db.collection("events");

    collection.deleteOne({_id : new ObjectId(id)})
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())
}

module.exports = { add ,get , updateBooking,deleteBooking};
