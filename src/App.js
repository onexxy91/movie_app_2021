import React from "react"
import PropTypes from "prop-types"

const foodList = [
  {
    id: 1,
    name: "doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "kimbap",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "kimchi",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.7
  }
]

function Food({ name, image, rating }) {
  //console.log(props.name);
  return <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={image} alt={name}></img>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
     {foodList.map(food => <Food key={food.id} name={food.name} image={food.image} rating={food.rating}/> )}
    </div>
  );
}

export default App;
