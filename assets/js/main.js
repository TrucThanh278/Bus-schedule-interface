var index=0;
setInterval(function(){
    var images= [
        "./assets/img/043236ca-e573-4e92-be7b-643415e2f29a-1654315268780.jpg",
        "./assets/img/7e23df35-ddc5-49ca-9c63-81846f668c93-1655350938732.jpg",
        "./assets/img/c4345ce1-dc51-410c-9cc3-9e49b1381836-1654911502854.png"
    ];
    document.getElementById('img').src=images[index];
    index++;
    if(index==2){
        index=0;
    }
}, 3000)

$('.famous_tours-list').slick({
    centerMode: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 740,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $(".menu").click(function () {

    $menu = $(this);
    //getting the next element
    $subnavItems = $menu.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $subnavItems.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $menu.text(function () {
            return $subnavItems.is(":visible") ? "Xem thêm" : "Rút gọn";
        })
    });

});

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
