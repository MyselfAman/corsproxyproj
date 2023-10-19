import express from 'express' // modular js for this add "type" : "module" in package.json file
// const express = require("express") // commonJs for this add "type" : "commonJs" in package.json file
const app = express();


app.get("/api/v1/jockes" , (req,res) =>{
    res.send([
        {
            id:1,
            title:"first post"
        },
        {
            id:2,
            title:"secound post"
        },
        {
            id:3,
            title:"third post"
        },
        {
            id:4,
            title:"fourth post"
        },
        {
            id:5,
            title:"fifth post"
        },
    ])
})

const PORT =3000

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`Server is running at port ${PORT}`);
})