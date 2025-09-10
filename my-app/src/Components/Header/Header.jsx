import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider/AppContextProvider";
import { useContext } from "react";
import styles from "./Header.module.css"

const Header = () => {

    const ctx = useContext(AppContext);

    return (
        <div>
            <ul style={{
                    display: "flex",
                    listStyle: "none",
                    // justifyContent: "space-evenly"
            }}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/articles">Articles</Link>
                <Link to="/about-us"><li>About Us</li></Link>
                <Link to="/contact-us"><li>Contact Us</li></Link>
                <Link to="/enquiry"><li>Enquiry</li></Link>
                <Link to="/login"><li>Login</li></Link>
                {
                    ctx.state.isLoggedIn && <li id={styles["userName"]}>{ctx.state.userName}</li>
                }
            </ul>
        </div>
    )
}

export default Header;