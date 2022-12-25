/* Debounce do Lodash */
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

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

/* Scroll suave para os links internos */
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

/* Scroll suave para o topo da página */
$(".logo").click(function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

/* Link ativo no menu */
$("section").each(function () {
  const height = $(this).height(),
    offsetTop = $(this).offset().top,
    menuHeight = $(".menu").innerHeight(),
    id = $(this).attr("id"),
    $itemMenu = $('a[href="#' + id + '"]');

  $(window).scroll(debounce(function () {
    const scrollTop = $(window).scrollTop();

    if (
      offsetTop - menuHeight < scrollTop &&
      offsetTop + height - menuHeight > scrollTop
    ) {
      $itemMenu.addClass("active");
    } else {
      $itemMenu.removeClass("active");
    }
  }, 200));
});

/* Menu mobile */
$(".mobile-btn").click(function () {
  $(this).toggleClass("active");
  $(".mobile-menu").toggleClass("active");
});

/* Slide */
(function () {
  function slider(sliderName, velocidade) {
    let sliderClass = "." + sliderName,
      activeClass = "active",
      rotate = setInterval(rotateSlide, velocidade);

    $(sliderClass + " > :first").addClass(activeClass);

    $(sliderClass).hover(
      function () {
        clearInterval(rotate);
      },
      function () {
        rotate = setInterval(rotateSlide, velocidade);
      }
    );

    function rotateSlide() {
      let activeSlide = $(sliderClass + " > ." + activeClass),
        nextSlide = activeSlide.next();

      if (nextSlide.length == 0) {
        nextSlide = $(sliderClass + " > :first");
      }

      activeSlide.removeClass(activeClass);
      nextSlide.addClass(activeClass);
    }
  }
  slider("introducao", 2000);
})();

/* Animação dos botões ao scroll */
(function () {
  let $target = $('[data-anime="scroll"]'),
    animationClass = "animate",
    offset = ($(window).height() * 3) / 4;

  function animeScroll() {
    let documentTop = $(window).scrollTop();

    $target.each(function () {
      let itemTop = $(this).offset().top;

      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(debounce(function () {
    animeScroll();
  }, 200));
})();
