import axios from "axios";
import { useEffect, useState } from "react";
import UserData from "../Components/UserData";

const GetApiTest = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchApi();
    },[]);

    const fetchApi = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setUserData(res.data);
        } catch(err) {
            console.log("Error while fetching the GET API");
        }
    }

    return (
        <>
            {   
                userData.map((user) => (
                    <UserData title={user.title} body={user.body} id={user.id} userId={user.userId}/>
                ))
            }
            
        </>
    )
}

export default GetApiTest;