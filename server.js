const express =require("express");

const port = 3000;
const app = express();

app.get("/",(req,res)=>{
res.json({msg:"server is up and running....."});
});

app.listen(port,()=>{
console.log(`server is running in port ${port}`);
}
)
