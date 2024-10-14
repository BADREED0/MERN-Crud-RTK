import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteUser, getUsers } from './redux/userSlice';
import CreateUser from './CreateUser';
import { fetchUsers } from './utils/apiCalls';




function User() {

    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch()

    useEffect( ()=> {
        console.log('Je suis ici11')
        dispatch(fetchUsers())
        console.log('Je suis ici22')
    },[dispatch])

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:5000/${id}`)
            .then( (response) => {
                dispatch(deleteUser(response.data._id))
            })
            .catch( (error) => {
                console.log(error)
            })
    }

    return (
    <div className="container">
        <h2>CRUD MERN App with RTK</h2>
        <Link to="/create" className="btn btn-success my-3">Create +</Link>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map( user => {
                    return(
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/update/${user._id}`} className="btn btn-primary me-2">Update</Link>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(user._id)}
                                >
                                Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default User