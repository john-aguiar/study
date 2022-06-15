import "./style.css"

export const  LoginScreenComponent = () => {
    return(
        <div className="main-screen">
            <div className="leftSide">
                <h2>Login</h2>
                <span>See your growth and get consulting support!</span>

                <div className="sign-in-google">Sign in with Google</div>

                <hr />

                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"  placeholder="mail@hotmail.com"/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"  placeholder="Min. 8 character"/>
                    <div className="">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                        <a href="">Forget password?</a>
                    </div>
                </form>
            </div>
           
           <div className="rightSide">
                <img src="" alt="" />
                <h3>Turn your ideas into reality.</h3>
                <span>Consistent quality and experiences across all plataforms and devices</span>
           </div>
        </div>
    )    
}