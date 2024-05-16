import { Link } from "react-router-dom";
import UpdateTask from "./UpdateTask";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration: 'none'}} className="link">Home</Link>
        </div>

      );
}
 
export default Navbar;

