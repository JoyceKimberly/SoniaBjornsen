var lang = "nl";

$(function () { // -----------------------------------------------------------------------

  $("div[lang]").each(function(index, obj) {
    var $dit = $(obj);
    if (!$dit.is('[lang="' + lang + '"]')) {
      $dit.hide();
    };
  });

  $(".flag-link").click(function() {
    var $dit = $(this);

    if (lang == "en") {
      lang = "nl";
    } else {
      lang = "en";
    };

    $("body").attr("lang", lang);
    $dit.find("span").attr("class", "flag-icon flag-icon-" + lang);
    
    console.log($dit);
  });
  $(".flag-link").trigger("click");

}); // ----------------------------------------------------------------------------------
