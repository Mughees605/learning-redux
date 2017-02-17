import React , {Component}from "react"
import UserList from "../containers/user-list"
require("../../scss/style.scss")

const App = () => (
    <div>
        <h2>UserName:</h2>
        <UserList />
        <hr/> 
        <h2>UserList:</h2>
    </div>
)
export default App;