// Center photos
$("table.a").each(function () {
  nodeContent = jQuery($(this))[0].outerHTML
  url = (/onclick="window.location='(\S+)'/).exec(nodeContent)[1]
  $(this).removeAttr('onclick')
  $(this).wrap('<a href="' + url + '"/>')
});

