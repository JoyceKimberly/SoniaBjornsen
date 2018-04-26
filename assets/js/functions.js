var lang = "en";

$(function () { // -----------------------------------------------------------------------

  $("div[lang]").each(function (index, obj) {
    var $dit = $(obj);
    if (!$dit.is('[lang="' + lang + '"]')) {
      $dit.hide();
    };
    //console.log($dit);
  });

  $(".flag-link").click(function() {
    var $dit = $(this);
    lang = "en";
    console.log($dit);
  });

}); // ----------------------------------------------------------------------------------
