export default function Card(props) {
    return (
        <div className="card">
            <div className="img--container">
                <img className="card--image" src={props.image} alt='Пещера "Проходна"' />
            </div>
            <div className="text--container">
                <p><img src="./images/location.png" width="15px" alt=""/> {props.country} &nbsp;&nbsp;&nbsp;<a href={props.link}>View on Google Maps</a></p>
                <h1>{props.title}</h1>
                <h4>{props.date}</h4>
                <div className="card--description">{props.description}</div>
            </div>
        </div>
    )
}