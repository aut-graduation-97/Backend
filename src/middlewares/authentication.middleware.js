const jwt = require('jsonwebtoken')

class auth {
    constructor(req, res){
        if(!req.headers.hasOwnProperty('authorization')){
            return res.status(200).json({
                message: "لطفا وارد شوید"
            })
        }
        this.token = req.headers.authorization
        this.res = res
    }
}

module.exports = auth