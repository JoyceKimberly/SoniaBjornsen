var lang = "en";

$(function () { // -----------------------------------------------------------------------

  setLang = function() {
    var $dit = $(".flag-link");

    $("body").attr("lang", lang);
    if (lang == "en") {
      $dit.find("span").attr("class", "flag-icon flag-icon-us");
    } else {
      $dit.find("span").attr("class", "flag-icon flag-icon-" + lang);
    };
    
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
    setLang();
  });

}); // ----------------------------------------------------------------------------------
