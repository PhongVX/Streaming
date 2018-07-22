const http=require('http');
const bodyParser=require('body-parser');
const express=require('express');

const PORT=3001;
const app=express();
app.use(bodyParser.json());
app.server=http.createServer(app);

app.get('/',(req,res)=>{
    return res.json({version:'1.0'});
})

app.server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})