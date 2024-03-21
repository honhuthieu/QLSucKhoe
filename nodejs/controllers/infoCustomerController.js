const { infoCustomer } = require('../models/model')

const infoCustomerController = {
    //ADD PRODUCT
    addProduct: async(req, res)=> {
        try {
            const newCustomer = new infoCustomer(req.body)
            const savedCustomer = await newCustomer.save()
            res.status(200).json(savedCustomer)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
    //GET PRODUCT
    getAllProduct: async(req, res)=> {
        try {
            const Customers = await infoCustomer.find()
            res.status(200).json(Customers)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //UPDATE PRODUCT
    updateProduct: async(req, res)=> {
        try {
            const Customer = await infoCustomer.findById(req.params.id)
            await Customer.updateOne({$set: req.body})
            res.status(200).json("Updates successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //DELETE PRODUCT
    deleteProduct: async(req, res)=> {
        try {
            await infoCustomer.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = infoCustomerController