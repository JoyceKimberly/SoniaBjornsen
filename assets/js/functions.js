var lang = "en";

$(function () { // -----------------------------------------------------------------------

  setLang = function(clicked) {
    var $dit = $(clicked);

    $("body").attr("lang", lang);
    $dit.find("span").attr("class", "flag-icon flag-icon-" + lang);
    
    $("div[lang]").each(function(index, obj) {
      var $dit = $(obj);
      if (!$dit.is('[lang="' + lang + '"]')) {
        $dit.hide();
      } else {
        $dit.show();
      };
    });
  
    console.log($dit);
  };

  console.log(navigator.language);
  setLang();

  $(".flag-link").click(function() {
    if (lang == "en") {
      lang = "nl";
    } else {
      lang = "en";
    };
    setLang($(this));
  });

}); // ----------------------------------------------------------------------------------
