const express = require('express')

const ImageCtrl = require('../routers/photos')

const router = express.Router()

router.post('/photos', ImageCtrl.createImage)
router.get('photos/:id', ImageCtrl.getImageById)
router.delete('photos/:id', ImageCtrl.deleteImage)
router.get('photos', ImageCtrl.getImages)
router.put('photos/:id', ImageCtrl.updateImage)

module.exports = router