import React from "react";
import sdgRouter from "./routing";
import './asset/style/login.css'

function ContentLogin() {
    return (
        <div id="sdg_slider_in">
            <div id='sdg_login_view'>
                <form  autoComplete="off" action="login" method="POST">
                    <div>
                        <input type="text"  name="s" className="sdg_input_text"
                               placeholder="Insert email."  />
                        <input type="submit" title='Continue' className="hide_text" value="Search"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

let component = null;
function LoginCheck(route) {
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