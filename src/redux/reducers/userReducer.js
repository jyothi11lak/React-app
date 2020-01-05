import {CAPTURE_USER_DATA} from "../constants";
const initialState = {
    myData: {
        fName: "aravind"
    }
}
export default (state=initialState, action) =>{
    switch(action.type) {
        case CAPTURE_USER_DATA: {
            return {...state, myData: action.payload};
        }
        default:
            return state;
    }
}