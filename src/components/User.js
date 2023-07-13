import React from "react"
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component{
    
    render(){
        return (
            
        <div className="user" > 
            
            <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
            <p>{this.props.user.bio}</p>
            <b>{this.props.user.isHappy ? ':)' : ':('}</b>
            <IoCloseCircleSharp className='delete-icon'/>
            <IoHammerSharp className='edit-icon'/>
        </div>
        )
    }

}

export default User