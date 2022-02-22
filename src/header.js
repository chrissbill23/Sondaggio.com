
import {showInput, showNavigation} from "./js/main";
import {Link} from "react-router-dom";
function Header() {
    return (
        <header>
            <div className="sdg_top_contents">
                <form id="sdg_header_search_form_mob" autoComplete="off"
                      action="./search" method="GET">
                    <div id="sdg_header_navbar_input_group_mob">
                        <input type="text" id="sdg_header_navbar_input_text_mob" className='sdg_input_text' name="s"
                               placeholder="Topic, Category, Title ..." />
                        <button type="submit" onClick={showInput} className="sdg_nav_link">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
                <div id="sdg_top_nav" className='sdg_hide_visibility'>
                    <Link to="/" id="sdg_home_link" title="Go back home" className="sdg_nav_link">
                        <i className="fas fa-home"></i>
                    </Link>
                    <Link to="/info" title="Get info about Sondaggio" className="sdg_nav_link">
                        <i className="fas fa-info-circle"></i>
                    </Link>
                    <Link to="/info" title="Go to your account" className="sdg_nav_link">
                        <i className="fas fa-user"></i>
                    </Link>
                    <button id="sdg_nav_close" onClick={showNavigation} className="sdg_nav_link">
                        X
                    </button>
                </div>
                <button id="sdg_nav_bars" onClick={showNavigation} className="sdg_nav_link">
                    <i className="fas fa-bars" ></i>
                </button>

            </div>
            <div className="sdg_bottom_contents">
                <div id="sdg_title_nav">
                    <h1>{process.env.REACT_APP_NAME}</h1>
                    <form id="sdg_header_search_form" autoComplete="off"
                          action="./search" method="GET">
                        <div id="sdg_header_navbar_input_group">
                            <input type="text" id="sdg_header_navbar_input_text" className='sdg_input_text' name="s"
                                   placeholder="Topic, Category, Title ..." />
                            <button type="submit" onClick={showInput} className="sdg_nav_link">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;