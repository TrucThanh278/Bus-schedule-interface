window.addEventListener('load', function(){
  var location = document.getElementById('imgslider')
  location.classList.add('animate__backInRight')
})
// var index=0;
// setInterval(function(){
//     var images= [
//         "./assets/img/043236ca-e573-4e92-be7b-643415e2f29a-1654315268780.jpg",
//         "./assets/img/7e23df35-ddc5-49ca-9c63-81846f668c93-1655350938732.jpg",
//         "./assets/img/c4345ce1-dc51-410c-9cc3-9e49b1381836-1654911502854.png"
//     ];
//     document.getElementById('img').src=images[index];
//     index++;
//     if(index==2){
//         index=0;
//     }
// }, 3000)

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
//   var header_fix = document.getElementById('nav')
// 	if (scroll_position > 91) {
// 		// header.style.transitionProperty = 'color';
//     header_fix.classList.add('fixed');
// 	} else {
//     header_fix.classList.remove('fixed');
// 	}
// });

var evenitems = document.querySelectorAll('.tour_list .tour_items:nth-child(even)')
var odditems = document.querySelectorAll('.tour_list .tour_items:nth-child(odd)')
document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;
var header_fix = document.getElementById('nav')
if (scroll_position > 91)  {
      header_fix.classList.add('fixed');
    } 
    if (scroll_position<=91){
      header_fix.classList.remove('fixed');
    }
    if (scroll_position>400){
      for( let i = 0; i < evenitems.length ; i++){
        evenitems[i].style.display = "flex";
        evenitems[i].classList.add('left_to_right')
      }
      for( let i = 0; i < odditems.length ; i++){
        odditems[i].style.display = "flex";
        odditems[i].classList.add('right_to_left')
      }
    }
});

// $('.famous_tours-list').slick({
//   slidesToShow: 1,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//   nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
// });

$('.famous_tours-list').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	


// $('.famous_tours-list').slick({
//     centerMode: true,
//     slidesToShow: 5,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: false,
//     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 1023,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 740,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

  $(".menu").click(function () {
    $menu = $(this);
    $subnavItems = $menu.next();
    $subnavItems.slideToggle(500, function () {
        $menu.text(function () {
            return $subnavItems.is(":visible") ? "Xem thêm" : "Rút gọn";
        })
    });

});


//mobile menu
var nav = document.getElementById("navjs");
    var navMenu = document.getElementById("menujs");
    navMenu.onclick = function() {
        var isClosed = nav.style.overflow == "hidden"
        if (isClosed) {
            nav.style.overflow = "visible";
        }
        else {
            nav.style.overflow = "hidden";
        }
    }
