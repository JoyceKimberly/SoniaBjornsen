var lang = "en";

$(function () { // -----------------------------------------------------------------------

  $("[lang]").each(function (index, obj) {
    var $dit = $(obj);
    if (!$dit.is('[lang="' + lang + '"]')) {
      $dit.hide();
    };
    console.log($dit);
  });

}); // ----------------------------------------------------------------------------------
