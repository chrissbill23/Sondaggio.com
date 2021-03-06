import { Link } from "react-router-dom";
function Content() {
    return (
        <div className="sdg_slider_in_from_right" >
            <div id="sdg_index_cont" >
                <div className="sdg_index_cont_side_block">
                    <h2>
                        Answer a survey
                    </h2>
                    <span className="sdg_line"></span>
                    <p>Hand on the available surveys and obtain rewards.</p>
                    <a className="sdg_link_btn" href="#">Get started
                        <span className="sdg_arrow_container">
                            <i className="fas fa-arrow-right sdg_left_right_animation"></i>
                        </span>
                    </a>
                </div>
                <div className="sdg_index_cont_side_block">
                    <h2>
                        Post a survey
                    </h2>
                    <span className="sdg_line"></span>
                    <p>Get insights of your current and future customers.</p>
                    <Link to="addsurvey" className='sdg_slide_links sdg_link_btn'>Get started
                        <span className="sdg_arrow_container">
                            <i className="fas fa-arrow-right sdg_left_right_animation"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Content;