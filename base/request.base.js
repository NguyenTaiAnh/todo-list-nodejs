class RequestBase {
    constructor(req) {
        this.body = req.body
        this.param = req.params
        this.query = req.query
        this.auth = req.auth
    }
}

module.exports = RequestBase