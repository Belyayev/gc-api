const router = require('express').Router();

let Item = require('../models/listItem.model');

router.route('/').get((req, res) => {
Item.find()
.then(items => res.json(items))
.catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const quantity = req.body.quantity;

    const newItem = new Item({
        description,
        quantity
    });

newItem.save()
.then(() => res.json('Item saved'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;