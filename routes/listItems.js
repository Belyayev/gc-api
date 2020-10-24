const router = require('express').Router();

let Item = require('../models/listItem.model');

router.route('/').get((req, res) => {
Item.find()
.then(item => res.json(item))
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

router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
      .then(Item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
      .then(() => res.json('Item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
      .then(exercise => {
        item.description = req.body.description;
        item.quantity = req.body.quantity;
  
        item.save()
          .then(() => res.json('Item updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;