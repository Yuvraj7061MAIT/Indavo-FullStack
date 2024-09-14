const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database Connection
const uri = "mongodb+srv://Indavo:Indavo7061@indavo.fr5r3.mongodb.net/Indavo"; // MongoDB URI
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// API Creation
app.get('/', function (req, res) {
    res.send('Express app is running');
});

// Text Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve static images
app.use('/images', express.static('upload/images'));

// Upload endpoint for images
app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: 0,
            message: "No file uploaded"
        });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating products
const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

const Product = mongoose.model("Product", ProductSchema);

// Add product endpoint
app.post('/addProduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        id = products[products.length - 1].id + 1;
    }else{
        id=1;
    }
    try {
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,  // Ensure the correct image URL is passed here
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });
        
        console.log(product);
        await product.save();
        console.log("Product saved");
        
        res.json({
            success: 1,
            name: req.body.name,
            message: 'Product added successfully',
        });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({
            success: 0,
            message: 'Failed to add product',
        });
    }
});

// API to delete a product by ID
app.post('/removeProduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log(`Product with id ${req.body.id} deleted`);
    res.json({
        success: 1,
        message: 'Product deleted successfully',
    });
});

// display to frontend product
app.get('/getProducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Product Fetched");
    res.send(products);
});



// Start Server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});
