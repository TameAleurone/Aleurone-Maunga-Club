// Wait until the page is ready before adding interactions.
$(document).ready(function () {

  // Toggle the chalet tips open and closed.
  $("#toggle-chalet-tips").on("click", function () {
    const tips = $("#chalet-tips");
    const isExpanded = $(this).attr("aria-expanded") === "true";

    tips.prop("hidden", isExpanded);
    $(this).attr("aria-expanded", String(!isExpanded));

    if (isExpanded) {
      $(this).text("Show chalet booking tips");
    } else {
      $(this).text("Hide chalet booking tips");
    }
  });

});