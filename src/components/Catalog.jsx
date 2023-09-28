import { useEffect, useState } from "react";

const Catalog = (props) => {
    const [dogsData, setDogsData] = useState([]);

    useEffect(() => {
        
        fetch('https://api.jsonbin.io/v3/b/651148a554105e766fb96507')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log('got data: ',data);
            setDogsData(data.record)
        })
        
    }, []);

    useEffect(() => {
        // createDogs(dogsData);
    }, [dogsData]);


    const createDogs = (dogs) => {
        return dogs.map(createDogsElement);
    }

    const createDogsElement = (dog) => {
        return (
            <div className='dogsCatalog' key = {dog.name}>
                <img src={dog.img} alt={dog.name}/>
                <h2>{dog.name}</h2>
            </div>
        );
    }
   
    return (
        <section id="dogs">
        {createDogs(dogsData)}
        <button onClick={props.showInfo}>Prova knapp</button>
    </section>
       
    )

    
}

export default Catalog;