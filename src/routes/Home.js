import React, { useEffect, useState } from "react"
import axios from "axios"
import Movie from "../component/Movie"
import "./Home.css"

function Home() {
    const [state, setState] = useState({
        isLoading: true,
        movies: []
    })
    const getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        setState({
            ...state,
            isLoading: false,
            movies
        })
    }
    useEffect(() => {
        getMovies();
    })
    return (<section>
        { state.isLoading ? (<div className="loader">
                                <span className="loader_text">Loading..</span>
                            </div>)
                          : (<div className="movies">
                                {state.movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}/>
                                )
                            )   }
                            </div>
                            ) 
        }
            </section>
    )
}
// class Home extends React.Component {
    
//     state = {
//         isLoading: true,
//         movies: []
//     };
//     // componentDidUpdate() {
//     //     console.log("update!");
//     // }
//     getMovies = async () => {
//         const {
//             data: {
//                 data: {
//                     movies
//                 }
//             }
//         } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//         this.setState({movies, isLoading: false})
//     }
//     componentDidMount() {
//         this.getMovies();
//     }
//     render() {
//         const {isLoading, movies} = this.state;
//         return( <section className="container">
//             {
//                 isLoading
//                     ? ( <div className="loader">
//                             <span className="loader_text">Loading..</span>
//                         </div>
//                     ): (
//                       <div className="movies">
//                           {movies.map(movie => (
//                         <Movie
//                             key={movie.id}
//                             id={movie.id}
//                             year={movie.year}
//                             title={movie.title}
//                             summary={movie.summary}
//                             poster={movie.medium_cover_image}
//                             genres={movie.genres}/>
//                     )) }
//                       </div>
//                     )
//             }
//         </section>
//     )}
// }

// function App() {
//     const [movies, setMovie] = useState();
    
// }
export default Home;
