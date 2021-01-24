import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { matchPath } from "react-router";
import Navbar from './components/navbar'
import MobNav from './components/mobileNav'
import Home from './components/Home/Home'
import Bolly from './components/categories/bollywood'
import Holly from './components/categories/hollywood'
import Tech from './components/categories/technology'
import Fit from './components/categories/fitness'
import Food from './components/categories/food'
import Article from './Article-component/article';



class App extends Component{
  constructor(props){
    super(props);
  }  
  state={
    isNavbarVisible:true,
    width:window.innerWidth,
    height:window.innerHeight
  }
  componentDidMount(){
    console.log(this.state)
    window.addEventListener("resize",()=>{this.setState({width:window.innerWidth,height:window.innerHeight})})
  }
  

  render() {
    return(
      <>
          <BrowserRouter>
          {this.state.width<728 ?  <MobNav/>:<Navbar/>}
              <Switch>
                  <Route path="/bollywood" component={Bolly} />
                  <Route path="/hollywood" component={Holly} />
                  <Route path="/technology" component={Tech} />
                  <Route path="/fitness" component={Fit}/>
                  <Route path="/food" component={Food}/>
                  <Route path="/article" component={Article}/>
                  <Route path="/home" component={Home} exact/>
              </Switch>
          </BrowserRouter>
      </>
    )
  }
}
export default App;