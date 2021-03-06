import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/navbar'
import MobNav from './components/mobileNav'
import Home from './components/Home/Home'
import Article from './Article-component/article';
import Categorypage from './components/categories/categorypage';



class App extends Component{
  constructor(props){
    super(props);
  }  
  state={
    isNavbarVisible:true,
    width:window.innerWidth,
    height:window.innerHeight,
  }
  componentDidMount(){
    console.log(this.state)
    window.addEventListener("resize",()=>{this.setState({width:window.innerWidth,height:window.innerHeight})})
    //when window resizes device-width in state updates 
  }
  

  render() {
    return(
      <>
          <BrowserRouter>
            <MobNav/>
            <Navbar/>
            <Switch>
                <Route path="/The-Siren/:category" component={Categorypage} exact/>
                <Route path="/The-Siren/:category/:id" component={Article} exact/>
                <Route path="/" component={Home} exact/>
            </Switch>
          </BrowserRouter>
      </>
    )
  }
}
export default App;