import Student from './FirstReact.jsx'
const App = () => {
    let userName = 'Famzy'

    return(
        <>
            <p className='userGreetings'>Welcome Back {userName}!</p>
            <div className="student">
                <Student />
                <footer>&copy; {userName + " " + new Date().getFullYear() } All right reserved</footer>
            </div>
        </>
    )// Myname='Akinola Femi' Age={20} Male={true}
}
export default App