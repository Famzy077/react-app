import { useContext } from "react"
import {UserContext} from "./ComponentA"
const ComponentD = () => {

    const User = useContext(UserContext)
    
    return(<div className="semantic">
        <h1>Component D</h1>
        <h2>{`Bye @${User}`}</h2>
    </div>)
}
export default ComponentD