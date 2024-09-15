const db =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Mongo Db'yer bağlanıldııı");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=db;