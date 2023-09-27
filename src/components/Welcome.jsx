const Welcome = (props) => {
    
    return (
        <section>
            <h1>Välkommen till våra hemsida "Doggy Daycare" </h1>
            <p>lite info</p>
            <button onClick={props.nextScreen}>GÅ TILL CATALOG</button>
        </section>
    )
}

export default Welcome;