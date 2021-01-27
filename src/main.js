let app = new Vue ({

  el: ".wrapper",

  components: {
    
  }
})

$(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 650) {
      $("nav").css('position','fixed');
      $("nav").css('min-width','100%');
      $("nav").css('padding-left','20px');
      $("nav").css('padding-right','20px');
    } else {
      $("nav").css('position','');
      $("nav").css('min-width','');
      $("nav").css('padding-left','');
      $("nav").css('padding-right','');
    }
  })

});
