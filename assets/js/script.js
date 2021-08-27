// save button


$("row").on("save-event", function () {
  var text = $(this)
    .text()
    .trim();
  var textInput = $("<textarea>").addClass("schedule").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  
});