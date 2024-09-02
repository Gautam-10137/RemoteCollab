const Login = () => {
    const [userData, setUserData] = useState({
        Name: "",
        email: "",
        password: ""
    })
    const handleChange = () => {
        const {name, value} = e.target;
        setUserData({
            
        })
    }
    const handleSubmit = () => {

    }
    return(
        <>
        <div>Login:</div>
        <form>
            <label>Name:</label>
            <input type="text"
            name="name"
            value={userData.Name}
            onChange={handleChange}/>
            <label>Email:</label>
            <input type="text" 
            name="email"
            value={userData.email}
            onChange={handleChange}
            />
            <label>password:</label>
            <input type="text" 
            name="password"
            value={userData.password}
            onChange={handleChange}
            />
            <button onClick={handleSubmit}>Login</button>
        </form>

        </>
    )
}