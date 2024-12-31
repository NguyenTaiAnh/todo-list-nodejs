const UsersSchema = require('../../db/mongodb/user.collection')
const bcrypt = require('bcrypt');
const json = require('jsonwebtoken');
module.exports = {
    async login (req,res) {
        try {
            let user = await UsersSchema.findOne({username: req.body.username})
            if(!user) {
                res.addBadRequestException('User does not exist');
                return res;
            }
            if(!bcrypt.compareSync(req.body.password, user.password)){
                res.addBadRequestException('Incorrect password');
                return res;
            }

            const token = json.sign({id:user.id},process.env.SECRET_KEY, {expiresIn:'3h'});
            res.mergeData({token:token});

        } catch (error) {
            res.addInternalServerException(error.message)
        }
        return res;

     },
    async register  (req, res) {
        try {
            let user = await UsersSchema.findOne({email: req.body.email})
            if(!user) {
                user = await UsersSchema.create(req.body)
            }else{
                res.addBadRequestException('User exist');
                return res
            }
            res.mergeData(user)
        } catch (error) {
            res.addInternalServerException(error.message)
        }
        return res;
    }
}