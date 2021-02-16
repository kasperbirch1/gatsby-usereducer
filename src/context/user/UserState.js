import React, { useReducer } from "react"
import UserContext from "./userContext"
import userReducer from "./userReducer"
import { SET_USER } from "../types"

const UserState = props => {
  const initialState = {
    user: null,
  }

  const [state, dispatch] = useReducer(userReducer, initialState)

  const checkSessionStorage = () => {
    dispatch({
      type: SET_USER,
      payload: JSON.parse(sessionStorage.getItem("user")),
    })
  }

  const login = () => {
    sessionStorage.setItem("user", JSON.stringify(true))

    dispatch({
      type: SET_USER,
      payload: true,
    })
  }

  const logout = () => {
    sessionStorage.removeItem("user")
    dispatch({
      type: SET_USER,
      payload: null,
    })
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        checkSessionStorage,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
