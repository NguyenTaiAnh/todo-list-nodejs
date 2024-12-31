class TaskModel{
    constructor(task){
        this.title = task.title;
        this.description= task.description;
        this.status = task.status;
        this.user_id = task.user_id
    }
}

module.exports= TaskModel