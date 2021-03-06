$("[onclick]").each(function() {
  make_clickable_link($(this));
});

$(".about_scrollholder").each(function() {
  make_textarea($(this));
});

function make_clickable_link(e) {
  var html = e[0].outerHTML;

  var match = /onclick=".*window.location='(\S+)'/.exec(html);
  if(match) {
    e.removeAttr('onclick');
    e.wrap('<a href="' + match[1] + '"/>');
  }

  var match = /onclick="openAlbum\((.+), '(.+)'\)"/.exec(html);
  if(match) {
    e.removeAttr('onclick');
    e.wrap('<a href="http://www.adopteunmec.com/album.php?id=' + match[1] + '&pict=' + match[2] + '"/>');
  }
}

function make_textarea(e) {
  e.css('overflow', 'auto');
  e.find('.track').remove();
}
