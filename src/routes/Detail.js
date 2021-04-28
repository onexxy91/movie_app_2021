import React, { useEffect } from "react";
import "./Detail.css"

function Detail( {location, history} ) {

    useEffect(() =>{
        console.log(location);
        if (location.state === undefined) {
            history.push("/");
        }
    })

    if(location.state) {
        return( <section className="container">
                    <img src={location.state.poster}></img>
                    <h3 className="title">{location.state.title}</h3>
                    <h5 className="summary">{location.state.summary}</h5>
                </section>
        );
    }else {
        return null;
    }
   
}

export default Detail;