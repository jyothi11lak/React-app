import {CAPTURE_USER_DATA} from "../constants";

export const setUserData = user => dispatch => {
    dispatch({
        type: CAPTURE_USER_DATA,
        payload: user
    })
}