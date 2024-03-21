const infoCustomerController = require('../controllers/infoCustomerController')

const router = require('express').Router()

// ADD PRODUCT
router.post("/", infoCustomerController.addProduct)

// GET ALL PRODUCT
router.get("/", infoCustomerController.getAllProduct)

// UPDATE A PRODUCT
router.put("/:id", infoCustomerController.updateProduct)

// DELETE PRODUCT
router.delete("/:id", infoCustomerController.deleteProduct)

module.exports = router