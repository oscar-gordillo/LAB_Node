const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "templates"));

app.get('/', (req, res) => {
 
 res.render('form');
});
app.post('/result',(req,res)=>{
   let name = req.body.name;
   let age = req.body.age;
   if (!name) {
    name = "person";
   }
   if (!age) {
    age=0;
   }
   res.render('output',{name:name, age:age});
});
app.listen(3000,()=>{console.log('server running');});