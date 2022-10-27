const multer  = require('multer')
const mkdirp = require('mkdirp')
const config = require('../configs/path.config')

const uploadGallery = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            let dir = config.path.orginalImage
            mkdirp(dir).then(made => cb(null, dir))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})

const uploadAvatar = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            let dir = config.path.avatar
            mkdirp(dir).then(made => cb(null, dir))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})

const uploadTweetsImage = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            let dir = config.path.tweets
            mkdirp(dir).then(made => cb(null, dir))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})

module.exports = {uploadGallery, uploadAvatar, uploadTweetsImage}