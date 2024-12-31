const baseRequest = require('../../base/request.base')
const baseResponse = require('../../base/response.base')
const authService = require('../services/auth.service')
const { responseAPI } = require('../../base/response-api.base')
const login = async (req, res) => {
    console.log({ res })
    const request = new baseRequest(req)
    const response = new baseResponse();
    console.log({ request, response })
    const result = await authService.login(request, response)
    responseAPI(result, res)

}
const register = async (req, res) => {
    const request = new baseRequest(req)
    const response = new baseResponse();
    const result = await authService.register(request, response)
    responseAPI(result, res)
}

module.exports =
{
    login,
    register
}
