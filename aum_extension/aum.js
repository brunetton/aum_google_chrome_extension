// Center photos
$(".mini").each(function () {
  make_clickable_link($(this));
});

// top logo, chat, top photos,
$(".a[onclick]").each(function () {
  make_clickable_link($(this));
});

function make_clickable_link(e) {
  nodeContent = jQuery(e)[0].outerHTML
   url = (/onclick="window.location='(\S+)'/).exec(nodeContent)[1]
  e.removeAttr('onclick')
  e.wrap('<a href="' + url + '"/>')
}

// debug
function red(e) {
  e.css("border", "solid 2px red");
}