console.log("Your index.js file is loaded correctly");



// $("#classesNav").on("click", function (event) {
//    console.log("anything"); event.preventDefault();
//     $("html, body").animate(
//         {scrollTop: "#categoryGrid"}.offset().top, 2000)
// });


// .animate({
//     scrollTop: $( $.attr(this, 'href') ).offset().top
// }, 500);


$("#classesNav").click(function() {
     $([document.documentElement, document.body]).animate({
         scrollTop: $("#classesTxt").offset().top
     }, 2000);
 });


/*$("#classesNav").on("click", function(){
$('.center').animate({
    scrollTop: ($('#classesTxt').offset().top)
},1000)});*/

/* $(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        debugger;
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    });
}); */