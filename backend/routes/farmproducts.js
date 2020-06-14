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
    const date = req.body.date;
    const newFarmproduct = new Farmproduct({name,description,date});

    newFarmproduct.save()
     .then(() => res.json('Farm product added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

// find product by id
router.route('/:id').get((req, res) => {
    Farmproduct.findById(req.params.id)
     .then(farmproduct => res.json(farmproduct))
     .catch(err => res.status(400).json('Error: ' + err));
});

// delete product by id
router.route('/:id').delete((req, res) => {
    Farmproduct.findByIdAndDelete(req.params.id)
     .then(()=> res.json('Delete the item. '))
     .catch(err => res.status(400).json('Error: ' + err));
});

// update the product by giving id
router.route('/update/:id').post((req, res) => {
    Farmproduct.findById(req.params.id)
        .then(farmproduct => {
            farmproduct.name = req.body.name;
            farmproduct.description = req.body.description;

            farmproduct.save()
             .then(() => res.json('Farmproduct updated'))
             .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;