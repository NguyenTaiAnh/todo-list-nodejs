const baseRequest = require('../../base/request.base');
const baseResponse = require('../../base/response.base')
const { responseAPI } = require('../../base/response-api.base')
const taskService = require('../services/task.service')
const filter = async (req, res) => {
    const response = new baseResponse();
    const request = new baseRequest(req);
    const result = await taskService.filter(request, response)
    console.log({ result })
    responseAPI(result, res)
}
const create = async (req, res) => {
    const response = new baseResponse();
    const request = new baseRequest(req);
    const result = await taskService.create(request, response)
    responseAPI(result, res)
}
const update = async (req, res) => {
    const response = new baseResponse();
    const request = new baseRequest(req);
    console.log({request})
    const result = await taskService.update(request, response)
    responseAPI(result, res)
}
const remove = async (req, res) => {
    const response = new baseResponse();
    const request = new baseRequest(req);
    const result = await taskService.remove(request, response)
    responseAPI(result, res)
}


module.exports = {
    filter,
    create,
    update,
    remove
}