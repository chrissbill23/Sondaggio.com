var input_text = null
var search_form = null
export function showInput(){
    if(input_text == null){
        input_text = document.getElementById("sdg_header_navbar_input_text");
        search_form = document.getElementById("sdg_header_search_form");

    }
    let name1 = 'sdg_header_navbar_input_text';
    let name2 = 'sdg_header_search_form';
    while (input_text.offsetParent === null){
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
            search_form.submit()
        }
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
/*document.addEventListener('DOMContentLoaded', function() {
    let result = document.getElementsByClassName('sdg_slide_links');
    for (let i=0; i < result.length; i++) {
        result[i].addEventListener('click', function (e) {slideOut(e, result[i]);});
    }
});*/



