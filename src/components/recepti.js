import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Recept from './recept'

const Recepti=()=>{

const APP_ID="a79a1f1d";
const APP_KEY="ce61b98c1a2753c809594963005fc661";

const[recept, setRecept]=useState("");
const[query, setQuery]=useState("cake");
const[recepti, setRecepti]=useState([]);

const SubmitHandler=(e)=>{
    e.preventDefault();
    setQuery(recept);
    setRecept("");
}
const InputHandler=(e)=>{
    setRecept(e.target.value);
}


useEffect(() => {
  GetRecepti();
}, [query])

const GetRecepti=async()=>{
const response=await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data=await response.json();
setRecepti(data.hits);
}


    return(
        <div className="recepti">
               <nav>
                <ul>
                    <li>
                    <Link to="/">
                    FitPriručnik
                    </Link> 
                    </li>
                </ul>
                </nav>
                <div className="forma-recept">
                    <form onSubmit={SubmitHandler}>
                        <input placeholder="Unesi recept" onChange={InputHandler} value={recept} type="text"/>
                        <button>Pretraži</button>
                    </form>
                    </div>
                    <div className="recept-kartice">
                        {recepti.map(rec=>
                            (
                            <Recept 
                            key={Math.random()*1000}
                            naslov={rec.recipe.label}
                            slika={rec.recipe.image}
                            kalorije={Math.round(rec.recipe.calories,2)}
                            namirnice={rec.recipe.ingredientLines}
                            nutrijenti={rec.recipe.digest}
                            />
                        ))}
                    </div>
        </div>
    )
}
export default Recepti;