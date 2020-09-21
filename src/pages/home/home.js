import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './home.scss';

function HomeLeft(){
  return (
    <div className="home-left">
      <img src={require('./img/homeLeft.png')} alt="" />
    </div>
  )
}

class HomeRight extends Component{
  render(){
    return (
      <div className="home-right">
        <h1>{this.props.title}</h1>
        <img src={require('./img/logo.svg')} alt="" />
        <Link to="/user" className="home-right-button"><span>GO</span></Link>
      </div>
    )
  }
}

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    return(
      <div className="Home">
        <HomeLeft />
        <HomeRight title='React-test' />
      </div>
    )
  }
}