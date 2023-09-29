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
                <img src={dog.img} alt={dog.name} onClick={() => props.showInfo(dog)}/>
                <h2 onClick={() => props.showInfo(dog)}>{dog.name}</h2>
            </div>
        );
    }

     // Använd 'dog'-informationen här för att visa på din 'showInfo'-sida
    const showInfo = (dog) => {
        <section>
        <img src={dog.img}/>
       <ul> 
          <li>{dog.name}</li>
          <li>{dog.age}</li>
          <li>{dog.breed}</li>
          <li>{dog.chipNumber}</li>
          <li>{dog.present}</li>
          <li>{dog.sex}</li>
        </ul>
        </section>
      
      }
   
    return (
        <section id="dogs">
        <button onClick={props.backToWelcome}>Start sida</button>
        {createDogs(dogsData)}
    </section>
       
    )

    
}

export default Catalog;