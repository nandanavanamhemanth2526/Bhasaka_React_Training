import { useState } from "react";

const BlogCards = (props) => {
    
    const [isExpanded , setIsExpanded] = useState(false);

    const toggeDescription = () => {
        setIsExpanded(!isExpanded);
    }
    if(props.viewType === 'Tile'){
        return (
            <div id="tile_cards_container">
                <img src={props.Image}></img>
                <h1>{props.Title}</h1>
                <p>{isExpanded ? props.Description : props.Description.slice(0,100) + "..."}</p>
                {
                    props.isLengthy === true ? <button id="read_more_less_cta" onClick={toggeDescription}>{isExpanded ? 'Read Less' : 'Read More'}</button> : null 
                }
            </div>
        );
    }

    return (
    <div id="list_cards_container">
        <div id="img_container">
            <img src={props.Image} alt={props.Title} />
        </div>
        <div className="text_container">
            <h1>{props.Title}</h1>
            <p>{isExpanded ? props.Description : props.Description.slice(0,100) + "..."}</p>
            {
                props.isLengthy === true ? <button id="read_more_less_cta" onClick={toggeDescription}>{isExpanded ? 'Read Less' : 'Read More'}</button> : null 
            }
        </div>
    </div>
);

}

export default BlogCards;