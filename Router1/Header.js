import { colors } from "@material-ui/core";
import {Link} from "react-router-dom"

const Header=()=>{
    return (
    <div className="header">
       <Link to={'/'} style={{color:'white'}}> <h1>Home</h1></Link>

       <Link to={'/About'} style={{color:'white'}}> <h1>About</h1></Link>

       <Link to={'/Contact'} style={{color:'white'}}> <h1>Contact</h1></Link>
    </div>
)
}

export default Header;