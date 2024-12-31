const getModelDTO = (tableName) => {
    const model = {
        User: require('../apis/models/user.model'),
        Task: require('../apis/models/task.model')
    }
    return model[tableName]
}
const getSchema = (collectionName) => {
    const schemas = {
        User: require('../db/mongodb/user.collection'),
        Task: require('../db/mongodb/task.collection')
    }
    return schemas[collectionName]
}

module.exports = {
    getSchema,
    getModelDTO
}