import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styles from "./ArticleDetails.module.css"

const ArticleDetails = () => {

    const { articleId } = useParams();

    const [article, setArticle] = useState({});

    const fetchArticle = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
            // console.log(res.data)
            setArticle(res.data)
        } catch (err){
            console.log("Error while fetching the data")
        }

    }

    useEffect(() => {
        if(articleId){
            fetchArticle()
        }
    },[articleId]);

    return(
        <div>
            <h1>Article {articleId}</h1>
            <div id={styles["articleDetails"]}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
        </div>
    )
}

export default ArticleDetails