
// OWL Carousel
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items:1,
//         loop:true,
//         dots: true,
//         nav:true,
//         // margin:10,
//         autoplay:true,
//         autoplayTimeout:3500,
//         smartSpeed:1500,
//         autoplayHoverPause:false,
//     });

// });


$(document).ready(function(){
    $('.owl-one').owlCarousel({
        autoplay:true,
        autoplayTimeout:3500,
        smartSpeed:1500,
        loop:true,
        // margin:10,
        dots: false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});


