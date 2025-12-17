import Heading from './components/Heading.jsx'
import Grid from './components/Grid.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [bestScore, setBestScore] = useState(0)

  function handleClick(e) {
    let tgtId = e.parentNode.id;
    if (!clicked.includes(tgtId)) {
      setClicked([...clicked, tgtId]);
      setCurrScore(currScore => currScore + 1)
    } else if (clicked.includes(tgtId)) {
      setClicked([]);
      if (bestScore < currScore) setBestScore(currScore);
      setCurrScore(0);
    }
  }  

  return (
    <>
      <Heading title="What The Flip" currScore={currScore} currMeme={bestScore} />
      <Grid click={handleClick} />
    </>
  )   
}


export default App
