$(document).ready(function () {

  // Gets the video src from the data-src on each button

  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
    console.log($videoSrc);
  });



  // when the modal is opened autoplay it  
  $('#exampleModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })



  // stop playing the youtube video when I close the modal
  $('#exampleModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })
  // document ready 




});

function onclickfunction() {
  alert('Press Ctrl + D to bookmark this page');
}

$('.option1').on('click', function () {
  var $el = $(this);
  $('#status').css('stroke-dasharray', $el.data('value'))
  $('#carouselExampleIndicatorsTwo').carousel('next')
});

$('#option2').on('click', function () {
  var $opT = $(this);
  $('#status').css('stroke-dasharray', $opT.data('value'))
  $('#carouselExampleIndicatorsTwo').carousel('next')
});

$('.option3').on('click', function () {
  var $opTh = $(this);
  $('#status').css('stroke-dasharray', $opTh.data('value'))
  $('#carouselExampleIndicatorsTwo').carousel('next')
});

$('#option4').on('click', function () {
  var $opF = $(this);
  $('#status').css('stroke-dasharray', $opF.data('value'))
  $('#carouselExampleIndicatorsTwo').carousel('next')
});

$('.option5').on('click', function () {
  var $opF = $(this);
  $('#status').css('stroke-dasharray', $opF.data('value'))
  $('#carouselExampleIndicatorsTwo').carousel('next')
});

$('#carouselExampleIndicatorsTwo').on('slide.bs.carousel', function (e) {
  var currentIndex = $('.carousel-item.active');
  // do something…
  console.log(currentIndex.data('index'));
  $('.digit').html(currentIndex.data('index'));
});