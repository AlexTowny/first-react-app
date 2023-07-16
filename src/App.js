import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"
import { toHaveStyle } from "@testing-library/jest-dom/matchers"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component{
    constructor(props){
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({
                users: res.data.data
            })
        })

        this.AddUser = this.AddUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.state = {
            users : [
            {
                id:1,
                firstname: "Alex",
                lastname: "Kircher",
                bio: "human",
                age:20,
                isHappy: true
            },
            {
                id:2,
                firstname: "Ryan",
                lastname: "Gosling",
                bio: "real human being",
                age:40,
                isHappy: false
            }
        ]
    }
    }
    render(){
        return (<div >
            <Header title="Список пользователей" />
            <main>
                <Users onEdit={this.editUser}  users={this.state.users} onDelete={this.deleteUser}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>)
    }

    deleteUser(id){
        this.setState({
            users: this.state.users.filter((el)=>el.id !==id)  
        })
    }

    editUser(user){
        let allUsers = this.state.users
        allUsers[user.id-1] = user

        this.setState({users:[]}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    AddUser(user){
        const id = this.state.users.length + 1
        this.setState({users : [...this.state.users, {id, ...user}] })
    }
}

export default App