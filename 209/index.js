import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const data= {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple","banana","cherry"],
        htmlContent: "<strong> This is some html </strong>"
    };
    res.render("index.ejs",data);

});

app.listen(port,()=>{
    console.log("server is running at 3000");
});