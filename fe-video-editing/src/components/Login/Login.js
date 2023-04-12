import React from "react";
import './Login.scss'
class Login  extends React.Component{
    render()
    {
        return(
        <div className="login-background">
            <div className="login-container row">
                <div className="login-content">
                    <div className="col-12 text-left login-title mt-3"><b>Sign In</b></div>
                    <div className="col-12 text-center mt-3 login-title"><b>Video Manager</b></div>
                    <div className="form-group mt-5">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" placeholder="Enter your username"/>
                    </div>
                    <div className="mt-3 mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  placeholder="Enter your password"/>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Remember
                    </label>
                    <label class="float-end">
                        Forget password?
                    </label>
                    </div>
                 <div className="btn-login btn btn-dark btn-lg mt-5">Login</div>
                 <div className="mt-5 text-center">Don't have an Account? <a href="/register"><b>Register</b></a></div>
                 </div>
            </div>
        </div>
        )
    }
}
export default Login;