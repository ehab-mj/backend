
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3030;

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profilePictures');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/profile/', upload.single('profilePicture'), (req, res) => {
    const profilePicturePath = req.file.path;
    res.json({ profilePictureUrl: `/uploads/profilePictures/${req.file.filename}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});