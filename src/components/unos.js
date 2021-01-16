import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import OpcijaVoda from '../images/OpcijaVoda.svg'
import Water from '../images/water.png'
import {TContext} from '../components/context'
import Spavanje from '../images/spavanje.svg'
import Bed from '../images/bed.jpg'
import Manuelni from './manuelni-unos'
import List from './manuelni-unos-list'
import AutomatskiUnos from './automatskiunos'


const Unos=()=>{
const{voda,san,counter,hrana,inputHrana,totalCal,lineNumber, satiSna}=useContext(TContext);
const[vodaValue,setVodaValue]=voda;
const[sanValue,setSanValue]=san;
const[counterValue,setCounterValue]=counter;
const[hranaValue,setHranaValue]=hrana;
const[inputHranaValue,setInputHranaValue]=inputHrana;
const[totalCalValue, setTotalCalValue]=totalCal;
const[lineNumberValue,setLineNumberValue]=lineNumber;
const[satiSnaValue, setSatiSnaValue]=satiSna;


    const Fill=()=>{
        if(vodaValue<100){
         setVodaValue(vodaValue+12.5);
         setCounterValue(counterValue+1);
        }
    }
    const Spill=()=>{
        if(vodaValue>0){
        setVodaValue(vodaValue-12.5);
        setCounterValue(counterValue-1);
        }
    }
    const DodajSan=()=>{
        if(sanValue<100){
         setSanValue(sanValue+12.5);
         setSatiSnaValue(satiSnaValue+1);
        }
    }
    const OduzmiSan=()=>{
        if(sanValue>0){
        setSanValue(sanValue-12.5);
        setSatiSnaValue(satiSnaValue-1);
        }
    }

 
    return(
        <div className="unos">           
            <div className="kalkulator-kalorija">
            <nav>
                <ul>
                    <li>
                    <Link to="/">
                    FitPriručnik
                    </Link>
                    </li>
                </ul>
            </nav>
                <div className="automatski-unos">
                    <AutomatskiUnos/>
                </div>
                <div className="manuelni-unos">
                <div className="manuelni-unos-forma">
                    <Manuelni/>
                    </div>
                    <List hranaValue={hranaValue} setHranaValue={setHranaValue}/>
                    <hr/>
                    <h6>Ukupno kalorija: {totalCalValue}</h6>
                </div>
            </div>
            <div className="voda-san">
                <div className="unos-vode">
                    <h3>Unesite količinu vode koje ste danas popili</h3>
                    <img src={OpcijaVoda} alt=""/>
                    <h4>Preporučeni dnevni unos vode je 8 čaša</h4>
                   <div className="dodavanje-vode">
                    <i onClick={Spill} className="arrow2 left"></i>
                    <img className="wtr" src={Water} alt=""/>
                    <i onClick={Fill} className="arrow2 right"></i>
                    <h4>X{counterValue}</h4>
                    </div>
                </div>
                <div className="unos-sna">
                <h3>Unesite koliko ste sati spavali danas</h3>
                    <img className="spavanje-svg" src={Spavanje} alt=""/>
                    <h4>Preporučeno dnevno spavanje je 8 časova</h4>
                    <div className="dodavanje-sna">
                    <i onClick={OduzmiSan} className="arrow1 left"></i>
                    <img className="bed" src={Bed} alt=""/>
                    <i onClick={DodajSan} className="arrow1 right"></i>
                    <h4>{satiSnaValue}h</h4>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Unos;