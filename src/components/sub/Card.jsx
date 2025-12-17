function Card(props) {
  return (
    <div className="grid-cards" id={props.cardId} onClick={(e) => props.clicked(e.target)}>
      <img src={props.imgSrc} alt={props.imgAlt} draggable="false" />
      <p>{props.cardText}</p>
    </div>
  )
}

export default Card
