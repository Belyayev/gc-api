const router = require('express').Router();

let Item = require('../models/listItem.model');

router.route('/').get((req, res) => {
Item.find()
.then(items => res.json(items))
.catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const isBought = req.body.isBought;

    const newItem = new Item({
        description,
        isBought
    });

newItem.save()
.then(() => res.json('Item saved'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;