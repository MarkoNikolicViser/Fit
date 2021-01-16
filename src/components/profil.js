import React, {useContext, useEffect,useRef} from 'react'
import Bed from '../images/bed.jpg'
import Water from '../images/water.png'
import Food from '../images/food.png'
import {TContext} from '../components/context';

const Profil=()=>{

    const{voda,san,totalCal,totalCalProc}=useContext(TContext);
    const[vodaValue,setVodaValue]=voda;
    const[sanValue,setSanValue]=san;
    const[totalCalValue,setTotalCalValue]=totalCal;
    const[totalCalProcValue,setTotalCalProcValue]=totalCalProc;

    const TestRef=useRef('null');
    const TestRef2=useRef('null');
    const TestRef3=useRef('null');

useEffect(() => {
   TestRef.current.style.width=vodaValue+"%"
}, [vodaValue])

useEffect(() => {
    TestRef2.current.style.width=sanValue+"%"
 }, [sanValue])

 useEffect(() => {
     if(totalCalValue<2000)
    TestRef3.current.style.width=(2000-(2000-totalCalValue))/20+"%"     ///ovde sam dodao
    else(
        TestRef3.current.style.width=100+"%"
    )
 }, [totalCalValue])



    return(
        <div className="profil">
           <nav>
              <ul>
                  <li>
                      Marko
                  </li>
                  <li>
                      <img src="" alt=""/>
                  </li>
              </ul>
           </nav>
           <div className="moto">
               <h3>Skoro pa gotovo</h3>
               <h4>Još malo i ispunili ste dnevni</h4>
               <h4>unos nutritivnih vrednosti</h4>
               <span className="arrow">&#8594;</span>
           </div>
           <div className="progres">
           <h3 className="progresElements">Progres:</h3>
               <div className="cal">
               <div className="kalorije">
                   <div ref={TestRef3} className="kalorije1">
                   </div>
                   <span>Kalorije</span>
                   <span className="kalorije-procenti">{(2000-(2000-totalCalProcValue))/20}%</span>
                   <img src={Food} alt=""/>
               </div>
               </div>
               <div className="water">
               <div className="voda">
               <div ref={TestRef} className="voda1">
                </div>
                <span>Voda</span>
                <span className="kalorije-procenti">{vodaValue}%</span>
                <img src={Water} alt=""/>
               </div>
               </div>
               <div className="sleep">
               <div className="san">
               <div ref={TestRef2} className="san1">

                </div>
                <span>San</span>
                <span className="kalorije-procenti">{sanValue}%</span>
                <img src={Bed} alt=""/>
               </div>
               </div>
           </div>
        </div>
    )
}
export default Profil;