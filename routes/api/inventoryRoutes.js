const db = require('../../models');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'uploadTesting/') },
  filename: (req, file, cb) => { cb(null, file.originalname) }
});
const upload = multer({ storage: storage })

module.exports = app => {
  //? Get Slab List
  app.get('/api/slabs', (req, res) => {
    db.slab.findAll({})
      .then(slabs => {
        // console.log('Slabs', slabs);
        res.status(200).send(slabs);
      })
      .catch(err => {
        console.log('ERROR', err.response);
        res.status(500).send(err.response);
      });
  });

  //? Add Slab
  app.post('/api/addSlab',
    upload.array('image', 6),
    (req, res, next) => {
      console.log('Fields', req.body);
      console.log('Files', req.files);
    });
};
