import './Post-css.css'
const Post = (props) =>{
    return (
        <div className={'post'}>
            <div className={'userNamePost'}>{props.name}</div>
            <div className={'postUser'}>{props.post}</div>
        </div>
    )
}
export default Post