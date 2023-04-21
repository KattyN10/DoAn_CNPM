import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './Login.scss'
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-infor')) {
            history.push("/add")
        }
    }, [])
    function login() {
        console.warn(username,password)
    }
    return (
        <div className="login-background">
            <div className="login-container row">
                <div className="login-content">
                    <div className="col-12 text-left login-title mt-3"><b>Sign In</b></div>
                    <div className="col-12 text-center mt-3 login-title"><b>Video Manager</b></div>
                    <div className="form-group mt-5">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username"
                            onChange={(u) => setUsername(u.target.value)} />
                    </div>
                    <div className="mt-3 mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password"
                            onChange={(p) => setPassword(p.target.value)} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember
                        </label>
                        <label class="float-end">
                            Forget password?
                        </label>
                    </div>
                    <button onClick={login} className="btn-login btn btn-dark btn-lg mt-5">Login</button>
                    <div className="mt-5 text-center">Don't have an Account? <a href="/register"><b>Register</b></a></div>
                </div>
            </div>
        </div>
    )
}

export default Login