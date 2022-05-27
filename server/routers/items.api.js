const express = require('express')
const router = express.Router()
const Item = require('../models/item.model') 
const items = []



router.get('/getItem', (req,res) => res.send(items)) 

router.post('/addNewItem', async function (req, res){
    const item = new Item (req.body) 
   const response = await item.save(); 
    

    res.send('item recived')
})
module.exports = router   