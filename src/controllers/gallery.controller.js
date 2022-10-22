const authentication = require('../middlewares/authentication.middleware');
const galleryService = require('../services/gallery.service');

module.exports = {
    uploadImage(req, res){
        let user = new authentication(req, res)
        let me = user.getUser()
        let imagePath = this.urlPath(req.file.path)
        let imageName = imagePath.split("/")
        imageName = imageName[imageName.length - 1]

        if(me.super_user) {
            galleryService.uploadImage(imagePath, imageName)
                .then(image => { 
                    console.log('Gallery controller upload new image:\n' + image);
                    return res.json({
                        message: 'عکس با موفقیت ذخیره شد'
                    })
                })
                .catch(err => {
                    console.error(err);
                    return res.status(500).json({
                        message: 'مشکلی در بررسی رخ داد، لطفا دوباره امتحان کنید'
                    });
                });
        } else {
            return res.status(403).json({
                message: 'شما دسترسی لازم برای انجام این کار را ندارید'
            });
        }
    },

    urlPath(path) {
        return path.replace(/\\/g, '/').replace('public/', '')
    },

    getAllImages(req, res) {
        galleryService.getAllImages()
            .then(gallery => {
                return res.json(
                    gallery
                )
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({
                    message: 'مشکلی در بررسی رخ داد، لطفا دوباره امتحان کنید'
                });
            });
    },
};
