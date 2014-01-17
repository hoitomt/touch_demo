$(function() {
  $('#link_show_stuff').on('click', function() {
    $('#show_stuff').toggle();
  });

  $('.js_list_element').on('click', function() {
    $('#list_show_stuff').toggle();
  });

  $('form#js_form').on('submit', function() {
    $('#show_form_stuff').toggle();
  });

  $.get('template.html', function(data) {
    console.log("Template Loaded", data);
  })
});