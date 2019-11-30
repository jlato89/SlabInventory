const db = require('../../models');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'uploadTesting/') },
  filename: (req, file, cb) => { cb(null, file.originalname) }
});
const upload = multer({ storage: storage })

module.exports = app => {
  app.post('/api/addMaterial',
    upload.array('image', 6),
    (req, res, next) => {
      console.log('Fields', req.body);
      console.log('Files', req.files);
    })
};
