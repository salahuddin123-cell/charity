import {useState,useContext,useEffect,useMemo} from "react";
import { UserContext } from "../../App";
import {Link,BrowserRouter as Router,useNavigate} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
   
import DehazeIcon from '@mui/icons-material/Dehaze';
const Layout1 = ({children}) => {
    const [activetab,setactivetab]=useState(1)
    const [navtoggle,setnavtoggle]=useState(false)
    const [loggedin,setloggedin]=useState(false)
    const navigate=useNavigate()
    const user=useContext(UserContext)

    let token=useMemo(() => localStorage.getItem('token'), [user.loggedin])
    useEffect(() => {
   
    if(token){
      user.setactivetab(100)
    }else{
      setloggedin(false)
    }
    }, [])
    
     return (
       <div>
           <div className="headline">
             <img src="/img/trustlogo.jpg" alt="notfound" />
           </div>
     <nav >
            
             <label for="bars" onClick={()=>setnavtoggle(!navtoggle)} className="checkbtn">
              {navtoggle?<CloseIcon fontSize="large"/>:<DehazeIcon fontSize="large"/>} 
             </label>
      
   
             <ul style={{zIndex:2}} className={navtoggle ? 'navtoggle':""}>
             <li >
                 <a className={user.activetab==1 && 'active'} onClick={()=>{user.setactivetab(1);navigate("/")}}>Home</a>
               </li>
               <li>
                 <a  className={user.activetab==2 && 'active'} onClick={()=>{user.setactivetab(2);navigate("/whoweare")}}>Who we are</a>
               </li>
               <li>
                 <a  className={user.activetab==7 && 'active'} onClick={()=>{user.setactivetab(7);navigate('/ourvission')}}>Our Vission</a>
               </li>
               <li>
                 <a  className={user.activetab==8 && 'active'} onClick={()=>{user.setactivetab(8);navigate('/ourmission')}}>Our Mission</a>
               </li>
               <li >
              
                 <a className={user.activetab==3 && 'active'} onClick={()=>{user.setactivetab(3);navigate("/whatwedo")}}>What we do</a>
               </li>
               <li>
                 <a className={user.activetab==4 && 'active'} onClick={()=>{user.setactivetab(4);navigate('/getinvolve')}}>Get involve with us</a>
                 
               </li>
               <li>
                 <a className={user.activetab===5 && 'active'} onClick={()=>{user.setactivetab(5);navigate('/contact')}}>Contact Us</a>
               </li>
               <li>
                {token? <a onClick={()=>{localStorage.removeItem('token');user.setloggedin(!user.loggedin)}}>logout</a>:<a className={user.activetab===6 && 'active'} onClick={()=>{navigate('/login')}}>Login</a>} 
               </li>
             </ul>
           </nav>
           <div >
          {children}
           </div>
       </div>
     )
}

export default Layout1