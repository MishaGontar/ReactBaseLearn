import './Profile-css.css'
import React from "react"
    ;
import Post from "../Post-model/Post-model";

let newPost = React.createRef()

const SendPost = props =>{
    const getValue = ()=>{
        const text = newPost.current.value;
        props.addPost(text)
        newPost.current.value = ''
    }
    return(
        <div>
            <textarea  ref={newPost} className={'textA'} rows={'3'} cols={'40'}  placeholder={'Write your post'}></textarea>
            <button onClick={getValue}>Post</button>
        </div>
    )
}

const Posts = props =>{
    let posts = []
    if(props.posts){
        posts = props.posts.map(m=><Post name={m.name} post={m.post}/>)
    }
    return (
        <div>
            {posts}
        </div>
    )
}

const Profile = props =>{
    return (
        <div align={'center'}>
            <h1>This will be your profile</h1>
            <SendPost addPost = {props.addPost}/>
            <h1>Posts:</h1>
           <Posts posts = {props.posts}/>
        </div>
    )
}
export  default  Profile