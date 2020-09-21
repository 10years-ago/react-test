import React, {Component} from 'react'
import './user.scss';

function LabelItem(props){
  return(
    <div className="label-item">
      <span className="label-text">{props.value}</span>
    </div>
  )
}

function ProjectInfo(){
  return(
    <div className="project-info">
      <div className="project-info-title">
        <div className="project-title-item">
          <span className="project-black">项目名称：</span>
          <span className="project-text">驾校后台管理网站</span>
        </div>
        <div className="project-title-item">
          <span className="project-black">职位：</span>
          <span className="project-text">前端</span>
        </div>
        <div className="project-title-item">
          <span className="project-black">制作时间：</span>
          <span className="project-text">2020.05-至今</span>
        </div>
      </div>
      <ul className="project-info-list">
        <li>1.独自使用vue+cli3去制作网站，项目中有数据与小程序中交接，还独自负责了小程序的制作与上线，小程序使用uni-app搭建。</li>
        <li>2.项目主要优化使用的技术：debounce和webpack中配置生产环境中的插件使用CDN加载</li>
        <li>3.项目除了网页端，最后项目使用electron打包为桌面软件。</li>
      </ul>
    </div>
  )
}

class UserCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      skill:['JavaScript','Vue全家桶','typeScript','SCSS','jQuery','HTML','JLPT N3'],
      opacity:0
    }
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        opacity:1
      })      
    },100)
  }
  render(){
    let skillList = this.state.skill.map((item,index) => (<LabelItem key={index} value={item}/>))
    return (
      <div className="user-card" style={{opacity:this.state.opacity}}>
        <img className="user-card-img" src={require('./img/user.jpg')} alt="" />
        <h2>吴伟耀</h2>
        <div className="user-card-school">
          <span><img src={require('./img/education.svg')} alt="" />东莞职业技术学院</span>
        </div>
        <p className="skill-label">
          <img src={require('./img/pencil.svg')} alt="" />
          <span>
            技能标签
          </span>
        </p>
        <div className="label">
          {skillList}
        </div>
        <div className="border"></div>
        <p className="skill-label">
          <img src={require('./img/project.svg')} alt="" />
          <span>
            参与项目
          </span>
        </p>
        <ProjectInfo />
        <div className="border"></div>
        <div className="footer">
          <div className="footer-img">
            <a href="https://github.com/10years-ago"><img src={require('./img/github.svg')} alt=""/></a>
          </div>
          <p>择木之禽，得栖良木</p>
          <p>择主之臣，得遇明主</p>
        </div>
      </div>
    )
  }
}


export class User extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  render(){
    return(
      <div className="User">
        <UserCard />
      </div>
    )
  }
}