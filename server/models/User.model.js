const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: String,
    password: String,
    campus: {
        type: String,
        enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'San Paulo', 'Lisbon']
    },
    course: {
        type: String, 
        enum: ['Web Dev', 'UX/UI', 'Data Analytics']
    },
    image: {
        type: String,
        default: 'http://localhost:5000/uploads/default.png'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User