import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        updateUser: (state, action) => {
            const { id, updatedUser } = action.payload;
            const uu = state.users.find(user => user.id == id);
            if(uu) {
                uu.name = updatedUser.name
                uu.email = updatedUser.email
                uu.age = updatedUser.age
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter( user => user._id !== action.payload)
        }
    },
})


// Action creators are generated for each case reducer function
export const { getUsers, addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer