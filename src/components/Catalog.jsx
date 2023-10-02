import { useEffect, useState } from "react";
import './catalog.css'


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
                
                <img src={dog.img} alt={dog.name} onClick={() => props.showInfo(dog)}/>
                <h2 onClick={() => props.showInfo(dog)}>{dog.name}</h2>
                  <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
                  <p>Tel: {dog.owner.phoneNumber}</p>

            </div>
        );
    }

    return (     
            <section id="dogs">
              <button onClick={props.backToWelcome}>Start sida</button>
              {createDogs(dogsData)}
             </section>
       
       
    )

    
}

export default Catalog;