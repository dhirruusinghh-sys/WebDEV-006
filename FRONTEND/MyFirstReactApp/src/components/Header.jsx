
import {Link} from 'react-router-dom';

function Header(){
    return(
      <>
      <div className="bg-primary-subtle  p-3 d-flex justify-content-between align-items-center">
        <div className="text-primary fs-4 fw-bold">My Company </div>

        <div className="d-flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
        <div className="d-flex gap-4">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
      </div>
      </>
    )
}

export  default Header;