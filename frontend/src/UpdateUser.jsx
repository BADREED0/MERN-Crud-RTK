import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './redux/userSlice'

function CreateUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();

    const users = useSelector(state => state.users.users)
    const user = users.find( user => user._id === id )

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [age, setAge] = useState(user.age)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUserApi()
        setName('')
        setEmail('')
        setAge('')
        navigate('/')
    }

    const updateUserApi = () => {
        axios.put(`http://127.0.0.1:5000/${id}`,{name,email,age})
            .then( (response) => {
                const updatedUser = response.data
                dispatch(updateUser(id, updateUser))
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

