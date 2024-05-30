const express = require('express');
const router = express.Router();
const Category = require('../../model/mongodb/games/Category');

// Define routes for CRUD operations
// Example:
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;