const Welcome = (props) => {
    
    return (
        <section>
            <h1>Välkommen till våra hemsida "Doggy Daycare" </h1>
            <p>Här har vi våran medlemma klicka på "Gå till Katalog" för att ser våran gulliga hundar!</p>
            <button onClick={props.nextScreen}>GÅ TILL KATALOG</button>
        </section>
    )
}

export default Welcome;