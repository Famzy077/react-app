import './Section.css'
import { useState } from "react"
import HandleName from './UseArray'

const CheckDeatails = () => {
    let [name, reName] = useState('Akinola Femi')

    let HandleClick = () => {
        reName('Olaonipekun Festus')
    }
    
 
    
    return <>
        <div className="main1">
            <h1>Check Details</h1>
       
            <h2> My name is {name}</h2>
            <button id='Sectbtn' onClick={HandleClick}>Click to reName</button>
        </div>

        <div className="useState">
        <HandleName/>
        </div>
    </>
}


export default CheckDeatails