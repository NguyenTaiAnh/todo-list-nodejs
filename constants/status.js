const STATUS_TASK = {
    PENDING: 0,
    DONE: 1,
    PROGRESS: 2,
}
const STATUS_CODE = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
}
module.exports = { STATUS_TASK, STATUS_CODE };