import React,{useEffect,useState} from 'react'
import Namirnica from './namirnica'

const AutomatskiUnos=()=>{


    const APP_ID="b9a8d398";
    const APP_KEY="910d1419b32415b6d8c3e114fb238013";

    const[input,setInput]=useState("");
    const[query,setQuery]=useState('kiwi');
    const[namirnice,setNamirnice]=useState([]);

    useEffect(() => {
        GetData();
    }, [query])
    
    const InputHandler=(e)=>{
        setInput(e.target.value);
    }
    const SubmitHandler=(e)=>{
        e.preventDefault();
        setQuery(input);
        setInput("");
    }

const GetData=async()=>{
const response=await fetch
(`https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

const data=await response.json();
    if(data.hits)
setNamirnice(data.hints);

}

    return(
        <div>
            <form onSubmit={SubmitHandler}>
                <input onChange={InputHandler} value={input} type="text"/>
                <button>Traži</button>
            </form>
            <div className="automatski-unos-namirnice">
                {namirnice.map((namirnica=>
                    <Namirnica naslov={namirnica.food.label} 
                    key={Math.random()*1000}
                    kalorija={Math.round(namirnica.food.nutrients.CHOCDF)}
                    />
                ))}
            </div>
        </div>
    )
}
export default AutomatskiUnos;

