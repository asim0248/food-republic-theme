let navbar = document.querySelector('.header-bar');

document.querySelector('.fa-bars').onclick = () =>{
    navbar.classList.toggle('active-2');
}


//Feature section slider
$('.hero-slider').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    dotsData:true,
    autoplay: true,
    autoplayTimeout:5000,
    animateOut: 'fadeOut',
    smartSpeed:450,
    animateIn: 'flipInX',
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
  })


//Feature section slider
$('.feature-slider').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  navText:["<div class='nav-btn prev-slide feature-1'><i class='fa fa-arrow-left'></i></div>",
  "<div class='nav-btn next-slide feature-2'><i class='fa fa-arrow-right'></i></div>",
  ],
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      540:{
        items:2
      },
      820:{
        items:2
      },
      1024:{
        margin:20,
      },
      1000:{
          items:3
      }
  }
})

//Bussiness section slider
$('.busin-testimonial-row').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    navText:["<div class='nav-btn prev-slide bussin-btn-1'><i class='fa fa-arrow-left'></i></div>",
    "<div class='nav-btn next-slide bussin-btn-2'><i class='fa fa-arrow-right'></i></div>",
    ],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        540:{
            items:1
        },
        768:{
            items:2
        },
        820:{
            items:2
        },
        991:{
            items:2
        },
        1000:{
            items:2
        }
    }
})