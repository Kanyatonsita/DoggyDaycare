import { useEffect, useState } from "react";

const Catalog = (props) => {
    const [dogsData, setDogsData] = useState([]);

    useEffect(() => {
        
        fetch('https://api.jsonbin.io/v3/b/651148a554105e766fb96507')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setDogsData(data.record)
        })
        
    }, []);

    useEffect(() => {

    }, [dogsData]);

    return (
        <section>
        <div> Bild</div>
        <button onClick={props.showInfo}>Prova knapp</button>
        </section>
       
    )
}

export default Catalog;