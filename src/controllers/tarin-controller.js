const authentication = require('../middlewares/authentication.middleware');
const tarins = require('../library/tarin')

module.exports = {
    tarinList(req, res){
        let tarin = tarins.tarin()

        return res.json( 
            tarin
        )
    },
};