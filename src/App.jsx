import Heading from './components/Heading.jsx'
import Grid from './components/Grid.jsx'
import {fetchData} from './components/Grid.jsx'
import { useEffect, useState } from 'react'

let data = await fetchData();

function App() {
  
  return (
    <>
      <Heading title="What The Flip" currScore="234" currMeme="Well... yeah"/>
      <Grid />
    </>
  )   
}


export default App
