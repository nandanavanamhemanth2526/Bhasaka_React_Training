import { useState } from "react";
import styles from './BlogCards.module.css'

const BlogCards = (props) => {
    
    const [isExpanded , setIsExpanded] = useState(false);

    const toggeDescription = () => {
        setIsExpanded(!isExpanded);
    }
    if(props.viewType === 'Tile'){
        return (
            <div id={styles[`tile_cards_container`]}>
                <img src={props.Image}></img>
                <h1>{props.Title}</h1>
                <p>{isExpanded ? props.Description : props.Description.slice(0,100) + "..."}</p>
                {
                    props.isLengthy === true ? <button onClick={toggeDescription}>{isExpanded ? 'Read Less' : 'Read More'}</button> : null 
                }
            </div>
        );
    }

    return (
    <div id={styles["list_cards_container"]}>
        <div id={styles["img_container"]}>
            <img src={props.Image} alt={props.Title} />
        </div>
        <div className={styles["text_container"]}>
            <h1>{props.Title}</h1>
            <p>{isExpanded ? props.Description : props.Description.slice(0,100) + "..."}</p>
            {
                props.isLengthy === true ? <button onClick={toggeDescription}>{isExpanded ? 'Read Less' : 'Read More'}</button> : null 
            }
        </div>
    </div>
);

}

export default BlogCards;