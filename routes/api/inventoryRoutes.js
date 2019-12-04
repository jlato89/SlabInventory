const db = require('../../models');
// const imgPath = 'client/public/assets/images/' //! testing
const imgPath = 'client/build/assets/images/';
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, imgPath) },
  filename: (req, file, cb) => { cb(null, file.originalname) }
});
const upload = multer({ storage: storage });

module.exports = app => {
  //? Get Slab List
  app.get('/api/slabs', (req, res) => {
    db.slab.findAll({})
      .then(slabs => {
        // console.log('Slabs', slabs);
        res.status(200).send(slabs);
      })
      .catch(err => {
        console.log('ERROR', err);
        res.status(500).send(err);
      });
  });

  //? Add Slab
  app.post('/api/addSlab',
    upload.array('image', 6),
    (req, res, next) => {
      let data = req.body;
      // console.log('Files', req.files);
      // console.log('Fields', data);
      //? Extract image filenames and insert into body
      let fileNameArr = [];
      req.files.forEach(file => { fileNameArr.push(file.filename); });
      data.imgFileNames = fileNameArr.toString(',')

      // console.log(data);
      db.slab.create(data)
        .then(response => {
          console.log('[AddSlab]', response.dataValues);
          res.status(200).send({ message: 'Slab Added Successfully!' })
        })
        .catch(err => {
          console.log('ERROR', err);
          res.status(500).send(err);
        });
    });
};
