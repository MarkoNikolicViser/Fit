import React,{useContext} from 'react'
import {TContext} from './context'



const Namirnica=({naslov,kalorija})=>{
    const{inputHrana}=useContext(TContext);
    const[inputHranaValue,setInputHranaValue]=inputHrana;

    const DodajUListu=()=>{
        setInputHranaValue({
            namirnica:naslov,
            kalorije:kalorija
        });
    }

    return(
        <div onClick={DodajUListu} className="automatski-unos-namirnica">
           <li>{naslov}</li>
           <li className="kal">{kalorija}</li>
        </div>
    )
}
export default Namirnica;