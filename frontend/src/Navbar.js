import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration: 'none'}} className="link">Home</Link>
            
        </div>

      );
}
 
export default Navbar;

