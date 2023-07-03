const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model:Product, through: ProductTag, as: 'tag_product' }]
    })
    res.status(200).json(tagData)
  }
  catch (err) {
    res.status(500).json(err)
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id,{
      include: [{ model:Product, through: ProductTag, as: 'tag_product' }]
    })
    if (!tagData) {
      res.status(404).json({ message: 'no tag found with that id!' })
    }
    res.status(200).json(productData)
  }
  catch (err) {
   res.status(500).json(err);  
 }
}); 

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!tagDataData) {
      res.status(404).json({ message: "No tag found with that id!" })
    }
    res.status(200).json(tagData)
  }
  catch (err) {
    res.status(500).json(err)
    }  

});

module.exports = router;
