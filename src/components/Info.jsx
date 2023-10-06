import './info.css'
import noDogImg from'../assets/noDogImg.jpeg'

const Info = (props) => {


    return (
        <section className='info'>
            <h2>🐶 Infomation om {props.dog.name} 🐶</h2>
            <img src={props.dog.img} alt={props.dog.name} 
            onError={(e => (e.currentTarget.src = noDogImg))}/>
            <div className={props.dog.present ? 'green-dot' : 'red-dot'}></div>
                  <p>🐾 Namn: {props.dog.name}</p>
                  <p>🐾 Age: {props.dog.age}</p> 
                  <p>🐾 Sex: {props.dog.sex}</p>
                  <p>🐾 Breed: {props.dog.breed}</p>
                  <p>🐾 ChipNumber: {props.dog.chipNumber}</p>
                  <p>🐾 Owner: {props.dog.owner.name} {props.dog.owner.lastName}</p>
                  <p>🐾 Tel: {props.dog.owner.phoneNumber}</p>
            <button onClick={props.goBackToCatalogPage}>Gå tillbaka</button>
        </section>
    )
}

export default Info;