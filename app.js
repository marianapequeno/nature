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

