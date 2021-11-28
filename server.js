
const express =require('express');
/*const { default: App } = require('./src/App');*/

const app=express();

app.get('/', (req, res)=>{
    res.sendFile('index.html',{root:__dirname});
});

app.use(express.static(__dirname+"/dist"));

/*let port=process.env.PORT || 5000;*/
app.listen(3000,()=>{
    console.log(__dirname);
    console.log("listening port" + 3000);
});
