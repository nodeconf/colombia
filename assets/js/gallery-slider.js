$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})



