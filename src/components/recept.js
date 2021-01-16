import React, {useState} from 'react'
import Modal from './modal'

const Recept=({naslov,slika,kalorije,namirnice, nutrijenti})=>{


    const[isOpen,setIsOpen]=useState(false)

    const OnClose=()=>{
        setIsOpen(false);
    }

    return(
        <div>
            <div className="recept-kartica" onClick={()=>setIsOpen(true)}>
            <h1>{naslov}</h1>
            <img src={slika} alt=""/>
            <h5>{kalorije} cals</h5>
            </div>

            {/*Test modala*/}
            <div className="modal-wraper">
                <Modal  open={isOpen} OnClose={OnClose}>
                    <div className="naslov-kalorije">
                    <h1 className="naslov">{naslov}</h1>
                    <h1 className="kalorije-modal">{kalorije} cals</h1>
                    </div>
                    <div className="slika-nutrijenti">
                    <img src={slika} alt=""/>
                    <div className="nutrijenti">
                    {nutrijenti.map((value,index)=>{
                        return <li key={index}>{value.label}: {Math.round(value.total)}{value.unit}</li>
                    })}
                    </div>
                    </div>
                    <div className="sastojci">
                    <h1>Ingredients</h1>
                    {namirnice.map((value,index)=>{
                        return <li key={index}>{value}</li>
                    })}
                    </div>
                </Modal>
            </div>
        </div>
    )
}
export default Recept;
