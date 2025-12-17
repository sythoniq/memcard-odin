import {useState, useEffect} from 'react'
import Card from './sub/Card.jsx'

function Grid(props) {
  const [dataObj, setDataObj] = useState([]);
  useEffect(() => { 
    async function getData() {
      const res = await fetch('https://dattebayo-api.onrender.com/akatsuki');
      const data = await res.json();


      let randos = data['akatsuki'];
      let newArr = [];
      
      for (let i = 0; i < 18; i++) {
        if ([1,2,4,5,7,8,10,13,15].includes(i)) continue;

        newArr.push({
          "image": randos[i].images[0],
          "id": randos[i].id,
          "name": randos[i].name
        })
      }
      setDataObj(newArr)
    }
    getData();
  }, [])

  return ( dataObj &&
    <main className="grid-content">
      {dataObj.map(obj => {
        return (
          <Card imgSrc={obj.image} key={obj.id} imgAlt={obj.name} cardText={obj.name} cardId={obj.id} clicked={props.click}/>
        )
      })}
    </main>
  )
}

export default Grid
