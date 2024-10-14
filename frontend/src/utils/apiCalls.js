import axios from 'axios';
import { getUsers } from '../redux/userSlice';

export const fetchUsers = () => {
    console.log('je suis ici 33')
    return async (dispatch) => {
        try {
            console.log('je suis ici 44')
            const response = await axios.get('http://127.0.0.1:5000');
            console.log("users -->", response.data);
            dispatch(getUsers(response.data));
        } catch (error) {
            console.log('Je suis ici 55')
            console.log(error);
        }
    };
};
