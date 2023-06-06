const express= require('express');
const productsRouter = require('./routers/products.router')
const cartsRouter = require ('./routers/carts.router')

const PORT = 8070;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.get('/api/products',(req,res)=>{
  //  res.send('OK');
//});
app.use(productsRouter);
app.use(cartsRouter);

app.listen(PORT, () => {
    console.log("Ready on port ", PORT);
}); 