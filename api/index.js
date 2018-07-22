const http=require('http');
const bodyParser=require('body-parser');
const express=require('express');

const PORT=3001;
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.server=http.createServer(app);

app.get('/',(req,res)=>{
    return res.json({version:'1.0'});
})

/*
 * @method POST
 * @endpoint /api/on-live-auth
 * @description authentication for live stream user
 * 
*/

app.post('/api/on-live-auth',(req,res,next)=>{
    const streamInfo=req.body;
    console.log(streamInfo);
    return res.status(200).json({
        verified:true,
    })
})

app.server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})