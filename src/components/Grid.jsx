import Card from './sub/Card.jsx'

let dataObj = [];

export async function fetchData() {
  const data = await fetch('https://dattebayo-api.onrender.com/akatsuki')
  const res = await data.json();
  
  let savages = res["akatsuki"];

  for (let i = 0; i < 17; i++) {
    if ([1,2,4,5,7,8,13,15].includes(i)) continue;
    dataObj.push({
      "image": savages[i].images[0],
      "id": savages[i].id,
      "name": savages[i].name
    });
  }
  return dataObj;
}

function Grid() {
  return (
    <main className="grid-content">
      {dataObj.map(obj => {
        return (
          <Card imgSrc={obj.image} key={obj.id} imgAlt={obj.name} cardText={obj.name} />
        )
      })}
    </main>
  )
}

export default Grid
