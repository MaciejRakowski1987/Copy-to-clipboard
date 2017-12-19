$().ready(function() {
  $('#fullpage').fullpage({
  	menu: '#menu',
	navigation: true,
    onLeave: function(index, nextIndex, direction) {
    }
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}