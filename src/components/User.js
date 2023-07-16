import React from "react"
import AddUser from "./AddUser"
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    render(){
        return (
            
        <div className="user" > 
            
            <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
            <p>{this.props.user.email}</p>
            <img src={this.props.user.avatar}/>
            <b>{this.props.user.isHappy ? ':)' : ':('}</b>
            <IoCloseCircleSharp onClick={()=> this.props.onDelete(this.props.user.id)} className='delete-icon'/>
            <IoHammerSharp onClick={() => {
                this.setState({
                    editForm: !this.state.editForm
                })
            }} className='edit-icon'/>
            
            {this.state.editForm &&  <AddUser user={this.props.user} onAdd={this.props.onEdit}/> }
        </div>
        )
    }

}

export default User