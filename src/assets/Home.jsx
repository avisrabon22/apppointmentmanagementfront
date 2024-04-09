export const Home = () => {
    return (
        <div >
            <h1>Home</h1>

            <div>
                <p> Welcome to the Home page</p>

                <p>Login</p>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                
            </div>

            <button onClick={() => { window.location.href = '/register' }}>Register</button>
        </div>
    )
    }
