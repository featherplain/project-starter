// magnific popup
$(function () {
  $('.modal__btn').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
  });
  $(document).on('click', '.modal__btn--dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
    