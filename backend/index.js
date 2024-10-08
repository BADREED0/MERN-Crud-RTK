const express = require('express')
const cors = require('cors')
const connectionToDB = require('./config/connectToDb')
const asyncHandler = require('express-async-handler')
const { User } = require('./models/User')


//Init app
const app = express()

//Connect to DB
connectionToDB()

app.use(express.json())
app.use(cors())

app.get( '/', asyncHandler( async (req,res) => {
    const users = await User.find()
    res.status(200).json(users)
}))

app.post( '/', asyncHandler( async (req,res) => {
    const user = new User(req.body)
    const result =  await user.save()
    res.status(201).json(result)
}))

app.put( '/:id', asyncHandler( async (req,res) => {
    const result = await User.findByIdAndUpdate(req.params.id, req.body , {new: true})
    res.status(200).json(result)
}))

app.delete( '/:id' , asyncHandler( async (req,res) => {
    const result = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(result)
}))

const PORT = 5000
app.listen( PORT , () => {
    console.log(`Server is runing on port ${PORT}`)
})