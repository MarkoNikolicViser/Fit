import React,{useContext} from 'react'
import {TContext} from './context'

const ListaElement=({namirnica , cal, line, hrana, hranaValue, setHranaValue})=>{

const{totalCal, totalCalProc, lineNumber}=useContext(TContext);

const[totalCalValue, setTotalCalValue]=totalCal;
const[totalCalProcValue, setTotalCalProcValue]=totalCalProc;
const[lineNumberValue,setLineNumberValue]=lineNumber;

const DeleteHandler=()=>{
    setHranaValue(hranaValue.filter((el)=>el.id !==hrana.id))
    setTotalCalValue(totalCalValue-hrana.cal)
    setTotalCalProcValue(totalCalProcValue-hrana.cal)
    if(hranaValue.length===1)
    setLineNumberValue(1);
}

    return(
         <div className="manuelni-ispis">
            <li className="aling-left">{line}. {namirnica}</li>
            <li className="aling-right-cals">{cal}</li>
            <li className="iks" onClick={DeleteHandler}>&times;</li>
         </div>
    )
}
export default ListaElement;