const express = require("express");
const multer = require('multer');
const fs = require('fs');
const Image = require("../models/image");

const router = express.Router();
const upload = multer({ dest: '../uploads' })

router.post("/img_data", upload.single('uploaded-image') ,async (req, res, next) => {
  try{
    console.log(req.file)
    const newImage = new Image;
    let file = fs.readFileSync(req.file.path)
    newImage.img.data = file;
    newImage.img.contentType = req.file.mimetype
    await newImage.save();
    res.status(201).json({
      message: "New Image added to db!"
    });
  }
  catch (err){
    res.send(err);
  }
});

router.get('/img_data', async (req, res, next) => {
  try{
    let image = await Image.findOne({}, 'img createdAt').sort({ createdAt: 'desc' });
    res.contentType('json').send(image);
  }
  catch (err){
    return res.status(404).json({message: "no images found"});
  }
});

module.exports = router;
