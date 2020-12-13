import axios from 'axios';
import { 
    CREATE_APPT, 
    FETCH_APPT, 
    FETCH_APPTS,
    DELETE_APPT
} from './types';
import history from '../history';

export const createAppt = formValues => async dispatch => {
    const response = await axios.post('/api/appts', formValues);

    dispatch({ type: CREATE_APPT, payload: response.data});
    history.push("/");
}

export const fetchAppts = () => async dispatch => {
    const response = await axios.get('/api/appts');

    dispatch({ type: FETCH_APPTS, payload: response.data});
}

export const fetchAppt = id => async dispatch => {
    const response = await axios.get(`/api/appts/${id}`);

    dispatch({ type: FETCH_APPT, payload: response.data});
}


export const deleteAppt = id => async dispatch => {
    await axios.delete(`/api/appts/${id}`);

    dispatch({ type: DELETE_APPT, payload: id });
}