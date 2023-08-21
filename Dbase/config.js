const mongoose=require("mongoose");

// mongoose.connect("mongodb://localhost:27017/tudo",{
//     useCreateIndex:false,
//     useNewUrlParser:true,
// } )
// .then(()=>{
//     console.log("connected successfully");
// }).catch((e)=>{;
//     console.log("not connected, ERROR:-",e)
// })
// const urlForAtls=mongodb+srv://abhishekdomain:Abhi@24033abhishekdomain@cluster0.xwyygv0.mongodb.net/todoapp?retryWrites=true&w=majority
const urlForAtls='mongodb+srv://abhishekdomain:Abhi%4024033abhishekdomain@cluster0.xwyygv0.mongodb.net/todoapp?retryWrites=true&w=majority';


// const previousUrl='mongodb://0.0.0.0:27017/tudo';
mongoose.connect(urlForAtls, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))