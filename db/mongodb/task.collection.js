const mongoose = require('mongoose');
const STATUS_TASK = require('../../constants/status')
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: Number,
        default: STATUS_TASK.STATUS_TASK.PENDING
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true
    }
}, { timestamps: true }, { toJSON: { virtuals: true } });

TasksSchema.virtual('user', {
    ref: 'Users',
    localField: 'user_id',
    foreignField: '_id',
    justOne: true
});

module.exports = mongoose.model('Tasks', TasksSchema)