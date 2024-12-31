class RequestBase {
    constructor(req) {
        this.body = req.body
        this.param = req.param
        this.query = req.query
        this.auth = req.auth
    }
}

module.exports = RequestBase