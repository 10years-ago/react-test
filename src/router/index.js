import {Home} from '../pages/home/home'
import {User} from '../pages/user/user'

const routes = [
  { 
    path: '/', 
    exact: true,
    component: Home 
  },
  {
     path: '/user',
     exact: true,
     component: User 
  }
]

export default routes