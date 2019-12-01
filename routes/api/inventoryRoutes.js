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
        res.status(200).send(slabs.dataValues);
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
      const data = req.body;
      console.log('Files', req.files);
      console.log('Fields', data);

      db.slab.create(data)
        .then(response => {
          console.log('[AddSlab]', response.dataValues);
          res.status(200).send({ message: 'Slab Added Successfully!' })
        })
        .catch(err => {
          console.log('ERROR', err.response);
          res.status(500).send(err.response);
        });
    });
};
