import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({id: 1, name: 'John', email: 'john04@yahoo.com'})
    const [fruits, setFruits] = useState(['apple', 'mango', 'cashew', 'pineapple'])
    const formHandler = (e) => {
        e.preventDefault() 
        console.log(user)
        setUser({ id: null, name: '', email: ''})
    }
    const inputHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <form action="" onSubmit={ formHandler }>
            <div className="form-group">
                <label htmlFor="name">Fullname</label>
                <input type="text" name='name' id="name" value={ user.name } onChange={ inputHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' id='email' value={ user.email } onChange={ inputHandler} />
            </div>
            <button type='submit'>Submit</button>
        </form>
        <hr />
        <h3>{ user.name }</h3>
        <p>{ user.email }</p>
        <button onClick={() => {
            setUser({ ...user, name: 'Akin'})
        }}>Change name</button>
        <hr />

        {/* <p>{ fruits.join(' | ')}</p> */}
       <ul>
       { fruits.map((fruit, ind) => {
            return (<li key={ind}>{fruit}</li>)
        })}
       </ul>
        <button onClick={ () => {
            setFruits([ ...fruits, 'banana'])
        }}>Add fruit</button>
    </div>
  )
}

export default Form
