
let link = document.getElementById('link');

let iconImg = document.querySelector('.icon-img');


function meoClick() {


    if (link.style.width == '0px') {

        link.style.width = '400px';

        iconImg.setAttribute('src', 'img/icon/7752958_delete_close_exit_ui_basic_icon.png')

    } else {

        link.style.width = '0px'

        iconImg.setAttribute('src', 'img/icon/8774061_menu_list_options_checklist_clipboard_icon.png')
    }


}

// slider

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




$(document).ready(function () {
    $('html, body').animate({
        scrollTop: $("#grepperRocks").offset().top
    });
})




