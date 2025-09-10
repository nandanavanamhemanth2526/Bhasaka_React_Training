import { Link } from "react-router-dom";
import styles from "./UserData.module.css"
import ArticleDetails from "../../Pages/ArticleDetails/ArticleDetails";

const UserData = (props) => {
    // console.log(props);

    return (
       <Link to={`/articles/${props.id}`}>
         <div id={styles["container"]}>
            {/* <p>{props.userId}</p>
            <p>{props.id}</p> */}
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
       </Link>
    )
}

export default UserData;