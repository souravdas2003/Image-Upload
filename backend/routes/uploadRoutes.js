const express = require('express');
const { upload, uploadFile, deleteFile, getPictures } = require('../controllers/uploadController');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);
router.delete('/delete/:id', deleteFile);
router.get('/pictures', getPictures);

module.exports = router;
