
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTab_Scenario(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("scenarios-pretext-"+tabName).style.display = "block";
    document.getElementById("scenarios-header-"+tabName).style.display = "block";
    document.getElementById("scenarios-text-"+tabName).style.display = "block";
    document.getElementById("scenarios-image-"+tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slideshow-container_item");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

// make preview active
function makeActive(elem, event) {
    event.preventDefault();
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].parentNode.classList.remove("active");
    }
    elem.parentNode.classList.add("active");
    let new_src = elem.href, large = document.getElementById('imageMain');
    large.src = new_src;
}


// color select hack
// let form = document.querySelector( "form" );
// form.addEventListener( "change", ( evt ) => {
//     let trg = evt.target,
//         trg_par = trg.parentElement;
//     if ( trg.type === "radio" && trg_par && trg_par.tagName.toLowerCase() === "label" ) {
//         let prior = form.querySelector( 'label.checked input[name="' + trg.name + '"]' );
//         if ( prior ) {
//             prior.parentElement.classList.remove( "checked" );
//         }
//         trg_par.classList.add( "checked" );
//     }
// }, false );

// let colors = document.getElementsByClassName("switch-color-item");
//
// for (let i = 0; i < colors.length; i++) {
//     colors[i].addEventListener("change", (evt) => {
//         let trg = evt.target;
//         let trg_par = trg.parentElement;
//         if ( trg.type === "radio" && trg_par && trg_par.tagName.toLowerCase() === "label" ) {
//             let prior = colors[i].querySelector( 'label.active input[name="' + trg.name + '"]' );
//             if ( prior ) {
//                 prior.parentElement.classList.remove( "active" );
//             }
//             trg_par.classList.add( "active" );
//         }
//     }, false );
// }


//
//
//
// colors.addEventListener("change", (evt) => {
//     let trg = evt.target;
//     let trg_par = trg.parentElement;
//     if ( trg.type === "radio" && trg_par && trg_par.tagName.toLowerCase() === "label" ) {
//         let prior = form.querySelector( 'label.checked input[name="' + trg.name + '"]' );
//         if ( prior ) {
//             prior.parentElement.classList.remove( "active" );
//         }
//         trg_par.classList.add( "active" );
//     }
// }, false);


// let colors = document.getElementsByClassName("switch-color-item");
//
// for (let i = 0; i < colors.length; i++) {
//     colors[i].addEventListener("change", colorChange(colors[i]));
// }
//
// function colorChange(evt){
//     let trg = evt.target;
//     let trg_par = trg.parentElement;
//     if ( trg.type === "radio" && trg_par && trg_par.tagName.toLowerCase() === "label" ) {
//         let prior = form.querySelector( 'label.checked input[name="' + trg.name + '"]' );
//         if ( prior ) {
//             prior.parentElement.classList.remove( "active" );
//         }
//         trg_par.classList.add( "active" );
//     }
// }



// let form = document.getElementById("orderForm");
// form.addEventListener("change", ( evt ) => {
//     let trg = evt.target,
//         trg_par = trg.parentElement;
//     if ( trg.type === "radio" && trg_par && trg_par.tagName.toLowerCase() === "label" ) {
        // let radio_colors = document.getElementsByName("radio-color");
        // for (let i = 0; i < radio_colors.length; i++) {
        //     radio_colors[i].className = radio_colors[i].classList.remove("active")
        // }



        // let prior = form.querySelector( 'label.active input[name="radio-color"]' );
        // if ( prior ) {
        //     prior.parentElement.classList.remove( "active" );
        // }
        // trg_par.classList.add( "active" );

//         let prior = form.querySelector( 'label.active input[name="radio-color"]' );
//         // console.log(prior);
//         if ( prior ) {
//             prior.parentElement.classList.remove( "active" );
//         }
//         // console.log(trg_par);
//         trg_par.classList.add( "active" );
//     }
// }, false);