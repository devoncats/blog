const path = require('node:path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'src/uploads/avatars')
  },
  filename: function (req, file, callback) {
    const ext = path.extname(file.originalname)
    callback(null, Date.now() + ext)
  }
})

const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') return callback(null, true)
    else return callback(null, false)
  },
  limits: { fileSize: 1024 * 1024 * 2 }
})

module.exports = upload
