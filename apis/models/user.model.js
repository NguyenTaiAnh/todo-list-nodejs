class UserModel {
    constructor(user){
        this.id = user.id
        this.username= user.username;
        this.email = user.email;
        this.password = user.password;
        this.created_at= user.create_at
    }

}

module.exports = UserModel