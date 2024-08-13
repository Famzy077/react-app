import { useState } from "react"

const App = () => {
    let userName = 'Famzy' 
    let name = ['Akinola', 'Olaonipekun', 'Famzy', 'James']
    let [fruit, setFruit] = useState({id: 1, name: 'Festus', email:'Akinolafemi@gmail.com'})

    return(
        <>
            {name.map((names, nameKey) => <li>{names}</li>)}
            <ul>{name}</ul>
        </>
    )
}
export default App