/* Navegação por tabs */
$("[data-group]").each(function () {
  const $allClick = $(this).find("[data-click]"), //ul li a
    $allTarget = $(this).find("[data-target]"), //div.item
    activeClass = "active";

  $allClick.first().addClass(activeClass);
  $allTarget.first().addClass(activeClass);

  $allClick.click(function (e) {
    e.preventDefault();

    const id = $(this).data("click"),
      $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $(this).addClass(activeClass);
    $target.addClass(activeClass);
  });
});

/* Scroll suave & animação ao scroll */
$('.menu-nav a[href^="#"]').click(function (e) {
  e.preventDefault();

  const id = $(this).attr("href"),
    menuHeight = $(".menu").innerHeight(),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - menuHeight,
    },
    500
  );
});

$(".logo").click(function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

/* Link ativo*/
$("section").each(function () {
  const height = $(this).height(),
    offsetTop = $(this).offset().top,
    menuHeight = $(".menu").innerHeight(),
    id = $(this).attr("id"),
    $itemMenu = $('a[href="#' + id + '"]');

  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();

    if (
      offsetTop - menuHeight < scrollTop &&
      offsetTop + height - menuHeight > scrollTop
    ) {
      $itemMenu.addClass("active");
    } else {
      $itemMenu.removeClass("active");
    }
  });
});

/* Menu mobile */
$('.mobile-btn').click(function() {
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

/* Slide */
$('.slide > :first').addClass('active');

function rotateSlide() {  
  let activeSlide = $('.slide > .active'), 
        nextSlide = activeSlide.next();
  
  if(nextSlide.length == 0) {
    nextSlide = $('.slide > :first');
  }

  activeSlide.removeClass('active');
  nextSlide.addClass('active');
}

setInterval(rotateSlide, 2000);