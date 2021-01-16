import React from 'react'
import ListaElement from './lista-element'


const List=({hranaValue, setHranaValue})=>{

    return(
        <ul>
              {hranaValue.map((hrana)=>
            <ListaElement setHranaValue={setHranaValue}
             hranaValue={hranaValue}
              hrana={hrana}
               line={hrana.line}
                namirnica={hrana.namirnica}
                 cal={hrana.cal}
                  key={hrana.id}/>
              )}  
        </ul>
    )
}
export default List;