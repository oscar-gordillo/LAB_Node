const express = require('express');
const path=require('path');
const app = express();
const session=require('express-session');
//let products=[];
app.use(session({secret:"my secret"}));
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/myjs',express.static(path.join(__dirname,'js')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'templates'));

function updateCountCart(obj){
    let count=0;
    for (let el in obj) {
        count++;
    }
    return count;
}

app.get('/', (req, res) => { 
    if (!req.session.cart) {
        req.session.cart={}
    }
    //console.log('products: '+products.length);
    res.render('product',{id:123, name:"Product 1", price: 500, description: "Description for the product"});
});

app.post('/addToCart',(req,res)=>{
    req.session.cart[req.body.id]={ id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity
    };
    /*products.push({ id: req.body.id,
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    quantity: req.body.quantity
                });*/
    //res.send(req.session.cart.length);         
    res.send(updateCountCart(req.session.cart)+"");      
});
app.get('/shoppingcart',(req,res)=>{
    res.render('shoppingcart',{cart:req.session.cart});
});
app.listen(3000,()=>{console.log('server running');});