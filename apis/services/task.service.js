const TasksSchema = require('../../db/mongodb/task.collection')
const TasksDTO = require('../models/task.model')
const filter = async (req, res) => {
    try {
        console.log({ res, req });
        const tasks = await TasksSchema.find().populate('user').lean();
        const list = tasks.map(task => new TasksDTO(task))
        res.mergeData(list)
        console.log({ tasks })
        res.mergeData(tasks)
    } catch (error) {
        res.addInternalServerException(error.message)
    }
    return res
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
const update = async (req, res) =>{
    try {
        console.log("check res: ", req.param.id, req.body, req)
        // let task = await TasksSchema.findByIdAndUpdate(req.param.id,{$set:req.body},{new:true})
        let task = await TasksSchema.findByIdAndUpdate(req.param.id, {$set: req.body},{new:true})

        res.mergeData(new TasksDTO(task))

    } catch (error) {
        res.addInternalServerException(error.message)
    }
    return res;
}
const remove = async (req, res) => {
    try {
        let task = await TasksSchema.findByIdAndDelete(req.param.id)
        res.mergeData(new TasksDTO(task))
    } catch (error) {
        res.addInternalServerException(error.message)
    }
    return res
}
module.exports = { filter, create, update, remove }