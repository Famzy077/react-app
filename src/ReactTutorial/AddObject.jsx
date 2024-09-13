import { useState } from "react"

const AddObject = () => {

    const [cars, setCars] = useState([])

    const HandleAddCar = () => {
        const AddObject = {year:carYear, maker:carMaker, model:carModel}

        setCars(cars => [...cars, AddObject])
        setCarMaker('')
        setCarModel('')
    }

    function HandleReomveCar (index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    const [carYear, setCarYear] = useState([new Date().getFullYear()])
    const [carMaker, setCarMaker] = useState('')
    const [carModel, setCarModel] = useState('')

    const HandleAddYear = (event) =>{
        setCarYear(event.target.value)
    }
    const HandleAddMaker = (event) =>{
        setCarMaker(event.target.value)
    }
    const HandleAddModel = (event) =>{
        setCarModel(event.target.value)
    }
 return(<div>
        <h2>Working With Object Updates</h2>
        
        <ul>
            {cars.map((allCars, myCars) => 
            <li key={myCars } onClick={() => HandleReomveCar(myCars)}>
                {allCars.year} {allCars.maker} {allCars.model}
            </li>)}
        </ul>
        <input value={carYear} type="number" onChange={HandleAddYear}/> <br />
        <input value={carMaker} type="text" onChange={HandleAddMaker}/> <br />
        <input value={carModel} type="text" onChange={HandleAddModel}/> <br /> <br />
        <button onClick={HandleAddCar}>Add Object</button>
 </div>)
}
export default AddObject