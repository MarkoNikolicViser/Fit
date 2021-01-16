import React, {createContext, useState, useEffect} from 'react'

export const TContext=createContext();



export const TProvider=(props)=>{
    const[voda,setVoda]=useState(0)               ///dodavanje vode
    const[san,setSan]=useState(0)                 ///dodavanje sna
    const[counter,setCounter]=useState(0)         ///brojac za povecavanje casa vode
    const[inputHrana,setInputHrana]=useState({    ///manuelni input hrane i kalorija
        namirnica:"",
        kalorije:""
    })
    const[hrana, setHrana]=useState([])           ///cuvanje inputa hrane i kalorija
    const[totalCal, setTotalCal]=useState(0);     ///sabiranje kalorija
    const[lineNumber, setLineNumber]=useState(1); ///numeracija inputa u manuelnom unosu
    const[satiSna, setSatiSna]=useState(0);
    const[totalCalProc,setTotalCalProc]=useState(0);

//-------------Cuvanje stejta nakon refresa

useEffect(() => {
    const data=localStorage.getItem('test')
    const data1=localStorage.getItem('test1')
    const data2=localStorage.getItem('test2')
    const data3=localStorage.getItem('test3')
    const data4=localStorage.getItem('test4')
    const data5=localStorage.getItem('test5')
    const data6=localStorage.getItem('test6')
    const data7=localStorage.getItem('test7')
    if(data)
    setHrana(JSON.parse(data))
    if(data1)
    setTotalCal(JSON.parse(data1))
    if(data2)
    setTotalCalProc(JSON.parse(data2))
    if(data3)
    setSan(JSON.parse(data3))
    if(data4)
    setSatiSna(JSON.parse(data4))
    if(data5)
    setVoda(JSON.parse(data5))
    if(data6)
    setCounter(JSON.parse(data6))
    if(data7)
    setLineNumber(JSON.parse(data7))
}, [])
useEffect(() => {
 localStorage.setItem('test',JSON.stringify(hrana));
 localStorage.setItem('test1', JSON.stringify(totalCal))
 localStorage.setItem('test2', JSON.stringify(totalCalProc))
 localStorage.setItem('test3', JSON.stringify(san))
 localStorage.setItem('test4', JSON.stringify(satiSna))
 localStorage.setItem('test5', JSON.stringify(voda))
 localStorage.setItem('test6', JSON.stringify(counter))
 localStorage.setItem('test7', JSON.stringify(lineNumber))
}, )

    return(
        <TContext.Provider value={{voda:[voda,setVoda], san:[san,setSan], counter:[counter,setCounter],
         hrana: [hrana,setHrana], inputHrana:[inputHrana, setInputHrana], totalCal:[totalCal, setTotalCal],
         lineNumber:[lineNumber,setLineNumber], satiSna:[satiSna,setSatiSna],
         totalCalProc:[totalCalProc, setTotalCalProc]
         }}>
            {props.children}
        </TContext.Provider>
    )
}