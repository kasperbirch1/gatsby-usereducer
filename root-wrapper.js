import React from "react"
import UserState from "./src/context/user/UserState"

export const wrapPageElement = ({ element }) => <UserState>{element}</UserState>
