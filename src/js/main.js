var input_text = null
var search_form = null
export function showInput(e){
    e.preventDefault();
    let name1 = 'sdg_header_navbar_input_text';
    let name2 = 'sdg_header_search_form';
    while (input_text === null || input_text.offsetParent === null){
        input_text = document.getElementById(name1);
        search_form = document.getElementById(name2);
        name1 += '_mob';
        name2 += '_mob';
    }
    if (input_text.style.width == ''){
        input_text.style.width = '20em'
        input_text.style.marginLeft = '1em'
    }else{
        if (input_text.value == ''){
            input_text.style.width = ''
            input_text.style.marginLeft = ''
        }else{
            //search_form.submit()
        }
    }
}
var formMobile = null;
var menuMobiles = null;
var openMenuMobiles = null;
export function showNavigation(e){
    e.preventDefault();
    if(formMobile === null){
        formMobile = document.getElementById('sdg_header_search_form_mob');
        menuMobiles = document.getElementById('sdg_top_nav');
        openMenuMobiles = document.getElementById('sdg_nav_bars');
        formMobile.style.transform = '';
        formMobile.addEventListener('animationend', function(ev) {
            if (ev.animationName === 'slideout_to_left') {
                formMobile.classList.add("sdg_hide_visibility");

                menuMobiles.classList.remove("sdg_hide_visibility");
                menuMobiles.classList.remove("sdg_slider_out_to_right");
                menuMobiles.classList.add("sdg_slider_in_from_right");
                openMenuMobiles.style.display = 'none';
            }
        });
        openMenuMobiles.addEventListener('animationend', function(ev) {
            if (ev.animationName === 'slideout_to_right') {
                openMenuMobiles.style.display = 'none';
            }
        });
        openMenuMobiles.addEventListener('animationend', function(ev) {
            if (ev.animationName === 'slidein_from_right') {
                openMenuMobiles.style.display = '';
            }
        });
        menuMobiles.addEventListener('animationend', function(ev) {
            if (ev.animationName === 'slideout_to_right') {
                menuMobiles.classList.add("sdg_hide_visibility");
                formMobile.classList.remove("sdg_hide_visibility");
                formMobile.classList.remove("sdg_slider_out_to_left");
                formMobile.classList.add("sdg_slider_in_from_left");
                openMenuMobiles.style.display = '';
            }
        });
    }
    if(openMenuMobiles.offsetParent !== null){
        formMobile.classList.remove("sdg_slider_in_from_left");
        formMobile.classList.add("sdg_slider_out_to_left");
        openMenuMobiles.classList.remove("sdg_slider_in_from_right");
        openMenuMobiles.classList.add("sdg_slider_out_to_right");

    }else{
        menuMobiles.classList.remove("sdg_slider_in_from_right");
        menuMobiles.classList.add("sdg_slider_out_to_right");
        openMenuMobiles.classList.remove("sdg_slider_out_to_right");
        openMenuMobiles.classList.add("sdg_slider_in_from_right");
    }
}
function slideOut(e, anchor){
    e.preventDefault();
    let bodyTag = document.getElementById('sdg_slider_in');
    bodyTag.id = 'sdg_slider_out';
    console.log(bodyTag.style.animationDuration);
    setTimeout(()=>{ window.location.href= anchor.href;}, 1100);
    return false;
}
document.addEventListener('DOMContentLoaded', function() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        //localStorage.setItem('user','haha');
        localStorage.removeItem('user');
    }
});



