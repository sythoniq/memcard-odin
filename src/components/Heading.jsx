function Heading(props) {
  return (
    <header className="page-heading">
      <h3>{props.title}</h3>
      <div className="heading-extra">
        <p className="curr-score">Score: {props.currScore}</p>
        <p className="curr-meme">Best Score: {props.currMeme}</p>
      </div>
    </header>
  )
}

export default Heading
