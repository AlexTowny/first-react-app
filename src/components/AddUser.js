import React from "react"

class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render(){
        return (
            <form>
                <input placeholder="Имя" onChange={(e)=>this.setState({firstname: e.target.value})}/>
                <input placeholder="Фамилия" onChange={(e)=>this.setState({secondname: e.target.value})} />
                <textarea placeholder="Биография" onChange={(e)=>this.setState({bio: e.target.value})}></textarea>
                <input placeholder="Возраст" onChange={(e)=>this.setState({age: e.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e)=>this.setState({isHappy: e.target.checked})}/>
                <button type="button">Добавить</button>
            </form>
        )
    }

}

export default AddUser 