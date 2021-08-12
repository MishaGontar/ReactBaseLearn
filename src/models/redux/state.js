import {treeRender} from "./reder";

let state = {
    messages:['Дароваffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        'Привет', 'Re', 'Act', 'Hmmmmm....', 'What?', 'I want to say that you ...', 'What you wanna do?', 'sdinf sdkf', 'Lala?'],
    posts:[
        {name:'Zepo',post:'люблю орков ))'},
        {name:'GameDev',post: ' Как подписать екзешник чтобы вида на него не ругалась?'},
        {name:'Shaman',post: ' Как подписать екзешник чтобы вида на него не ругалась?'},
        {name:'Tifi',post: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'}
    ],
    users:['G_G', 'Tifityli', 'TwiTch', 'YouTuber']
}

export const addPost = (post) => {
    state.posts.push({name:'Tester',post: post})
    treeRender(state)
}

export const addUser = (user) => {
    state.users.push(user)
    treeRender(state)
}

export const addMessage= (message) => {
    state.messages.push(message)
    treeRender(state)
}

export default state