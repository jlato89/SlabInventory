const db = require('../../models');
const formidable = require('formidable');
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


  // app.post('/api/addMaterial', (req, res) => {
  //   new formidable.IncomingForm().parse(req)
  //     .on('field', (name, field) => {
  //       console.log('Field', name, field)
  //     })
  //     .on('fileBegin', (name, file) => {
  //       file.name = name + '.png'; //! temp fix, change to grab char after '/'
  //       file.path = 'uploadTesting/' + file.name
  //     })
  //     .on('file', (name, file) => {
  //       console.log(`Uploaded file ${name} to ${file.path}`)
  //     })
  //     .on('aborted', () => {
  //       console.error('Request aborted by the user')
  //     })
  //     .on('error', (err) => {
  //       console.error('Error', err)
  //       throw err
  //     })
  //     .on('end', () => {
  //       res.end()
  //     })
  //   res.status(200);
  // });
};
