function setHandlers() {
  $('#link_show_stuff').on('click', function() {
    $('#show_stuff').toggle();
  });

  $('.js_list_element').on('click', function() {
    $('#list_show_stuff').toggle();
  });

  $('form#js_form').on('submit', function() {
    $('#show_form_stuff').toggle();
  });
}

$(function() {
  $(document).on('bodyloaded', setHandlers);

  $.get('navigation.html', function(data) {
    $('nav').html(data);
  });

  $.get('template.html', function(data) {
    $('section#html-elements').html(data);
    $(document).trigger('bodyloaded');
  });
});