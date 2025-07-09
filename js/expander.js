// Expander
expanderList = document.querySelectorAll(".js-button-expander");

$(".js-button-expander").click(function (e) {
  var expandParent = $(this).parent();
  var expandTarget = $(expandParent).children(".js-expand-content");
  var expandButton = $(expandParent).children(".js-button-expander");

  for (var i = 0; i < expanderList.length; i++) {
    if (expanderList[i] == this) {
      for (var j = 0; j < expandTarget.length; j++) {
        if ($(expandTarget[j]).hasClass("expanded")) {
          $(expandParent).removeClass("active");
          $(expandTarget[j]).removeClass("expanded");
          $(expandButton).removeClass("active");
          $(expandTarget[j]).slideUp();
        } else {
          $(expandParent).addClass("active");
          $(expandButton).addClass("active");
          $(expandTarget[j]).addClass("expanded");
          $(expandTarget[j]).slideDown();
        }
      }
    }
  }
});
