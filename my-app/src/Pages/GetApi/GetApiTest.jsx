import axios from "axios";
import { useEffect, useState } from "react";
import UserData from "../../Components/UserData/UserData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Components/AppContextProvider/AppContextProvider";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

const GetApiTest = (props) => {

    const [userData, setUserData] = useState([]);

    const ctx = useContext(AppContext);

    console.log(ctx);

    useEffect(() => {
        if(ctx.state.articleList.length === 0){
            fetchApi();
        }

    },[]);

    const fetchApi = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            ctx.setState({...ctx.state, articleList : res.data});
            // setUserData(res.data);
        } catch(err) {
            console.log("Error while fetching the GET API");
        }
    }

    return (
        <>
            {   
                ctx.state.articleList.map((user) => (
                  <UserData title={user.title} body={user.body} id={user.id} userId={user.userId}/>
                ))
            }
            
        </>
    )
}

export default GetApiTest;