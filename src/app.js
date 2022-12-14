import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel_main').owlCarousel(

        {
            margin:30,
   nav:true,

   navText:[`<div class='nav-btn prev-slide'><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M15.5455 2.42058L13.9545 0.82959L0.78402 14.0001L13.9545 27.1706L15.5455 25.5796L3.96689 14.0001L15.5455 2.42058Z" fill="#1AE160"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M0.454498 2.42058L2.04549 0.82959L15.216 14.0001L2.04549 27.1706L0.454498 25.5796L12.0331 14.0001L0.454498 2.42058Z" fill="#1AE160"/>
   </svg>
   </div>`],

    responsive:{
        0:{
            items:1
        }
    }
        }
    );




    $('.mainslider-review').owlCarousel(

      {
          margin:30,
          // nav:true,
         
          loop:true,
          navText:[`<div class='nav-btn prev-slide'><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5455 2.42058L13.9545 0.82959L0.78402 14.0001L13.9545 27.1706L15.5455 25.5796L3.96689 14.0001L15.5455 2.42058Z" fill="#1AE160"/>
          </svg></div>`,`<div class='nav-btn next-slide'><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.454498 2.42058L2.04549 0.82959L15.216 14.0001L2.04549 27.1706L0.454498 25.5796L12.0331 14.0001L0.454498 2.42058Z" fill="#1AE160"/>
          </svg>
          </div>`],

            responsive:{
                0:{
                    items:1,
                    center:false,
                },
                600:{
                    items:2,
                    center:false,
                },
                1200:{
                    items:3,
                    center:false,
                },
                1400:{
                    items:3,
                    center:true,
                }
            }
                }
            );
    $('.mainslider-letters').owlCarousel(

      {
          margin:30,
          // nav:true,

          navText:[`<div class='nav-btn prev-slide'><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5455 2.42058L13.9545 0.82959L0.78402 14.0001L13.9545 27.1706L15.5455 25.5796L3.96689 14.0001L15.5455 2.42058Z" fill="#1AE160"/>
          </svg></div>`,`<div class='nav-btn next-slide'><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.454498 2.42058L2.04549 0.82959L15.216 14.0001L2.04549 27.1706L0.454498 25.5796L12.0331 14.0001L0.454498 2.42058Z" fill="#1AE160"/>
          </svg>
          </div>`],

            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1200:{
                    items:3
                },
                1400:{
                    items:4
                }
            }
                }
            );


  });
$(document).ready(function(){
    $('.owl-carousel2').owlCarousel(

        {
            margin:30,
   nav:true,

   navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
   </svg></div>`],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        },
        1400:{
            items:4
        }
    }
        }
    );
  });
  
$(document).ready(function(){
    $('.owl-carousel-choise').owlCarousel(

        {
            margin:30,
   nav:true,

   navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
   </svg></div>`],

    responsive:{
        0:{
          margin:20,
            items:2
        },
        600:{
          margin:30,
            items:2
        },
        1000:{
          margin:30,
            items:6
        }
    }
        }
    );
  });

$(document).ready(function(){
    $('.owl-carousel-example').owlCarousel(

        {
            margin:30,
            autoHeight: true,
   nav:true,

   navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
   </svg></div>`],

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
        }
    );
  });
  window.addEventListener("resize", resizeListener);
  function resizeListener(){
    if(window.innerWidth <= 915 ){
      // console.log(window.innerWidth) 

      $('.category-block').addClass('owl-carousel owl-theme')

      $(document).ready(function(){
        $('.category-block').owlCarousel(
    
            {
                margin:30,
       nav:true,
    
       navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
       </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
       </svg></div>`],
    
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
          
        }
            }
        );
      });
     }
  }
  resizeListener()





  // ???????????? ????????????

    //  Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });

    }


    // ???????????? ?????????????????????? ???????????????????? ????????
if(document.querySelector('[href="#modal-call"]')){
    const filterGallary2 = Fancybox.bind('[href="#modal-call"]', {
      // closeButton: "top",
      dragToClose: false,
      // Thumbs: false,
      // Carousel: {
      //     Dots: false,
      // },
    });
    
  }



  let morebtns = document.querySelectorAll('.more')

  morebtns.forEach((morebtn) =>{

    morebtn.addEventListener('click', function(){
    morebtn.parentNode.querySelector('.content').classList.toggle('show')
   
    })
  })
  
 

  // ???????????? ????????

const icons = document.querySelector('.burger');
const header = document.querySelector('menu');

const body = document.querySelector('body');
// icons.forEach (icon => {  
  icons.addEventListener('click', (event) => {
    icons.classList.toggle("open");
    header.classList.toggle("open");
    
    body.classList.toggle("open");

  });
// });


// ?????????????? ???????? ?? ????????????????
if(window.innerWidth <= 1300 ){

  let menu_items = document.querySelectorAll('menu .menu-item')

  menu_items.forEach((item, index) => {
  
    item.addEventListener('click', function(){
  
  
  icons.classList.toggle("open");
  header.classList.toggle("open");
  
  body.classList.toggle("open");
    })
  
  })
}




// ?????????? ??????
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});



let list_stage = document.querySelectorAll('.example .example-tab-item')
let list_stage_content = document.querySelectorAll('.example .wrapper-item')

if(list_stage.length >= 0){

  list_stage_content[0].classList.add('active')
  list_stage[0].classList.add('active')
  
  list_stage.forEach((stage, index) => {
  
    stage.addEventListener('click', function(){
      if(stage.classList.contains('active')){
        // console.log(stage);
      } else{
        document.querySelector('.example .example-tab-item.active').classList.remove('active')
        document.querySelector('.example .wrapper-item.active').classList.remove('active')
        stage.classList.add('active')
        list_stage_content[index].classList.add('active')
  
  
  
      }
      
    })
  })
}


// ????????

// let tab_list = document.querySelectorAll(".example-tab-item")
// tab_list.forEach((item, index), function(){


//   console.log(item, this)
// })

// ???????????????????????? ??????????????
const tabNavRew = document.querySelectorAll('.nav_item') //??????????????????

const tabContentRew = document.querySelectorAll('.content_item') //???????????????????? ??????????????

if(tabNavRew.length > 0){

  tabNavRew.forEach((item, index) => {
    item.addEventListener("click", function () {
      makeActiveRev(index)
    }, false)
  })
  
  function makeActiveRev(a) {
  
    tabContentRew.forEach((tab, index) => {
  
      if (tab.classList.contains('active') && tab != tabContentRew[a]) {
  
        tab.classList.remove('active')
        tabContentRew[a].classList.add('active')
      }
    })
  
    tabNavRew.forEach((tab, index) => {
  
      if (tab.classList.contains('active') && tab != tabNavRew[a]) {
  
        tab.classList.remove('active')
        tabNavRew[a].classList.add('active')
      }
    })
  
  
  }
}
