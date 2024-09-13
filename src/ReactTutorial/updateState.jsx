import React, {useState} from 'react'
 const Updates = () => {
    let [car, setCar] = useState({
        Car: 'Benz GLK-', Maker: 'Benz Brand-', Year: 2023  
    })

    let changeCarName = (event) => {
        setCar({...car, Car:event.target.value })
    }
    let changeModelName = (event) => {
        setCar({...car, Maker:event.target.value})
    }

    let changeYear = (event) => {
        setCar({...car, Year:event.target.value })
    }

    // let myCar = {
    //     name:'Benz',
    //     Model: 'GLK',
    //     Year: '2023'
    // }
    return(<div>
        <h2>Working With React</h2>
        <b>Best Car Of The Year© {car.Car} {car.Maker} {car.Year}</b> <br/>
        <input value={car.Car} type="text" onChange={changeCarName}/>  <br/>
        <input value={car.Maker} type="text" onChange={changeModelName}/> <br/>
        <input  value={car.Year} type="number" onChange={changeYear}/>
    </div>)
 }

 export default Updates