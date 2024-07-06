const express = require('express');
const router = express.Router();


// Create an order
router.post('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const { cart } = req.body;

        // Check product stock and update stock count
        for (const item of cart) {
            const product = await Product.findById(item.product._id);
            if (product.stock < item.quantity) {
                return res.status(400).json({ msg: });
            }
            product.stock -= item.quantity;
            await product.save();
        }
});

module.exports = router;
