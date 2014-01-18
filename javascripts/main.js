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

function setActive() {
  var pageArray = window.location.pathname.split('/');
  var page = pageArray[pageArray.length - 1];
  var navLinks = $('ul.nav li');
  $.each(navLinks, function(i, listElement){
    var linkUrl = $(listElement).find('a').attr('href');
    if(linkUrl.match(page) === null) {
      $(listElement).removeClass('active');
    } else {
      $(listElement).addClass('active');
    }
  });
}

function setDynamicElements() {
  $('a#link_html').attr('href', HomeLink);
  $('a#list_link_html').attr('href', HomeLink);
  $('form#html_form').attr('action', HomeLink);
}

$(function() {
  $(document).on('bodyloaded', setHandlers);
  $(document).on('bodyloaded', setDynamicElements);
  $(document).on('navloaded', setActive);

  $.get('navigation.html', function(data) {
    $('body').prepend(data);
    $(document).trigger('navloaded');
  });

  $.get('template.html', function(data) {
    $('section#html-elements').html(data);
    $(document).trigger('bodyloaded');
  });

});