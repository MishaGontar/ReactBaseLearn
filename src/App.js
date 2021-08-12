import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./models/News-model/News-model";
import Header from "./models/Header-model/Header-model";
import About from "./models/About-model/About-model";
import Message from "./models/Message-model/Messsage-model";
import Profile from "./models/Profile-model/Profile-model";

const App = props =>{
  return (
    <div className={'App'}>
      <BrowserRouter>
        <Header/>
        <Route exact path={'/'} render={()=><News/>}/>
        <Route  path={'/news'} component={News}/>
        <Route  path={'/profile'}
                render={()=> <Profile
                    posts={props.state.posts}
                    addPost = {props.addPost}
                />}/>

        <Route  path={'/message'}
                render={()=><Message
                    messages={props.state.messages}
                    users ={props.state.users}
                    addUser ={props.addUser}
                    addMessage={props.addMessage}
                />}/>
        <Route  path={'/about'} component={About}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
