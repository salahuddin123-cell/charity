
import './App.css';
import { useContext,useState,createContext } from 'react';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Whoweare from './components/Whoweare';
import Ourmission from './components/Ourmission';
import Ourvission from './components/Ourvission';
import Whatwedo from './components/Whatwedo';
import Getinvolve from './components/Getinvolve';
import Contact from './components/Contact';
import Login from './components/registrations/Login';
import Regitration from './components/registrations/Regitration';
import Members from './components/Members';
export const UserContext=createContext()

function App() {
  const [activetab,setactivetab]=useState(1);
  const [loggedin,setloggedin]=useState(false)
  return (
    <div className="App">
      <UserContext.Provider value={{setactivetab,activetab,loggedin,setloggedin}}>
      <Router>

        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/whoweare" element={<Whoweare/>}/>
           <Route path="/ourmission" element={<Ourmission/>}/>
           <Route path="/ourvission" element={<Ourvission/>}/>
           <Route path="/whatwedo" element={<Whatwedo/>}/>
           <Route path="/getinvolve" element={<Getinvolve/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Regitration/>}/>
           <Route path="/members" element={<Members/>}/>
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
