import './object.css'
    
 const Student = (props) => {
    let Detailes = [
        {id: 1, name: 'Emmanuel', age: 19},
        {id: 2, name: 'Ayoola', age: 20},
        {id: 3, name: 'Oluwasegun', age: 21},
        {id: 4, name: 'John', age: 25},
        {id: 5, name: 'Aremu', age: 19},
        {id: 6, name: 'Xavier', age: 23}
    ]
        
    let Age=[19, 21, 28, 30, 20]
    
    let getDetailes = Detailes.map(detailesInfo => <li key={Detailes}>{detailesInfo.name}</li>)
    // const TrueMsg = <p>Male</p>
    // const FalseMsg = <p>Female</p>
    return(
        <>
            <ul>{getDetailes}</ul>
            <h2>Conditional Rendering</h2>
        </>
    )   
}
// Student.defaultProps = {
//     name: 'Guest',
//     age: 0
// }                           
// console.log(Student)       
export default Student