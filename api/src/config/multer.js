const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const FIVE_MB = 5 * 1024 * 1024;
const PATH = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');

module.exports = {
  dest: PATH,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, PATH)
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: FIVE_MB,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
