var addLogPanelToUi, clearPanel, listenForTouches, logTouch, panel, panelSelector, timerClick, timerTouch, touchLogger;
panel = "touch_logger_panel";
panelSelector = "#touch_logger_panel";
timerClick = 0;
timerTouch = 0;

touchLogger = function() {
  console.log("Init Touch Logger");
  addLogPanelToUi();
  return listenForTouches();
};

listenForTouches = function() {
  var _this = this;
  $(document).on('click', function() {
    var delta;
    timerClick = Date.now();
    delta = timerClick - timerTouch;
    delta = timerClick - timerTouch < 5000 ? delta : "No Touch Event";
    return logTouch("Clicked Delta: " + delta);
  });
  return $(document).on('touchstart', function() {
    timerTouch = Date.now();
    return logTouch("Touch");
  });
};

clearPanel = function() {
  return $(panelSelector).html('');
};

logTouch = function(message) {
  return $(panelSelector).append("" + message + "</br>");
};

addLogPanelToUi = function() {
  var style;
  style = 'position: fixed; bottom: 0; right: 0; background: #fff; z-index: 999; padding: 5px; font-size: 12px;';
  panel = "<div id=" + panel + " style='" + style + "'>";
  panel += 'Touch Logger</br>';
  panel += '</div>';
  return $('body').prepend(panel);
};

$(function() {
  return touchLogger();
});
