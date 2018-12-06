var slider = document.getElementById("slider-main");
var outputText = document.getElementById("print-text");

slider.oninput = function() {
    keeper(this.value);
}
function keeper(value) {
    if(value<=19) {
        outputText.innerHTML= "Неделава беше ужасна";
        outputText.style.color = "#f93131";
        slider.setAttribute("id", "slider2");
        slider.style.background  = "#f93131";
        $(slider).removeClass();
        $(slider).addClass("slider-main slider3");

    } else if (value<= 40){
        outputText.innerHTML= "Можеше и подобро";
        outputText.style.color = "#cb3037";
        slider.style.background  = "#cb3037";
        // $('.slider').attr("class", "slider2");
        // $('.slider3').attr("class", "slider2");
         $(slider).removeClass();
        $(slider).addClass("slider-main slider2");
    
    } else if (value<= 60){
        outputText.innerHTML= "Уште една обична работна недела";
        outputText.style.color = "#cd8e2e";
        slider.style.background  = "#cd8e2e";
        // $(.slider2).attr("class", "slider");
        // $(.slider4).attr("class", "slider");

         $(slider).removeClass();
        $(slider).addClass("slider-main slider");
    
    }  else if (value<= 90){
        outputText.innerHTML= "Можеше и подобро";
        outputText.style.color = "#9ba541";
        slider.style.background  = "#9ba541";
        // $(.slider).attr("class", "slider4");
        // $(.slider5).attr("class", "slider4");

         $(slider).removeClass();
        $(slider).addClass("slider-main slider4");
    
    }
    else if (value<= 100){
        outputText.innerHTML= "WOW, одлична недела";
        outputText.style.color = "#58д970";
        slider.style.background  = "#58д970";
        // $(.slider4).attr("class", "slider5");
         $(slider).removeClass();
        $(slider).addClass("slider-main slider5");
    
    }

};


// $( document ).ready(function() {
//     // $(".btn_next").on('click', function() { 
//         // get the text
//         var text = $('#print-text').text();
//         // set the item in localStorage
//         localStorage.setItem('enjoy', text);
//         // alert the value to check if we got it
//         alert(localStorage.getItem('enjoy'));


//         var img = $('.slider-main').html();
//         localStorage.setItem('img', img);
//         alert(localStorage.getItem('img'))
//     // });
// });
