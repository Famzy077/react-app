import './style.css'
import { useState } from "react"
const OnchangeElem = () => {
    const [name, setName] = useState('Festus')
    const [comment, setComment] = useState('')
    let [isYourName, setIsYourName] = useState(true)

    let [color, setColor] = useState("#fff")
    
    let changeName = (event) => {
        setName(event.target.value)
    }
    let changeComment = (event) => {
        setComment(event.target.value)
        console.log(comment)
    }
    
    let GetName = () => {
        setIsYourName(!isYourName)
    }

    let [count, setCount] = useState(0)
    
    let AddCount = () => {
        setCount( count + 1)
    }

    let RemoveCount = () => {
        setCount( count = 0)
    }
    let Remove = () => {
        setCount(count - 1)
    }

    let colorRange = (event) => {
        setColor(event.target.value)
    }
    
    

    return(<>
        <div className="name">
            <button onClick={AddCount}>Add Count</button>
            <button onClick={RemoveCount}>Reset Count</button>
            <button onClick={Remove}>Remove Count</button>
            <p>Count: {count}</p>
            <label htmlFor="name">Name</label>
            <input  onChange={changeName} value={name} type="text" />
            <p>Name: {name}</p>

            <label htmlFor="Comment">Comment</label>
            <textarea onChange={changeComment}  id=""></textarea>
            <p>Add Comment: {comment}</p>
            
            <button onClick={GetName}>GetName </button>
            <p>Is Your Name? {isYourName ? 'Yes': 'No'}</p>

            <div className="colorRange" style={{background: color}}>
                <p>Selected Color</p>
            </div>
            <input  onChange={colorRange} type="color"/>
            <p>Select Color</p>
        </div>
    </>)
}
export default OnchangeElem