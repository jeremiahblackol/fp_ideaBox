var submitButton = document.querySelector("button");

submitButton.addEventListener("click", function() {
  var titleInput = document.querySelector("#title");
  var bodyInput = document.querySelector("#body");
  var checkForIdea = captureIdea(titleInput.value, bodyInput.value)
  if (checkForIdea) {
    console.log(checkForIdea)
  }

  if (!checkForIdea)
});