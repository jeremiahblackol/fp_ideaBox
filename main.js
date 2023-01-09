var submitButton = document.querySelector("button");
submitButton.disabled = true;

submitButton.addEventListener("click", function() {
  var titleInput = document.querySelector("#title");
  var bodyInput = document.querySelector("#body");
  var checkForIdea;
  if (titleInput && bodyInput) {
    checkForIdea = captureIdea(titleInput.value, bodyInput.value)
    sendThisData(checkForIdea) 
  }

  if (!checkForIdea) {
    // what do I want to happen --> i can probably eliminate this conditional's logic if I disable the bu
    alert("need to add some info")
  }

  function sendThisData(anyFunctionsReturnValue) {
    if (typeof anyFunctionsReturnValue === Object) {
      generateCards(anyFunctionsReturnValue)
    }
  }

  function generateCards(ideaDetails) {
    var cardSection = document.querySelector("")
  }
});