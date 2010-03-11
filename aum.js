$("[onclick]").each(function() {
  make_clickable_link($(this));
});

function make_clickable_link(e) {
  var match = /onclick=".*window.location='(\S+)'/.exec(e[0].outerHTML);
  if(match) {
    e.removeAttr('onclick');
    e.wrap('<a href="' + match[1] + '"/>');
  }
}
