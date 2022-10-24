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

    getAllToken(){
        return this.token
    }

    checkToken(){
        return (this.getAllToken() && this.getAllToken().split(' ')[0] === 'Bearer') ? true : this.res.status(403).json({
            message: "دسترسی غیر مجاز"
        })
        
    }

    getToken(){
        return this.checkToken() ? this.getAllToken().split(' ')[1] : this.res.status(403).json({
            message: "ورود شما نامعتبر است"
        })
    }

    getUser(){
        try {
            var decoded = jwt.verify(this.getToken(), process.env.SECRET_KEY, {algorithm: "HS256"});
            return decoded
        }catch(e) {
            console.log(e);
            return this.res.status(403).json({
                message: "زمان حضور شما منقضی شده است"
            })
        }
    }
}

module.exports = auth
