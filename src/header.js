
import {showInput} from "./js/main";
function Header() {
    return (
        <header>
            <div className="sdg_top_contents">
                <form id="sdg_header_search_form_mob" autoComplete="off"
                      action="./search" method="GET">
                    <div id="sdg_header_navbar_input_group_mob">
                        <input type="text" id="sdg_header_navbar_input_text_mob" className='sdg_input_text' name="s"
                               placeholder="Topic, Category, Title ..." />
                        <input type="button" title='Search' className="hide_text" onClick={showInput} value="Search"/>
                    </div>
                </form>
                <div id="sdg_top_nav">
                    <a id="sdg_about_btn" title={`About ${process.env.REACT_APP_NAME}`} className="hide_text sdg_link_png" href="http://christian">
                        About
                    </a>
                    <a id="login-btn" title="Logincheck" className="hide_text sdg_link_png" href="http://christian">
                        LOGIN
                    </a>
                </div>

            </div>
            <div className="sdg_bottom_contents">
                <div id="sdg_title_nav">
                    <h1>{process.env.REACT_APP_NAME}</h1>
                    <form id="sdg_header_search_form" autoComplete="off"
                          action="./search" method="GET">
                        <div id="sdg_header_navbar_input_group">
                            <input type="text" id="sdg_header_navbar_input_text" className='sdg_input_text' name="s"
                                   placeholder="Topic, Category, Title ..." />
                            <input type="button" title='Search' className="hide_text" onClick={showInput} value="Search"/>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;