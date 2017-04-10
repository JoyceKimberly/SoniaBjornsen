$(function() { // -----------------------------------------------------------------------

$('time').each(function() {
  var $dit = $(this);
  console.log($dit.attr('datetime'));
  var datum = new Date($dit.attr('datetime'));
  console.log(datum);
});

}); // ----------------------------------------------------------------------------------
