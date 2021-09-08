const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    userName: {type: String, require: true},
    messages: [{type: Types.ObjectId, ref:'Messages'}]
})

module.exports = model('User', schema)
