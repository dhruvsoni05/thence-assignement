$( document ).ready(function() {
    $('.live-auction').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646605001/thence/Vector_2_htxddx.png" /></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646605001/thence/Vector_2_htxddx.png" /></button>',
        responsive: [
            {
               breakpoint: 767,
               settings: "unslick"
            }
         ]
    

      });
    $('.pop_collection_slide').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646605001/thence/Vector_2_htxddx.png" /></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646605001/thence/Vector_2_htxddx.png" /></button>',
        responsive: [
            {
               breakpoint: 767,
               settings: "unslick"
            }
         ]
      });
    $('.category_slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
               breakpoint: 767,
               settings: "unslick"
            }
         ]
      });
});