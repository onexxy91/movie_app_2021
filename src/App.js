import React from "react"

function Food({ name, image }) {
  //console.log(props.name);
  return <div>
    <h1>I like {name}</h1>
    <img src={image}></img>
  </div>
}

const foodList = [
  {
    name: "doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "kimbap",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "kimchi",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  }
]

function App() {
  return (
    <div>
     {foodList.map(food => <Food name={food.name} image={food.image}/> )}
    </div>
  );
}

export default App;
