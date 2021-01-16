import React from 'react'
import Pozadina from '../images/pozadina.svg'
import Izbor from '../images/izbor.svg'
import Kuvanje from '../images/kuvanje.svg'
import Spavanje from '../images/spavanje.svg'
import Trening from '../images/trening.svg'
import {Link} from 'react-router-dom'

const Home=()=>{

    return(
        <div className="home">
            <nav>
                <ul>
                    <li>
                    FitPriručnik
                    </li>
                </ul>
            </nav>
            <div className="pozadina-moto">
                <img src={Pozadina} alt=""/>
                <div>
                    <h1>Postani fit</h1>
                    <h3>Preporučeno dnevno vežbanje</h3>
                    <h3>u trajanju od 45minuta.</h3>
                </div>
            </div>
            <div className="kartice">
                <div className="kartica">
                <Link to='/unos'>
                <img src={Izbor} alt="Izaberi"/>
                <h5>Unesi u tablicu</h5>
                </Link>
                </div>
                <div className="kartica">
                <Link to='/recepti'>
                <img src={Kuvanje} alt="Kuvanje"/>
                <h5>Recepti</h5>
                </Link>
                </div>
                <div className="kartica">
                <img src={Trening} alt="Trening"/>
                <h5>Trening</h5>
                </div>
            </div>
        </div>
    )
}
export default Home;