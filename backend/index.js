const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

app.use(express.json());
app.use(cors());

// Database Connection
const uri = process.env.MONGODB_URI || "mongodb+srv://Indavo:Indavo7061@indavo.fr5r3.mongodb.net/Indavo";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Serve static images
app.use('/images', express.static('upload/images'));

// Ensure 'upload/images' directory exists
const fs = require('fs');
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Image Storage Engine using multer
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

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

// Product Schema
const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

const Product = mongoose.model("Product", ProductSchema);

// Add product endpoint
app.post('/addProduct', async (req, res) => {
    try {
        let products = await Product.find({});
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const product = new Product({
            id,
            name: req.body.name,
            image: req.body.image,  // Ensure correct image URL is passed
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        res.json({ success: 1, message: 'Product added successfully' });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ success: 0, message: 'Failed to add product' });
    }
});

// API to delete a product by ID
app.post('/removeProduct', async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ id: req.body.id });
        if (!deletedProduct) {
            return res.status(404).json({ success: 0, message: 'Product not found' });
        }
        res.json({ success: 1, message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: 0, message: 'Failed to delete product' });
    }
});

// Display all products to frontend
app.get('/getProducts', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: 0, message: 'Failed to fetch products' });
    }
});

// User Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object },
    date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

// User registration endpoint
app.post('/signup', async (req, res) => {
    try {
        let userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({ success: 0, message: 'Email already exists' });
        }

        // Create an empty cart with 300 items initialized to 0
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword, // Store the hashed password
            cartData: cart,
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET || "secret_key", { expiresIn: '1h' });

        res.json({
            success: 1,
            message: 'User registered successfully',
            token,
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: 0, message: 'Failed to register user' });
    }
});

// User login endpoint
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: 0, message: 'Invalid email or password' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: 0, message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "secret_key", { expiresIn: '1h' });

        res.json({
            success: 1,
            message: 'Logged in successfully',
            token,
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: 0, message: 'Failed to log in' });
    }
});

// Start Server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});
