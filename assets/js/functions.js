var lang = "en";

$(function () { // -----------------------------------------------------------------------
  console.log(navigator.language.substring(0, 2));

  setLang = function() {
    var $dit = $(".flag-link");

    $("body").attr("lang", lang);
    if (lang == "nl") {
      $dit.find("span").attr("class", "flag-icon flag-icon-nl");
    } else {
      $dit.find("span").attr("class", "flag-icon flag-icon-us");
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
