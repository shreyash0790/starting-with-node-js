const express = require('express');

const router = express.Router();

router.get('/add-prod', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">add product</button></form>')
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;