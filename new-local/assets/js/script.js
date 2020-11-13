$(document).ready() => {
  $('.trigger').click((), {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.filter').show('1000');
    } else {
      $('.filter').not('.'+value).hide('1000');
      $('.filter').filter('.'+value).show('1000');
    }
    $(document).on('click', '.trigger', () => {
      $('.trigger').removeClass('active');
      $(this).addClass('active');
    });
  })
});


