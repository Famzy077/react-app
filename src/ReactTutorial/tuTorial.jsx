import { useState } from "react"
import './tutorial.css'

const App = () => {
    let userName = 'Famzy' 
    let [user, setUser] = useState({id: 1, names: 'John Doe', email:'Akinolafemi@gmail.com'})
    let [name, setName]= useState(['Akinola', 'Olaonipekun', 'Famzy', 'James'])
    let [add, setAdd] = useState([1])
    
    const FormInput = (e) => {
        setUser({id: null, names: '', email: ''})
        e.preventDefault()
    }

    

    const formHandler = (e) => {
        setUser({...user, [e.target.names]: e.target.value})
    }

    return(
        <>
            <form action="" onSubmit={FormInput}>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Please enter name" value={user.names} onChange={formHandler}/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Please enter email" value={user.email} onChange={formHandler}/>
                <button type="submit">Submit</button>
            </form>
            <h2>{user.names}</h2>
            <p className="pElem">{user.email}</p>
            {name.map((findName, nameKey) => [<li key={nameKey}>{findName}</li>])}

            <button onClick={ () => {
                setName([...name, 'Ayomide'])
            }}>Add Array</button>

            <button onClick={() => {
                setUser({...user, names: 'Akinola Alice'})
            }}>Change name</button>

            <button onClick={() => {
                setUser({...user, email: 'akinolaalice@gmail.com'})
            }}>Change email</button>

            <p>All right reserved {userName + new Date().getFullYear()}</p>
        </>
        // <div className="main">
        //     <p>{add }</p>
        //     <button onClick={() => {
        //         setAdd([ 10 + add])
        //     }}>Increase</button>  
        //     <form action="">
        //         <div>
        //             <label htmlFor="fullName">Name</label>
        //             <input type="text" name="fullName" id="fullName" value={user.names} onChange={inputHanddler}/>
        //         </div>
        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input type="text" name="email" id="email" value={user.email} onChange={inputHanddler}/>
        //         </div>
        //     </form>

        //     <p>{name.map((getName, setNameKey) => [<li key={setNameKey}>{getName}</li>])}</p>
        //     <h2>{user.names}</h2>
        //     <p>{user.email}</p>

        //     <button onClick={() => {
        //         setName ([...name, 'Treasure'])
        //     }}>Add Name</button>


        //     <button onClick={() => {
        //         setUser({...user, names: 'Agboola'})
        //     }}>Change Name</button>

        // </div>
    )
}
export default App