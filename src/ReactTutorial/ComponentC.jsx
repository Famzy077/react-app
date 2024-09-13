import ComponentD from "./ComponentD"
import { useContext } from "react"
import {UserContext} from './ComponentA'

const ComponentC = () => {
    const User = useContext(UserContext)
    return(<div className="semantic">
        <h1>Component C</h1>
        <h2>{`Time to go @${User}`}</h2>
        <ComponentD />
    </div>)
}

export default ComponentC