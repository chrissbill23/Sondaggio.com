import React from "react";
import sdgRouter from "./routing";
import './asset/style/login.css'

function ContentLogin() {
    return (
        <div className="sdg_slider_in_from_right">
            <div id='sdg_login_view'>
                <form  autoComplete="off" action="login" method="POST">
                    <input type="text"  name="s" className="sdg_input_text"
                           placeholder="Insert email."  />
                    <button className="sdg_login_btn_submit" type="submit">
                        Start with email
                        <span className="sdg_arrow_container">
                            <i className="fas fa-arrow-right sdg_left_right_animation"></i>
                        </span>
                    </button>
                    <button className="sdg_login_btn_submit" >
                        Start anonymously
                        <span className="sdg_arrow_container">
                            <i className="fas fa-arrow-right sdg_left_right_animation"></i>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
}

let component = null;
function LoginCheck() {
    let route = window.location.pathname;
    if(component === null)
        component =  document.getElementById('sdg_body')
    if(localStorage.getItem('user') === null){
        return ContentLogin();
    }else{
        let func = sdgRouter.get(route);
        return func();
    }
}

export default LoginCheck;