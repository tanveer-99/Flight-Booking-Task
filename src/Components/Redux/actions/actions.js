export const userLoginAction = (userInfo)=> {
    return {
        type: "USER_LOG_IN",
        payload: userInfo
    }
}
export const userLogoutAction = ()=> {
    return {
        type: "USER_LOG_OUT"
    }
}