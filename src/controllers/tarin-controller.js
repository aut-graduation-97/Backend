const authentication = require('../middlewares/authentication.middleware');
const tarinService = require('../services/tarin.service');
const tarins = require('../library/tarin')

module.exports = {
    tarinList(req, res){
        let tarin = tarins.tarin()

        return res.json( 
            tarin
        )
    },

    updateTarin(req, res){
        let me = new authentication(req, res)
        let me_info = me.getUser()

        let student_id = req.params.id
        let tarin_id = req.body.tarin_id
        let haveTarin = true

        tarin_id.map(id => {
            if(!tarins.findTarin(id)){
                haveTarin = false
            }
        })

        if(haveTarin){
            tarinService.updateTarin(student_id, tarin_id, me_info)
                .then(user => { 
                    console.log('in tarin controller ' + user);
                    if(user[1].length == 0 && user[0]){
                        return res.json({
                            message: 'رای شما با موفقیت اضافه شد'
                        })
                    }else{
                        let tarinNames = []
                        user[1].map(id => {
                            tarinNames.push(tarins.findTarin(id).name)
                        })
                        return res.status(406).json({
                            message: `شما قبلا به [ ${tarinNames} ] رای داده‌اید`
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    return res.status(422).json({
                        message: 'مشکلی در بررسی رخ داد، لطفا دوباره امتحان کنید'
                    });
                });
        }else{
            return res.status(404).json({
                message: 'همچین ترینی وجود ندارد'
            });
        }

    },


};