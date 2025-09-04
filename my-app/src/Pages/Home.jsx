import { useState } from "react";
import BlogCards from "../Components/BlogCards";


const Home = () => {

    const wondersOfTheWorld = [
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        Title: "Chichén Itzá",
        Description: "A large pre-Columbian archaeological site in Mexico built by the Maya civilization, known for the step pyramid El Castillo."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        Title: "Christ the Redeemer",
        Description: "An iconic Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, standing 30 meters tall atop the Corcovado mountain."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        Title: "Colosseum",
        Description: "An ancient amphitheater in Rome, Italy, once used for gladiatorial contests and public spectacles in the Roman Empire."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        Title: "Great Wall of China",
        Description: "A massive wall built to protect ancient Chinese states from invasions, stretching over 13,000 miles across northern China."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
        Title: "Machu Picchu",
        Description: "An Incan citadel set high in the Andes Mountains in Peru, famed for its dry-stone walls and panoramic views."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
        Title: "Petra",
        Description: "An ancient city in Jordan, carved into rose-red cliffs by the Nabataeans, known for its rock-cut architecture and water conduit system."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        Title: "Taj Mahal",
        Description: "A white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
        Title: "Temple of Artemis",
        Description: "One of the Seven Wonders of the Ancient World, located in Ephesus (modern-day Turkey), dedicated to the goddess Artemis."
    },
    {
        Image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
        Title: "Great Pyramid of Giza",
        Description: "The only remaining Wonder of the Ancient World, built as a tomb for the Egyptian Pharaoh Khufu around 2560 BC."
    }
];
    const [viewType, setViewType] = useState('List');

    const onViewTypeClick = () => {
        viewType === 'List' ? setViewType('Tile') : setViewType('List');
        console.log("View Type is " + viewType);
    }

    return (
        <>
            <h1 id="heading">HOME PAGE</h1>
            <button id="view_type_btn" onClick={onViewTypeClick}>{viewType === 'List' ? 'Tile' : 'List'} View</button>
            <div id="cards">
                    
                    {
                        wondersOfTheWorld.map( (wonder) =>
                        <BlogCards Image={wonder.Image} Title={wonder.Title} Description = {wonder.Description} viewType = {viewType} isLengthy = {wonder.Description.length > 100} / >)
                    };
                {/* <BlogCards Image="src\assets\download.jpg" Title="Taj Mahal" Description = "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ -/ TAHJ mə-HAHL, TAHZH -⁠; Hindustani: [taːdʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall." / > */}
            </div>
        </>
    );
}

export default Home;