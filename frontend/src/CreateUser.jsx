import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

    console.log('Create rerended')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        addUserApi()
        setName('')
        setEmail('')
        setAge('')
        navigate('/')
    }

    const addUserApi = () => {
        axios.post('http://127.0.0.1:5000', {name: name, email: email, age: age})
            .then( (response) => {
                dispatch(addUser(response.data))
                console.log('Add user -->',response.data)
            })
            .catch( (error) => {
                console.log(error)
            })
    }

    return(<>
        <div  style={{height: "100vh" , width: "100%", display: "flex", alignItems: "center", justifyContent:"center"}}>
            <div className="w-50 bg-secondary p-5 text-white">
                <h4 className="mb-4">Add new user</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='exampleInputName'
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='exampleInputEmail'
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3 ">
                        <label htmlFor="exampleInputAge">Age:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='exampleInputAge'
                            value={age}
                            onChange={e=>setAge(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-info"
                    >Submit</button>
                </form>
            </div>
        </div>
    </>)
}

export default CreateUser

