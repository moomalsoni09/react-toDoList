import {Link} from "react-router-dom";
const NavBarComponent = () =>{
  return(
    <>
      <div style={navbarStyle}>
        <div style={titleStyle}>Navbar</div>
        <div style={menuContainerStyle}>
          <Link to="/about" style={LinkStyle}>
          <div style={menuItemStyle}>About</div>
          </Link>
          <Link to="/contact" style={LinkStyle}>
          <div style={menuItemStyle}>Contact us</div>
          </Link>
          <Link to="/counter" style={LinkStyle}>
          <div style={menuItemStyle}>Counter</div>
          </Link>
          {/* <Link to="/ToDo" style={LinkStyle}>
          <div style={menuItemStyle}>To Do List</div>
          </Link> */}
          <Link to="/mui" style={LinkStyle}>
          <div style={menuItemStyle}>MUI</div>
          </Link>
        </div>
      </div>
    </>
  );
};

const LinkStyle ={textDecoration:"none",color:"inherit"}
const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
};
 
const titleStyle = {
  fontSize: "1.5em",
};
 
const menuContainerStyle = {
  display: "flex",
};
 
const menuItemStyle = {
  marginLeft: "10px",
  cursor: "pointer",
};

export default NavBarComponent;