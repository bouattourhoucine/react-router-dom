import React from 'react'
import { useParams ,useNavigate} from "react-router-dom"

function MoviDetails({ Movies }) {
    const { id } = useParams()
    const navigate=useNavigate()

    const movie = Movies.find(elt => elt.id == id)
    console.log(movie)

    return (
        <div>{movie && movie.title}
        <button onClick={()=>navigate("/")}>back to home </button>
        </div>
    )
}

export default MoviDetails