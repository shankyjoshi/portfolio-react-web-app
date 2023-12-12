import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Nav() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <nav class="profile-nav navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          &nbsp; Portfolio Designer
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <button className="btn btn-primary" onClick={e=> navigate("/search")}>Search</button>
              <button className="btn btn-primary ms-2 " onClick={e => navigate("/signin")}>Login</button>
              <button className="btn btn-primary ms-2 " onClick={e => navigate("/signup")}>Sign Up</button>
              <button className="btn btn-primary ms-2 " onClick={e => navigate("/checkout")}>Checkout</button>  
              {user ? <button className="btn btn-primary ms-2 " onClick={e => navigate("/profile")}>Profile</button> : null } 
            </li>
            <li class="nav-item active float-right">
              <a class="nav-link" href="#">
                <FontAwesomeIcon
                  icon="user"
                  style={{ float: "right", color: "white" }}
                ></FontAwesomeIcon>
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
