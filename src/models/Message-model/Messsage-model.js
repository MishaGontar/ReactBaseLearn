import s from './Message-css.css';
import {NavLink} from "react-router-dom";
import React from "react";



const Users = props => {
    let usersTitle = ['Where is users?']
    if(props.users){
      const  users = props.users
         usersTitle = users.map(m => <div className={'friend'}><NavLink activeClass={s.active}
                                                                             to={'/message/' + m.toLowerCase()}>{m}</NavLink></div>)
    }
       return (
        <div className={'friends'}>
            {usersTitle}
        </div>
    )
}
const Messages = props => {
    let answer =['There is no messages  ']
    if(props.messages){
        const mes = props.messages
        answer = mes.map(m => <div className={'message'}>{m}</div>)
    }
    return (
        <div>
            {answer}
        </div>
    )
}

let newMessage = React.createRef()
const Send = (props)=>{
    const add = ()=>{
        const text = newMessage.current.value
        props.addMessage(text)
        newMessage.current.value = ''
    }
    return(
        <div>
            <textarea ref={newMessage} rows={'3'} cols={'40'} placeholder={'Send message'} className={'text'}></textarea>
            <button className={'send'} onClick={add}>Send</button>
        </div>
    )
}

const Message = props => {
    return (
        <div align={'center'}>
            <div className="row">
                <div className="column">
                    <h1>Chats</h1>
                    <Users users = {props.users}/>
                </div>
                <div className="column1">
                    <h1>Messages</h1>
                    <Messages messages ={props.messages}/>
                </div>
                <Send  addMessage ={props.addMessage} />
            </div>
        </div>
    )
}
export default Message