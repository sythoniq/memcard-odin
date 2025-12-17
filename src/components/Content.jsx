import {useState, useEffect} from 'react'
import Card from './Card.jsx'

// Borrowed / Copied this function straight from stack overflow ;)
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


function HeadingComp(props) {
  return (
    <header className="heading-comp">
      <h3>What To Name...</h3>
      <div className="scores">
        <h5>Score: {props.score}</h5>
        <h5>Best Score: {props.best}</h5>
      </div>
    </header>
  ) 
}

function Content() {
  const [score, setScore] = useState(0);  
  const [best, setBest] = useState(0);

  const [images, setImages] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://dattebayo-api.onrender.com/akatsuki');
      const data = await res.json();

      let peeps = data['akatsuki'];
      let store = [];

      for (let i = 0; i < 18; i++) {
        if ([1,2,4,5,7,8,10,13,15].includes(i)) continue;

        store.push({
          "image": peeps[i].images[0],
          "id": peeps[i].id,
          "name": peeps[i].name
        })
      }
      setImages(store);
    }
    getData();
  }, [])

  const [clicked, setClicked] = useState([]);

  function handleClick(e) {
    let tgtId = e.parentNode.id;
    if(!clicked.includes(tgtId)) {
      setClicked([...clicked, tgtId]);
      setScore(sccore => score + 1);
      shuffle(images);
    } else if (clicked.includes(tgtId)) {
      setClicked([]);
      if (score > best) setBest(score);
      setScore(0);
    }
  }

  return (
    <>
      <HeadingComp score={score} best={best}/>
      <main className="grid">
        {images.map((obj) => {
          return (
            <Card imgSrc={obj.image} key={obj.id} imgAlt={obj.name} cardText={obj.name} cardId={obj.id} onclick={handleClick}/>
          )
        })}
      </main>
    </>
  )
}

export default Content
