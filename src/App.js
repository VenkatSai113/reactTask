import {Component} from 'react'
import './App.css';
import ResponsiveAppBar from './Navbar/index'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './Login/index'
import DribbleCard from './dribbbleCard/index'
import Profile from './Profile/index'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import EmailConfirmation from './EmailConfirmation/index'

class App extends Component{
  state={stateApiData:[]}
 

  render(){
    
    return(
      <div className='"container'>
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/card" component={DribbleCard}/>
        <Route exact path="/navbar" component={ResponsiveAppBar}/>
        <Route exact path="/emailConfirmation" component={EmailConfirmation}/>



        </Switch>
        </BrowserRouter>
        
      </div>
    
    )
  }
}


export default App;
