function Card(props) {
  return (
    <div className="grid-cards">
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p>{props.cardText}</p>
    </div>
  )
}

export default Card
