const baseRequest = require('../../base/request.base');
const baseResponse = require('../../base/response.base')
const { responseAPI } = require('../../base/response-api.base')
const taskService = require('../services/task.service')
const filter = async (req, res) => {
    const response = new baseResponse();
    const request = new baseRequest(req);
    const result = await taskService.filter(request, response)
    console.log({ result })
    // baseResponseApi(result, res)
}
const create = async (req, res) => {
    const response = new baseResponse();
    const request = new baseRequest(req);
    const result = await taskService.create(request, response)
    responseAPI(result, res)
}

module.exports = {
    filter,
    create
}