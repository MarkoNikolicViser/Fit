import React,{useContext} from 'react'
import {TContext} from './context'

const Manuelni=()=>{
    
    const{totalCal, totalCalProc,hrana,inputHrana,lineNumber}=useContext(TContext);
    const[totalCalValue, setTotalCalValue]=totalCal;
    const[totalCalProcValue, setTotalCalProcValue]=totalCalProc;
    const[hranaValue,setHranaValue]=hrana;
    const[inputHranaValue,setInputHranaValue]=inputHrana;
    const[lineNumberValue,setLineNumberValue]=lineNumber;



    const hranaHandler=(e)=>{
        const value=e.target.value;
        setInputHranaValue({...inputHranaValue, [e.target.name]:value});
    }
 
    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(inputHranaValue.namirnica==='' || inputHranaValue.kalorije==='')
           e.target.focus();
            else{
        setHranaValue([ ...hranaValue, {line: lineNumberValue, namirnica: inputHranaValue.namirnica, cal:inputHranaValue.kalorije, id: Math.random()*1000}])
        setInputHranaValue({
            namirnica:"",
            kalorije:""
        });
        setTotalCalValue(totalCalValue+Number.parseInt(inputHranaValue.kalorije));
        setLineNumberValue(lineNumberValue+1);

        if(Number.parseInt(inputHranaValue.kalorije)>2000)
        setTotalCalProcValue(2000)
        else if(totalCalProcValue+Number.parseInt(inputHranaValue.kalorije)<2000)
        setTotalCalProcValue(totalCalProcValue+Number.parseInt(inputHranaValue.kalorije))
        else{
            setTotalCalProcValue(2000)
        }
    }
    };
    return(
        <div className="unos-namirnica-kalorje">
            <form>
                <input className="unos-namirnica" placeholder="namirnica" value={inputHranaValue.namirnica} onChange={hranaHandler} name="namirnica" type="text"/>
                <input className="unos-kalorije" placeholder="kalorije" value={inputHranaValue.kalorije} onChange={hranaHandler} name="kalorije" type="number" size="3"/>
                <button onClick={SubmitHandler} type="submit">Unos</button>
            </form>
        </div>
    )
}
export default Manuelni;