const { STATUS_CODE } = require("../constants/status");

class ResponseBase {
    constructor() {
        this.data = null;
        this.status = STATUS_CODE.SUCCESS
        this.errorMessage = ''
    }
    mergeData(data){
        this.data = data;
        return this
    }
    addInternalServerException(message){
        this.status = STATUS_CODE.INTERNAL_SERVER_ERROR;
        this.errorMessage= message;
        return this;
    }
    addBadRequestException(message){
        this.status = STATUS_CODE.BAD_REQUEST;
        this.errorMessage =message
        return this;
    }
}

module.exports = ResponseBase