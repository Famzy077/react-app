import { useState } from "react"
const UpdateComponent = () => {

    let [count, setCount] = useState(0)

    let Increament = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={Increament}>Increament</button>
        </div>
    )
}
export default UpdateComponent