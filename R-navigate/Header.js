// import { colors } from "@material-ui/core";
import {Link,NavLink} from "react-router-dom"

const Header=()=>{
      
    const navLinkStyle=({isActive})=>{
        return{
            fontWeight:isActive?"bold":"normal",
            textDecoration:isActive?"none":"underlinef",
            color:isActive?"Red":"White"
        };
    };

    return (
    <div className="header">
       <NavLink to={'/'} style={navLinkStyle}> <h1>Home</h1></NavLink>

       <NavLink to={'/About'}  style={navLinkStyle}> <h1>About</h1></NavLink>

       <NavLink to={'/Contact'} style={navLinkStyle}> <h1>Contact</h1></NavLink>
    </div>
)
}

export default Header;