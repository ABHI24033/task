const express=require("express");
const { deleteOne, find } = require("./Dbase/tudo");
require("./Dbase/config");
const Tudo=require("./Dbase/tudo")
let app=express();
let cors=require("cors")

app.use(cors());
app.use(express.json());
app.get("/",async(req,res)=>{
    const tudolist=await Tudo.find();
    // console.log(tudolist)
    res.send(tudolist);
})
app.post("/tudo",async(req,res)=>{
    const tdo=Tudo(req.body);
    await tdo.save();
    console.log(tdo)

    res.send(tdo)
})

app.delete("/:id",async(req,res)=>{
    const del=await Tudo.deleteOne({_id:req.params.id});
    res.status(200).send(del);
});

// +++++++++++++++++++++++++update Tudoes+++++++++++++++++++++++++
app.get("/update/:id",async(req,res)=>{
    let update=await Tudo.findOne({_id:req.params.id});
    if(update){
        res.send(update);
    }
    else{
        res.send({Result:"Result not found"})
    }
})
app.put("/update/:id",async(req,res)=>{
    let result=await Tudo.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }   
        )
        res.send(result);
})
app.listen(8000,()=>{console.log("server is start at 8000")});