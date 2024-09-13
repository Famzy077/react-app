import './index.css'
import { useState, createContext } from 'react'
import ComponentB from './ComponentB'
export const UserContext = createContext()
const ComponentA = () => {

    let [user, setuser] = useState('Famzy')
    return(<div className='semantic'>

        <h1>Component A</h1>
        <h3>{`Welcome @${user}`}</h3>
        <UserContext.Provider value={user}>
        <ComponentB />
        </UserContext.Provider>

    </div>)
}

export default ComponentA