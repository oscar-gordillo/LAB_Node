const express=require('express');
const app=express();
const path=require('path');
const cookieParser=require('cookie-parser');

app.use(express.urlencoded({extended:false}));
app.use(cookieParser('my secret'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'templates'));

app.get('/',(req,res)=>{
    for (let key in req.cookies) {
        console.log(key + '->' + req.cookies[key]);
    }
    res.render('form',{cookies:req.cookies});
});
app.post('/addcookie',(req,res)=>{
    console.log(req.body.key);
    console.log(req.body.value);
    res.cookie(req.body.key,req.body.value);
    res.redirect('/');
});

app.listen(3000,()=>{console.log('running');})