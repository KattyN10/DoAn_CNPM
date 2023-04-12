import React from "react";
import './SignUp.scss'
class SignUp extends React.Component{
    render(){
        return(
            <div className="signup-background">
            <div className="signup-container row">
                <div className="signup-content">
                    <div className="col-12 text-left signup-title mt-3"><b>Sign Up</b></div>
                    <div className="col-12 text-center mt-3 signup-title"><b>Video Manager</b></div>
                    <div className="form-group mt-5">
                    <div className="mt-3 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"  placeholder="Enter your email"/>
                    </div>
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" placeholder="Enter your username"/>
                    </div>
                    <div className="mt-3 mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  placeholder="Enter your password"/>
                    </div>
                    <div className="mt-3 mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  placeholder="Confirm your password"/>
                    </div>
                 <div className="btn-signup btn btn-dark btn-lg mt-5">Register</div>
                 <div className="noti-bottom mt-5 text-center">Already have an Account? <a href="/login"><b>Login</b></a></div>
                 </div>
            </div>
        </div>
        )
    }
}

export default SignUp;