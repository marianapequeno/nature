/* Navegação por tabs */
$('[data-group]').each(function() {
  const $allClick = $(this).find('[data-click]'), //ul li a
        $allTarget = $(this).find('[data-target]'), //div.item
        activeClass = 'active';

  $allClick.first().addClass(activeClass);
  $allTarget.first().addClass(activeClass);

  $allClick.click(function(e) {
    e.preventDefault();
    
    const id = $(this).data('click'), 
          $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $(this).addClass(activeClass);
    $target.addClass(activeClass);
    
  });
});


/* Scroll suave */
$('.menu-nav a[href^="#"]').click(function(e) {
  e.preventDefault();

  const id = $(this).attr('href'), 
        menuHeight = $('.menu').innerHeight(), 
        targetOffset = $(id).offset().top;
  
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight,
  }, 500);
});

$('.logo').click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: 0,
  }, 500);

})