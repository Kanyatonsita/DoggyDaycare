const Info = (props) => {


    return (
        <section>
            <h2>Infomation om huden</h2>
            <ul>
                <li>
                    Här ska står allt info
                </li>
            </ul>
            <button onClick={props.goBackToCatalogPage}>Gå tillbaka</button>
        </section>
    )
}

export default Info;