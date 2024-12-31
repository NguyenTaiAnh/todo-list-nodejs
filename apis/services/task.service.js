const TasksSchema = require('../../db/mongodb/task.collection')
const TasksDTO = require('../models/task.model')
const filter = async (req, res) => {
    try {
        console.log({ res, req });
        const tasks = await TasksSchema.find().populate('user').lean();
        console.log({ tasks })
        res.mergeData(tasks)
    } catch (error) {
        // res.add
    }
}
const create = async (req, res) => {
    try {
        console.log({ res, req });
        
        let task = await TasksSchema.findOne({ title: req.body.title });
        if (task) {
            res.addBadRequestException('Task exist');
            return res
        }else{
            console.log("chck auth: ", req, req.auth)
            const user_id = req.auth.id
            task = await TasksSchema.create({...req.body,user_id:user_id})
        }
        console.log({task})
        res.mergeData(new TasksDTO(task))
    } catch (error) {
        // res.add
        res.addInternalServerException(error.message)
    }
    return res
}
const update =(req, res) =>{
    try {
        // let task = TasksSchema.findByIdAndUpdate(req.id, req.body)

    } catch (error) {
        res.addInternalServerException(error.message)
    }
}
module.exports = { filter, create }