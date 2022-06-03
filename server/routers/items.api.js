const express = require('express')
const router = express.Router()
const Item = require('../models/item.model') 
const items = []



router.get('/getItem', async (req,res) => {
    const items = await Item.find({});
    res.send (items);
}); 



router.post('/addNewItem', async function (req, res){
    const item = new Item (req.body) 
    console.log(req.body);
   const response = await item.save(); 

    

    res.send(response)
})
module.exports = router   