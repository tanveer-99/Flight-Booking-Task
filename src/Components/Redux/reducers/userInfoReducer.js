const initialState = {
    userData : {},
}
const userInfoReducer = (state=initialState, action) => {
    switch (action.type) {
        case "USER_LOG_IN" :
            return {
                ...state, 
                userData : action.payload
                
            }
        case "USER_LOG_OUT" :
            return {
                ...state, 
                userData : {}
            }
        default: return state;
    }
}
export default userInfoReducer;