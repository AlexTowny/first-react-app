import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

class App extends React.Component{
    constructor(props){
        super(props)
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
                <Users users={this.state.users}/>
            </main>
            <aside>
                <AddUser/>
            </aside>
        </div>)
    }
}

export default App