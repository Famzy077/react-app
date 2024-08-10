import { PersonList } from './src/data/person'
import { useState } from 'react'
import './UseArray.css'

const HandleName = () => {
       const [personList, setPersonlist] = useState(PersonList)

    const removePerson = (person) => {
        setPersonlist(prevPersonList => {
            consprevPersonList.filter(ps => ps !== person)
        })
    }

    return <>
        <h2 className='h2'>  Using UseState To Remove Array</h2>
        <ul className='array'>
            {personList.map((val, key) => <Person value={val} key={key} remove={removePerson}/> )}
        </ul>
        <button onClick={ () => {
            setPersonlist([])
        }}>Delete</button>
</>
}
    const Person = ({value, remove}) => <li> {value} <button onClick={ () => remove(value)}>&times;</button></li>
export default HandleName
