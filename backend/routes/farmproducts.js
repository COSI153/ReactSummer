const router = require('express').Router();
let Farmproduct = require('../model/farmproduct.model');

router.route('/').get((req, res) => {
    Farmproduct.find()
        .then(farmproducts => res.json(farmproducts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const newFarmproduct = new Farmproduct({name,description});

    newFarmproduct.save()
     .then(() => res.json('Farm product added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Farmproduct.findById(req.params.id)
     .then(farmproduct => res.json(farmproduct))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Farmproduct.findByIdAndDelete(req.params.id)
     .then(()=> res.json('Delete the item. '))
     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;