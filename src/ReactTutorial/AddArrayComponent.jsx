import { useState } from "react"
const AddArray = () => {

    const [Fruit, setFruit] = useState(['PawPaw', 'Strawberry', 'Apple', 'Mango'])

    const AddNewFruit = () => {
        if(NewFruit.value === ''){
            return
        }else{
            const NewFruit = document.getElementById('NewFruit').value;
            document.getElementById('NewFruit').value = ''
            setFruit([...Fruit, NewFruit])
        }
    }
      
    return(<div>
        <ul>
            {Fruit.map((fruits, index) => <li key={index}>{fruits}</li>)}
            <input type="text" id="NewFruit"/>
            <button onClick={AddNewFruit}>Add New Fruit</button>
            

        </ul>
    </div>)
}

export default AddArray