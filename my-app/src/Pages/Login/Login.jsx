import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Components/AppContextProvider/AppContextProvider";
import { useContext } from "react";

const Login =() => {
    const navigate = useNavigate();
    const ctx = useContext(AppContext);

    const onFormSubmit = (e) => {
        const userName = e.target.userName.value;
        const password = e.target.password.value;

        if(userName === "Hemanth" && password === "12345"){
            ctx.setState({...ctx.state, isLoggedIn : true})
            navigate("/dashboard")
        } else {
            alert("UserName or Password you entered is incorrect try again");
        }
     }
    return(
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <div><input type="submit" value="Submit"/></div>
        </form>
    )
}

export default Login; 