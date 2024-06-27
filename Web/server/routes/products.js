const multer = require('multer');
const Product = require('../models/Product');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
    try {
        const { category, minPrice, maxPrice } = req.query;
        let query = {};

        if (category) {
            query.category = category;
        }
        }
        if (maxPrice) {
            query.price = { ...query.price, $lte: Number(maxPrice) };
        }

        const products = await Product.find(query);
        res.json(products);
    } 
);
